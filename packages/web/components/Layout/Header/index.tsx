import Link from 'next/link';
import { Icon } from 'shared/components/Icon';
import Navigation, { NavItem } from './Navigation';
import Search from './Search';
import Logo from './Logo';
import LoginButton from './LoginButton';

export default function Header() {
  return (
    <>
      <Logo url="/logo.svg" title="Baby Bazár" />
      {/* Top Navigation Bar */}
      <Navigation justifyContent="space-between">
        <NavItem>
          <Search />
        </NavItem>
        <NavItem>
          <LoginButton />
        </NavItem>
      </Navigation>
      {/* Main Navigation Bar */}
      <Navigation>
        <NavItem>
          <Icon src="/home-icon.svg" />
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
