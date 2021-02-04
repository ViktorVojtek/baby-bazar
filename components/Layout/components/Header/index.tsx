import Link from 'next/link';
import Navigation from './components/Navigation';
import NavItem from './components/NavItem';
import { TopWrapper } from './styled';
import Search from './components/Search';

export default function Header() {
  return (
    <>
      <TopWrapper>
        <Search />
      </TopWrapper>
      <Navigation>
        <NavItem>
          <Link href="/">
            <a>Domov</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/marketplace">
            <a>Trhovisko</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </NavItem>
      </Navigation>
    </>
  );
}
