import React from 'react';
import oceanImg from ''

function Home() {
  return (
  <div>
    <header className="relative flex items-center justify-center h-screen overflow-hidden">
      <img
        src="/ocean.png"
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        alt="Ocean Background"
      />
      <div className="flex flex-col z-30 p-5 h-screen min-w-full min-h-full items-center justify-center">
        <img
          src="Assets/blob-light.png"
          className="absolute z-10 w-7/12 h-auto"
          alt="Blob Light Image"
        />
        <img
          src="/blob-solid.png"
          className="absolute z-10 w-6/12 h-auto"
          alt="Blob Solid Image"
        />
        <div className="flex flex-col w-5/12 items-center justify-centerz-20">
          <h1 className="text-8xl font-righteous relative z-20 mt-2"> Journify</h1>
          <h2 className="text-lg font-mont relative z-20 mt-10 text-center"> Write, Thrive, Unwind - elevate your mood!</h2>
          <button className="text-3xl font-mont relative z-20 mt-20 text-center bg-slate-100 text-slate-500 rounded-lg py-3 px-7 transform transition-transform duration-300 hover:hover:drop-shadow-xl hover:scale-105">Write</button>
        </div>
      </div>
    </header>
  </div>
  )
}

export default Home;
