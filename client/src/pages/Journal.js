import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Entry from "../components/Entry"; 
import Results from "../components/Results"; 

export default function Journal({sendDataToParent}) {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(submitted) {
    console.log('Submitted?: ', submitted);
    setSubmitted(submitted);
  }
  
  return (
    <div>
      <div className="relative min-h-screen flex items-center justify-center overflow-auto">
        <img src="/ocean.jpeg" className="fixed top-0 left-0 w-full h-full z-[-1]" alt="background" />
        <div className="relative p-5 text-2xl text-white w-1/2 min-h-screen justify-center">
          {!submitted? 
            <Entry sendDataToParent={sendDataToParent} sendSubmit = {handleSubmit}/>
          :
            <Results /> 
          }
          
        </div>
      </div>
    </div>
  );
}