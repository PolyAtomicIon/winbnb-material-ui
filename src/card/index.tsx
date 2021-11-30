import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MUICard from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import MUICardContent, { CardContentProps } from '@mui/material/CardContent';
import StarIcon from '@mui/icons-material/Star';
import {block} from 'bem-cn';

import './card.scss';

const CardContent = styled(MUICardContent)(() => ({
  padding: 0,
  ":last-child": {
    paddingBottom: 0
  },
  
}) );

export default function Card() {

  const cnCard = block('card');

  return (
      <MUICard  
        variant="outlined"  
        sx={{border: 0}}
        className={cnCard()}
      >
        <CardMedia
          component="img"
          classes={{root: cnCard('image')}}
          image="https://media-cdn.tripadvisor.com/media/photo-s/1c/1d/b7/92/tweepersoonskamer-met.jpg"
          alt="room photo"
        />
        <CardContent
          classes={{root: cnCard('content')}}
        >
          <div
            className={cnCard('description')}
          >
            <Typography 
              color="text.secondary"
              classes={{root: cnCard('type')}}
              variant="body1"
            >
              <span 
                className={cnCard('extra')}
              >
                super host
              </span>
              Stylist apartment in 
            </Typography>

            <Typography 
              classes={{root: cnCard('rating')}}
              sx={{ fontWeight: 500 }}
            >
              <StarIcon
                color="primary"
                fontSize="small"
              ></StarIcon> 
              4.40
            </Typography>
          </div>  
          
          <Typography 
            classes={{root: cnCard('title')}}
            variant="body2"
          >
            Stylist apartment in center of the city
          </Typography>
        </CardContent>
      </MUICard>
  );
}