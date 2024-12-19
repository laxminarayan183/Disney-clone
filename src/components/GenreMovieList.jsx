import React from "react";
import GenreList from "../Constant/GenresList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div>
      {GenreList.genere.map(
        (item, index) =>
          index <= 5 && (
            <div className="p-2 px-4 md:px-16" key={item.id}>
              <h2 className="text-[15px] text-white font-bold">{item.name}</h2>
              <MovieList genreId={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovieList;
