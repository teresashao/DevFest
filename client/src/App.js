import React from "react";
import Home from "./components/Home";
import Journal from "./components/Journal";

function App() {
  return (
    <div>
      <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        {/*<video
          autoPlay
          loop
          muted
          class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src={videoBg}
            type="video/mp4"
          />
  </video>*/}
        <div className="relative z-30 p-5 text-2xl text-white h-screen min-w-full min-h-full bg-gray-900 bg-opacity-80 rounded-xl">
          <Home />
          <Journal /> 
        </div>
      </header>
    </div>
  );
}

export default App;
