import Results from "@/components/ResultsData/Results";
import React from "react";

const Search = async ({ params }) => {
  const searchWord = params.word;

  const searchApi = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchWord}&language=en-US&page=1&include_adult=false`
  );

  if (!searchApi.ok) throw new Error("There is no movie with this keyword!");

  const data = await searchApi.json();

  return <Results results={data.results} />;
};

export default Search;
