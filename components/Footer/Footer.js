import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <nav>
        <StyledUl>
          <li>
            <StyledLink href="/">Spotlight</StyledLink>
          </li>
          <li>
            <StyledLink href="/details">Art Pieces</StyledLink>
          </li>
          <li>
            <StyledLink href="/favourites">Favourites</StyledLink>
          </li>
        </StyledUl>
      </nav>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  border: 2px solid red;

`;

const StyledLink = styled(Link)`
  border: 2px solid green;
  text-decoration: none;
  background-color: lightgray;
  
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  border: 2px solid yellow;
  padding: 0;
  margin: 0;
  justify-content: center;
`;
