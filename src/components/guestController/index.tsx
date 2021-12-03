import * as React from 'react';
import Button from '@mui/material/Button';
import block from 'bem-cn';
import { Counter } from './counter';
import { IGuestsContext, GuestsContext } from '../../context/GuestsContext';
import './guestController.scss';

export default function GuestController() {

  const cnController = block('guest-controller');
  const {
    adultGuests, 
    childGuests,
    setAdultGuests, 
    setChildGuests
  }:IGuestsContext = React.useContext(GuestsContext);
  const guests = adultGuests + childGuests;
  
  return (
    <div 
      className={cnController()}
    >
      <Counter
        className={cnController('counter')}
        label="Adults"
        description="Ages 13 or above"
        value={adultGuests}
        onClickFunction={setAdultGuests}
      ></Counter>

      <Counter
        className={cnController('counter')}
        label="Children"
        description="Ages 2-12"
        value={childGuests}
        onClickFunction={setChildGuests}
        ></Counter>
    </div>
  );
}