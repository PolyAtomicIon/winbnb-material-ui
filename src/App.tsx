import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Modal} from './components/modal';
import Card from './components/card';
import Nav from './components/nav';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { ActiveControlContext } from './context/ActiveControlContext';
import { LocationContext, ILocationContext } from "./context/LocationContext";
import { GuestsContext } from "./context/GuestsContext";

import './App.scss'

export default function App() {

  const [activeControl, setActiveControl] = useState('location');
  const [location, setLocation] = useState('');

  const [adultGuests, setAdultGuests] = useState(0);
  const [childGuests, setChildGuests] = useState(0);

  const [open, setOpen] = useState(false);
  const handleOpen = (controlType:string = 'location') => {
    setOpen(true);
    setActiveControl(controlType)
  }
  const handleClose = () => setOpen(false);

  return (

    <ActiveControlContext.Provider value={{activeControl, setActiveControl}}>
      <LocationContext.Provider value={{location, setLocation}}>
      <GuestsContext.Provider value={{adultGuests, childGuests, setAdultGuests, setChildGuests}}>
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
        </GuestsContext.Provider>
      </LocationContext.Provider>        
    </ActiveControlContext.Provider>
  );
}