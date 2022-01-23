import React from 'react';
import './App.css';
import Mplogout from './pages/Mplogout/Mplogout';
import Header from './components/header/Header'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/DashBoard/DashBoard';
import Register from './pages/Register/Register';
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Mplogout />} />
          <Route path='/login' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
