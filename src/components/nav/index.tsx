import { styled } from '@mui/material/styles';
import MUIButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import {block} from 'bem-cn';
import logo from '../../assets/logo.png'

import './nav.scss';


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

export default function Card(props: any) {

  const cnCard = block('card');

  return (
    <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '32px 0'
        }}
      >
        <img 
          src={logo} 
          alt="logo" 
          height="18"
        />
        <ButtonGroup 
          variant="contained"
          size="large"
        >
          <Button 
            variant="outlined" 
            color="secondary"
            sx={{
              fontWeight: 'normal'
            }}
            onClick={props.onButtonClick}
          >
            Helsinki
          </Button>
          <LightButton 
            variant="outlined" 
            size="medium"
          >
            Add guests
          </LightButton>
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