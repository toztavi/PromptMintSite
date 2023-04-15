import Head from "next/head";
import Link from "next/link";

const NotUnique = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <Head>
        <title>Not Unique</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <h1 className="text-3xl mb-8">Error!</h1>
      <p className="text-xl mb-8">Your prompt is similar to the following:</p>

      <div className="flex flex-col md:flex-row md:justify-center items-center">
        <div className="relative m-2">
          <div className="flex justify-center items-center w-full h-full text-red-500 font-bold absolute top-0 left-0 right-0 bottom-0">
            <p className="text-6xl" style={{ zIndex: 1 }}>95%</p>
          </div>
          <img
            src="cat2.png"
            alt="画像の説明"
            style={{ maxWidth: "50%", opacity: 0.5 }}
            className="w-full md:w-auto mx-auto"
          />
        </div>

        <div className="relative m-2">
          <div className="flex justify-center items-center w-full h-full text-red-500 font-bold absolute top-0 left-0 right-0 bottom-0">
            <p  className="text-6xl" style={{ zIndex: 1 }}>93%</p>
          </div>
          <img
            src="cat3.png"
            alt="画像の説明"
            style={{ maxWidth: "50%", opacity: 0.5 }}
            className="w-full md:w-auto mx-auto"
          />
        </div>

        <div className="relative m-2">
          <div className="flex justify-center items-center w-full h-full text-red-500 font-bold absolute top-0 left-0 right-0 bottom-0">
            <p  className="text-6xl" style={{ zIndex: 1 }}>90%</p>
          </div>
          <img
            src="cat4.png"
            alt="画像の説明"
            style={{ maxWidth: "50%", opacity: 0.5 }}
            className="w-full md:w-auto mx-auto"
          />
        </div>
      </div>

      <div className="mt-8">
        <Link href="/" passHref>
          <button className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-md hover:bg-gray-100">
            Go back to index
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotUnique;
