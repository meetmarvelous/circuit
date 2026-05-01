**Execution maze**

Paystack — Taking Pre-Order Payments Without Code

Go to paystack.com and create a business account. Once inside the dashboard, navigate to Payment Pages, then create a new page. Set the amount to your drop price — say ₦65,000. Give the page a name that matches the drop. Copy the link. That link is your pre-order checkout.

Share it in your Instagram bio, your Twitter thread, your WhatsApp broadcast. When someone pays, Paystack notifies you by email and it appears in your dashboard. Paystack charges 1.5% per transaction — on a ₦65,000 order that is ₦975. No code required. No developer needed. This is your entire payment infrastructure for Drop Zero.

When you are ready to scale this to an automated smart contract escrow on Solana, that is a developer task. For now, Paystack is the manual version that proves the model works before you build the technical layer.

Metaplex Studio — Minting the NFT Ownership Record

First, you need a Phantom wallet. Go to phantom.app, download the browser extension, create a wallet, and save your seed phrase somewhere physically safe — written on paper, not in a notes app. Fund the wallet with a small amount of SOL. You need approximately ₦40 worth of SOL per mint to cover Solana transaction fees.

For Drop Zero, use Metaplex Studio at studio.metaplex.com. Sign in with your Phantom wallet.

To mint a single garment record: go to Create NFT, fill in the fields — name it with something specific like "Circuit Drop 001 — Wrap Dress Edition 7 of 40." Add the garment image. In the description, include the production date, fabric details, and anything you want permanently attached to this piece's identity. Set the royalty percentage to 7% — this is the resale fee that executes automatically on every future sale. Click mint. Confirm the transaction in your Phantom wallet. Done. That garment now has a permanent record on Solana.

The whole process takes roughly four minutes per garment when done manually. For a drop of 40 pieces, that is about two and a half hours of minting time. This is viable for Drop Zero and Drop One. By Drop Three you will want a developer to automate the pipeline — but you do not need that yet.

One important distinction: you are minting on Solana mainnet, not devnet. Devnet is for testing and the records disappear. Mainnet is permanent. When you are practising, use devnet. When you are making real garments for real buyers, switch to mainnet.

NFC Tags — Connecting the Physical Garment to the Record

Source the tags from AliExpress. Search for "NFC sticker tags NTAG213" — you want the NTAG213 or NTAG215 standard. A pack of 100 costs between $8 and $15 depending on the seller. If you need them faster and do not want to wait for shipping from China, Computer Village in Lagos carries them. Ask specifically for NTAG213 sticker tags.

To program each tag, download the NFC Tools app on your phone — it is free on both Android and iOS. Open the app, tap Write, then Add a Record, then URL. Paste in the URL of that garment's Solana record — you can find this on any Solana explorer like solscan.io by searching your wallet address and finding the minted NFT. Write the URL to the tag. Done.

Now anyone who taps that tag with a smartphone will be taken directly to the garment's permanent Solana record — its edition number, production date, and current owner.

For the physical installation: sew a small fabric pocket into the inside lining of the garment, near the hem or the back neck seam. The tag sits inside that pocket, protected from direct washing contact and physical stress. The NTAG213 chip itself is waterproof but the sticker backing is not, so the fabric pocket matters. If a tag is ever damaged, the garment's Solana record still exists — you can programme a replacement tag with the same URL and sew it in.

The sequence for each garment, in order:

One — buyer pays via Paystack. You have their order confirmed.

Two — garment enters production. You sew it.

Three — you mint the NFT on Metaplex Studio. You get a Solana record URL.

Four — you programme an NFC tag with that URL using NFC Tools.

Five — you sew the NFC tag into the garment lining.

Six — garment ships. Buyer receives it, taps the tag, sees the record. They are the first owner on-chain.

That is the complete manual MVP. No developer required until you are ready to automate it at scale.