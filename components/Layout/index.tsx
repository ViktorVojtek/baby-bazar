import Head from 'next/head';
import Header from './components/Header';
import { Wrapper } from './styled';

import IProps from './@types';

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
