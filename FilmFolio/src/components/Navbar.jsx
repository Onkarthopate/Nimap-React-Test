import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search/${search.trim()}`);
      setSearch(""); // Clear the search input after navigation
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top">
      <div className="container-fluid text-white">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand text-white ps-2" to="/">
            FilmFolio
          </Link>
        </div>
        <button
          className="navbar-toggler bg-white  "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link text-white ${location.pathname === "/" ? "active" : ""
                  }`}
                to="/"
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                Popular
              </Link>
            </li>
            <li className="nav-item  ">
              <Link
                className={`nav-link text-white ${location.pathname === "/top-rated" ? "active" : ""
                  }`}
                to="/top-rated"
                aria-current={
                  location.pathname === "/top-rated" ? "page" : undefined
                }
              >
                Top Rated
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link  text-white ${location.pathname === "/upcoming" ? "active" : ""
                  }`}
                to="/upcoming"
                aria-current={
                  location.pathname === "/upcoming" ? "page" : undefined
                }
              >
                Upcoming
              </Link>
            </li>
          </ul>
          <form className="d-flex ms-3" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for movies..."
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="btn btn-outline-light"
              type="submit"
              disabled={!search.trim()}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
