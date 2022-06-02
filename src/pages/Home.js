import React, { useState, useEffect, useContext } from 'react';
import TerminalsList from '../components/TerminalsList/TerminalsList';
import TerminalsApiClient from '../clients/TerminalsApiClient';
import ErrorAlert from '../components/ErrorAlert/ErrorAlert';
import TerminalsContext from '../context/Terminals/TerminalsContext';

const errorMsg = 'Something went wrong, please try again later';

const Home = () => {
  const [terminals, setTerminals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const { dispatch } = useContext(TerminalsContext);


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
    dispatch({ type: 'CLEAR_STATE_TERMINALS' });
  }, []);

  return (
    <>
      {error && <ErrorAlert message={errorMsg} />}
      {isLoading ? (
        <div>Loading...</div>
      )
        :
        (<TerminalsList terminals={terminals} />)
      }
    </>
  )
};

export default Home;
