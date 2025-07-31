import useSWR from "swr";
import fetcher from "../../scripts/fetcher/fetcher";
import Footer from "../../components/Footer/Footer";
import ArtList from "../../components/ArtList/ArtList";
import Header from "@/components/Header/Header";
import styled from "styled-components";

// Page with the list of ARt Pieces
export default function Details() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  return (
    <StyledDiv>
      <Header />
      {error && <div>Failed to load art pieces.</div>}
      {isLoading && <div>Loading...</div>}
      <ArtList data={data} />
      <Footer />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 20px;
  padding-top: 0;
`;
