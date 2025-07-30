import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

// Spotlight component
export default function Spotlight({ data }) {
  // Random number to select an Art Piece
  const randomNumber = getRandom(0, 10);

  // to avoid errors, this is a waiting for the data
  if (data) {
    var piece = data[randomNumber];
  }

  return (
    <>
      {data && (
        <>
          {
            <div>
              <ArtPiecePreview piece={piece} />
              <p>by {piece.artist}</p>
            </div>
          }
        </>
      )}
    </>
  );
}

// Function to get a random number between min and max
// This is used to select a random art piece from the data array
function getRandom(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
