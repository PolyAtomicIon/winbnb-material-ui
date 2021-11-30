import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from './components/modal';
import Card from './components/card';
import Nav from './components/nav';
import { Grid } from '@mui/material';
import { useState } from 'react';

import './App.scss'

export default function BasicModal() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <main className="wrapper">

      <Nav
        onButtonClick={handleOpen}
      ></Nav>
      
      <div className="header">
        <Typography
          variant="h1"
        >
          Stays in Finland
        </Typography>
        <Typography
          variant="h3"
        >
          12+ stays
        </Typography>
      </div>

      <Grid 
        container 
        spacing={{ xs: 2, md: 3 }} 
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid 
            item 
            xs={4} 
            sm={4} 
            md={4} 
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card />            
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      ></Modal>

      <footer className="footer">
        <Typography textAlign="center" color="grey">
          created by 
          <Box sx={{ fontWeight: 'bold', display: 'inline' }}> @2powerofn </Box>
          - devChallenges.io
        </Typography>
      </footer>
    </main>
  );
}