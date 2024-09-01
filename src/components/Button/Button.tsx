import classNames from 'classnames';
import { ButtonSizeType, ButtonThemeType } from '../../types/button.types';
import cls from './Button.module.css';

interface ButtonProps {
  size?: ButtonSizeType;
  theme?: ButtonThemeType;
  children?: React.ReactNode;
  onClick?: () => void;
}

const buttonSizeStyles = (size: ButtonSizeType) => classNames(cls[`btnSize${size.toUpperCase()}`]);
const buttonThemeStyles = (theme: ButtonThemeType) => {
  console.log(`btn${theme[0].toUpperCase()}${theme.slice(1)}`);
  return classNames(cls[`btn${theme[0].toUpperCase()}${theme.slice(1)}`]);
};

export const Button = ({ size = 's', theme = 'primary', children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(cls.btn, buttonSizeStyles(size), buttonThemeStyles(theme))}
    >
      {children}
    </button>
  );
};
