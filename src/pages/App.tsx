import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Modal} from '../components/modal';
import Card from '../components/card';
import Nav from '../components/nav';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { ActiveControlContext } from '../context/ActiveControlContext';
import { LocationContext } from "../context/LocationContext";
import { GuestsContext } from "../context/GuestsContext";
import staysData from '../assets/stays.json';

import './App.scss'

export default function App() {

  const [activeControl, setActiveControl] = useState('location');
  const [location, setLocation] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');

  const [adultGuests, setAdultGuests] = useState(0);
  const [childGuests, setChildGuests] = useState(0);

  const [open, setOpen] = useState(false);
  const handleOpen = (controlType:string = 'location') => {
    setOpen(true);
    setActiveControl(controlType)
  }
  const handleClose = () => setOpen(false);

  const [stays, setStays] = useState(staysData);
  const searchStays = () => {
    const guests = adultGuests + childGuests; 
    setCurrentLocation(location)

    if( !location ) {
      setStays(staysData.filter((stay) => (
        stay.maxGuests >= guests
      )) as any);
      return;
    };

    const [country, city] = location.split(', ')

    const filteredStays = staysData.filter((stay) => (
      stay.country === country 
        && stay.city === city 
        && stay.maxGuests >= guests
    )) as any;

    setStays(filteredStays);
    handleClose();
  }

  return (

    <ActiveControlContext.Provider value={{activeControl, setActiveControl}}>
      <LocationContext.Provider value={{location, setLocation}}>
      <GuestsContext.Provider value={{adultGuests, childGuests, setAdultGuests, setChildGuests}}>
        <main className="wrapper">

          <Nav
            onButtonClick={handleOpen}
            searchStays={searchStays}
          ></Nav>
          
          {
            (stays.length && Object.keys(stays[0]).length !== 0) &&
              <>
                <div className="header">
                  <Typography
                    variant="h1"
                  >
                    Stays in {currentLocation}
                  </Typography>
                  <Typography
                    variant="h3"
                  >
                    {stays.length + '+ stays'}
                  </Typography>
                </div>

                <Grid 
                  container 
                  spacing={{ xs: 2, md: 3 }} 
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {stays.map((stay, index) => (
                    <Grid 
                      item 
                      xs={4} 
                      sm={4} 
                      md={4} 
                      key={index}
                      display="flex"
                      justifyContent="center"
                    >
                      <Card 
                        stay={stay}
                      />            
                    </Grid>
                  ))}
                </Grid>
              </>
          }

          <Modal
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            searchStays={searchStays}
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