import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useLocation } from 'react-router-dom';
import TerminalsContext from '../../context/Terminals/TerminalsContext';

export const Header = ({ title }) => {
  const location = useLocation();
  const { selectedTerminals, dispatch } = useContext(TerminalsContext);

  const addToScanedTerminals = () => {
    selectedTerminals.forEach(terminal => {
      terminal.actionType = 'scan';
      terminal.date = new Date().toLocaleString();
      dispatch({ type: 'SCAN_TERMINAL', payload: terminal });
      dispatch({ type: 'CLEAR_SELECTED_TERMINALS'});
    });
  };

  const addToTerminatedTerminals = () => {
    selectedTerminals.forEach(terminal => {
      terminal.actionType = 'terminate';
      terminal.date = new Date().toLocaleString();
      dispatch({ type: 'TERMINATE_TERMINAL', payload: terminal });
      dispatch({ type: 'CLEAR_SELECTED_TERMINALS' });
    });
  };

  return (
    <>
      {location.pathname === '/' &&
        <Grid container spacing={1} sx={{ my: 2 }} >
          <Grid item xs={12}
            container
            justifyContent="center">
            <Typography variant="h5" component="div">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={4}
            container
            display="right"
            justifyContent="center">
            <Button
              variant="outlined"
              onClick={addToScanedTerminals}
            >Scan</Button>
          </Grid>
          <Grid item xs={4}
            container
            justifyContent="center">
            <Button
              variant="outlined"
              onClick={addToTerminatedTerminals}
            >Terminate</Button>
          </Grid>

          <Grid item xs={4}
            container
            justifyContent="center">
            <Button variant="contained">
              <Link to="/logs">View logs</Link>
            </Button>
          </Grid>
        </Grid>
      }
    </>
  )
}

export default Header;
