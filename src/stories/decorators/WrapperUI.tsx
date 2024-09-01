import { WalentyaoUIProvider } from '../../providers';

interface WrapperUIProps {
  children?: React.ReactNode;
}
export const WrapperUI = ({ children }: WrapperUIProps) => {
  return <WalentyaoUIProvider>{children}</WalentyaoUIProvider>;
};
