import Image from "next/image";

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
            <div key={piece.id}>
              <h2>{piece.name}</h2>
              <Image
                src={piece.imageSource}
                alt={piece.name}
                width={500}
                height={0}
                style={{ height: "auto" }}
              />
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
