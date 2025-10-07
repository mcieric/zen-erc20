import { ethers } from "hardhat";
async function main() {
  const [deployer] = await ethers.getSigners();
  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy(deployer.address);
  await token.waitForDeployment();
  console.log("MyToken deployed to:", await token.getAddress());
}
main().catch((e) => { console.error(e); process.exit(1); });
