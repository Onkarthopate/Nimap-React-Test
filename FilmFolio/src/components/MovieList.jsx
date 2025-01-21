import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div key={movie.id} className="col-md-3 col-sm-6 mb-4">
          {/* Add text-decoration-none to remove the underline */}
          <Link to={`/movie/${movie.id}`} className="card-link text-decoration-none">
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                  <strong>Rating:</strong> {movie.vote_average.toFixed(1)} / 10
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
