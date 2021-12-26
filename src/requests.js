const API_KEY = "750f3226723243bd6b8c630e99748c05";

let requests = {
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  img_base: "https://image.tmdb.org/t/p/original/",
};
export default requests;
