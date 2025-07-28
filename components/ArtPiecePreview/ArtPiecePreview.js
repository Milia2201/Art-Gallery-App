import Image from "next/image";
import { HeartIcon } from "@phosphor-icons/react";
import useLocalStorage from "use-local-storage";
import toggleFavourite from "../../scripts/toggleFavourites";
import Link from "next/link";

export default function ArtPiecePreview({ piece }) {
  return (
    <Link href={`artPieces/${slug}`} passHref legacyBehavior>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative", width: "500px" }}>
          <Image
            src={piece.imageSource}
            alt={piece.name}
            width={500}
            height={0}
            style={{ height: "auto", display: "block" }}
          />
          <HeartIcon
            size={32}
            weight={favourites.includes(piece.slug) ? "fill" : "regular"}
            color="#ff0000"
            onClick={() => toggleFavourite(piece, favourites, setFavourites)}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              background: "white",
              borderRadius: "50%",
              padding: "4px",
            }}
          />
        </div>
      </div>
    </Link>
  );
}
