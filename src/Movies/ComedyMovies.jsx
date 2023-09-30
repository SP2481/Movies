import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Fetchcomedymovies } from "../collect/fetchmovielist";

export default function ComedyMovies() {
  const ScrollcontainerRef = useRef(null);
  const Movielist = useQuery(["Comedy movies"], Fetchcomedymovies);

  const handleScrollLeft = () => {
    const scrollContainer = ScrollcontainerRef.current;
    scrollContainer.scrollBy({ left: -500, behaviour: "smooth" });
  };

  const handleScrollRight = () => {
    const scrollContainer = ScrollcontainerRef.current;
    scrollContainer.scrollBy({ left: 500, behaviour: "smooth" });
  };
  if (Movielist.isLoading) {
    return (
      <div className="pre-loader">
        <div className="loader"></div>
      </div>
    );
  }
  if (Movielist.error) {
    return <div>Error: {Movielist.error.message}</div>;
  }
  if (Movielist.isSuccess) {
    return (
      <div className="Comedy-movies">
        <div className="bar">
          <h2> Comedy-movies</h2>
          <div className="buttons">
            <button onClick={handleScrollLeft} className="backward-button">
              <i className="material-icons">keyboard_arrow_left</i>
            </button>
            <button onClick={handleScrollRight} className="forward-button">
              <i className="material-icons">keyboard_arrow_right</i>
            </button>
          </div>
        </div>

        <div className="Movie-list" ref={ScrollcontainerRef}>
          {Movielist.data.results.map((movie) => (
            <div key={movie.id} id={movie.id} className="movie-card">
              <div className="movie-image">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  ></img>
                </Link>
              </div>
              <h3 className="movie-title">
                <Link to={`/movie/${movie.id}`} className="title">
                  {movie.title}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
