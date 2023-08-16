import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FetchActionmovies } from "../collect/fetchmovielist";

export default function ActionMovies() {
  const ScrollcontainerRef = useRef(null);
  const Movielist = useQuery(["Action movies"], FetchActionmovies);

  const handleScrollLeft = () => {
    const scrollContainer = ScrollcontainerRef.current;
    scrollContainer.scrollBy({ left: -500, behaviour: "smooth" });
  };

  const handleScrollRight = () => {
    const scrollContainer = ScrollcontainerRef.current;
    scrollContainer.scrollBy({ left: 500, behaviour: "smooth" });
  };

  if (Movielist.error) {
    return <div>Error: {Movielist.error.message}</div>;
  }
  if (Movielist.isSuccess) {
    return (
      <div className="Action-movies">
        <div className="bar">
          <h2>Action</h2>
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
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.original_title}
                ></img>
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
