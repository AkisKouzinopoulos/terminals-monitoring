import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useLocation } from 'react-router-dom';
import TerminalsContext from '../../context/Terminals/TerminalsContext';

export const Header = ({ title }) => {
  const location = useLocation();
  const { selectedTerminals, dispatch } = useContext(TerminalsContext);

  const scanOrTerminate = (type) => {
    selectedTerminals.forEach(terminal => {
      terminal.actionType = type;
      terminal.date = new Date();
      terminal.selected = false;
      dispatch({ type: `${type}_TERMINAL`, payload: terminal });
      dispatch({ type: 'CLEAR_SELECTED_TERMINALS' });
    });
  }

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
              onClick={() => scanOrTerminate('SCAN')}
            >Scan</Button>
          </Grid>
          <Grid item xs={4}
            container
            justifyContent="center">
            <Button
              variant="outlined"
              onClick={() => scanOrTerminate('TERMINATE')}
            >Terminate</Button>
          </Grid>
          
          <Grid item xs={4}
            container
            justifyContent="center">
            <Button variant="contained">
              <Link to="/logs" onClick={() => dispatch({ type: `ADD_TERMINALS_TO_LOGS` })}>View logs</Link>
            </Button>
          </Grid>
        </Grid>
      }
    </>
  )
}

export default Header;
