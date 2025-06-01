💬 DecentralizedChat
<div align="center">
Show Image
Show Image
Show Image
Show Image
A fully decentralized, blockchain-powered chat application built on Ethereum 🚀
Demo • Installation • Smart Contract • Frontend • API
</div>

🌟 Features
🔐 Decentralized & Secure

No Central Server - All messages stored on blockchain
Wallet Authentication - Connect with MetaMask, WalletConnect, etc.
Immutable History - Messages can't be deleted or modified
End-to-End Verification - Cryptographic message integrity

💬 Rich Chat Experience

Real-time Messaging - Instant message delivery via Web3 events
User Profiles - Set display names and avatars
Message Threading - Reply to specific messages
Emoji Reactions - React to messages with emojis
File Sharing - Share files via IPFS integration

⛽ Gas Optimized

Batch Messaging - Send multiple messages in one transaction
Efficient Storage - Optimized data structures
Layer 2 Ready - Compatible with Polygon, Arbitrum, etc.
Gas Estimation - Smart gas price recommendations

🏗️ Architecture
mermaidgraph TB
    A[React Frontend] --> B[Web3 Provider]
    B --> C[Smart Contract]
    C --> D[Ethereum Network]
    A --> E[IPFS Node]
    C --> F[Event Listeners]
    F --> A
    G[MetaMask] --> B
Components

Smart Contract (ChatContract.sol) - Core messaging logic
React Frontend - User interface and Web3 integration
IPFS Integration - Decentralized file storage
Event System - Real-time message synchronization

🚀 Quick Start
Prerequisites
bash# Required tools
node >= 16.0.0
npm >= 8.0.0
git
Installation
bash# Clone the repository
git clone https://github.com/your-username/decentralized-chat.git
cd decentralized-chat

# Install dependencies
npm install

# Install Hardhat for smart contract development
npm install --save-dev hardhat @nomiclabs/hardhat-ethers ethers

# Install frontend dependencies
cd frontend
npm install
cd ..
Environment Setup
bash# Create environment file
cp .env.example .env

# Configure your environment
PRIVATE_KEY=your_wallet_private_key
INFURA_PROJECT_ID=your_infura_project_id
ETHERSCAN_API_KEY=your_etherscan_api_key
REACT_APP_CONTRACT_ADDRESS=deployed_contract_address
Deploy Smart Contract
bash# Compile contracts
npx hardhat compile

# Deploy to local network
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost

# Deploy to testnet (Goerli)
npx hardhat run scripts/deploy.js --network goerli

# Deploy to mainnet
npx hardhat run scripts/deploy.js --network mainnet
Start Frontend
bash# Start React development server
cd frontend
npm start

# Build for production
npm run build
📱 Frontend Client
Tech Stack

React 18 - Modern UI framework
Web3.js / Ethers.js - Blockchain interaction
Wagmi - React hooks for Ethereum
RainbowKit - Wallet connection UI
Tailwind CSS - Styling framework
Socket.io - Real-time updates

Key Components
javascript// Connect wallet
import { useAccount, useConnect } from 'wagmi'

function WalletConnect() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  
  return (
    <div>
      {isConnected ? (
        <span>Connected: {address}</span>
      ) : (
        connectors.map((connector) => (
          <button key={connector.id} onClick={() => connect({ connector })}>
            Connect {connector.name}
          </button>
        ))
      )}
    </div>
  )
}
Features Implementation
Send Message
javascriptimport { useContractWrite } from 'wagmi'

function SendMessage() {
  const { write: sendMessage } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: ChatABI,
    functionName: 'sendMessage',
  })

  const handleSend = () => {
    sendMessage({
      args: [recipient, message, messageType],
      value: parseEther('0.001') // Optional tip
    })
  }
}
Listen for Messages
javascriptimport { useContractEvent } from 'wagmi'

function MessageListener() {
  useContractEvent({
    address: CONTRACT_ADDRESS,
    abi: ChatABI,
    eventName: 'MessageSent',
    listener(logs) {
      logs.forEach(log => {
        const { sender, recipient, content, timestamp } = log.args
        addMessageToChat({ sender, recipient, content, timestamp })
      })
    },
  })
}
