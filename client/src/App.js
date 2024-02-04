import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import { CSSTransition } from 'react-transition-group';


export default function App() {
  const [data, setData] = useState("");
  const [emotion, setEmotion] = useState("");

  const [audioUrl, setAudioUrl] = useState('');

  const handleHome = () => {
    setData("");
    setEmotion("");
  };


  function handlePositionData(entry) {
    console.log('Data received from child:', entry);

    // Make a POST request to your Flask backend
    fetch("/send-entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: entry }), 
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("Response from Flask backend:", response.message);
        setData(response.message);
        setEmotion(response.emotion);
      })
      .catch((error) => {
        console.error("Error sending data to Flask backend:", error);
      });
  }

  return (
    <Routes>
      <Route path='/' element={<Home handleHome={handleHome}/>} />
      <Route path='/journal' element={<Journal data={data} emotion={emotion} sendDataToParent={handlePositionData} />} />
    </Routes>
  );
}
