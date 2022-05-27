import React, { useState } from "react";
import { Grid, CardActionArea } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from "styled-components";

const StyledCard = styled.section`
  background: #b3cbd72b;
  border-radius: 5px;
  &.active {
    background: #c1eaff;
  }
`;

export const TerminalItem = ({ terminal, onSelectTerminal }) => {

  const [selected, setSelected] = useState(false);

  const toggleSelection = () => {
    setSelected(!selected);
  }

  return (
    <Grid item xs={12} md={4}
      container
      justifyContent="center"
    >
      <Card sx={{ minWidth: 275 }} onClick={() => onSelectTerminal(terminal)}>
        <StyledCard className={selected ? 'active' : ''}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            {terminal.deviceName}
          </Typography>
          <Typography variant="h5" component="div">
            {terminal.ipAddress}
          </Typography>
          <Typography sx={{ fontSize: 14 }} component="div">
            {terminal.operatingSystem}
          </Typography>
        </CardContent>
          <CardActions onClick={toggleSelection}>
            <Button size="small" color="primary">
              Select
            </Button>
          </CardActions>
        </StyledCard>
      </Card>
    </Grid>
  )
}

export default TerminalItem;
