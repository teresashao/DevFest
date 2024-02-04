import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Meditation from './Meditation';
//import LoadingOverlay from './LoadingOverlay';
// import PropagateLoader from './PropagateLoader';
import Quotes from './Quotes';

const sentencesSample = [
  'This is the first sentence.',
  'Here comes the second sentence.',
  'And now the third sentence is displayed.',
  'This is the fourth sentence.',
  // Add more sentences as needed
];

function splitIntoSentences(text) {
  // Use a regular expression to split the text into sentences
  const sentences = text.split(/[\.\!\?]\s+/);

  // Remove empty strings from the result
  const nonEmptySentences = sentences.filter(sentence => sentence.trim() !== '');
  return nonEmptySentences;
}



const Results = ({data, emotion}) => {
  const sentences = splitIntoSentences(data);
  

  return (
    <div className=" rounded mt-8 text-slate-400 items-center justify-between">
     {data? <div className="items-center text-center">
        <p className="align-center text-xl">welcome to your personalized {emotion} guided meditation</p>
          {console.log("sentences", sentences)}
          <Meditation sentences={sentences}/>
          
      </div> : 
      <div className="items-center justify-center h-screen "> 
        < p className="text-base text-slate-500 align-center font-mont"> preparing your meditation...</p>
        <Quotes />
        <Link to="../">
            <button className="text-base m-6 mb-2 font-mont relative mt-80 text-center bg-slate-100 text-slate-500 rounded-lg py-2 px-4 transform transition-transform duration-300 hover:hover:drop-shadow-xl hover:scale-105">
              Back
            </button>
        </Link>
      </div>
     }
      {/* <LoadingOverlay /> */}
    </div>
      
  );
};

export default Results