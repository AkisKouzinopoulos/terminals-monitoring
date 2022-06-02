import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import StopScreenShareOutlinedIcon from '@mui/icons-material/StopScreenShareOutlined';
import WifiFindOutlinedIcon from '@mui/icons-material/WifiFindOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useLocation } from 'react-router-dom';
import TerminalsContext from '../../context/Terminals/TerminalsContext';

export const Header = ({ title }) => {
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
    <Stack
      className="navbar"
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      spacing={4}
      maxWidth="md"
    >
      <div className="nav-link home_icon">
        <Link to="/">
          <DesktopWindowsOutlinedIcon sx={{ fontSize: 32 }} />
          <Typography variant="subtitle2">Terminals</Typography>
        </Link>
      </div>
      <div className="nav-link view-logs_icon">
        <Link to='/logs' onClick={(e) => handleLinkToLogs(e)}>
          <MonitorHeartOutlinedIcon sx={{ fontSize: 32 }} />
          <Typography variant="subtitle2">View logs</Typography>
        </Link>
      </div>
      <div className="nav-link about_icon">
        <Link to="/about">
          <InfoOutlinedIcon sx={{ fontSize: 32 }} />
          <Typography variant="subtitle2">About</Typography>
        </Link>
      </div>
      {location.pathname === '/' &&
        <>
          <div className="navbar-icon scan_icon active"
            onClick={() => scanOrTerminate('SCAN')}>
            <WifiFindOutlinedIcon sx={{ fontSize: 32 }} />
            <Typography variant="subtitle2">Scan</Typography>
          </div><div className="navbar-icon terminate_icon"
            onClick={() => scanOrTerminate('TERMINATE')}>
            <StopScreenShareOutlinedIcon sx={{ fontSize: 32 }} />
            <Typography variant="subtitle2">Stop</Typography>
          </div>
        </>
      }
    </Stack>
  )
}

export default Header;
