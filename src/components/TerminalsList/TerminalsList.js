import React, { Component } from 'react';
import { Grid } from "@mui/material";
import TerminalItem from "../../TerminalItem/TerminalItem";

class TerminalsList extends Component {
  render() {
    const { terminals, onSelectTerminal } = this.props;
      return (
    <Grid container rowSpacing={1}>
      {terminals.map(terminal => (
        <TerminalItem
          terminal={terminal}
          key={terminal.id}
          onSelectTerminal={onSelectTerminal}
        />
      ))}
    </Grid>
  )
  }
}

export default TerminalsList;
