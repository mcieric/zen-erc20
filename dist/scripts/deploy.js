"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
async function main() {
    const [deployer] = await hardhat_1.ethers.getSigners();
    const Token = await hardhat_1.ethers.getContractFactory("MyToken");
    const token = await Token.deploy(deployer.address);
    await token.waitForDeployment();
    console.log("MyToken deployed to:", await token.getAddress());
}
main().catch((e) => { console.error(e); process.exit(1); });
