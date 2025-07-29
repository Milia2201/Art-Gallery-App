import useSWR from "swr";
import fetcher from "../../scripts/fetcher/fetcher";
import Footer from "../../components/Footer/Footer";
import ArtList from "../../components/ArtList/ArtList";
export default function ArtPieces() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  return (
    <div>
      <h1>Art Pieces</h1>
      <p>Explore our collection of art pieces.</p>
      {error && <div>Failed to load art pieces.</div>}
      {isLoading && <div>Loading...</div>}
      <ArtList data={data} isFavouritesPage={true} />
      <Footer />
    </div>
  );
}
