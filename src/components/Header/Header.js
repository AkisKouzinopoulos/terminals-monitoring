import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import StopScreenShareOutlinedIcon from '@mui/icons-material/StopScreenShareOutlined';
import WifiFindOutlinedIcon from '@mui/icons-material/WifiFindOutlined';
import { useLocation } from 'react-router-dom';
import TerminalsContext from '../../context/Terminals/TerminalsContext';

export const Header = ({ title }) => {
  const location = useLocation();
  const { selectedTerminals, dispatch } = useContext(TerminalsContext);

  const scanOrTerminate = (type) => {
    selectedTerminals.forEach(terminal => {
      terminal.actionType = type;
      terminal.date = new Date().getTime();
      terminal.selected = false;
      dispatch({ type: `${type}_TERMINAL`, payload: terminal });
      dispatch({ type: 'CLEAR_SELECTED_TERMINALS' });
    });
  }

  return (
    <>

      <Stack
        className="navbar"
        direction="row"
        alignItems="center"
        spacing={4}
      >
        <div className="navbar-icon home_icon">          
          <Link to="/" onClick={() => dispatch({ type: `ADD_TERMINALS_TO_LOGS` })} className="link">
            <DesktopWindowsOutlinedIcon sx={{ fontSize: 32 }}/>
          </Link>
        </div>
        {location.pathname === '/' &&
          <>
            <div className="navbar-icon scan_icon active"
              onClick={() => scanOrTerminate('SCAN')}>
              <WifiFindOutlinedIcon sx={{ fontSize: 32 }}/>
            </div><div className="navbar-icon terminate_icon"
              onClick={() => scanOrTerminate('TERMINATE')}>
              <StopScreenShareOutlinedIcon sx={{ fontSize: 32 }}/>
            </div>
          </>
        }
        <div className="navbar-icon view-logs_icon">
          <Link to="/logs" onClick={() => dispatch({ type: `ADD_TERMINALS_TO_LOGS` })} className="link">
            <MonitorHeartOutlinedIcon sx={{ fontSize: 32 }}/>
          </Link>
        </div>
      </Stack>

    </>
  )
}

export default Header;
