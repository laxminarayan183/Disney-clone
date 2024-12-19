import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { ChevronLeft, ChevronRight } from "lucide-react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTRendingMovies();
  }, []);
  const getTRendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
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
    <>
      <div>
        <ChevronLeft
          onClick={() => sliderLeft(elementRef.current)}
          className="hidden md:block text-white text-[30px] absolute mx-8 mt-[270px] cursor-pointer bg-transparent"
        />
        <ChevronRight
          onClick={() => sliderRight(elementRef.current)}
          className="hidden md:block text-white text-[30px] absolute mx-8 mt-[270px] cursor-pointer right-0 bg-transparent"
        />
        <div
          className="flex overflow-x-auto w-full px-4 md:px-16 py-4 scrollbar-none scroll-smooth"
          ref={elementRef}
        >
          {movieList.map((item, index) => (
            <img
              key={index}
              src={IMAGE_BASE_URL + item.backdrop_path}
              alt=""
              className="min-w-full md:h-[510px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
