import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchSearchResults } from "../services/movieService";

const SearchPage = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query) {
      fetchSearchResults(query, page)
        .then((data) => {
          setMovies(data.results);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setMovies([]);
        });
    }
  }, [query, page]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Search Results for: "{query}"</h1>
      <div className="row">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="col-md-2 col-sm-4 col-6 mb-4">
              <div className="card">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className="card-img-top"
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">
                    <strong>Rating:</strong> {movie.vote_average.toFixed(1)} / 10
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
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

export default SearchPage;
