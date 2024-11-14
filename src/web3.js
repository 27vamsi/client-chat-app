import Web3 from "web3";
import ChatContract from "./contracts/Chat.json";

let web3;
let chatContract;

// Function to get Web3 instance
export const getWeb3 = async () => {
  if (!web3) {
    if (window.ethereum) {
      // Initialize web3 with window.ethereum (MetaMask)
      web3 = new Web3(window.ethereum);
      try {
        // Request account access if necessary
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      } catch (error) {
        console.error("User denied account access or error in MetaMask:", error);
        throw new Error("Access denied or MetaMask issue.");
      }
    } else {
      console.error("No Ethereum provider found. Please install MetaMask.");
      throw new Error("No Ethereum provider found.");
    }
  }
  return web3;
};

// Function to get the deployed chat contract
export const getChatContract = async () => {
  try {
    const web3 = await getWeb3();
    const networkId = await web3.eth.net.getId();
    console.log("Network ID: ", networkId);
    
    // Get the deployed contract based on the network
    const deployedNetwork = ChatContract.networks[networkId];

    if (!deployedNetwork) {
      console.error(`Contract not deployed on network ID ${networkId}.`);
      throw new Error(`Contract not deployed on network ID ${networkId}.`);
    }

    // Initialize chatContract with the ABI and deployed contract address
    chatContract = new web3.eth.Contract(ChatContract.abi, deployedNetwork.address);
    return chatContract;
  } catch (error) {
    console.error("Error getting chat contract:", error);
    throw error;
  }
};

// Function to send a message (example usage)
export const sendMessage = async (senderAddress, recipientAddress, message) => {
  try {
    const contract = await getChatContract();
    const web3 = await getWeb3();

    // Send the message via the contract
    await contract.methods.sendMessage(recipientAddress, message).send({ from: senderAddress });
    console.log('Message sent successfully!');
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

// Function to fetch messages (example usage)
export const getMessages = async () => {
  try {
    const contract = await getChatContract();
    const messages = await contract.methods.getMessages().call();
    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};
