import React from 'react';
import { Grid } from "@mui/material";
import TerminalListItem from "./TerminalListItem/TerminalListItem";

const TerminalsList = ({ terminals }) => {
  return (
    <Grid container rowSpacing={1}>
      {terminals?.map(terminal => (
        <TerminalListItem
          terminal={terminal}
          key={terminal.id}
        />
      ))}
    </Grid>
  )

}

export default TerminalsList;
