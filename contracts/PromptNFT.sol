// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts@4.6.0/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts@4.6.0/access/Ownable.sol";
import "@openzeppelin/contracts@4.6.0/utils/Strings.sol";
import "@openzeppelin/contracts@4.6.0/utils/Counters.sol";

contract PromptNFT is ERC1155, Ownable {
    using Strings for uint256;

    string private _baseURI = "https://api.nft.storage/";

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC1155(_baseURI) {
    }

    function _uri(uint256 tokenId) internal view virtual returns (string memory) {
        return string(abi.encodePacked(_baseURI, tokenId.toString()));
    }

    function mint(uint256 amount) public onlyOwner {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _mint(_msgSender(), newTokenId, amount, "");
    }

    function setBaseURI(string memory newBaseURI) public onlyOwner {
        _baseURI = newBaseURI;
    }
}
