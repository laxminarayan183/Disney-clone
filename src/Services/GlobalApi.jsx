import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "2c520d39bc8f300e90ddd96f0233b8f3";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=2c520d39bc8f300e90ddd96f0233b8f3";
const getTrendingVideos = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${api_key}`
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);
export default {
  getTrendingVideos,
  getMovieByGenreId,
};
