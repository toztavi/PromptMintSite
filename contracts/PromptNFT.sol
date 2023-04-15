// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts@4.6.0/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts@4.6.0/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts@4.6.0/access/Ownable.sol";
import "@openzeppelin/contracts@4.6.0/utils/Strings.sol";
import "@openzeppelin/contracts@4.6.0/utils/Counters.sol";
import "@openzeppelin/contracts@4.6.0/security/ReentrancyGuard.sol";

contract PromptNFT is ERC1155, Ownable, ReentrancyGuard {
    using Strings for uint256;

    string private _baseURI = "https://bafkreibvwzp2tko3fyppqshlsz33vsn7bzn45hb757imzmqprpznclpedy.ipfs.nftstorage.link/";

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct TokenData {
        address creator;
        uint256 royaltyPercentage;
        string prompt;
    }

    mapping(uint256 => TokenData) private _tokenData;

    constructor() ERC1155(_baseURI) {
    }

    function _uri() internal view virtual returns (string memory) {
        return string(abi.encodePacked(_baseURI));
    }

    function mint(uint256 amount, string memory promptCID, uint256 royaltyPercentage) public onlyOwner {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _mint(_msgSender(), newTokenId, amount, "");
        
        _tokenData[newTokenId] = TokenData(msg.sender, royaltyPercentage, promptCID);
    }

    function setBaseURI(string memory newBaseURI) public onlyOwner {
        _baseURI = newBaseURI;
        _setURI(newBaseURI);
    }

    function getTokenCID(uint256 tokenId) public view onlyOwner returns (string memory) {
        return _tokenData[tokenId].prompt;
    }

    function buy(address seller, uint256 tokenId, uint256 amount, uint256 price, address paymentToken
    ) public nonReentrant {
        // 購入者が十分な支払いを行っていることを確認
        IERC20(paymentToken).transferFrom(msg.sender, address(this), price);

        // クリエイターにロイヤリティを支払う
        uint256 royaltyAmount = (price * _tokenData[tokenId].royaltyPercentage) / 100;
        IERC20(paymentToken).transfer(_tokenData[tokenId].creator, royaltyAmount);

        // 売り手に対して残りの支払いを行う
        uint256 sellerAmount = price - royaltyAmount;
        IERC20(paymentToken).transfer(seller, sellerAmount);

        // トークンを売り手から購入者に転送
        safeTransferFrom(seller, msg.sender, tokenId, amount, "");
    }


}
