import {block} from 'bem-cn';
import SearchIcon from '@mui/icons-material/Search';
import { Modal as MUIModal, Button, Stack } from '@mui/material';
import './modal.scss';
import {FC } from 'react';
import CustomSelect from '../select';
import {ControlButton} from '../controlButton';
import { ActiveControlContext } from "../../context/ActiveControlContext";
import { LocationContext } from "../../context/LocationContext";
import { GuestsContext } from "../../context/GuestsContext";
import GuestController from '../guestController';

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

  return (
    <ActiveControlContext.Consumer>
      {activeControlContext => (
        <LocationContext.Consumer>
          {locationContext => (
          <GuestsContext.Consumer>
            {guestsContext => (
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
                    activeControlContext.activeControl == 'location' 
                      ? <div className={cnModal('location-control')}>
                          <CustomSelect></CustomSelect>
                        </div> 
                      : <div className={cnModal('guests-control')}>
                          <GuestController />
                      </div>
                  }
                </div>
                
              </MUIModal>
              )}
          </GuestsContext.Consumer>
          )}
        </LocationContext.Consumer>
      )}
    </ActiveControlContext.Consumer>
  );
}
