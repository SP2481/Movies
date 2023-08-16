import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import FetchTVlist from "../collect/Fetchtvlist";

export default function TVList() {
  const Showslist = useQuery(["TVShows"], FetchTVlist);
  const ScrollcontainerRef = useRef(null);

  const handleScrollLeft = () => {
    const scrollContainer = ScrollcontainerRef.current;
    scrollContainer.scrollBy({ left: -500, behaviour: "smooth" });
  };

  const handleScrollRight = () => {
    const scrollContainer = ScrollcontainerRef.current;
    scrollContainer.scrollBy({ left: 500, behaviour: "smooth" });
  };

  if (Showslist.error) {
    return (
      <div>
        <img
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2019/09/Ross-Geller-Feature-Image.jpg"
          alt=""
        />
      </div>
    );
  }
  if (Showslist.isLoading) {
    return (
      <div className="pre-loader">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="shows">
      <div className="bar">
        <h2> TV Shows </h2>
        <div className="buttons">
          <button onClick={handleScrollLeft} className="backward-button">
            <i className="material-icons">keyboard_arrow_left</i>
          </button>
          <button onClick={handleScrollRight} className="forward-button">
            <i className="material-icons">keyboard_arrow_right</i>
          </button>
        </div>
      </div>

      <div className="Show-list" ref={ScrollcontainerRef}>
        {Showslist.data.results.map((show) => (
          // const [translatedTitle, setTranslatedTitle]=useState('')
          // useEffect(() => {
          //   Translate(show.original_name, {from:"hi", to:"en"}).then((tranaslatedText)=>setTranslatedTitle(tranaslatedText))
          // }, [show.original_name])

          <div key={show.id} className="show-card">
            <div className="show-image">
              <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.original_name}
              ></img>
            </div>
            <h3 className="show-title">
              <Link to={`/show/${show.id}`} className="title">
                {show.original_name}
              </Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
