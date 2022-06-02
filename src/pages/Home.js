import React, { useState, useEffect, useContext } from 'react';
import TerminalsList from '../components/TerminalsList/TerminalsList';
import TerminalsApiClient from '../clients/TerminalsApiClient';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Stack';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import StopScreenShareOutlinedIcon from '@mui/icons-material/StopScreenShareOutlined';
import WifiFindOutlinedIcon from '@mui/icons-material/WifiFindOutlined';
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
    <Box display="flex" justifyContent="center">
      {error && <ErrorAlert message={errorMsg} />}
      {isLoading ? (
        <div>Loading...</div>
      )
        :
        (<TerminalsList terminals={terminals} />)
      }
    </Box>
  )
};

export default Home;
