import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export const Movie = () => {
  const movieData = useLoaderData();

  return (
    <>
      <ul className="container grid grid-four--cols">
        {movieData.map((movie) => {
          return <Card key={movie.imdbID} curMovie={movie} />;
        })}
      </ul>
    </>
  );
};
