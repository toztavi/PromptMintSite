// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract PromptNFT is ERC1155 {
    using Strings for uint256;

    string private _baseURI = "https://api.nft.storage/";

    constructor() ERC1155(_baseURI) {
    }

    function _uri(uint256 tokenId) internal view virtual returns (string memory) {
        return string(abi.encodePacked(_baseURI, tokenId.toString()));
    }

    function mint(address to, uint256 id, uint256 amount) public {
        _mint(to, id, amount, "");
    }

    function setBaseURI(string memory newBaseURI) public {
        _baseURI = newBaseURI;
    }
}
