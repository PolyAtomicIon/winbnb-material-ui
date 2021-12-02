import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MUICard from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import MUICardContent from '@mui/material/CardContent';
import StarIcon from '@mui/icons-material/Star';
import {block} from 'bem-cn';

import './card.scss';

const CardContent = styled(MUICardContent)(() => ({
  padding: 0,
  ":last-child": {
    paddingBottom: 0
  },
}) );

export default function Card({hotel}:any) {

  const cnCard = block('card');

  const beds =  (
                  hotel?.beds 
                    ? '. ' + hotel?.beds + (hotel.beds == 1 ? ' bed' : ' beds')
                    : ''
                );
  const roomType = hotel?.type + beds;

  const maxTitleLength = 48;
  const shortTitle = hotel.title.length > maxTitleLength ? hotel.title.substring(0, maxTitleLength) + "..." : hotel.title;

  return (
      <MUICard  
        variant="outlined"  
        sx={{
          border: 0, 
        }}
        className={cnCard()}
      >
        <CardMedia
          component="img"
          classes={{root: cnCard('image')}}
          src={hotel.photo}
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
              {
                hotel.superHost &&
                  <span 
                    className={cnCard('super-host')}
                  >
                    super host
                  </span>
              }
              <span className={cnCard('room-type')}>
                {roomType}
              </span>
            </Typography>

            <Typography 
              classes={{root: cnCard('rating')}}
              sx={{ fontWeight: 500 }}
            >
              <StarIcon
                color="primary"
                fontSize="small"
              ></StarIcon> 
              {hotel.rating}
            </Typography>
          </div>  
          
          <Typography 
            classes={{root: cnCard('title')}}
            variant="body2"
          >
            {shortTitle}
          </Typography>
        </CardContent>
      </MUICard>
  );
}