import classNames from 'classnames';
import { InputSizeType } from '../../types/input.types';
import { useId, useMemo } from 'react';
import cls from './Input.module.css';

interface InputProps {
  id?: string;
  value?: string;
  size?: InputSizeType;
  valid?: boolean;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label?: string;
  description?: string;
  placeholder?: string;
  className?: string;
  onChange?: (value: string) => void;
}

const inputSizeStyles = (size: InputSizeType) => classNames(cls[`inputSize${size.toUpperCase()}`]);

export const Input = ({
  id,
  value,
  label,
  description,
  placeholder,
  className,
  icon: Icon,
  size = 's',
  valid = true,
  onChange,
}: InputProps) => {
  const defaultId = useId();
  const inputId = useMemo(() => id || defaultId, [defaultId, id]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <div className={classNames(cls.input, inputSizeStyles(size), className)}>
      {label && (
        <label
          htmlFor={inputId}
          className={classNames(cls.inputLabel, {
            [cls.inputLabelInvalid]: !valid,
          })}
        >
          {label}
        </label>
      )}
      <div className={cls.inputFieldWrapper}>
        {Icon && (
          <label htmlFor={inputId}>
            <Icon className={cls.inputFieldIcon}></Icon>
          </label>
        )}
        <input
          id={inputId}
          value={value}
          onChange={handleChange}
          type="text"
          placeholder={placeholder}
          className={classNames(cls.inputField, {
            [cls.inputInvalid]: !valid,
            [cls.inputFieldWithIcon]: !!Icon,
          })}
        />
      </div>
      {description && <p className={cls.inputDescription}>{description}</p>}
    </div>
  );
};
