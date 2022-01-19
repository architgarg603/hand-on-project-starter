import React from 'react';
import './App.css';
import Mplogout from './pages/Mplogout/Mplogout';
import Header from './components/header/Header'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/DashBoard/DashBoard';
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Mplogout />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
