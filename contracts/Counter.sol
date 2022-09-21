pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint counter;

    /**
     * This function is currently set up to write to state and then also read it by
     * returning the new value. But memory is expensive, and running this function will
     * not actually return the new value. So we need to break functions into read functions
     * and write functions: See following functions.....
     */
    // function count() public returns (uint) {
    //     counter++;
    //     console.log("Counter is now ", counter);
    //     return counter;
    // }

    // Write function
    function count() public {
        counter++;
        console.log("Counter is now ", counter);
    }

    // Read function... you can only get data out of view or pure functions
    function getCounter() public view returns (uint) {
        return counter;
    }
}