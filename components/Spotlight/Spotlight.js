import Image from "next/image";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
export default function Spotlight({ data }) {
  const randomNumber = getRandom(0, 10);
  console.log("number displayed ", randomNumber);
  console.log(typeof randomNumber);
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
              <p>{piece.artist}</p>
            </div>
          }
        </>
      )}
    </>
  );
}

function getRandom(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
