import './App.css';
import {  Route, Router, Routes } from 'react-router-dom';
import Increment from './component/counter/increment';
import ViewPage from './pages/viewPage';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Increment setCount={setCount} setFlag={setFlag} count={count} flag={flag} />}></Route>
        <Route path='/viewCount' element={<ViewPage count={count}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
