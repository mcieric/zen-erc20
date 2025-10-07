"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const hardhat_1 = require("hardhat");
describe("MyToken", function () {
    it("mints to deployer", async () => {
        const [deployer] = await hardhat_1.ethers.getSigners();
        const Token = await hardhat_1.ethers.getContractFactory("MyToken");
        const token = await Token.deploy(deployer.address);
        await token.waitForDeployment();
        const bal = await token.balanceOf(deployer.address);
        (0, chai_1.expect)(bal).to.be.gt(0n);
    });
});
