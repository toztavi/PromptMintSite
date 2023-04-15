import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PromptDetail = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Prompt Detail</title>
      </Head>
      <div className="w-full max-w-lg p-8 bg-white rounded-md shadow-lg">
        <h1 className="text-3xl font-bold mb-8">Prompt Details</h1>
        <p className="text-lg mb-4">This is the detail page for a prompt.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Detail 1</li>
          <li>Detail 2</li>
          <li>Detail 3</li>
        </ul>
        <div className="flex space-x-4 mt-8">
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
      </div>
    </div>
  );
};

export default PromptDetail;
