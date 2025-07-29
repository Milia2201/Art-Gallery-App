  export default function toggleFavourite(piece, favourites, setFavourites) {
    if (favourites.includes(piece.slug)) {
      setFavourites(favourites.filter((slug) => slug !== piece.slug));
    } else {
      setFavourites([...favourites, piece.slug]);
    }
  }