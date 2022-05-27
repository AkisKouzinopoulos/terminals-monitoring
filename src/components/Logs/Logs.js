import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { GlobalContext } from '../../context/GlobalState';

const Logs = () => {
  const { terminals } = useContext(GlobalContext);

  function flattenArray(arrays) {
    if (!arrays.length) {
      return arrays;
    }
    return arrays.reduce((acc, curValue) => {
      return acc.concat(curValue);
    });
  }

  const rows = flattenArray(terminals);

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'deviceName', headerName: 'Device name', width: 200 },
    { field: 'action', headerName: 'Action', width: 100 },
    { field: 'date', headerName: 'Date', width: 150 },
  ];

  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} getRowId={() => Math.floor(Math.random() * 100000000)} />
      </div>
      <Button variant="contained">
        <Link to="/">Go back</Link>
      </Button>
    </>
  )
}

export default Logs;
