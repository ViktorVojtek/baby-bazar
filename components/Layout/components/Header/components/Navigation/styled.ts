import styled from 'styled-components';

export const Container = styled.div`
  width: 955px;
  margin: 0 auto;

  @media only screen and (max-width: 980px) {
    width: 100%;
  }
`;

export const UL = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const LI = styled.li`
  margin-right: 3.125rem;

  &:last-child {
    margin-right: 0;
  }
`;
