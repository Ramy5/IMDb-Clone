import Pagination from "@/components/Pagination/Pagination";
import Results from "@/components/ResultsData/Results";

const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {
  try {
    const page = searchParams.page || "fetchTrending";
    const pageNumber = searchParams.pageNumber || 1;

    // QUERY FOR FETCHING DATA
    const language = "en-Us";
    let pageParamsCheck;

    if (page === "fetchTopRated") pageParamsCheck = "movie/top_rated";
    else if (page === "fetchNew") pageParamsCheck = "movie/now_playing";
    else if (page === "fetchTrending") pageParamsCheck = "trending/movie/week";

    const res = await fetch(
      `https://api.themoviedb.org/3/${pageParamsCheck}?api_key=${API_KEY}&language=${language}&page=${pageNumber}`,
      { next: { revalidate: 10000 } }
    );

    if (!res.ok) throw new Error("Failed to fetch data!");

    const data = await res.json();

    return (
      <div>
        <Results results={data?.results} />
        {data?.total_results >= 1 && (
          <Pagination totalPages={data?.total_pages} />
        )}
      </div>
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

export default Home;
