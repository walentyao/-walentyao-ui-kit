import { DropdownOption } from '../../model';
import { Field } from '../Field/Field';
import { List } from '../List/List';
import cls from './Dropdown.module.scss';

interface DropdownProps {
  value?: DropdownOption;
  options?: DropdownOption[];
  onChange?: (value: DropdownOption) => void;
}
export const Dropdown = ({ value, options, onChange }: DropdownProps) => {
  return (
    <div className={cls.dropdown}>
      <Field label={value?.label} />
      <List
        list={options}
        onClick={onChange}
      />
    </div>
  );
};
