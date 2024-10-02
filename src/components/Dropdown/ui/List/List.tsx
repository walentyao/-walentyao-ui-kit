import { DropdownOption } from '../../model';
import { Item } from '../Item/Item';
import cls from './List.module.scss';

interface ListProps {
  list?: DropdownOption[];
  onClick?: (value: DropdownOption) => void;
}
export const List = ({ list, onClick }: ListProps) => {
  return (
    <ul className={cls.list}>
      {list?.map((item) => (
        <Item
          key={item.value}
          label={item.label}
          onClick={() => onClick?.(item)}
        />
      ))}
    </ul>
  );
};
