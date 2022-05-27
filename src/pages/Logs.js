import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const Logs = () => {
  const terminals = [
    { "id": 1, "device": "1WWWWW0W.brain.com", "status": "Online", "applicationCount": 43, "operatingSystem": "Mac OS", "ipAddress": "208.159.61.54" },
  ]

  // function flattenArray(arrays) {
  //   if (!arrays.length) {
  //     return arrays;
  //   }
  //   return arrays.reduce((acc, curValue) => {
  //     return acc.concat(curValue);
  //   });
  // }

  // const rows = flattenArray(terminals);
  const rows = terminals;

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'device', headerName: 'Name', width: 200 },
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
