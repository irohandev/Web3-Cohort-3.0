# Why Blockchains?

- **Inflating Currencies:** Central banks can print more money, leading to inflation.
- **Inflation Issues:** Printing money and distributing it to everyone causes inflation, reducing the value of money.
- **Random Bailouts:** Governments bail out failing institutions, creating unfair economic conditions.
- **Need for Better Currency:** A currency that is open, transparent, and immune to arbitrary printing is essential.
- **Fractional Reserve Banking:** Banks only keep a fraction of depositors' money on hand, which can lead to financial instability.
- **Currency Depreciation:** Traditional currencies lose value over time due to inflation.
- **Lack of Backing:** Modern currencies are not backed by tangible assets like gold or silver.
- **Recommended Watching:** *The Big Short* (film) provides insight into financial crises and the need for better financial systems.

# What is Blockchain?

Blockchain is a decentralized and distributed digital ledger that records transactions across many computers, ensuring data security and transparency. It operates without a central authority, using cryptographic techniques to verify and add new transactions.

## Main Characteristics of Blockchain

- **Decentralization:** Blockchain is managed across multiple nodes (machines), ensuring no single entity controls the data. Each node stores the entire blockchain, providing access to all data on the blockchain.
- **Immutability:** Once data is recorded on a blockchain, it cannot be easily altered or deleted, ensuring the integrity of the records.
- **Transparency:** All transactions recorded on a blockchain are visible to all participants, promoting openness and trust.
- **Consensus Mechanisms:** Nodes in the network follow consensus mechanisms (e.g., Proof of Work, Proof of Stake) to validate transactions and add them to the blockchain.

## Purpose of Blockchain

The purpose of blockchain is to create a network of computers that agree upon a common state of data. This ensures that:

- Any person or organization can participate in the process.
- No single person or organization can control the process.
- Blockchain enables secure, transparent, and tamper-proof transactions without the need for a central authority.

# How to Create a New Currency with Blockchain

There is a need for trustless, anonymized, and decentralized form of money, and blockchain solves it for us.

## Key Points

- **Avoiding Central Ownership:** Centralized control over currency can lead to misuse of power and lack of transparency. Blockchain technology eliminates the need for a central authority, distributing control among multiple nodes.
- **Trustless System:** Blockchain enables the creation of currency without needing to trust a central authority. Transactions are verified by consensus mechanisms, ensuring security and integrity.
- **Anonymization:** Blockchain technology supports anonymized transactions, protecting the privacy of users while maintaining transparency of the overall system.
- **Decentralization:** Decentralized money operates on a network of nodes, preventing any single entity from having control and reducing the risk of manipulation or failure. By leveraging these principles, blockchain technology allows for the creation of new currencies that are secure, transparent, and free from centralized control.

# Bitcoin

- **Bitcoin Whitepaper:** *Bitcoin: A Peer-to-Peer Electronic Cash System*

# Hashing

Transforms input data of any size into a fixed-size string of characters.

## Properties

- **Deterministic:** Same input always produces the same output.
- **Fast Computation:** Hash value can be quickly verified for any data.
- **Pre-image Resistance:** Difficult to reverse the hash function to find the original input.
- **Small Changes in Input Produce Large Changes in Output:** Tiny input changes drastically alter the hash output.
- **Collision Resistance:** Difficult to find two different inputs that produce the same hash output.

## Example - SHA-256

- **Secure Hash Algorithm 256-bit:** Produces a 256-bit (32-byte) hash value from any input.
- **Code Example:** [SHA256 - Online Tools](https://emn178.github.io)

# Hashing vs. Encryption

- **Hashing:** Converts data into a fixed-size string. Irreversible (one-way function). Used for data integrity verification (e.g., password storage, file verification).
- **Encryption:** Converts data into a different format. Reversible (two-way function) using a key. Used for data confidentiality (e.g., securing communication, data storage).

# How Does Blockchain Work?

- **Blocks:** Data is stored in "blocks." Each block contains:
  - A list of transactions.
  - A timestamp.
  - A cryptographic hash of the previous block.
- **Chain:** Blocks are linked together in chronological order. This creates a "chain" of blocks, hence the name "blockchain."

# Important Terms

- **Nonce:** A unique number that miners must find to produce a valid hash. Used only once, it ensures the resulting hash satisfies the blockchain's difficulty conditions.
- **Finding Nonce:** Miners and Compute Power  
  Miners produce blocks in the blockchain. The probability of producing the next block and earning the reward increases with more compute power. Compute power is needed to calculate the correct nonce.
- **Nonce and Proof of Work (PoW):** The nonce is a number that, when added to the block data and hashed, produces a hash meeting the network's difficulty criteria. The process of finding this nonce is known as Proof of Work (PoW).
- **Consensus Mechanism:** A method ensuring all participants agree on the blockchain's state and the validity of transactions. Acts as a rulebook for validating transactions and blocks.
- **Proof of Work (PoW):** A consensus mechanism used in blockchain networks. Requires solving complex mathematical problems to find the correct nonce. Ensures the security and integrity of the blockchain by validating transactions and adding new blocks.
