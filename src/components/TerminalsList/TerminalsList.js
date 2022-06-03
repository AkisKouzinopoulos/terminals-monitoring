import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TerminalListItem from "./TerminalListItem/TerminalListItem";
import { queryAllByAltText } from '@testing-library/react';

const TerminalsList = ({ terminals }) => {
  const [query, setQuery] = useState('');
  const [foundTerminals, setFoundTerminals] = useState(terminals);

  const filterQuery = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = terminals.filter((terminal) => {
        return terminal.device.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundTerminals(results);
    } else {
      setFoundTerminals(terminals);
      // If the text field is empty, show all users
    }

    setQuery(keyword);
  };

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      mt={{ xs: 15, sm: 6 }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          id="searchInput"
          label="Search"
          variant="standard"
          value={query}
          onChange={filterQuery}
        />
      </Box>
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
