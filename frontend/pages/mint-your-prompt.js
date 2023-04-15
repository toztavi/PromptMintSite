import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const MintYourPrompt = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const router = useRouter();

  const handleMint = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
    if (newRandomNumber % 2 === 0) {
      router.push('/minted');
    } else {
      router.push('/not-unique');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <Head>
        <title>Mint Your Prompt</title>
      </Head>
      <h1 className="text-4xl font-bold mb-8">Mint Your Prompt</h1>
      <p className="text-xl mb-8">Here is the page for minting your prompt.</p>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={handleMint}
        >
          Mint
        </button>
      </div>
      <div className="mt-8">
        <Link href="/" passHref>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Go back to index
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MintYourPrompt;
