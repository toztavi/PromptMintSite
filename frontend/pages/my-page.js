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
