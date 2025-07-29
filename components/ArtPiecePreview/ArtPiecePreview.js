import Image from "next/image";
import { HeartIcon } from "@phosphor-icons/react";
import useLocalStorage from "use-local-storage";
import toggleFavourite from "../../scripts/fetcher/toggleFavourites/toggleFavourites";
import Link from "next/link.js";

export default function ArtPiecePreview({ piece, slug }) {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  if (!piece) {
    return <div>No art piece available</div>;
  }
  const imageWidth = (window.innerWidth * 90) / 100;
console.log('imageWidth: ', imageWidth);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ position: "relative", width: imageWidth }}>
        <Link href={`details/${piece.slug}`} passHref legacyBehavior>
          <Image
            src={piece.imageSource}
            alt={piece.name}
            width={imageWidth}
            height={0}
            style={{ height: "auto", display: "block" }}
          />
        </Link>
        <HeartIcon
          aria-label="favourite"
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
    </div>
  );
}
