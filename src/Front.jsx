import { useContext, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Authcontext } from "./AuthProvider";
import Home from "./Home";
import Login from "./LoginPage";
import Movieinfo from "./Movies/Movieinfo";
import Profilepage from "./Profilepage";
import Searchresults from "./Searchresults";
import SignUp from "./SignUp";
import "./Styling/toggle.css";
import ShowInfo from "./TV/ShowInfo";
import Searchthemovie from "./collect/fetchsearch";

export default function FrontPage() {
  const [searchvalue, setsearchvalue] = useState("");
  const [searchresult, setsearchresult] = useState([]);
  const { user, isLoggedin } = useContext(Authcontext);
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleinputchange = (event) => {
    setsearchvalue(event.target.value);
  };
  const handlesearch = async (page) => {
    const data = await Searchthemovie(searchvalue, page);
    setsearchresult(data);
  };
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setisDropdownOpen(!isDropdownOpen);
  };
  window.addEventListener("click", () => {
    if (isDropdownOpen) {
      setisDropdownOpen(false);
    }
  });

  return (
    <>
      <div className="Navbar">
        <h1>
          <Link to="/">Cinematrix</Link>
        </h1>
        <div className="right-nav">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              id="SearchBar"
              className="searchbarshow"
              value={searchvalue}
              onChange={handleinputchange}
            />

            <button
              type="submit"
              onClick={async () => {
                if (searchvalue !== "") {
                  await handlesearch(1);
                  navigate("/search");
                } else {
                  alert("Enter search input");
                }
              }}
              className="search-button"
            >
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
          <button className="wishlist" type="button">
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <div className="Menu-button">
            <button
              className="menu"
              type="menu"
              id="menu"
              onClick={toggleDropdown}
            >
              <span className="material-symbols-outlined ">menu</span>
            </button>

            {isDropdownOpen ? (
              <div className="dropdown-content">
                <Link to="/profile">
                  <span class="material-symbols-outlined dropdown">person</span>
                  <h2>{isLoggedin ? user.displayName : "Profile"}</h2>
                </Link>

                <Link className="Logout-dropdown" to="/login">
                  <span class="material-symbols-outlined dropdown">
                    {!isLoggedin ? "login" : "logout"}
                  </span>
                  {!isLoggedin ? "Log in" : "Log out"}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movieinfo />} />
        <Route path="/show/:id" element={<ShowInfo />} />
        <Route
          path="/search"
          element={
            <Searchresults result={searchresult} refetch={handlesearch} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}
