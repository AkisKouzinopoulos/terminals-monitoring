import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TerminalListItem from "./TerminalListItem/TerminalListItem";

const TerminalsList = ({ terminals }) => {
  const [query, setQuery] = useState('');
  const [foundTerminals, setFoundTerminals] = useState(terminals);

  const filterQuery = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = terminals.filter((terminal) => {
        return terminal.device.toLowerCase().includes(keyword.toLowerCase())
          || terminal.ipAddress.includes(keyword);
      });
      setFoundTerminals(results);
    } else {
      setFoundTerminals(terminals);
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
        <SearchOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          id="searchInput"
          label="Search by terminal name or IP"
          variant="standard"
          value={query}
          onChange={filterQuery}
          sx={{width: 220}}
        />
      </Box>
      {foundTerminals?.map(terminal => (
        <TerminalListItem
          terminal={terminal}
          key={terminal.id}
        />
      ))}
    </Grid>
  )

}

export default TerminalsList;
