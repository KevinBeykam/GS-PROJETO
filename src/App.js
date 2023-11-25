// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import Login from './components/Login';
import Home from './components/Home'; // Importe o componente Home
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} /> {/* Adicione esta linha para a rota Home */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
