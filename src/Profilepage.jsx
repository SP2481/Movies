import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "./AuthProvider";
import "./Styling/Profilepage.css";

export default function Profilepage() {
  const { user, isLoggedin } = useContext(Authcontext);

  const letter = user?.displayName?.slice(0, 1) || null;
  return (
    <div className="profilepage">
      <div className="ac-icon">
        <h1 className="letter">{letter}</h1>
      </div>
      <div className="user-data">
        <h1 className="user-name">
          {isLoggedin ? user.displayName : <Link to="/login">Login</Link>}
        </h1>
        <p className="user-email">{user.email}</p>
        <button className="goto-homepage">
          <Link to="/">
            <span>Home</span>
          </Link>
        </button>
      </div>
    </div>
  );
}
