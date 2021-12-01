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

const cnNav = block('nav');

export default function Card(props: any) {

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
          Helsinki
        </Button>
        <LightButton 
          variant="outlined" 
          size="medium"
          onClick={() => props.onButtonClick('guests')}
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