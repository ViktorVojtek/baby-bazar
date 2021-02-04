import Link from 'next/link';
import { Container, UL, LI } from './styled';

export default function Navigation() {
  return (
    <Container>
      <UL>
        <LI>
          <Link href="/">
            <a>Domov</a>
          </Link>
        </LI>
        <LI>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </LI>
      </UL>
    </Container>
  );
}
