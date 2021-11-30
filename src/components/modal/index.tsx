import {block} from 'bem-cn';
import SearchIcon from '@mui/icons-material/Search';
import { Modal as MUIModal, Box, FormControl, Select, OutlinedInput, MenuItem, TextField, Button, useTheme, SelectChangeEvent, Theme, Stack, Divider } from '@mui/material';
import './modal.scss';
import { useState } from 'react';
import CustomSelect from '../select';

export default function Modal(props: any) {

  const cnModal = block('modal');

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  }

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
          direction="row" 
          // spacing={2}
          // divider={<Divider orientation="vertical"  />}
          className={cnModal('controls')}
        >
          <div className={cnModal('item')}>   
            {/* <FormControl
              sx={{
                border: 0
              }}
            >
              <Select
                multiple
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Placeholder</em>;
                  }

                  return selected.join(', ');
                }}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem disabled value="">
                  <em>Placeholder</em>
                </MenuItem>
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
            <CustomSelect></CustomSelect>
          </div>
          
          <div className={cnModal('item')}>   
            <TextField 
              label="Guests"
              placeholder="Add guest"
            />
          </div>

          <div className={cnModal('item')}>   
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
      </div>
      
    </MUIModal>
  );
}