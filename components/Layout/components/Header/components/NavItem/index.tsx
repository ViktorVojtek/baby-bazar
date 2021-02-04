import { ReactNode } from 'react';
import { LI } from './styled';

interface IProps {
  children?: ReactNode;
}

export default function NavItem({ children }: IProps) {
  return <LI>{children}</LI>;
}
