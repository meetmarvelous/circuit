// Simulation state for the Circuit Dashboard
const state = {
    revenue: 2600000,
    sold: 40,
    verified: 40,
    royalties: 182000,
    feedItems: [
        { id: 40, name: "Wrap Dress #40", time: "Just now", hash: "4K9...Z3x1", status: "Verified" },
        { id: 39, name: "Wrap Dress #39", time: "12 mins ago", hash: "9M2...P1v8", status: "Verified" },
        { id: 38, name: "Wrap Dress #38", time: "45 mins ago", hash: "7B4...Q9m2", status: "Verified" },
    ]
};

// Initialize dashboard
function init() {
    renderFeed();
    setupEventListeners();
}

// Render the verification feed
function renderFeed() {
    const feedContainer = document.getElementById('verification-feed');
    if (!feedContainer) return;
    
    feedContainer.innerHTML = state.feedItems.map(item => `
        <div class="feed-item" style="animation: fadeIn 0.5s ease forwards;">
            <div class="item-meta">
                <span class="time">${item.time}</span>
                <span class="status-badge verified">${item.status}</span>
            </div>
            <div class="item-content">
                <p>${item.name} linked to NTAG213</p>
                <code class="hash">Hash: ${item.hash}</code>
            </div>
            <button class="btn-view" onclick="openDPP(${item.id})">Inspect</button>
        </div>
    `).join('');
}

// Mobile Menu Toggle
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        menuToggle.innerText = sidebar.classList.contains('active') ? '✕' : '☰';
    });
}

// Modal logic
const modal = document.getElementById("dpp-modal");

window.openDPP = function(id) {
    const serial = document.querySelector('.serial');
    if (serial) serial.innerText = `#CIR-001-${String(id).padStart(2, '0')}`;
    modal.style.display = "block";
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

window.closeModal = function() {
    modal.style.display = "none";
    document.body.style.overflow = 'auto'; // Restore scroll
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
