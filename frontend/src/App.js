import React from 'react';
import './App.css';
import Mplogout from './pages/Mplogout/Mplogout';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/DashBoard/DashBoard';
import Register from './pages/Register/Register';
import BgRemover from './pages/BgRemover/BgRemover';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Mplogout />} />
          <Route path='/login' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Bgremove' element={<BgRemover />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
