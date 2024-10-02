import cls from './Field.module.scss';

interface FieldProps {
  label?: string;
}
export const Field = ({ label }: FieldProps) => {
  return <div className={cls.field}>{label}</div>;
};
