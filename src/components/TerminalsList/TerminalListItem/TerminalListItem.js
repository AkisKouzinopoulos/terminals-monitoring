import React, { useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import WifiOffOutlinedIcon from '@mui/icons-material/WifiOffOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import styled from '@emotion/styled';
import TerminalsContext from '../../../context/Terminals/TerminalsContext';
import { TerminalBoxHeader, TerminalBoxContent } from './TerminalListItem.styles';

const StyledCard = styled.section`
  background: #b3cbd72b;
  border-radius: 5px;
  &.active {
    background: #c1eaff;
  }
`;

export const TerminalListItem = ({ terminal }) => {
  const { dispatch } = useContext(TerminalsContext);

  const selectTerminal = () => {
    if (!terminal.selected) {
      terminal.selected = true;
      dispatch({ type: 'SELECT_TERMINAL', payload: terminal });
    } else {
      terminal.selected = false;
      dispatch({ type: 'DESELECT_TERMINAL', payload: terminal });
    }
  };

  return (
    <Grid item xs={12} sm={12} md={6} lg={6}
      justifyContent="center"
    >
      <Stack direction="column" className={`terminal-box ${terminal.status === 'Offline' ? 'offline' : ''}`}>
        <TerminalBoxHeader spacing={2} direction="row" alignItems="center" justifyContent="space-between">
          <div className={`terminal-box_header_icon ${terminal.status === 'Online' ? 'online' : ''}`}>
            {terminal.status === 'Online'
              ? <SignalCellularAltOutlinedIcon sx={{ fontSize: 26 }} />
              : <WifiOffOutlinedIcon sx={{ fontSize: 26 }} />
            }
          </div>
          <Typography variant="h2" className={`ip-address ${terminal.selected ? 'selected' : ''}`}>{terminal.ipAddress}</Typography>
          <Switch
            checked={terminal.selected || false}
            onChange={selectTerminal}
            disabled={terminal.status === 'Offline'}
            inputProps={{ 'aria-label': 'controlled' }} 
          />
        </TerminalBoxHeader>
        <TerminalBoxContent>
          <Typography align="left" lineHeight={3} variant="h4">{terminal.device}</Typography>
          <Typography align="right" variant="h6">{terminal.operatingSystem}</Typography>
        </TerminalBoxContent>
      </Stack>
    </Grid>
  )
}

export default TerminalListItem;
