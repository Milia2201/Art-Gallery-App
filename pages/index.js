import Footer from "../components/Footer/Footer";
import useSWR from "swr";
import fetcher from "../scripts/fetcher/fetcher";
import Spotlight from "../components/Spotlight/Spotlight";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  return (
    <>
      <div>
        <h1>Art Pieces</h1>
        <p>Explore our collection of art pieces.</p>
        {error && <div>Failed to load art pieces.</div>}
        {isLoading && <div>Loading...</div>}
        <Spotlight data={data} />
      </div>
      <Footer />
    </>
  );
}
