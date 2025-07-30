import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails";
import useSWR from "swr";
import fetcher from "../../scripts/fetcher/fetcher";
import CommentSection from "../../components/CommentSection/CommentSection";
import styled from "styled-components";
import Footer from "@/components/Footer/Footer";

export default function ArtPieceDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (isLoading || !data) {
    return <p>Loading artwork...</p>;
  }

  let selectedArtPiece = data.find((piece) => slug === piece.slug);

  if (!selectedArtPiece) {
    return <p>Loading artwork...</p>;
  }

  return (
    <>
      <StyledDiv>

        <ArtPieceDetails
          onBack={() => router.back()}
          piece={selectedArtPiece}
        ></ArtPieceDetails>
        <CommentSection piece={selectedArtPiece} />

      </StyledDiv>
      <Footer />
    </>
  );
}

const StyledDiv = styled.div`
  padding: 20px;

`;
