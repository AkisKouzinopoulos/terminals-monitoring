import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import TerminalsContext from '../context/Terminals/TerminalsContext';

const Logs = () => {
  const { scanedTerminals, terminatedTerminals } = useContext(TerminalsContext);
  const logedTerminals = [...scanedTerminals, ...terminatedTerminals];

  const columns = [
    { field: 'id', headerName: 'ID', width: 50, hide: true },
    { field: 'device', headerName: 'Name', width: 200 },
    { field: 'actionType', headerName: 'Action', width: 100 },
    {
      field: 'date',
      headerName: 'Date',
      width: 250,
      type: 'dateTime',
      valueGetter: ({ value }) => value && new Date(value).toLocaleString(),
    },
  ];

  return (
    <>
      <div style={{ height: 500, width: '100%', marginTop: '90px' }}>
        <DataGrid
          rows={logedTerminals}
          columns={columns}
          getRowId={() => Math.floor(Math.random() * 100000000)} //  Crutial for making the data grid work and show the right results
          initialState={{
            sorting: {
              sortModel: [{ field: 'date', sort: 'desc' }],
            },
          }} />
      </div>
      <Button
        startIcon={<ArrowBackOutlinedIcon />}
        variant="text"
      >
        <Link className="go-back_link" to="/">Go back</Link>
      </Button>
    </>
  )
}

export default Logs;
