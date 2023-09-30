import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "./AuthProvider";
import delet from "./Images/delete.png";
import imdb from "./Images/imdb.png";
import link from "./Images/link.svg";
import "./Styling/wishlist.css";
import { UselistContext } from "./WishlistProvider";
import { db } from "./firebase";

export default function Wishlist() {
  const { user, isLoggedin } = useContext(Authcontext);
  const { wishlist, setWishlist } = UselistContext();
  useEffect(() => {
    if (user) {
      const fetchWishlist = async () => {
        const wishlistRef = collection(db, `user/${user.uid}/movies`);
        const querySnapshot = await getDocs(wishlistRef);
        const wishlistData = querySnapshot.docs.map((doc) => doc.data());
        setWishlist(wishlistData);
      };

      fetchWishlist();
    }
  }, [user]);
  return (
    <div className="center-container">
      <div className="main-div">
        <h1 className="watchlist-title">Watchlist</h1>
        <hr />
        <div className="watchlists">
          {isLoggedin ? (
            wishlist?.map((movie) => (
              <div className="watchlistMovies" key={movie.id}>
                <div className="title-tagline">
                  <h3 className="watchlist-movieTitle">
                    <Link to={`/movie/${movie.id}`} className="link">
                      {movie.title}
                    </Link>
                  </h3>
                  <sub>{movie.tagline}</sub>
                </div>
                <div className="watchlist-info">
                  <Link to={movie.homepage}>
                    <img src={link} alt="" className="link-icon" />
                  </Link>
                  <Link to={`https://www.imdb.com/title/${movie.imdb_id}`}>
                    <img src={imdb} alt="" className="imdb-icon" />
                  </Link>
                  <Link>
                    <img src={delet} alt="" className="delete-icon" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="remain-div">
              <button className="gotologin">Log in</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
