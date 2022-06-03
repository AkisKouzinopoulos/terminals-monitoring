import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import StopScreenShareOutlinedIcon from '@mui/icons-material/StopScreenShareOutlined';
import WifiFindOutlinedIcon from '@mui/icons-material/WifiFindOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useLocation } from 'react-router-dom';
import TerminalsContext from '../../context/Terminals/TerminalsContext';
import { Navbar, NavLink, ScanIcon, TerminateIcon } from './Header.styles';

export const Header = () => {
  const location = useLocation();
  const { selectedTerminals, scanedTerminals, terminatedTerminals, logs, dispatch } = useContext(TerminalsContext);

  const scanOrTerminate = (type) => {
    selectedTerminals.forEach(terminal => {
      terminal.actionType = type;
      terminal.date = new Date().getTime();
      terminal.selected = false;
      dispatch({ type: `${type}_TERMINAL`, payload: terminal });
      dispatch({ type: 'UPDATE_LOGS', payload: terminal });
      dispatch({ type: 'CLEAR_SELECTED_TERMINALS' });
    });
  }

  const handleLinkToLogs = (e) => {
    if (selectedTerminals.length > 0) {
      e.preventDefault();
      alert('Please select an action first, or deselect any item selected');
      return url = '#';
    }
  }

  return (
    <Navbar container alignItems="center" spacing={0} maxWidth="lg" rowSpacing={{xs: 2, sm: 0}}>
      <Grid item xs={12} sm={6}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: "space-around", sm: "flex-start" }}
          spacing={8}
        >
          <NavLink>
            <Link to="/">
              <DesktopWindowsOutlinedIcon sx={{ fontSize: 26 }} />
              <Typography variant="subtitle2">Terminals</Typography>
            </Link>
          </NavLink>
          <NavLink>
            <Link to='/logs' onClick={(e) => handleLinkToLogs(e)}>
              <MonitorHeartOutlinedIcon sx={{ fontSize: 26 }} />
              <Typography variant="subtitle2">View logs</Typography>
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/about">
              <InfoOutlinedIcon sx={{ fontSize: 26 }} />
              <Typography variant="subtitle2">About</Typography>
            </Link>
          </NavLink>
        </Stack>
      </Grid>
      {location.pathname === '/' &&
        <Grid item xs={12} sm={6}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={{ xs: "space-around", sm: "flex-end" }}
            spacing={4}
          >
            <ScanIcon
              onClick={() => scanOrTerminate('SCAN')}>
              <WifiFindOutlinedIcon sx={{ fontSize: 26 }} />
              <Typography variant="subtitle2">Scan</Typography>
            </ScanIcon>
            <TerminateIcon
              onClick={() => scanOrTerminate('TERMINATE')}>
              <StopScreenShareOutlinedIcon sx={{ fontSize: 26 }} />
              <Typography variant="subtitle2">Stop</Typography>
            </TerminateIcon>
          </Stack>
        </Grid>
      }
    </Navbar>

  )
}

export default Header;
