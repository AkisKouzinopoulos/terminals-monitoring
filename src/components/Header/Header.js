import React from "react";
import { Link } from 'react-router-dom';
import { Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useLocation } from 'react-router-dom';

export const Header = ({ title, onActionTerminals }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' &&
        <Grid container spacing={1} sx={{ my: 2 }} >
          <Grid item xs={12}
            container
            justifyContent="center">
            <Typography variant="h5" component="div">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={4}
            container
            display="right"
            justifyContent="center">
            <Button
              variant="outlined"
            >Scan</Button>
          </Grid>
          <Grid item xs={4}
            container
            justifyContent="center">
            <Button
              variant="outlined"
            >Terminate</Button>
          </Grid>

          <Grid item xs={4}
            container
            justifyContent="center">
            <Button variant="contained">
              <Link to="/logs">View logs</Link>
            </Button>
          </Grid>
        </Grid>
      }
    </>
  )
}

export default Header;
