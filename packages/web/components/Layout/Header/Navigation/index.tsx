import { Container, UL } from './Navigation.styled';
export { NavItem } from './Navigation.styled';
import { IProps } from './Navigation.types';

export default function Navigation({ children, justifyContent }: IProps) {
  return (
    <Container justifyContent={justifyContent}>
      <UL justifyContent={justifyContent}>{children}</UL>
    </Container>
  );
}
