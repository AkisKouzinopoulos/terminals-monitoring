import React from 'react';
import Grid from "@mui/material/Grid";
import TerminalListItem from "./TerminalListItem/TerminalListItem";

const TerminalsList = ({ terminals }) => {
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      mt={{xs: 12, sm: 3 }}
    >
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
