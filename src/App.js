import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header';
import Logs from './pages/Logs';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Header
        title="Terminals Monitoring App"
      />
      <Routes>
        <Route
          path='/'
          element={
            <Home />
          }
        />
        <Route path='/logs' element={<Logs />} />
      </Routes>
    </Router>
  );
}

export default App;
