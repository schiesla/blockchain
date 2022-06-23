import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

// When you run tests using hardhat, it will actually spin up a temp test network, run the tests, and then tear down the network
describe("hellow world", function() {
    it("should say hi", async function() {
        // 1. setup
        // 2. deploy our contract
        // 3. call our function to test

        // 2.
        const HelloWorld = await ethers.getContractFactory("HelloWorld");//reads the file and makes sure everything is in place
        const hello = await HelloWorld.deploy(); //make the transaction that puts a contract onto an Ethereum network
        await hello.deployed(); //wait until the contract has been accepted amongst enough nodes and has therefore gone live

        expect(await hello.hello()).to.equal("Hello, World");
    });
});