import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import React from 'react';
import Welcome from './pages/welcome';
import Home from './pages/home';

function App() {
  return (
    <div>
      <BrowserRouter basename='/hbdliaa'>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/loveyou' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
