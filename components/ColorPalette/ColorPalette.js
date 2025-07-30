import styled from "styled-components";

export default function ColorPalette({ colors }) {
  if (!colors || colors.length === 0) {
    return <p>No colors available.</p>;
  }

  return (
    <StyledUl>
      {colors.map((color, index) => (
        <li
          key={index}
          style={{ backgroundColor: color, padding: "15px", margin: "5px 0" }}
        ></li>
      ))}
    </StyledUl>
  );
}


const StyledUl = styled.ul`
display: flex;
flex-direction: row;
gap: 10px;
`