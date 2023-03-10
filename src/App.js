
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddWilder from './pages/Addwilder';


function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
          <a href={`/add-wilder`}>Add new wilder</a>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-wilder" element={<AddWilder />} />
      </Routes>
      <footer>
        <div className="container">
          <p>&copy; 2023 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
