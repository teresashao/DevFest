import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Entry from "../components/Entry"; 
import Results from "../components/Results"; 
import PropTypes from 'prop-types';

export default function Journal({sendDataToParent, data, emotion}) {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(submitted) {
    console.log('Submitted?: ', submitted);
    setSubmitted(submitted);
  }

  const style1={
    color: 'transparent', 
    WebkitTextStroke: '2px #64748b', 
  }
  const style2={
      WebkitTextStroke: '1px #64748b', 
      animation: 'animate 6s ease-in-out infinite'
  }

  
  return (
    <div>
      <div className="relative min-h-screen flex items-center justify-center overflow-auto">
        <img src="/ocean.jpeg" className="fixed top-0 left-0 w-full h-full z-[-1]" alt="background" />
        
        <div className="relative p-5 text-2xl text-white w-3/4 min-h-screen justify-center">
          {!submitted? 
            <Entry sendDataToParent={sendDataToParent} sendSubmit = {handleSubmit} submitted={submitted}/>
          :
            <div>
              <div> 
              <div className="flex flex-col h-min-full justify-center items-center">
                <div className="flex justify-center align-center mt-8">
          
                  </div>
                  <div className="bg-white w-full rounded opacity-75 mb-4"> 
                      
                  </div>
                </div>
              </div>
              <div className="flex justify-center align-center">
                        <p className="text-5xl font-bold" style={style1}>MEDITATION</p>
                        <p className="absolute text-5xl text-slate-500 font-bold" style={style2}>MEDITATION</p>
              </div>
              <Results data={data} emotion={emotion}/> 
            </div>
          }
          
        </div>
      </div>
      </div>
  );
}

Journal.propTypes = {
  sendDataToParent: PropTypes.func.isRequired,
  data:PropTypes.string.isRequired, 
  emotion:PropTypes.string.isRequired
};