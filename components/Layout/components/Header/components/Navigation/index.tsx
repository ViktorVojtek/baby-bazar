import Link from 'next/link';
import { ReactNode } from 'react';
import { Container, UL } from './styled';

interface IProps {
  children?: ReactNode;
}

export default function Navigation({ children }: IProps) {
  return (
    <Container>
      <UL>{children}</UL>
    </Container>
  );
}
