import { styled } from '@mui/material/styles';
import MUIButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import {block} from 'bem-cn';
import logo from '../../assets/logo.png'

import './nav.scss';
import { GuestsContext, IGuestsContext } from '../../context/GuestsContext';
import { useContext } from 'react';
import { ILocationContext, LocationContext } from '../../context/LocationContext';

const ButtonGroup = styled(MUIButtonGroup)(() => ({
  ".MuiButtonGroup-grouped:last-of-type": {
    border: 0,
  },
  ".MuiButtonGroup-grouped:not(:last-of-type)": {
    border: 0,
    borderRight: '1px solid #F2F2F2',
  },
}) );

const LightButton = styled(Button)(() => ({
  color: 'grey',
  fontWeight: 'normal',
  height: 55
}) );

const cnNav = block('nav');

export default function Card(props: any) {

  const {location}:ILocationContext = useContext(LocationContext);
  const {adultGuests, childGuests}:IGuestsContext = useContext(GuestsContext);
  const guests = adultGuests + childGuests;

  return (
    <nav
      className={cnNav()}
    >
      <img 
        src={logo} 
        alt="logo" 
        className={cnNav('logo')}
      />
      <ButtonGroup 
        variant="contained"
        size="large"
        classes={{root: cnNav('control')}}
      >
        <Button 
          variant="outlined" 
          color="secondary"
          sx={{
            fontWeight: 'normal'
          }}
          onClick={() => props.onButtonClick('location')}
        >
          {location ? location : 'Add location'}
        </Button>
        {
          guests 
            ? <Button 
                variant="outlined" 
                color="secondary"
                size="medium"
                sx={{
                  fontWeight: 'normal',
                  height: 55
                }}
                onClick={() => props.onButtonClick('guests')}
              >
                {guests + ' guests'}
              </Button>
            : <LightButton 
                variant="outlined" 
                size="medium"
                onClick={() => props.onButtonClick('guests')}
              >
                Add Guests
              </LightButton>
        }
        <Button 
          variant="outlined"  
          size="medium"
        >
          <SearchIcon />
        </Button>
      </ButtonGroup>
    </nav>
  );
}