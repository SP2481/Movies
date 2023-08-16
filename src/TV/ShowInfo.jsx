import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import "../Styling/Info.css";
import fetchYourshow from "../collect/fetchYourshow";
export default function ShowInfo() {
  const { id } = useParams();
  const spcl = useQuery(["tvshow", id], fetchYourshow);

  if (spcl.isLoading) {
    return (
      <div className="emoji">
        <h2 className="loader">🕸️</h2>
      </div>
    );
  }
  if (spcl.isError) {
    return <h2>Oops! server lost</h2>;
  }

  const name = spcl.data.title;
  const info = spcl.data.overview;
  const poster = spcl.data.poster_path;
  const dateofrelease = spcl.data.release_date;
  const genres = spcl.data.genres;
  const background = spcl.data.backdrop_path;
  const genrenames = genres.map((genre) => genre.name).join(",");
  return (
    <>
      <div className="details-page">
        <div
          className="left-part"
          // style={{
          //   backgroundImage: `url(https://image.tmdb.org/t/p/w500${background})`,
          //   backdropFilter: "blur(20px)",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "object-fit",
          // }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt={name}
            className="poster"
          ></img>
        </div>
        <div className="right-part">
          <div className="content">
            <h1 className="title"> {name}</h1>
            <br />
            <p>Genres :- ({genrenames})</p>
            <br />
            <h6 className="date-of-release">Release Date :- {dateofrelease}</h6>
            <br />
            <p className="details">{info}</p>
          </div>
        </div>
      </div>
    </>
  );
}
