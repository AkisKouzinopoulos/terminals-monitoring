import React, { useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import WifiOffOutlinedIcon from '@mui/icons-material/WifiOffOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import TerminalsContext from '../../../context/Terminals/TerminalsContext';
import { TerminalBox, TerminalBoxHeader, TerminalBoxContent, TerminalBoxHeaderIcon, IpAddress } from './TerminalListItem.styles';


const statusIsOnline = (status) => {
  return status === 'Online';
}

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

  const StatusIcon = () => statusIsOnline(terminal.status)
    ? <SignalCellularAltOutlinedIcon sx={{ fontSize: 26 }} />
    : <WifiOffOutlinedIcon sx={{ fontSize: 26 }} />

  return (
    <Grid item xs={12} sm={12} md={6} lg={6} justifyContent="center" >
      <TerminalBox direction="column" status={+statusIsOnline(terminal.status)}> {/* resolve console error */}
        <TerminalBoxHeader spacing={2} direction="row" alignItems="center" justifyContent="space-between">
          <TerminalBoxHeaderIcon status={statusIsOnline(terminal.status)}>
            {StatusIcon()}
          </TerminalBoxHeaderIcon>
          <IpAddress variant="h2" selected={terminal.selected}>{terminal.ipAddress}</IpAddress>
          <Switch
            checked={terminal.selected || false}
            onChange={selectTerminal}
            disabled={!statusIsOnline(terminal.status)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </TerminalBoxHeader>
        <TerminalBoxContent>
          <Typography align="left" lineHeight={3} variant="h4">{terminal.device}</Typography>
          <Typography align="right" variant="h6">{terminal.operatingSystem}</Typography>
        </TerminalBoxContent>
      </TerminalBox>
    </Grid>
  )
}

export default TerminalListItem;
