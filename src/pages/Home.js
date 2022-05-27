import React, { useState, useEffect, useContext } from 'react';
import TerminalsList from '../components/TerminalsList/TerminalsList';
import TerminalsApiClient from '../clients/TerminalsApiClient';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ErrorAlert from '../components/ErrorAlert/ErrorAlert';

const errorMsg = 'Something went wrong, please try again later';

const Home = () => {
  const [terminals, setTerminals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    TerminalsApiClient.getTerminals()
      .then(response => {
        setError(false);
        setTerminals(response);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Box display="flex" justifyContent="center">
        {error && <ErrorAlert message={errorMsg}/>}
        {isLoading ? (
          <div>Loading...</div>
        )
          :
          (<TerminalsList terminals={terminals} />)
        }
      </Box>
    </>
  )
};

export default Home;
