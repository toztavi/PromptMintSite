import { useState } from 'react';
import Web3 from 'web3';
import MyERC1155 from '../abis/PromptNFT_metadata.json';

function MintPage() {
  const [minting, setMinting] = useState(false);

  async function handleMint() {
    // Metamaskが接続されているかを確認する
    if (typeof window.ethereum === 'undefined') {
      alert('MetaMaskをインストールしてください');
      return;
    }
    // web3インスタンスを作成する
    const web3 = new Web3(window.ethereum);
    // ERC1155トークンのアドレスを設定する
    const tokenAddress = '0x9cd6ddb8ec8f6805eb53f0943d8e8f51589db32e';
    // Metamaskから現在のアカウントを取得する
    const accounts = await web3.eth.requestAccounts();
    const account = accounts[0];
    // ERC1155コントラクトのインスタンスを作成する
    const myERC1155 = new web3.eth.Contract(MyERC1155.abi, tokenAddress);
    // トークンをMintする
    try {
      setMinting(true);
      await myERC1155.methods.mint(1, "AAAAA", 100).send({ from: account });
      alert('トークンがMintされました');
    } catch (error) {
      console.error(error);
      alert('トークンのMintに失敗しました');
    } finally {
      setMinting(false);
    }
  }

  return (
    <div>
      <h1>ERC1155トークンをMintする</h1>
      <button onClick={handleMint} disabled={minting}>
        {minting ? 'Mint中...' : 'Mint'}
      </button>
    </div>
  );
}

export default MintPage;
