import styled from 'styled-components';

interface IProps {
  focus?: boolean
}

export const SearchWrapper = styled.div<IProps>`
  border: 1px solid #000;
  border-radius: 3px;
  max-width: 300px;
  position: relative;
  overflow: hidden;
  transition: left 1s;

  &:before {
    background: url('/search-icon.svg') no-repeat center center;
    content: '';
    width: 25px;
    height: 100%;
    position: absolute;
    left: ${({ focus }) => focus ? '-30px' : '0'};
  }
`;

export const SearchInput = styled.input<IProps>`
  background: #fff;
  border: 0;
  outline: none;
  padding: 0.75rem 0.5rem;
  text-indent: ${({ focus }) => focus ? '0' : '25px'};
  width: 100%;
`;
