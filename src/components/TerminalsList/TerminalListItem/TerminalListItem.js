import React, { useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import WifiOffOutlinedIcon from '@mui/icons-material/WifiOffOutlined';
import CardActionArea from "@mui/material/CardActionArea";
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import TerminalsContext from '../../../context/Terminals/TerminalsContext';

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
      <Stack direction="column" className="terminal-box">
        <Stack className="terminal-box_header" spacing={2} direction="row" alignItems="center" justifyContent="space-between">
          <div className="terminal-box_header_icon">
            <WifiOffOutlinedIcon sx={{ fontSize: 26 }}/>
          </div>
          <Typography variant="h2" className="ip-address">{terminal.ipAddress}</Typography>
          <Switch onChange={selectTerminal} />
        </Stack>
        <div className="terminal-box_content">
          <Typography align="left" lineHeight={3} variant="h4">{terminal.device}</Typography>
          <Typography align="right" variant="h6">{terminal.operatingSystem}</Typography>
        </div>
      </Stack>
    </Grid>
  )
}

export default TerminalListItem;
