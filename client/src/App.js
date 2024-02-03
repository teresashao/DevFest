import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Journal from "./components/Journal";

export default function App () {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/journal' element={<Journal/>}/>
    </Routes>

  );
};