import * as React from 'react';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MUICard from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import MUICardContent, { CardContentProps } from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import StarIcon from '@mui/icons-material/Star';

import {block} from 'bem-cn';

const CardContent = styled(MUICardContent)(() => ({
  padding: 0,
  background: 'red',
}) );

export default function Card() {

  const cnCard = block('card');

  return (
      <MUICard 
        sx={{ maxWidth: 345, background: 'lightblue', border: 0}} 
        variant="outlined"  
        className={cnCard()}
      >
        <CardMedia
          component="img"
          height="267"
          style={{borderRadius: 24}}
          classes={{root: cnCard('image')}}
          image="https://media-cdn.tripadvisor.com/media/photo-s/1c/1d/b7/92/tweepersoonskamer-met.jpg"
          alt="Paella dish"
        />
        <CardContent
          classes={{root: cnCard('content')}}
        >
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography 
              align="left" 
              color="text.secondary"
              classes={{root: cnCard('type')}}
            >
              Stylist apartment in 
            </Typography>

            <Typography 
              align="right"
              classes={{root: cnCard('rating')}}
            >
              <StarIcon></StarIcon> 
              4.40
            </Typography>
          </div>  
          
          <Typography 
            classes={{root: cnCard('title')}}
          >
            Stylist apartment in center of the city
          </Typography>
        </CardContent>
      </MUICard>
  );
}