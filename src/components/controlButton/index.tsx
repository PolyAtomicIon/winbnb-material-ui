import { useState, useContext, useEffect, useRef, FC } from 'react';
import block from 'bem-cn';
import './controlButton.scss';
import { Typography } from '@mui/material';
import { IActiveControlContext, ActiveControlContext } from '../../context/ActiveControlContext';

export interface ControlButtonProps {
    type: 'location' | 'guests',
    label?: string,
    placeholder?: string,
    value?: string,
};

export const ControlButton: FC<ControlButtonProps> = ({
    type,
    label, 
    placeholder, 
    value
}) => {

  const controlRef = useRef<HTMLButtonElement>(null);
  const cnButton = block('control-button');
  const {activeControl, setActiveControl}:IActiveControlContext = useContext(ActiveControlContext);

  useEffect(() => {
    if( type == activeControl )
        controlRef?.current?.focus();
  })

  return (
    <button 
        className={cnButton()}
        ref={controlRef}
        onClick={() => setActiveControl(type)}
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
