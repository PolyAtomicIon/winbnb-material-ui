import * as React from 'react';
import Button from '@mui/material/Button';
import block from 'bem-cn';
import { Counter } from './counter';
import { IGuestsContext, GuestsContext } from '../../context/GuestsContext';
import './guestController.scss';

export default function GuestController() {

  const cnController = block('guest-controller');
  const {adultGuests, childGuests}:IGuestsContext = React.useContext(GuestsContext);
  const guests = adultGuests + childGuests;

  return (
    <div 
      className={cnController()}
    >
      <Counter
        className={cnController('counter')}
        label="Adults"
        description="Ages 13 or above"
        value={0}
      ></Counter>
    </div>
  );
}