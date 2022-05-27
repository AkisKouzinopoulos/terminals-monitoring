import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header';
import TerminalsList from './components/TerminalsList/TerminalsList';
import Logs from './components/Logs/Logs';
import { GlobalContext } from './context/GlobalState';


function App() {
  const [terminals, setTerminals] = useState([]);
  const [selectedTerminals, setSelectedTerminals] = useState([]);

  const { actionTerminal } = useContext(GlobalContext);


  useEffect(() => {
    const getTerminals = async () => {
      const terminalsFromServer = await fetchTerminals();
      setTerminals(terminalsFromServer);
    }

    getTerminals();
  }, [])

  const fetchTerminals = async () => {
    const res = await fetch('./sample-data.json');
    const data = await res.json();

    try {
      return data.slice(0, 20); // Bring only the first 20 results the first time. In the future a pagination or lazy loading would be the appropriate solution
    }
    catch (error) {
      console.log('error fetching terminals: ', error);
    }
  }

  const selectTerminal = (terminalObj) => {
    terminalObj.date = new Date().toLocaleString();
    setSelectedTerminals([ ...selectedTerminals, terminalObj ]);
  }

  const actionTerminals = (action) => {
    selectedTerminals.forEach(item => item.action = action);
    actionTerminal(selectedTerminals);
    setSelectedTerminals([]);
  }

  return (
    <Router>
      <Header
        title="Endpoints Manager"
        onActionTerminals={actionTerminals}
      />
      <Routes>
        <Route
          path='/'
          element={
            <TerminalsList
              terminals={terminals}
              onSelectTerminal={selectTerminal}
            />
          }
        />
        <Route path='/logs' element={<Logs />} />
      </Routes>
    </Router>
  );
}

export default App;
