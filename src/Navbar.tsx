import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link active"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Podcasts"
              className="nav-link active"
            >
              Podcasts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/FilmList"
              className="nav-link active"
            >
              Movies
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
