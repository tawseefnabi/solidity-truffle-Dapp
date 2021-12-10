 // SPDX-License-Identifier: MIT
  pragma solidity ^0.5.10;

  contract HelloWorld {
    string myName = "Hello World";
      function getMyName() public  view returns (string memory) {
          return myName;
      }
      function setMyName(string memory _name) public {
          myName = _name;
      }
  }