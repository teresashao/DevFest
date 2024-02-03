import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Journal from "./pages/Journal";

export default function App () {
  const [data, setData] = useState([{}])
  function handlePositionData(entry) {
    console.log('Data recieved from child: ', entry)
  }

  useEffect(() => {
    fetch("/member").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log( data)
      }
    )
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/journal' element={<Journal data={data} sendDataToParent={handlePositionData}/>}/>

    </Routes>

  );
};