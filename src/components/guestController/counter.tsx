import { FC, Dispatch, SetStateAction } from 'react';
import { Typography } from '@mui/material';
import block from 'bem-cn';

interface CounterProps {
  className?: string,
  label?: string,
  description?: string,
  value: number,
  onClickFunction: Dispatch<SetStateAction<number>>
};

export const Counter: FC<CounterProps> = ({
  className,
  value,
  label,
  description,
  onClickFunction
}) => {

  const cnCounter = block('guest-controller__counter');

  return (
    <div 
      className={className}
    > 
      <Typography 
          classes={{root: cnCounter('label')}}
          textAlign="left"
          variant="h2"
      >
          {label}
      </Typography> 

      <Typography 
          classes={{root: cnCounter('description')}}
          textAlign="left"
          color="text.secondary"
          variant="body1"
      >
          {description}
      </Typography> 
      <div 
        className={cnCounter('main')}
      >
        <button
          className={cnCounter('button')}
          disabled={value === 0}
          onClick={() => onClickFunction(value - 1)}
        >
          -
        </button>
        {value}
        <button
          className={cnCounter('button')}
          onClick={() => onClickFunction(value + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
