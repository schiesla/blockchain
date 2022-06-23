//  SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract HelloWorld { //A contract is a state container with some functions to mutate it... similar to a class
    function hello() public pure returns (string memory) {
        return "Hello, World";
    }
}