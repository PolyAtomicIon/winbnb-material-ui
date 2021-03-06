import { useContext, FC } from 'react';
import LocationIcon from '@mui/icons-material/LocationOn';
import { SelectChangeEvent, Typography, MenuItem } from '@mui/material';
import { ILocationContext, LocationContext } from '../../context/LocationContext';

interface SelectItemProps {
  className?: string,
  value: string,
};

export const SelectItem: FC<SelectItemProps> = ({
  className,
  value
}) => {

  const {location, setLocation}:ILocationContext = useContext(LocationContext);

  return (
    <MenuItem 
      classes={{root: className}}
      sx={{
        borderRadius: 14
      }}
      value={value}
      onClick={() => setLocation(value)}
    > 
      <LocationIcon 
        color="info"
      />
      <Typography 
        variant="body1"
      >
        {value}
      </Typography>
    </MenuItem>
  );
}
