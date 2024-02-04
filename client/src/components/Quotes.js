import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const quotes = [
    "\"Live a life full of humility, gratitude, intellectual curiosity, and never stop learning.\" —GZA",
    "\"As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.\” —John F. Kennedy",
    "\"This is a wonderful day. I have never seen this one before.\" —Maya Angelou",
    "\"Enjoy the little things, for one day you may look back and realize they were the big things.\" —Robert Brault",
    "\"Feeling gratitude and not expressing it is like wrapping a present and not giving it.\" —William Arthur Ward",
    "\"Some people grumble that roses have thorns; I am grateful that thorns have roses.\" —Alphonse Karr",
    "\"Gratitude also opens your eyes to the limitless potential of the universe, while dissatisfaction closes your eyes to it.\" —Stephen Richards"
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [quotes]);

  return (
    <div className="relative">
      <div></div>
      <div className="h-full">
      {quotes.map((quote, index) => (
        <p
          key={index}
          className={`absolute top-0 left-0 right-0 opacity-${index === currentQuoteIndex ? '100' : '0'} transition-opacity duration-1000 ease-in-out`}
        >
          {quote}
        </p>
      ))}
      </div>
    </div>
  );
};

export default Quotes;