import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ArtPieceDetails({ pieces, artPieceInfo }) {
  const [selectedArtPiece, setSelectArtPiece] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (!slug) return;
    setSelectArtPiece(pieces.find((piece) => piece.slug === slug));
  }, [selectedArtPiece, pieces, slug]);

  return (
    <div
      onBack={() => router.back()}
      image={selectedArtPiece.imageSource}
      title={selectedArtPiece.name}
      artist={selectedArtPiece.artist}
      year={selectedArtPiece.year}
      genre={selectedArtPiece.genre}
    ></div>
  );
}
