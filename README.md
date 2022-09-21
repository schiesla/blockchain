# blockchain
Exploring blockchain by following a frontend masters course.
- Website for that course: https://theprimeagen.github.io/web3-smart-contracts/

### NOTE: use node versions: "^12.0.0 || ^14.0.0 || ^16.0.0"

# In order to spin up:
1. `yarn init -y`
2. `yarn add -D hardhat`
3. `npx hardhat`

# In order to test:
1. `yarn add -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai`
2. `yarn add -D ts-node typescript`
3. `yarn add -D ts-node typescript`

# Hardhat commands:
1. `npx hardhat compile` - compile contracts
2. `npx hardhat test` - run the tests (run the 3 commands above if this doesn't work right)
3. `npx hardhat run scripts/<the_script_to_run> --network <network_to_run_on>` - run a script on a specified network
4. `npx hardhat node` - sets up a locally hosted node on your network with accounts and ETH balance


### NOTES:
- Eth has 2 types of transactions: state chaning and non state changing
- state changing transactions use gas
- state changing transactions do not return the new state data, because a certain number of blocks must complete to confirm the state change.
- If a contract is changed, it has to be redeployed before the changes are live
- Read Only functions:
    - `view`: are functions that do not change the contracts state.
    - `pure`: cannot read or write state on the contract.

### SCOPES:
+------------+------------+-------------+--------------+--------------+<br />
|            |   public   |   private   |   internal   |   external   |<br />
+------------+------------+-------------+--------------+--------------+<br />
|  Contract  |    yes     |     yes     |     yes      |      no      |<br />
|  can call  |            |             |              |              |<br />
+------------+------------+-------------+--------------+--------------+<br />
| SubContract|    yes     |     no      |     yes      |      no      |<br />
|  can call  |            |             |              |              |<br />
+------------+------------+-------------+--------------+--------------+<br />
|  Outside   |    yes     |     no      |     no       |      yes     |<br />
|  can call  |            |             |              |              |<br />
+------------+------------+-------------+--------------+--------------+

### BigNumbers?
- js cannot handle some of the larger numbers eth requires, so it prints out type BigNumber. If you specify a smaller return type like `unit32` it will
return a value that js can handle.