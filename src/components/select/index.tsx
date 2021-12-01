import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import LocationIcon from '@mui/icons-material/LocationOn';
import block from 'bem-cn';
import './select.scss';
import { SelectItem } from './selectItem';

export default function ControlledOpenSelect() {

  const cnSelect = block('select');

  return (
    <div 
        className={cnSelect()}
    >
      <SelectItem
        className={cnSelect('item')}
        value="Helsinki"
      ></SelectItem>
      <SelectItem
        className={cnSelect('item')}
        value="12"
      ></SelectItem>
      <SelectItem
        className={cnSelect('item')}
        value="122"
      ></SelectItem>
    </div>
  );
}