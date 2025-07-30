import Image from "next/image.js";
import { HeartIcon, ArrowLeftIcon } from "@phosphor-icons/react";
import useLocalStorage from "use-local-storage";
import toggleFavourite from "../../scripts/fetcher/toggleFavourites/toggleFavourites";
import ColorPalette from "../ColorPalette/ColorPalette.js";
import styled from "styled-components";

export default function ArtPieceDetails({ piece, onBack }) {
  let image = piece.imageSource;
  let title = piece.name;
  let artist = piece.artist;
  let year = piece.year;
  let genre = piece.genre;

  const [favourites, setFavourites] = useLocalStorage("favourites", []);
  const imageWidth = window.innerWidth - 40;
  return (
    <>
      <StyledButton type="button" onClick={onBack} aria-label="navigate back">
        <ArrowLeftIcon size={32} />
      </StyledButton>

      <div style={{ position: "relative", width: imageWidth }}>
        <Image
          src={image}
          alt={`${artist}: ${title}`}
          width={imageWidth}
          height={0}
          style={{ height: "auto", display: "block" }}
        ></Image>
        <HeartIcon
          size={32}
          weight={favourites.includes(piece.slug) ? "fill" : "regular"}
          color="#ff0000"
          onClick={(e) => {
            e.preventDefault(); // verhindert Link-Klick beim Icon
            toggleFavourite(piece, favourites, setFavourites);
          }}
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            background: "white",
            borderRadius: "50%",
            padding: "4px",
            cursor: "pointer",
            zIndex: 2,
          }}
        />
      </div>
      <ColorPalette colors={piece.colors} />
      <h2>{title}</h2>
      <ul>
        <li>Artist: {artist}</li>
        <li>Genre: {genre}</li>
        <li>Published: {year}</li>
      </ul>
    </>
  );
}

// Arrow aligns with the left side
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  background: none;
  border: none;
`;
