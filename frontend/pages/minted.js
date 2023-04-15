import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';


const Minted = () => {
  const [promptName, setPromptName] = useState('');

  const handleInputChange = (e) => {
    setPromptName(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <Head>
        <title>Minted</title>
      </Head>
      <h1 className="text-4xl font-bold mb-8">Success! Your prompt has been minted.</h1>
      <div className="flex flex-col items-start justify-center">
        <p className="text-xl mb-8">The generated number is unique and minted.</p>


        <h1 className="text-4xl font-bold mb-8">Prompt Name</h1>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Enter Prompt Name"
            value={promptName}
            onChange={handleInputChange}
            className="px-4 py-2 bg-white rounded-md shadow"
          />
        </div>

        <h1 className="text-4xl font-bold mb-8">Prompt Category</h1>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Enter Prompt Category"
            value={promptName}
            onChange={handleInputChange}
            className="px-4 py-2 bg-white rounded-md shadow"
          />
        </div>

        <h1 className="text-4xl font-bold mb-8">Prompt Description</h1>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Enter Prompt Discription"
            value={promptName}
            onChange={handleInputChange}
            className="px-4 py-2 bg-white rounded-md shadow"
          />
        </div>

        <h1 className="text-4xl font-bold mb-8">Your Prompt</h1>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Enter Your Prompt"
            value={promptName}
            onChange={handleInputChange}
            className="px-4 py-2 bg-white rounded-md shadow"
          />
        </div>

        <h1 className="text-4xl font-bold mb-8">Prompt Image</h1>
        {/* pic */}
        <img src="cat1.png" alt="画像の説明" style={{ maxWidth: "50%" }} className="w-full md:w-auto md:mr-2 mb-4 md:mb-0" />
          
          {/* <div>
            <p>Prompt Name</p>
            <ul className="list-disc pl-6 mb-4">
              <li>sell 105</li>
              <li>Earned XXX MATIC</li>
            </ul>
          </div>    */}


        <div className="mt-8">
          <Link href="/" passHref>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Go back to index
            </button>
          </Link>
          <Link href="/my-page" passHref>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
              My Page
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Minted;
