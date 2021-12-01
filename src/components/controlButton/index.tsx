import * as React from 'react';
import block from 'bem-cn';
import './controlButton.scss';
import { Typography } from '@mui/material';

export default function ControlButton({label, placeholder, value, Ref}: any) {

  const cnButton = block('control-button');

  return (
    <button 
        className={cnButton()}
        ref={Ref}
    >
        <Typography 
            classes={{root: cnButton('label')}}
            textAlign="left"
            variant="subtitle1"
        >
            {label}
        </Typography> 
       
        {value
            ?   <Typography 
                    classes={{root: cnButton('value')}}
                    textAlign="left"
                    variant="body1"
                >
                    {value}
                </Typography>
            :   <Typography 
                    classes={{root: cnButton('placeholder')}}
                    color="text.secondary"
                    textAlign="left"
                    variant="body1"
                >
                    {placeholder}
                </Typography>
        }
        
    </button>
  );
}