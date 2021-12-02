import { useContext, useEffect, useRef, FC } from 'react';
import block from 'bem-cn';
import './controlButton.scss';
import { Typography } from '@mui/material';
import { IActiveControlContext, ActiveControlContext } from '../../context/ActiveControlContext';
import { ILocationContext, LocationContext } from '../../context/LocationContext';
import { GuestsContext, IGuestsContext } from '../../context/GuestsContext';

export interface ControlButtonProps {
    type: 'location' | 'guests',
    label?: string,
    placeholder?: string,
};

export const ControlButton: FC<ControlButtonProps> = ({
    type,
    label, 
    placeholder, 
}) => {

  const cnButton = block('control-button');
  const controlRef = useRef<HTMLButtonElement>(null);
  const {activeControl, setActiveControl}:IActiveControlContext = useContext(ActiveControlContext);

  const {location}:ILocationContext = useContext(LocationContext);
  const {adultGuests, childGuests}:IGuestsContext = useContext(GuestsContext);

  const value = type === 'location' ? location : adultGuests + childGuests;

  useEffect(() => {
    if( type == activeControl )
        controlRef?.current?.focus();
  })

  return (
    <button 
        className={cnButton()}
        ref={controlRef}
        onClick={() => setActiveControl(type)}
        onFocus={() => setActiveControl(type)}
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
                    {value + ' guests'}
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
