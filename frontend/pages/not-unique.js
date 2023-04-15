import Head from 'next/head';
import Link from 'next/link';

const NotUnique = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <Head>
        <title>Not Unique</title>
      </Head>
      <h1 className="text-4xl font-bold mb-8">Oops!</h1>
      <p className="text-xl mb-8">Error!</p>
      <p className="text-xl mb-8">Your Prompt is similler with below.</p>

      <div className="flex flex-wrap justify-center">
        <div className="relative m-2">
          <img src="cat3.png" alt="画像の説明" style={{ maxWidth: "20%", opacity: 0.5 }} className="w-full md:w-auto" />
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-red-500 font-bold">
            <p>95%</p>
          </div>
        </div>


        <div className="relative m-2">
          <img src="cat3.png" alt="画像の説明" style={{ maxWidth: "20%", opacity: 0.5 }} className="w-full md:w-auto" />
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-red-500 font-bold">
            <p>95%</p>
          </div>
        </div>

        <div className="relative m-2">
          <img src="cat3.png" alt="画像の説明" style={{ maxWidth: "20%", opacity: 0.5 }} className="w-full md:w-auto" />
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-red-500 font-bold">
            <p>95%</p>
          </div>
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



export default NotUnique;
