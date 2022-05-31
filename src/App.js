import './App.css';
import React from 'react';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header';
import Home from './pages/Home';
import Logs from './pages/Logs';
import About from './pages/About';
import { TerminalsProvider } from './context/Terminals/TerminalsContext';

const App = () => {
  return (
    <TerminalsProvider>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
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
              <Route path='/about' element={<About />} />
            </Routes>
          </Router>
        </Container>
      </ThemeProvider>
    </TerminalsProvider>
  );
}

export default App;
