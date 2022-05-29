import React, { useState, useContext } from "react";
import { Grid, CardActionArea } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
    if(!terminal.selected) {
      terminal.selected = true;
      dispatch({ type: 'SELECT_TERMINAL', payload: terminal });
    } else {
      terminal.selected = false;
      dispatch({ type: 'DESELECT_TERMINAL', payload: terminal });
    }
  };

  return (
    <Grid item xs={12} md={3}
      container
      justifyContent="center"
    >
      <Card sx={{ minWidth: 275 }}>
        <StyledCard className={terminal.selected ? 'active' : ''}
          onClick={selectTerminal}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              {terminal.device}
            </Typography>
            <Typography variant="h5" component="div">
              {terminal.ipAddress}
            </Typography>
            <Typography sx={{ fontSize: 14 }} component="div">
              {terminal.operatingSystem}
            </Typography>
          </CardContent>
          <CardActions 
          // onClick={toggleSelection}
          >
            <Button size="small" color="primary">
              Select
            </Button>
          </CardActions>
        </StyledCard>
      </Card>
    </Grid>
  )
}

export default TerminalListItem;
