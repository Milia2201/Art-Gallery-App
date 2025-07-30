import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import useLocalStorage from "use-local-storage";
import Header from "../Header/Header";
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

              <ArtPiecePreview
                piece={piece}
              />              
              <h2>{piece.name}</h2>
              <p>by {piece.artist}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
