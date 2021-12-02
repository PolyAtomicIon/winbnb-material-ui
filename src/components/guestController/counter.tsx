import { useContext, FC } from 'react';
import LocationIcon from '@mui/icons-material/LocationOn';
import { SelectChangeEvent, Typography, MenuItem } from '@mui/material';
import { ILocationContext, LocationContext } from '../../context/LocationContext';
import block from 'bem-cn';

interface CounterProps {
  className?: string,
  label?: string,
  description?: string,
  value: number,
};

export const Counter: FC<CounterProps> = ({
  className,
  value,
  label,
  description
}) => {

  // const {location, setLocation}:ILocationContext = useContext(LocationContext);
  const cnCounter = block('guest-controller__counter');

  return (
    <div 
      className={className}
    > 
      <Typography 
          classes={{root: cnCounter('label')}}
          textAlign="left"
          variant="h2"
          // sx={{
          //   fontWeight: "bold"
          // }}
      >
          {label}
      </Typography> 

      <Typography 
          classes={{root: cnCounter('description')}}
          textAlign="left"
          color="text.secondary"
          variant="body1"
      >
          {description}
      </Typography> 
      <div 
        className={cnCounter('main')}
      >
        <button
          className={cnCounter('button')}
          // onClick={}
        >
          -
        </button>
        {value}
        <button
          className={cnCounter('button')}
        >
          +
        </button>
      </div>
    </div>
  );
}
