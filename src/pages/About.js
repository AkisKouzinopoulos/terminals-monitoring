import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const About = () => {
  return (
    <Stack p={16} justifyContent="center" lignItems="center">
      <Typography variant="h1">About the project:</Typography>
      <Typography variant="body1" mt={2}>A project build with React, using MUI and styled components.</Typography>
      <Typography variant="body2" mt={2}>Future improvements:</Typography>
      <ul>
        <li><Typography variant="caption">Add testing.</Typography></li>
        <li><Typography variant="caption">Convert to typescript.</Typography></li>
        <li><Typography variant="caption">Add storybook.</Typography></li>
        <li><Typography variant="caption">Any other idea to experiment with.</Typography></li>
      </ul>
    </Stack>
  )
}

export default About;
