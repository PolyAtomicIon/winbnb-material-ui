import * as React from 'react';
import block from 'bem-cn';
import './controlButton.scss';
import { Typography } from '@mui/material';

export default function ControlButton() {

  const cnButton = block('control-button');

  return (
    <button 
        className={cnButton()}
    >
        <Typography 
            classes={{root: cnButton('label')}}
            textAlign="left"
            variant="subtitle1"
        >
            Location
        </Typography> 
        
        {/* <Typography 
            color="text.secondary"
            classes={{root: cnButton('value')}}
            textAlign="left"
            variant="body1"
        >
            Add location
        </Typography> */}

        <Typography 
            classes={{root: cnButton('value')}}
            textAlign="left"
            variant="body1"
        >
            Helsinki, Finland
        </Typography>
        
    </button>
  );
}