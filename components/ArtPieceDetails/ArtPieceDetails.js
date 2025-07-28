import Image from "next/image";


export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  onBack,
}) {
  return (
    <>
      <div>
        <button
          type="button"
          onClick={onBack}
          aria-label="navigate back"
        ></button>
      </div>
      <h2>{title}</h2>
      <Image
        src={piece.imageSource}
        alt={piece.name}
        width={500}
        height={0}
        style={{ height: "auto" }}
      />
      <ul>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </ul>
    </>
  );
}
