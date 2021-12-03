import block from 'bem-cn';
import './select.scss';
import { SelectItem } from './selectItem';

export default function ControlledOpenSelect({items}:any) {

  const cnSelect = block('select');

  return (
    <div 
        className={cnSelect()}
    >
      {
        items.map((item:any, index:number) => (
          <SelectItem
            className={cnSelect('item')}
            value={item}
            key={index}
          ></SelectItem>
        ))
      }
    </div>
  );
}