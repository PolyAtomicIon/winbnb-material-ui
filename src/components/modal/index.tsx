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
import staysData from '../../assets/stays.json';

interface ModalProps {
  className?: string,
  open: boolean,
  handleOpen?: () => void,
  handleClose?: () => void, 
  searchStays?: () => void 
};

let places = staysData.map((stay) => (stay.country + ', ' + stay.city))
places = Array.from(new Set(places));

export const Modal: FC<ModalProps> = ({
  children,
  className,
  open,
  handleOpen,
  handleClose,
  searchStays,
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
                        onClick={searchStays} 
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
                          <CustomSelect
                            items={places}
                          ></CustomSelect>
                        </div> 
                      : <div className={cnModal('guests-control')}>
                          <GuestController />
                      </div>
                  }
                  <div className={cnModal('search-button')}>   
                    <Button 
                      onClick={searchStays} 
                      variant="contained" 
                      size="large"
                      startIcon={<SearchIcon />}
                    >
                      Search
                    </Button>
                  </div>
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
