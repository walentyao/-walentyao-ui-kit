import classNames from 'classnames';
import { InputSizeType } from '../../types/input.types';
import cls from './Input.module.css';
import { useId, useMemo } from 'react';

interface InputProps {
  id?: string;
  label?: string;
  description?: string;
  size?: InputSizeType;
  placeholder?: string;
}

const inputSizeStyles = (size: InputSizeType) => classNames(cls[`inputSize${size.toUpperCase()}`]);

export const Input = ({ id, label, description, placeholder, size = 's' }: InputProps) => {
  const defaultId = useId();
  const inputId = useMemo(() => id || defaultId, [defaultId, id]);
  return (
    <div className={classNames(cls.input, inputSizeStyles(size))}>
      {label && (
        <label
          htmlFor={inputId}
          className={cls.inputLabel}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type="text"
        placeholder={placeholder}
        className={classNames(cls.inputField)}
      />
      {description && <p className={cls.inputDescription}>{description}</p>}
    </div>
  );
};
