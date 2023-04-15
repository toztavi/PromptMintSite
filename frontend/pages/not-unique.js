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

      <div className="flex flex-col md:flex-row md:items-center">
          <img src="cat1.png" alt="画像の説明" style={{ maxWidth: "20%" }} className="w-full md:w-auto md:mr-2 mb-4 md:mb-0" />
          
          {/* pic1(中に95%。左に配置) */}

          <div>
            <p>95%</p>{/* 絵の中にかぶせる。赤文字 */}
          </div>   
      </div>

      <div className="flex flex-col md:flex-row md:items-center">
          <img src="cat1.png" alt="画像の説明" style={{ maxWidth: "20%" }} className="w-full md:w-auto md:mr-2 mb-6 md:mb-0" />
          
          {/* (真ん中に配置) */}

          <div>
            <p>95%</p>{/* 絵の中にかぶせる。赤文字 */}
          </div>   
      </div>

      <div className="flex flex-col md:flex-row md:items-center">
          <img src="cat1.png" alt="画像の説明" style={{ maxWidth: "20%" }} className="w-full md:w-auto md:mr-2 mb-8 md:mb-0" />
          
          {/* (右に配置) */}

          <div>
            <p>95%</p>{/* 絵の中にかぶせる。赤文字 */}
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
