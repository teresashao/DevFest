import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Journal from "./components/Journal";

export default function App () {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/member").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home data={[data]}/>}/>
      <Route path='/journal' element={<Journal/>}/>

    </Routes>

  );
};