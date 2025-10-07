import { expect } from "chai";
import { ethers } from "hardhat";

describe("MyToken", function () {
  it("mints to deployer", async () => {
    const [deployer] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MyToken");
    const token = await Token.deploy(deployer.address);
    await token.waitForDeployment();
    const bal = await token.balanceOf(deployer.address);
    expect(bal).to.be.gt(0n);
  });
});
