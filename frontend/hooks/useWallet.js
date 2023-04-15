import { useState, useEffect } from 'react';
import Web3 from 'web3';

const useWallet = () => {
  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
          });

          setAccount(accounts[0]);
        } catch (error) {
          console.error('Error connecting to wallet:', error);
        }
      } else {
        console.error('Ethereum provider not found');
      }
    };

    connectWallet();
  }, []);

  return { account, web3 };
};

export default useWallet;
