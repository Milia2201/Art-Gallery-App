import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ piece, slug }) {
  return (
    <>
      <Link href={`artPieces/${slug}`} passHref legacyBehavior>
        <Image
          src={piece.imageSource}
          alt={piece.name}
          width={500}
          height={0}
          style={{ height: "auto" }}
        />
      </Link>
    </>
  );
}
