import React from 'react';
import './App.css';
import HomePage from './myComponents/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ this line fixes it

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        
      </Routes>
    </Router>
  );
}

export default App;
