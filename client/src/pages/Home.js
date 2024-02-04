import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home({ data, handleHome }) {
  const [blobVisible, setBlobVisible] = useState(true);

  useEffect(() => {
    handleHome();
  }, []);

  const handleWriteButtonClick = () => {
    setBlobVisible(false);
    // Add any other actions you want to perform when the button is clicked
  };

  return (
    <div>
      <header className="relative flex items-center justify-center h-screen overflow-hidden">
        <img
          src="/ocean.jpeg"
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          alt="Ocean Background"
        />
        <div className="flex flex-col z-30 p-5 h-screen min-w-full min-h-full items-center justify-center">
          {blobVisible && (
            <img
              src="/blob-light.png"
              className="absolute z-10 w-7/12 transition-opacity duration-500 ease-in-out"
              alt="Blob Light Image"
            />
          )}
          <img
            src="/blob-solid.png"
            className="absolute z-10 w-6/12 "
            alt="Blob Solid Image"
          />
          <div className="flex flex-col w-1/2 items-center justify-center z-20">
            <h1 className="text-8xl font-righteous h-1/3 relative z-20 mt-2"> Journify</h1>
            <h2 className="text-lg font-mont relative w-1/2 z-20 mt-10 text-center">
              Write, Unwind, Thrive 
            </h2>
            <h2 className="text-lg font-mont relative w-1/2 z-20 mt-1 text-center">
              Enjoy the journey
            </h2>

            <Link
              to="/journal"
              className="transition duration-500 ease-in-out transform hover:opacity-70"
            >              
            <button
                onClick={handleWriteButtonClick}
                className="text-3xl font-mont relative z-20 mt-20 text-center bg-slate-100 text-slate-500 rounded-lg py-3 px-7 transform transition-transform duration-300 hover:hover:drop-shadow-xl hover:scale-105"
              >
                Write
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;