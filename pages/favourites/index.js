import useSWR from "swr";
import fetcher from "../../scripts/fetcher/fetcher";
import Footer from "../../components/Footer/Footer";
import ArtList from "../../components/ArtList/ArtList";
import Header from "@/components/Header/Header";
import styled from "styled-components";

// Page for the Favourites
export default function ArtPieces() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  return (
    <StyledDiv>
      <Header />
      <p>Explore your favourite art pieces.</p>
      {error && <div>Failed to load art pieces.</div>}
      {isLoading && <div>Loading...</div>}
      <ArtList data={data} isFavouritesPage={true} />
      <Footer />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 20px;
  padding-top: 0;
`;
