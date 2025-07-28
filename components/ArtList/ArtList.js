import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
export default function ArtList({ data }) {
  return (
    <>
      {data && (
        <ul>
          {console.log(data)}
          {data.map((piece) => (
            <li key={piece.id}>
              <h2>{piece.name}</h2>
              <p>{piece.artist}</p>
              <ArtPiecePreview piece={piece}/>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
