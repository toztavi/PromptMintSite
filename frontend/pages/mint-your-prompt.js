import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useWallet from '../hooks/useWallet';

import Web3 from 'web3';
import MyERC1155 from '../abis/PromptNFT_metadata.json';

const MintYourPrompt = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [promptName, setPromptName] = useState('');
  const router = useRouter();
  const [minting, setMinting] = useState(false);

  const { account, web3 } = useWallet();
  useEffect(() => {
    if (account) {
      console.log('Connected account:', account);
    }
  }, [account]);

  const handleInputChange = (e) => {
    setPromptName(e.target.value);
  };

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
      router.push('/minted');
    } catch (error) {
      console.error(error);
      alert('トークンのMintに失敗しました');
    } finally {
      setMinting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <style jsx>{`.min-h-screen {
          background-image: url('/wafuu.png');
          background-size: cover;
          background-position: center;}
          .text-color {
            color: #ffffff;
          }
          
          `}
      </style>
      <Head>
        <title>Mint Your Prompt</title>
      </Head>

      <div className="flex flex-col items-start justify-center">
        <h1 className="text-4xl font-bold mb-8">Mint Your Prompt</h1>
        <p className="text-xl mb-8">Here is the page for minting your prompt.</p>

        <div className="flex flex-col mb-8">
          <label htmlFor="promptName" className="font-bold text-xl mb-2">Prompt Name:</label>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter prompt name"
              className="px-4 py-2 bg-white rounded-md shadow"
            />
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <label htmlFor="promptCategory" className="font-bold text-xl mb-2">Prompt Category:</label>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter prompt category"
              className="px-4 py-2 bg-white rounded-md shadow"
            />
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <label htmlFor="promptDescription" className="font-bold text-xl mb-2">Prompt Description:</label>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter prompt description"
              className="px-4 py-2 bg-white rounded-md shadow"
            />
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <label htmlFor="yourPrompt" className="font-bold text-xl mb-2">Your Prompt:</label>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter prompt description"
              className="px-4 py-2 bg-white rounded-md shadow"
            />
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <label htmlFor="uploadImage" className="font-bold text-xl mb-2">Upload Image:</label>
          <div className="flex">
            <input
              type="file"
              id="uploadImage"
              className="hidden"
            />
            <label
              htmlFor="uploadImage"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              Select File
            </label>
          </div>
        </div>        <div className="flex flex-col mb-8">
          <label htmlFor="Supply" className="font-bold text-xl mb-2">Supply:</label>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter supply number eg. 100"
              className="px-4 py-2 bg-white rounded-md shadow"
            />
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <label htmlFor="Price" className="font-bold text-xl mb-2">Price:</label>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter supply number eg. 5 MATIC"
              className="px-4 py-2 bg-white rounded-md shadow"
            />
          </div>
        </div>

        {/* Mint Button Details */}
        <div className="self-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={handleMint}
            disabled={minting}
          >
            {minting ? 'Minting...' : 'Mint'}
          </button>
          <Link href="/" passHref>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Go back to index
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MintYourPrompt;
