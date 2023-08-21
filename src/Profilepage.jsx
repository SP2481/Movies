import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Styling/Profilepage.css";
import { auth } from "./firebase";

export default function Profilepage() {
  const [username, setusername] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setusername(user.displayName);
      }
      setusername("You havent logged in");
    });
  });
  return (
    <div className="profilepage">
      <div className="ac-icon"></div>
      <div className="user-data">
        <h1 className="user-name">{username}</h1>
        <p className="user-email">user email</p>
        <button className="goto-homepage">
          <Link to="/">
            <span>Button</span>
          </Link>
        </button>
      </div>
    </div>
  );
}
