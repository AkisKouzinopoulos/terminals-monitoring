import React, { Component } from 'react';
import { Grid } from "@mui/material";
import TerminalItem from "./TerminalItem/TerminalItem";

const TerminalsList = ({ terminals, onSelectTerminal }) => {
  return (
    <Grid container rowSpacing={1}>
      {terminals?.map(terminal => (
        <TerminalItem
          terminal={terminal}
          key={terminal.id}
          onSelectTerminal={onSelectTerminal}
        />
      ))}
    </Grid>
  )

}

export default TerminalsList;
