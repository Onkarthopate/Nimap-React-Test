const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch movies based on type (popular, top_rated, upcoming, etc.)
export const fetchMovies = async (type, page = 1) => {
  const response = await fetch(`${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`);
  return response.json();
};

// Fetch details of a specific movie by ID
export const fetchMovieDetail = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
  return response.json();
};

// Fetch cast details for a specific movie by ID
export const fetchMovieCast = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return response.json();
};

// Fetch search results based on a query
export const fetchSearchResults = async (query, page = 1) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
  return response.json();
};
