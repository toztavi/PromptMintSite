import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const MintYourPrompt = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [promptName, setPromptName] = useState('');
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

  const handleInputChange = (e) => {
    setPromptName(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <Head>
        <title>Mint Your Prompt</title>
      </Head>

      <h1 className="text-4xl font-bold mb-8">Mint Your Prompt</h1>
      <p className="text-xl mb-8">Here is the page for minting your prompt.</p>

      {/* Repeat this block from here*/}
      <h2 className="text-4xl font-bold mb-8">Prompt Name</h2>

      {/* Prompt Name Input */}
      <div className="mb-8">
          <input
            type="text"
            placeholder="Enter prompt name"
            value={promptName}
            onChange={handleInputChange}
            className="px-4 py-2 bg-white rounded-md shadow"
          />
        </div>
      {/* Repeat to here */}


      {/* Repeat this block from here*/}
      <h2 className="text-4xl font-bold mb-8">Prompt Category</h2>

        {/* Prompt Name Input */}
      <div className="mb-8">
          <input
            type="text"
            placeholder="Enter prompt category"
            value={promptName}
            onChange={handleInputChange}
            className="px-4 py-2 bg-white rounded-md shadow"
          />
        </div>
      {/* Repeat to here */}

      {/* Repeat this block from here*/}
      <h2 className="text-4xl font-bold mb-8">Prompt Description</h2>

        {/* Prompt Name Input */}
      <div className="mb-8">
          <input
            type="text"
            placeholder="Enter prompt Description"
            value={promptName}
            onChange={handleInputChange}
            className="px-4 py-2 bg-white rounded-md shadow"
          />
        </div>
      {/* Repeat to here */}

    {/* Repeat this block from here*/}
      <h2 className="text-4xl font-bold mb-8">Your Prompt</h2>

        {/* Prompt Name Input */}
      <div className="mb-8">
          <input
            type="text"
            placeholder="Enter your prompt"
            value={promptName}
            onChange={handleInputChange}
            className="px-4 py-2 bg-white rounded-md shadow"
          />
        </div>
      {/* Repeat to here */}

      <h2 className="text-4xl font-bold mb-8">Upload Image</h2>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={handleMint}
        >
          Attach
        </button>
      </div>
      {/* <div className="mt-8">
        <Link href="/" passHref>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Go back to index
          </button>
        </Link>
      </div> */}

    {/* Repeat this block from here*/}
    <h2 className="text-4xl font-bold mb-8">Supply</h2>

    {/* Prompt Name Input */}
    <div className="mb-8">
      <input
        type="text"
        placeholder="Enter supply number eg. 100"
        value={promptName}
        onChange={handleInputChange}
        className="px-4 py-2 bg-white rounded-md shadow"
      />
    </div>
    {/* Repeat to here */}

    {/* Repeat this block from here*/}
    <h2 className="text-4xl font-bold mb-8">Chain</h2>

    {/* Prompt Name Input */}
    <div className="mb-8">
      <input
        type="text"
        placeholder="Enter supply number eg. Polygon"
        value={promptName}
        onChange={handleInputChange}
        className="px-4 py-2 bg-white rounded-md shadow"
      />
    </div>
    {/* Repeat to here */}

    {/* Repeat this block from here*/}
    <h2 className="text-4xl font-bold mb-8">Price</h2>

    {/* Prompt Name Input */}
    <div className="mb-8">
      <input
        type="text"
        placeholder="Enter supply number eg. 5 MATIC"
        value={promptName}
        onChange={handleInputChange}
        className="px-4 py-2 bg-white rounded-md shadow"
      />
    </div>
    {/* Repeat to here */}

      {/* Mint Button Details */}
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
