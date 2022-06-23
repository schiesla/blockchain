import { ethers } from "ethers";

/**
 * @returns An ethereum object that is only available and added to the window object by the MetaMask extension.
 */
function getEth() {
    //@ts-ignore
    const eth = window.ethereum;
    if (!eth) {
        throw new Error("get metamask and a positive attitude");
    }
    return eth;
}

/**
 * @returns {boolean} does the network have ethereum signers/accounts?
 */
async function hasAccounts(): Promise<boolean> {
    const eth = getEth();
    const accounts = await eth.request({method: "eth_accounts"}) as string[];
    console.log("ACCOUNTS: ",accounts);

    return accounts && !!accounts.length;
}

/**
 * @returns {boolean} does the network have ethereum signers/accounts? Pretty much the same as the previous, function
 * This will just rerequest the accounts if you don't already have them.
 */
async function requestAccounts(): Promise<boolean> {
    const eth = getEth();
    const accounts = await eth.request({method: "eth_requestAccounts"}) as string[];
    console.log("RACCOUNTS: ",accounts);

    return accounts && !!accounts.length;
}

/**
 * Checks to see if we have access to the eth object and there are infact accounts on the network. Then
 * We communicate with our hosted contract through ethers.Contract call.
 */
async function run() {
    if (!await hasAccounts() && !await requestAccounts()) {
        throw new Error("Please let me take your money");
    }

    const hello = new ethers.Contract(
        '0x5fbdb2315678afecb367f032d93f642f64180aa3',// where the contract is at (the value you see here is copied
        [                                            // from the logs for the npx hardhat node command that show us the contracts "to" address)
            'function hello() public pure returns (string memory)'
        ],// What is on the contract... which is an interface... which pretty much is a stringified version of our contracts contents
        new ethers.providers.Web3Provider(getEth())// how you communicate to the contract
    );

    document.body.innerHTML = await hello.hello();

}

run();