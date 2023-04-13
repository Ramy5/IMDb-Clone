import Results from "@/components/ResultsData/Results";
import React from "react";

const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {
  const page = searchParams.page || "fetchTrending";

  // QUERY FOR FETCHING DATA
  const language = "en-Us";
  const pageNumber = "1";
  const pageParamsCheck =
    page === "fetchTopRated" ? "movie/top_rated" : "trending/movie/week";

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${pageParamsCheck}?api_key=${API_KEY}&language=${language}&page=${pageNumber}`,
      { next: { revalidate: 10000 } }
    );

    if (!res.ok) throw new Error("Failed to fetch data!");

    const data = await res.json();

    return (
      <div>
        <p>home</p>
        <Results results={data.results} />
      </div>
    );
  } catch (err) {
    <p>{err.message}</p>;
  }
};

export default Home;
