import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header';
import Logs from './pages/Logs';
import { GlobalContext } from './context/GlobalState';
import Home from './pages/Home';

function App() {
  const [selectedTerminals, setSelectedTerminals] = useState([]);

  const { actionTerminal } = useContext(GlobalContext);

  const selectTerminal = (terminalObj) => {
    terminalObj.date = new Date().toLocaleString();
    setSelectedTerminals([...selectedTerminals, terminalObj]);
  }

  const actionTerminals = (action) => {
    selectedTerminals.forEach(item => item.action = action);
    actionTerminal(selectedTerminals);
    setSelectedTerminals([]);
  }

  return (
    <Router>
      <Header
        title="Terminals Monitoring App"
        onActionTerminals={actionTerminals}
      />
      <Routes>
        <Route
          path='/'
          element={
            <Home onSelectTerminal={selectTerminal}/>
          }
        />
        <Route path='/logs' element={<Logs onSelectTerminal={selectTerminal}/>} />
      </Routes>
    </Router>
  );
}

export default App;
