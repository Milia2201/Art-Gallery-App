import Image from "next/image";

export default function ArtPiecePreview({ piece }) {
  return (
    <Image
      src={piece.imageSource}
      alt={piece.name}
      width={500}
      height={0}
      style={{ height: "auto" }}
    />
  );
}
