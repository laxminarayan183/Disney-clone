import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HoriMovie from "./HoriMovie";
const screenWidth = window.innerWidth;

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getMovieByGenreId();
  }, []);
  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      //   console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (e) => {
    e.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = (e) => {
    e.scrollLeft -= screenWidth - 110;
  };
  return (
    <div className="md:relative">
      <ChevronLeft
        onClick={() => sliderLeft(elementRef.current)}
        className={`text-[50px] text-white bg-transparent
            z-10 cursor-pointer 
            hidden md:block absolute
            ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"} `}
      />
      <ChevronRight
        onClick={() => sliderRight(elementRef.current)}
        className={`text-[150px] text-white hidden md:block bg-transparent
        cursor-pointer z-10 top-0
         absolute right-0 
         ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"}`}
      />
      <div
        ref={elementRef}
        className="flex gap-2 overflow-x-auto scrollbar-none pt-5 px-3 pb-5 scroll-smooth"
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HoriMovie movie={item} />
            ) : (
              <MovieCard movie={item} key={index} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
