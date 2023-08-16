import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import "../Styling/Info.css";
import FetchYourMovie from "../collect/Fetchspecmovie";

export default function Movieinfo() {
  const { id } = useParams();
  const spcl = useQuery(["movie", id], FetchYourMovie);
  if (spcl.isLoading) {
    return (
      <div className="pre-loader">
        <div className="loader"></div>
      </div>
    );
  }
  if (spcl.isError) {
    return <h2>Oops! server lost</h2>;
  }
  const result = spcl.data;
  let hours = Math.floor(result.runtime / 60);
  let minutes = result.runtime % 60;
  const genres = result.genres.map((genre) => genre.name).join(", ");

  return (
    <>
      <div className="details-page">
        <img
          src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
          alt={`${result.title}`}
          className="backdrop-image"
          width="100%"
        />
        <div className="data">
          <div className="Left-data">
            <img
              src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
              alt={`${result.title}`}
              className="Poster"
            />
          </div>
          <div className="right-data">
            <h1 className="title">
              {result.title} ({result.release_date.slice(0, 4)})
            </h1>
            <div className="facts">
              <ul>
                <span>
                  {result.release_date} ({result.original_language})
                </span>

                <li>
                  <span>
                    <i>{genres}</i>
                  </span>
                </li>
                <li>
                  <span>
                    {hours}h {minutes}m
                  </span>
                </li>
              </ul>
            </div>
            <h3 className="tagline">
              <i>{result.tagline}</i>
            </h3>
            <p className="overview">{result.overview}</p>
            <div className="both-buttons">
              <button className="trailer-button">Play trailer</button>
              <Link to={result.homepage}>
                <button className="homepage-button">
                  <span>
                    <p>Homepage</p>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//
