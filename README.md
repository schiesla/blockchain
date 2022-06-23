# blockchain
Exploring blockchain by following a frontend masters course.
- Website for that course: https://theprimeagen.github.io/web3-smart-contracts/


# In order to spin up:
1. `yarn init -y`
2. `yarn add -D hardhat`
3. `npx hardhat`

# In order to test:
1. `yarn add -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai`
2. `yarn add -D ts-node typescript`
3. `yarn add -D ts-node typescript`

# Hardhat commands
1. `npx hardhat compile` - compile contracts
2. `npx hardhat test` - run the tests
3. `npx hardhat run scripts/<the_script_to_run> --network <network_to_run_on>` - run a script on a specified network
4. `npx hardhat node` - sets up a locally hosted node on your network with accounts and ETH balance