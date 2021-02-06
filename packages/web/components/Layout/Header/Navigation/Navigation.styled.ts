import styled from 'styled-components';
import { IStyledProps } from './Navigation.types';

export const Container = styled.div<IStyledProps>`
  width: ${({ justifyContent }) => justifyContent ? '100%' : '955px'};
  margin: 0 auto;

  @media only screen and (max-width: 980px) {
    width: 100%;
  }
`;

export const UL = styled.ul<IStyledProps>`
  list-style: none;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'flex-start'};
  margin: 2.9rem 0 1rem 2rem;
  padding: 0;
`;

export const NavItem = styled.li`
  align-items: center;
  display: flex;
  margin-right: 3.125rem;

  &:last-child {
    margin-right: 0;
  }
`;
