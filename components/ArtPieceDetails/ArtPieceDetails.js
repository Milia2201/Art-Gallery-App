import Image from "next/image.js";
import { HeartIcon } from "@phosphor-icons/react";
import useLocalStorage from "use-local-storage";
import toggleFavourite from "../../scripts/toggleFavourites";
import ColorPalette from "../ColorPalette/ColorPalette.js";
export default function ArtPieceDetails({
piece, onBack
}) {

    let  image=piece.imageSource
    let  title=piece.name
    let  artist=piece.artist
    let  year=piece.year
    let  genre=piece.genre
  

  const [favourites, setFavourites] = useLocalStorage("favourites", []);


  return (
    <>
      <button
        type="button"
        onClick={onBack}
        aria-label="navigate back"
        style={{ height: "3rem", width: "3rem"}}
      ></button>

      <h2>{title}</h2>
      <div style={{ position: "relative", width: "500px" }}>
      <Image src={image} 
      alt={`${artist}: ${title}`}
                  width={500}
            height={0}
            style={{ height: "auto", display: "block" }}></Image>
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
          /></div>
          <ColorPalette colors={piece.colors} />
      <ul>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </ul>
    </>
  );
}
