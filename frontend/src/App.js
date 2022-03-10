import React, { useState } from "react";
import './App.css';
import Mplogout from './pages/Mplogout/Mplogout';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/DashBoard/DashBoard';
import Register from './pages/Register/Register';
import BgRemover from './pages/BgRemover/BgRemover';
import Mplogin from './pages/Mplogin/Mplogin';
import NewApi from './pages/NewApi/NewApi';
import MyApi from './pages/MyApi/MyApi';

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Mplogout />} />
          <Route path='/login' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Bgremove' element={<BgRemover />} />
          <Route path='/Mplogin' element={<Mplogin />} />
          <Route path='/MyApi' element={<MyApi />} />
          <Route path='/NewApi' element={<NewApi />} />

        </Routes>
      </BrowserRouter>
      <div className="App">
      <button onClick={() => setShow(true)}>Show Modal</button>
      <NewApi title="My Modal" onClose={() => setShow(false)} show={show}>
        <p>This is modal body</p>
      </NewApi>
    </div>
    </>
  )
}

export default App;
