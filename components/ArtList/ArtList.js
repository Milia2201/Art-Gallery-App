import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import useLocalStorage from "use-local-storage";
export default function ArtList({ data, isFavouritesPage = false }) {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);



  if (data && isFavouritesPage) {
    data = data.filter((piece) => favourites.includes(piece.slug));
  }
  return (
    <>
      {data && (
        <ul>
          {data.map((piece) => (
            <li key={piece.id}>
              <h2>{piece.name}</h2>
              <p>{piece.artist}</p>
              <ArtPiecePreview
                piece={piece}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
