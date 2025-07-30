import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <StyledFooter>
      <nav>
        <StyledUl>
          <StyledLi>
            <StyledLink href="/" $active={router.pathname === "/"}>
              Spotlight
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink
              href="/details"
              $active={router.pathname === "/details"}
            >
              Art Pieces
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink
              href="/favourites"
              $active={router.pathname === "/favourites"}
            >
              Favourites
            </StyledLink>
          </StyledLi>
        </StyledUl>
      </nav>
    </StyledFooter>
  );
}

// Footer stays at the bottom of the page
// and is always visible
const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
  background: white;
`;

// The Ul where the links are displayed
const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100%;
  list-style: none;
`;

//Each Link is in a styled Li
const StyledLi = styled.li`
  flex: 1;
  display: flex;
  align-items: stretch;
`;

// The links are styled
const StyledLink = styled(Link)`
  border: 2px solid darkgray;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  //The current page is highlighted
  background-color: ${({ $active }) => ($active ? "darkgray" : "lightgray")};
  color: ${({ $active }) => ($active ? "white" : "black")};
  padding: 2vw 0;
  font-weight: bold;
  transition: background 0.2s, color 0.2s;

  &:active {
    background-color: darkgray;
  }
`;
