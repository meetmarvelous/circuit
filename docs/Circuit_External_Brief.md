**CIRCUIT**

*...with the edge*

Lagos, Nigeria  ·  Built on Solana

# **The Problem**

The fashion industry produces what it hopes will sell, then destroys what it cannot. This is not a supply chain failure or the behaviour of bad actors. It is the industry's deliberate operating model.

Every brand — from a Lagos atelier to LVMH — makes the same foundational bet: manufacture first, find buyers second. The designer absorbs the entire demand risk. When the market does not respond, the inventory is the loss. Destruction is the accounting solution.

| Evidence | Scale |
| :---- | :---- |
| **Unsold inventory destroyed annually** | $500 billion globally |
| **Burberry — product burned in one year** | £28 million (2017) |
| **H\&M unsold inventory at peak** | £3.1 billion |
| **Atacama Desert clothing dump** | 3km² — visible from space |
| **Independent designers who fail within 3 years** | 80% — inventory risk is the primary cause |

*The burn pile is not a tragedy. It is the intended solution to a structural problem that nobody in the industry has redesigned.*

# **What Circuit Is**

Circuit is a made-to-order fashion house that only manufactures garments with confirmed buyers. Production begins when demand is confirmed. Not before.

Every garment Circuit produces receives a permanent ownership record minted on the Solana blockchain at the moment of production. An NFC chip sewn into the garment's lining connects the physical object to that on-chain record. When the garment changes hands, the record updates. When it is resold, a 7% royalty executes automatically via smart contract — to Circuit, permanently, without manual intervention.

*Circuit without Solana is a well-designed pre-order website. Circuit with Solana is a system that does not depend on anyone's ongoing honesty to remain true.*

# **How It Works**

1. A design is revealed. A fixed quantity is announced — say, 40 pieces. A 7-day pre-order window opens.

2. Buyers pre-order and pay. Funds enter a Solana escrow smart contract — locked until delivery is confirmed by the buyer.

3. When the target orders are confirmed, production begins for exactly that number. Not one more.

4. Each garment receives an NFC chip sewn into the lining, cryptographically linked to its Solana NFT — minted at production, not at point of sale.

5. The buyer receives the garment, scans the NFC tag with any smartphone, and sees the ownership record: edition number, production date, current owner. The smart contract releases payment to Circuit.

6. On any future resale — on Circuit's marketplace or any Solana-compatible platform — ownership transfers on-chain and 7% routes automatically to Circuit. This mechanism has no expiry date.

# **The Economics**

## **One Drop: The Signature Wrap Dress**

Edition of 40\. Pre-order price ₦65,000 per garment.

| Cost Line | Amount |
| :---- | :---- |
| **Fabric** | ₦12,000 |
| **Skilled labour** | ₦8,000 |
| **NFC tag** | ₦1,200 |
| **Solana NFT mint** | ₦40 |
| **Packaging and hangtag** | ₦2,000 |
| **Payment processing (Paystack 1.5%)** | ₦975 |
| **Contingency** | ₦1,500 |
| **Total cost per garment** | ₦25,715 |
| **Profit per garment** | ₦39,285  —  60.4% margin |
| **Total drop profit on 40 garments** | ₦1,571,400 |
| **Unsold inventory** | Zero. Structurally impossible. |

A traditional fashion brand producing the same garment speculatively — making 60, selling 35 at full price, discounting 15, destroying 10 — achieves an effective margin of approximately 18%. The difference is not operational efficiency. It is the removal of the guess.

## **The Compounding Royalty**

The garment is made once. The revenue is not.

Every future resale of a Circuit garment triggers a 7% automatic payment to Circuit via smart contract. A dress produced in 2025 may generate royalty income in 2027, 2031, and 2035 without any further action from Circuit. As the catalogue grows with each drop, so does the compounding baseline of passive royalty income.

At 12 drops per year, 40 garments per drop, with two resales per garment lifetime: 1,920 Solana transactions annually — every one tied to a physical object that was already paid for before it was made.

# **Why Solana**

Solana's sub-cent transaction cost makes per-garment NFT minting economically viable at fashion price points. On Ethereum, the same model would be cost-prohibitive. On Solana, the mint cost per garment is approximately ₦40.

* Trustless escrow: buyer payment is locked in a smart contract until delivery is confirmed. No chargebacks. No intermediaries.

* Automatic perpetual royalties: 7% on every future resale, enforced by code across every compatible marketplace. Not by contracts. Not by relationships.

* Unforgeable scarcity: 40 NFTs minted equals 40 garments made. This is a verifiable technical fact on a public ledger, not a brand promise.

* Consumer onboarding: every Circuit buyer who scans an NFC tag has completed an on-chain interaction. Most will never have held a crypto wallet before. Circuit is a Solana user acquisition mechanism operating through fashion.

* EU Digital Product Passport compliance: EU legislation now legally requires verifiable product data for fashion items sold in Europe. Circuit's Solana records meet this requirement from production day one.

# **What Circuit Is Not**

Several fashion brands have demonstrated ethical production credentials at scale. Understanding why they cannot be easily sold in the Nigerian market is relevant to Circuit's positioning.

Eileen Fisher is a certified B Corp with a garment take-back programme running since 2009\. Lagos market penetration: essentially zero. The aesthetic has no cultural resonance; ethics without desire is a charity.

Veja uses fair-trade cotton and publishes transparent pricing. Global cult following. Nigerian sales: negligible. The product requires a consumer pre-educated by a decade of sustainability discourse that does not yet exist at scale here.

Patagonia gave away the company. Nigerian sales: near zero. Outdoor performance wear in an urban market — the product-market fit does not exist.

*Ethics is a retention mechanism, not an acquisition mechanism. Nobody buys a garment because it was ethically produced. The sequence must always be: desire first, ethics as confirmation, blockchain as proof.*

Circuit's garments must be genuinely wanted as fashion objects before the NFC tag matters. The design investment is not secondary to the technology investment.

# **The Technical Architecture**

## **Current State: Manual MVP**

Drop Zero is executed manually. Pre-orders via Paystack. NFT minting via Metaplex Studio — one garment at a time, approximately four minutes each. NFC tags programmed with NFC Tools app. This is the fallback that keeps Circuit operational if any technical layer fails. Every Circuit process has a manual version.

## **Stage Two Build: Custom Application**

The custom application automates the full pipeline: pre-order intake, Solana escrow, NFT minting at production confirmation, NFC ownership display interface. This requires a Solana developer with Metaplex experience. It is the Stage Two priority, contingent on Drop Zero proving the model.

## **Known Technical Risks**

* NFC tag durability: NTAG213/215 chips are rated for significant physical stress. Lining placement reduces direct exposure. A secondary watermark or serial number printed into the fabric provides a backup verification pathway if a tag is damaged.

* Marketplace royalty bypass: some Solana marketplaces have historically offered optional or zero royalties. Circuit's own resale marketplace enforces royalties unconditionally. The Metaplex Programmable NFT standard provides stronger enforcement on third-party platforms than previous standards.

* Wallet abstraction reliability: custodial wallet creation from email must be seamless. Any friction at this point breaks the promise of a crypto-free buyer experience.

# **Revenue Architecture**

| Stage | Revenue Source | Structure | Target |
| :---- | :---- | :---- | :---- |
| **Pre-seed** | Drop revenue \+ Founding Circle | Per drop \+ ₦4,000/mo × 50 members | ₦200K MRR \+ ₦1.5M per drop |
| **Year 2** | Designer membership platform | Annual commit, monthly billing | ₦1M+/month, 20 designers |
| **Year 3+** | Resale royalties — compounding | 7% automatic per resale | Grows with catalogue |

# **Build Sequence**

## **Stage 0 — Pre-Launch**

Community established before product exists. Waitlist landing page. Founding Circle: 50–100 early supporters at ₦4,000/month priority access. Superteam Nigeria membership active.

## **Stage 1 — Drop Zero**

One garment design. Pre-order via Paystack. Manual Solana NFT minting via Metaplex Studio. NFC tags sewn into lining. 20–40 confirmed buyers. Full public documentation of every step. This drop is Circuit's proof of concept and its primary asset for grant applications.

## **Stage 2 — Infrastructure**

Custom web application: automated pre-order intake, Solana escrow, NFT minting pipeline, NFC ownership display. Technical co-founder required. Three to five additional drops. Solana Foundation grant application with Drop Zero as evidence.

## **Stage 3 — Designer Platform**

Nigerian designers access Circuit's infrastructure via monthly membership. Annual commitment, monthly billing. Qualification requirement: demonstrated existing buyer demand. Circuit's MRR becomes independent of its own production output.

## **Stage 4 — Resale Coordination**

Circuit's own resale marketplace. Ownership transfers on-chain. Royalty enforcement unconditional on Circuit's platform. Secondary market for Circuit garments formalised.

## **Stage 5 — Scale**

London and diaspora market. Pan-African designer expansion. EU Digital Product Passport licensing for African brands seeking European market access. The fashion is the proof of concept. The infrastructure is the business.

# **Circuit's Contribution to the Solana Ecosystem**

Real-world asset transactions generated by physical commerce — not speculation, not DeFi, not financial instruments. A garment was confirmed by a buyer, made, delivered, and recorded. That chain of events produces Solana transactions that represent genuine economic activity.

Consumer onboarding. Every Circuit buyer who scans an NFC tag has completed an on-chain interaction without ever being asked to engage with crypto. The wallet exists in the background. The ownership experience is entirely physical. This is the consumer adoption pattern the Solana ecosystem has been attempting to demonstrate for years. Circuit achieves it through fashion.

A proof of concept for Solana's real-world utility argument. Circuit demonstrates that Solana's infrastructure — NFC integration, compressed NFTs, smart contract escrow, programmable royalties — handles physical goods provenance and automated resale economics at consumer price points, from an emerging market, with buyers who have never held a crypto wallet.

# **Limitations Circuit Acknowledges**

* No technical build exists yet. The blockchain architecture is planned, not deployed. Until a developer is engaged and a working demo exists, Circuit's Solana claims are design intent rather than demonstrated capability.

* Nigerian resale behaviour is still developing. The compounding royalty model requires a secondary market that does not yet exist at meaningful volume domestically. London and the diaspora are the intended bridge — but operational logistics for that market have not been fully planned.

* The designer membership model's value depends on Circuit helping members sell. If designers join the platform and their drops fail to convert, the membership churns. Circuit's success is inseparable from its members' commercial outcomes.

* The founder is non-technical. The technical co-founder gap is the most significant constraint on Circuit's development timeline.

**CIRCUIT**

*...with the edge*

Lagos, Nigeria  ·  Solana Mainnet

*Blockchain is Circuit's memory.*