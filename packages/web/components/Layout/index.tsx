import Head from 'next/head';
import Header from './Header';
import { Wrapper } from './Layout.styled';

import IProps from './Layout.types';

export default function Layout({ children }: IProps) {
  return (
    <Wrapper>
      <Head>
        <title>Baby Bazar</title>
      </Head>

      <Header />
      {children}
    </Wrapper>
  );
}
