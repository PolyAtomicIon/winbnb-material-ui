import {block} from 'bem-cn';
import SearchIcon from '@mui/icons-material/Search';
import { Modal as MUIModal, TextField, Button, useTheme, SelectChangeEvent, Theme, Stack, Divider } from '@mui/material';
import './modal.scss';
import { useState, useContext, useEffect, useRef, FC } from 'react';
import CustomSelect from '../select';
import {ControlButton, ControlButtonProps} from '../controlButton';
import { ActiveControlContext } from "../../context/ActiveControlContext";
import React from 'react';


interface ModalProps {
  className?: string,
  open: boolean,
  handleOpen?: () => void,
  handleClose?: () => void  
};

export const Modal: FC<ModalProps> = ({
  children,
  className,
  open,
  handleOpen,
  handleClose,
  ...props 
}) => {

  const cnModal = block('modal');

  const handleChange = () => {}

  return (
    <ActiveControlContext.Consumer>
      {context => (
        <MUIModal
          open={open}
          onClose={handleClose}
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
                  type='location'
                  label="Location"
                  placeholder="Add location"
                /> 
              </div>
              
              <div className={cnModal('item')}>   
                <ControlButton
                  type='guests'
                  label="Guests"
                  placeholder="Add guest"
                /> 
              </div>

              <div className={cnModal('item', { mod: 'hideable' })}>   
                <Button 
                  onClick={handleOpen} 
                  variant="contained" 
                  size="large"
                  startIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </div>
            </Stack>

            { 
              context.activeControl == 'location' 
                ? <div className={cnModal('location-control')}>location</div> 
                : <div className={cnModal('guests-control')}>guests</div>
            }
          </div>
          
        </MUIModal>
      )}
    </ActiveControlContext.Consumer>
  );
}

function componentDidMount() {
  throw new Error('Function not implemented.');
}
