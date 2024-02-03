import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Entry({sendDataToParent}) {
    const [journalText, setJournalText] = useState('');

    const handleTextareaClick = () => {
        // Clear the placeholder text when the user clicks on the textarea
        if (journalText === 'Start typing here...') {
          setJournalText('');
        }
    }
  return (
    <div>
        <div className="bg-white rounded-lg opacity-50 h-min-full">
        <h1 className="text-slate-800 py-12">Your Entry</h1>
        <textarea
            value={journalText}
            className="font-mont w-full h-80 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm text-black"
            onClick={handleTextareaClick}
            onChange={(e) => setJournalText(e.target.value)}
            placeholder="What's on your mind?"
        />
        <span style={{ padding: '0 0 10px 0' }}>
            <center>
            <Link to="../">
            <button className="text-3xl font-mont relative z-20 mt-20 mr-5 text-center bg-slate-100 text-slate-500 rounded-lg py-3 px-7 transform transition-transform duration-300 hover:hover:drop-shadow-xl hover:scale-105">Back</button>
            </Link>
            <button 
                className="text-3xl font-mont relative z-20 mt-10 ml-5 text-center bg-slate-100 text-slate-500 rounded-lg py-3 px-7 transform transition-transform duration-300 hover:hover:drop-shadow-xl hover:scale-105"
                onClick={() => sendDataToParent(journalText)}
            >
                Submit
            </button>
            </center>
        </span>
        </div>
    </div>
  );
}

export default Entry;

/*<div className="container-fluid">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <div className="text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '20px', padding: '20px' }}>
                  <p className='text-blue-500' style={{ textAlign: 'left', padding: '30px 0 0 0' }}></p>
                  <div className="col-lg-12" style={{ textAlign: 'left', padding: '0 0 0 0' }}>
                    <label htmlFor="journal" className="text-5xl block mb-10 text-blue-500 font-righteous" style={{ marginTop: '30px', width: '100%' }}>Journal</label>
                    <textarea
                      id="journal"
                      name="journal"
                      value={journalText}
                      className="font-mont w-full h-80 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm text-black"
                      onClick={handleTextareaClick}
                      onChange={(e) => setJournalText(e.target.value)}
                      placeholder="Instructions: blablabla"
                    />
                    <span style={{ padding: '0 0 10px 0' }}>
                      <center>
                      <Link to="../">
                        <button className="text-3xl font-mont relative z-20 mt-20 mr-5 text-center bg-slate-100 text-slate-500 rounded-lg py-3 px-7 transform transition-transform duration-300 hover:hover:drop-shadow-xl hover:scale-105">Back</button>
                      </Link>
                        <button 
                            className="text-3xl font-mont relative z-20 mt-10 ml-5 text-center bg-slate-100 text-slate-500 rounded-lg py-3 px-7 transform transition-transform duration-300 hover:hover:drop-shadow-xl hover:scale-105"
                            onClick={() => sendDataToParent(journalText)}
                        >
                            Submit
                        </button>
                      </center>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div> */