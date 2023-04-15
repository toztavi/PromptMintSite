import { NEXT_FONT_MANIFEST } from 'next/dist/shared/lib/constants';
import Head from 'next/head';
import Link from 'next/link';

const MyPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <Head>
        <title>My Page</title>
      </Head>
      <h1 className="text-4xl font-bold mb-8">My Page</h1>
      <p className="text-xl mb-8">Welcome to My Page!</p>
      <p className="text-xl mb-8">Your Prompt NFTs</p>

      <div className="flex flex-col md:flex-row md:items-center">
          <img src="cat1.png" alt="画像の説明" style={{ maxWidth: "20%" }} className="w-full md:w-auto md:mr-2 mb-4 md:mb-0" />
          
          <div>
            <p>Prompt Name</p>
            <ul className="list-disc pl-6 mb-4">
              <li>sell 105</li>
              <li>Earned XXX MATIC</li>
            </ul>
          </div>   
      </div>

      <div className="flex flex-col md:flex-row md:items-center">
          <img src="cat2.png" alt="画像の説明" style={{ maxWidth: "20%" }} className="w-full md:w-auto md:mr-2 mb-4 md:mb-0" />
          
          <div>
            <p>Prompt Name2</p>
            <ul className="list-disc pl-6 mb-4">
              <li>sell 106</li>
              <li>Earned XXX MATIC</li>
            </ul>
          </div>   
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


export default MyPage;
