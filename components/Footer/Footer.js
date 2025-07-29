import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <nav>
        <ul>
          <li>
            <Link href="/">Spotlight</Link>
          </li>
          <li>
            <Link href="/details">Art Pieces</Link>
          </li>
          <li>
            <Link href="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
`;
