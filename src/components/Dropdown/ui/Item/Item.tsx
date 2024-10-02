import cls from './Item.module.scss';

interface ItemProps {
  label: string;
  onClick?: () => void;
}
export const Item = ({ label, onClick }: ItemProps) => {
  return (
    <li
      onClick={onClick}
      className={cls.item}
    >
      {label}
    </li>
  );
};
