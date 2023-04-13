import React from "react";

const Results = ({ results }) => {
  return (
    <>
      {results.map((result) => {
        return (
          <div key={result.id}>
            <h3>{result.title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Results;
