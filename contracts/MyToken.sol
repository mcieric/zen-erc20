// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(address initialHolder) ERC20("ZenToken", "ZEN") {
        _mint(initialHolder, 1_000_000 * 10 ** decimals());
    }
}
