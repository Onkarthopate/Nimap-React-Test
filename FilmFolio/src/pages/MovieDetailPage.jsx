import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetail, fetchMovieCast } from "../services/movieService";
import "../styles/MovieDetailPage.css";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieDetail(id).then((data) => setMovie(data));
    fetchMovieCast(id).then((data) => setCast(data.cast));
  }, [id]);

  const topCast = cast.slice(0, 12);

  return (
    <div className="movie-detail-container ">
      {/* Movie Details Section */}
      {movie && (
        <div className="row movie-detail-card">
          {/* Left col-6: Movie Info */}
          <div className="col-5 mt-3 ">
            <div className="movie-info">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-details">
                <h2>{movie.title}</h2>
                <p><strong>Rating:</strong> {movie.vote_average.toFixed(1)}</p>
                <p><strong>Runtime:</strong> {movie.runtime} mins</p>
                <p><strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ")}</p>
                <p><strong>Release Date:</strong> {movie.release_date}</p>
              </div>
            </div>
            <div className="movie-overview">
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </div>

          {/* Right col-6: Additional Image */}
          <div className="col-6 mt-4">
            <img
              src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
              alt={`${movie.title} backdrop`}
              className="movie-backdrop"
            />
          </div>
        </div>
      )}

      {/* Cast Section */}
      <div className="cast-section ">
        <h3>Cast</h3>
        <div className="cast-grid ">
          {topCast.length > 0 ? (
            topCast.map((member) => (
              <div key={member.id} className="cast-card col-12 ">
                {member.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${member.profile_path}`}
                    alt={member.name}
                    className="cast-image"
                  />
                ) : (
                  <div className="no-cast-image">No Image</div>
                )}
                <h4>{member.name}</h4>
                <p>{member.character}</p>
              </div>
            ))
          ) : (
            <p>No cast information available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
