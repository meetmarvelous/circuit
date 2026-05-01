// Simulation state for the Circuit Dashboard
const state = {
    revenue: 2340000,
    sold: 36,
    verified: 36,
    royalties: 163800,
    feedItems: [
        { id: 36, name: "Wrap Dress #36", time: "12 mins ago", hash: "9M2...P1v8", status: "Verified" },
        { id: 35, name: "Wrap Dress #35", time: "45 mins ago", hash: "7B4...Q9m2", status: "Verified" },
    ]
};

// Initialize dashboard
function init() {
    renderFeed();
    setupEventListeners();
    
    // Start the "WOW" factor simulation after 5 seconds
    setTimeout(startLiveDemo, 5000);
}

function startLiveDemo() {
    // Simulate a new "Drop Zero" follow-up or secondary sale
    createNewSale();
    
    // Periodically simulate activity
    setInterval(() => {
        if (Math.random() > 0.7) {
            createNewSale();
        }
    }, 15000);
}

function createNewSale() {
    const isResale = state.sold >= 40;
    const id = isResale ? Math.floor(Math.random() * 40) + 1 : state.sold + 1;
    
    const newItem = {
        id: id,
        name: `Wrap Dress #${String(id).padStart(2, '0')}`,
        time: "Just now",
        hash: "Generating...",
        status: isResale ? "Resale" : "Minting"
    };

    // Prepend to feed
    state.feedItems.unshift(newItem);
    if (state.feedItems.length > 8) state.feedItems.pop(); // Keep feed clean
    renderFeed();

    setTimeout(() => {
        const item = state.feedItems.find(i => i.id === id && (i.status === "Minting" || i.status === "Resale"));
        if (item) {
            item.status = "Verified";
            item.hash = `${Math.random().toString(36).substring(2, 5).toUpperCase()}...${Math.random().toString(36).substring(2, 5).toUpperCase()}`;
            
            // Logic for Financials
            if (isResale) {
                // Secondary market sale at a premium (e.g., ₦85,000)
                const resalePrice = 85000;
                const royaltyEarned = resalePrice * 0.07;
                state.royalties += royaltyEarned;
                // Revenue doesn't increase for the brand on resale, only royalties do
            } else {
                state.revenue += 65000;
                state.sold += 1;
                state.verified += 1;
                state.royalties += (65000 * 0.07);
            }
            
            updateStatsUI();
            renderFeed();
        }
    }, 3000);
}

function updateStatsUI() {
    const revenueEl = document.getElementById('total-revenue');
    const soldEl = document.getElementById('units-sold');
    const verifiedEl = document.getElementById('verified-count');
    const royaltiesEl = document.getElementById('projected-royalties');
    const progressFill = document.querySelector('.progress-fill');
    const progressLabel = document.getElementById('progress-label');

    if (revenueEl) revenueEl.innerText = state.revenue.toLocaleString();
    if (soldEl) soldEl.innerText = Math.min(state.sold, 40);
    if (verifiedEl) verifiedEl.innerText = state.verified;
    if (royaltiesEl) royaltiesEl.innerText = Math.floor(state.royalties).toLocaleString();

    if (progressFill) {
        const percentage = (Math.min(state.sold, 40) / 40) * 100;
        progressFill.style.width = `${percentage}%`;
    }

    if (progressLabel && state.sold >= 40) {
        progressLabel.innerText = "Sold Out";
        progressLabel.style.color = "var(--secondary)";
    }
}

// Render the verification feed
function renderFeed() {
    const feedContainer = document.getElementById('verification-feed');
    if (!feedContainer) return;
    
    feedContainer.innerHTML = state.feedItems.map(item => `
        <div class="feed-item" style="animation: fadeIn 0.5s ease forwards; border-left: 4px solid ${item.status === 'Verified' ? 'var(--secondary)' : 'var(--primary)'}">
            <div class="item-meta">
                <span class="time">${item.time}</span>
                <span class="status-badge ${item.status.toLowerCase()}">${item.status}</span>
            </div>
            <div class="item-content">
                <p>${item.name} linked to NTAG213</p>
                <code class="hash">${item.status === 'Verified' ? 'Hash: ' + item.hash : 'Processing on Solana...'}</code>
            </div>
            <button class="btn-view" onclick="openDPP(${item.id})">Inspect</button>
        </div>
    `).join('');
}

function setupEventListeners() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            menuToggle.innerText = sidebar.classList.contains('active') ? '✕' : '☰';
        });
    }
}

// Modal logic
const modal = document.getElementById("dpp-modal");

window.openDPP = function(id) {
    const serial = document.querySelector(".serial");
    if (serial) serial.innerText = `#CIR-001-${String(id).padStart(2, "0")}`;
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scroll
}

window.closeModal = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scroll
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Start the app
document.addEventListener("DOMContentLoaded", init);
