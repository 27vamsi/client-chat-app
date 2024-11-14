// deploy.js
const hre = require("hardhat");

async function main() {
    const Chat = await hre.ethers.getContractFactory("Chat");
    const chat = await Chat.deploy();
    await chat.deployed();
    console.log("Chat deployed to:", chat.address);

    console.log("Transaction hash:", chat.deployTransaction.hash);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
