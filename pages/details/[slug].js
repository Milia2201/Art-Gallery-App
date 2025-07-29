import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails";
import useSWR from "swr";
import fetcher from "../../components/fetcher/fetcher";

export default function ArtPieceDetailsPage() {
  //const [selectedArtPiece, setSelectArtPiece] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

    const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

let selectedArtPiece = data.find((piece) => slug === piece.slug)

 /* useEffect(() => {
    if (!slug || !pieces) return;
    setSelectArtPiece(pieces.find((piece) => piece.slug === slug));
  }, [selectedArtPiece, pieces, slug]);
  */
  if (!selectedArtPiece) {
    return <p>Loading artwork...</p>;
  }

  return (<>
        <h1>Details Page</h1>
      <p>This is the details page content.</p>
    <ArtPieceDetails
      onBack={() => router.back()}
piece={selectedArtPiece}
    ></ArtPieceDetails>
    </>
  );
}
