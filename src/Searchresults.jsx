import { Link } from "react-router-dom";
import "./Styling/Searchresults.css";

export default function Searchresults({ result, refetch }) {
  return (
    <>
      {result?.results.map((res, index) => (
        <div className="total-viewport" key={res.id}>
          <div className="results-container">
            <div className="result-image">
              {res.poster_path ? (
                <Link to={`/movie/${res.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
                    alt={res.title}
                    className="results-poster link"
                  ></img>
                </Link>
              ) : (
                <h1>No image available</h1>
              )}
            </div>
            <div className="results-data">
              <h2 className="heading ">
                <Link to={`/movie/${res.id}`} className="link">
                  {index + 1}. {res.title}
                </Link>
              </h2>

              <h4 className="other-info">
                {res.release_date.slice(0, 4)} ⭐ {res.popularity}
              </h4>

              <p className="overview">
                {res.overview.slice(0, 100)}
                <Link to={`/movie/${res.id}`} className="link">
                  {" "}
                  (..Read More)
                </Link>
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="page-switching">
        <button
          className="prev-button butt"
          onClick={() => {
            refetch(result.page - 1);
          }}
          disabled={result.page === 1}
        >
          <span>Prev</span>
        </button>
        <h3 className="pageNum ">
          {result.page}..({result.total_pages})
        </h3>
        <button
          className="next-button butt"
          onClick={() => {
            refetch(result.page + 1);
            window.scrollTo(0, 0);
          }}
          disabled={result.page === result.total_pages}
        >
          <span>Next</span>
        </button>
      </div>
    </>
  );
}
