import classNames from 'classnames';
import cls from './WalentyaoUIProvider.module.css';
import '../../styles/index.css';
interface WalentyaoProviderProps {
  className?: string;
  children?: React.ReactNode;
}
export const WalentyaoUIProvider = ({ children, className }: WalentyaoProviderProps) => {
  return <div className={classNames(cls.variables_colors, cls.provider, className)}>{children}</div>;
};
