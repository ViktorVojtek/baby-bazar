import { ReactNode } from 'react';

export interface IProps extends IStyledProps {
  children?: ReactNode;
}

export interface IStyledProps {
  justifyContent?: string;
}