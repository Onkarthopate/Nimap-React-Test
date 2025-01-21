import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { fetchMovies } from "../services/movieService";

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies("top_rated", page).then((data) => setMovies(data.results));
  }, [page]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Top Rated Movies</h1>
      <div className="row">
        <MovieList movies={movies} />
      </div>
      
      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
                disabled={page === 1}
              >
                Previous
              </button>
            </li>
            <li className="page-item">
              <span className="page-link">Page {page}</span>
            </li>
            <li className={`page-item`}>
              <button
                className="page-link"
                onClick={() => setPage((prevPage) => prevPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopRatedPage;
