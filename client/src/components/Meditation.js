import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Meditation = ({ sentences }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasRead, setHasRead] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [mute, setMute] = useState(true);

  const handleToggleMute = (value) => {
   setMute(value)
  };
  const handleFinish = () => {
    window.speechSynthesis.cancel();
  };

  useEffect(() => {
    const cycleSentences = () => {
      const currentSentence = sentences[currentSentenceIndex];
      const newUtterance = new SpeechSynthesisUtterance(currentSentence);

      setUtterance(newUtterance);

      // Set the rate (speed) of the voice (0.5 is slower, 2 is faster, 1 is normal)
      newUtterance.rate = 1;

      // Get a list of available voices
      const voices = window.speechSynthesis.getVoices();

      // Find a calming voice (you can adjust this based on your preferences)
      const calmingVoice = voices.find((voice) => voice.name === 'Google UK English Female');

      // Set the voice to the calming voice (if available)
      if (calmingVoice) {
        newUtterance.voice = calmingVoice;
      }

      // Event handler for when the speech starts
      newUtterance.onstart = () => {
        setIsPlaying(true);
      };

      // Event handler for when the speech ends
      newUtterance.onend = () => {
        setIsPlaying(false);
        setHasRead(true);

        // Set a timeout before starting the next sentence
        setTimeout(() => {
          setHasRead(false);
          setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        }, 5000); // Adjust the pause duration as needed
        if (mute) {
          setMute(false);
        }
      };

      // Speak the current sentence only if the previous one has finished
      if (!isPlaying && !hasRead) {
        if (mute)
        {
          newUtterance.volume = 0; 
        }
        else
        {
          newUtterance.volume = 1; 
        }
        window.speechSynthesis.speak(newUtterance);
      }
    };

    // Call the cycleSentences function initially
    cycleSentences();

    // Set up a timer to cycle through sentences
    const intervalId = setInterval(cycleSentences, 10000); // Adjust the interval as needed

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentSentenceIndex, sentences, isPlaying, hasRead]);

  return (
    <div className="text-slate-500 p-4">
      <div className="text-center">
        {isPlaying && (
          <p className="text-slate-100 text-5xl font-mont mb-4 opacity-100 mt-10 transition-opacity duration-1000 ease-in-out">
            {sentences[currentSentenceIndex]}
          </p>
        )}
        <div className="fixed bottom-0 left-0 w-full p-12">
          <div className="flex justify-center">
            <button
              onClick={() => handleToggleMute(false)}
              className="text-base m-2 font-mont relative text-center bg-slate-100 text-slate-500 rounded-lg py-2 px-4 transform transition-transform duration-300 hover:hover:drop-shadow-xl hover:scale-105"
            >
              Read Aloud
            </button>
            <button
              onClick={() => handleToggleMute(true)}
              className="text-base m-2 font-mont relative text-center bg-slate-100 text-slate-500 rounded-lg py-2 px-4 transform transition-transform duration-300 hover:hover:drop-shadow-xl hover:scale-105"
            >
              Mute
            </button>
            <Link to="/">
              <button
                className="text-base m-2 font-mont relative text-center bg-slate-100 text-slate-500 rounded-lg py-2 px-4 transform transition-transform duration-300 hover:hover:drop-shadow-xl hover:scale-105"
                onClick={() =>  handleFinish(true)}
              >
                Finish
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meditation;