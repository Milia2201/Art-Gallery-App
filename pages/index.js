import Footer from "../components/Footer/Footer";
import useSWR from "swr";
import fetcher from "../scripts/fetcher/fetcher";
import Spotlight from "../components/Spotlight/Spotlight";
import styled from "styled-components";
import Header from "@/components/Header/Header";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  return (
    <>
      <StyledDiv>
        <Header />
        <p>Explore our collection of art pieces.</p>
        {error && <div>Failed to load art pieces.</div>}
        {isLoading && <div>Loading...</div>}
        <Spotlight data={data} />
      </StyledDiv>
      <Footer />
    </>
  );
}

const StyledDiv = styled.div`
  padding: 20px;
  padding-top: 0;
`;
