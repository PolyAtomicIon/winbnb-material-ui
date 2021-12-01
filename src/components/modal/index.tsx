import {block} from 'bem-cn';
import SearchIcon from '@mui/icons-material/Search';
import { Modal as MUIModal, TextField, Button, useTheme, SelectChangeEvent, Theme, Stack, Divider } from '@mui/material';
import './modal.scss';
import { useState } from 'react';
import CustomSelect from '../select';
import ControlButton from '../controlButton';

export default function Modal(props: any) {

  const cnModal = block('modal');

  const handleChange = () => {}

  return (
    <MUIModal
      open={(props.open)}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
      }}
    >
      <div
        className={cnModal()}
      >
        <Stack 
          direction={{ xs: 'column', sm: 'row', md: 'row' }}
          className={cnModal('controls')}
        >
          <div className={cnModal('item')}>   
            <ControlButton
              label="Location"
              placeholder="Add location"
            /> 
          </div>
          
          <div className={cnModal('item')}>   
            <ControlButton
              label="Guests"
              placeholder="Add guest"
            /> 
          </div>

          <div className={cnModal('item', { mod: 'hideable' })}>   
            <Button 
              onClick={props.handleOpen} 
              variant="contained" 
              size="large"
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </div>
        </Stack>

        <div className={cnModal('location-control')}>location</div>
        <div className={cnModal('guests-control')}>guests</div>
      </div>
      
    </MUIModal>
  );
}