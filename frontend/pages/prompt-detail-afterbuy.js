import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PromptDetail = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <Head>
        <title>Purchase Complete</title>
      </Head>
      <div className="w-full max-w-3xl p-8 bg-black rounded-md shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center">Purchase Complete! Thanks</h1>
        <h2 className="text-2xl mb-4">Prompt Name : My Cats</h2>

        <div className="flex flex-col md:flex-row md:items-center justify-center">
          <img src="cat1.png" alt="画像の説明" style={{ maxWidth: "50%" }} className="w-full md:w-auto md:mr-2 mb-4 md:mb-0" />

          <div className="ml-6">
            <p className="text-lg font-bold mb-2">Prompt detail Description:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="text-lg">Cute black cats are sitting.</li>
              <li className="text-lg">The background has a Japanese style garden.</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-8 mb-8">
          <Link href="/" passHref>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Go back to index
            </button>
          </Link>
          <a
            href="https://testnets.opensea.io/ja/assets/mumbai/0x9cd6ddb8ec8f6805eb53f0943d8e8f51589db32e/6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Open OpenSea in a new tab
          </a>
        </div>

        <h2 className="text-2xl mb-4">Prompt Description : </h2>
        <ul className="list-disc pl-1 mb-1">
          <li className="text-lg">Two black cats are sitting on a fence in a surreal landscape. The first cat is facing the viewer, and has large, expressive eyes, with a hint of mischief in its expression. The second cat is looking away from the viewer, and has a more reserved expression. Both cats are engaged in conversation, with thought bubbles above their heads. The background is a pastel-colored sky with some fluffy clouds, and there are a few trees and bushes in the distance.
          </li>
        </ul>

      </div>
    </div>
  );
};

export default PromptDetail;
