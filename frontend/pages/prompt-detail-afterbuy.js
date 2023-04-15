import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PromptDetail = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Purchase Complete</title>
      </Head>
      <div className="w-full max-w-lg p-8 bg-white rounded-md shadow-lg"  style={{height: '600px', width: '1000px'}}>
        <h1 className="text-3xl font-bold mb-8">Purchase Complete! Thanks</h1>
        <h2 className="text-lg mb-4">Prompt Name : My Cat</h2>

        <div className="flex flex-col md:flex-row md:items-center">
          <img src="cat3.png" alt="画像の説明" style={{ maxWidth: "20%" }} className="w-full md:w-auto md:mr-2 mb-4 md:mb-0" />
          
          <div>
            <p>Prompt detail Description:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>A cute black cat is sitting.</li>
              <li>The background has a Japanese style garden.</li>
            </ul>
          </div>   
      </div>
        <div className="flex space-x-4 mt-8 mb-8">
          <Link href="/" passHref>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Go back to index
            </button>
          </Link>
          <a
            href="https://testnets.opensea.io/ja"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Open OpenSea in a new tab
          </a>
        </div>

        <h2>Prompt Description : </h2>
        <ul className="list-disc pl-1 mb-1">
          <li>A cat sitting in garden with cherry blossom</li>
        </ul>

      </div>
    </div>
  );
};

export default PromptDetail;
