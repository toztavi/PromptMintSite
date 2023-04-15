import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();

  const handleButton1Click = () => {
    router.push('/prompt-detail');
  };

  const handleButton2Click = () => {
    router.push('/mint-your-prompt');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Prompt List</title>
      </Head>
      <h1 className="text-3xl font-bold mb-8">Prompt List</h1>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleButton1Click}>
          Button 1
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600" onClick={handleButton2Click}>
          Button 2
        </button>
      </div>
      <div className="mt-8 flex space-x-4" style={{ width: '1024px' }}>
        <img src="/cat1.png" alt="cat 1" className="w-1/3 rounded-md" />
        <img src="/cat2.png" alt="cat 2" className="w-1/3 rounded-md" />
        <img src="/cat3.png" alt="cat 3" className="w-1/3 rounded-md" />
      </div>    </div>
  );
};

export default IndexPage;
