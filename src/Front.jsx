import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Login from "./LoginPage";
import Movieinfo from "./Movies/Movieinfo";
import Searchresults from "./Searchresults";
import "./Styling/toggle.css";
import ShowInfo from "./TV/ShowInfo";
import Searchthemovie from "./collect/fetchsearch";

export default function FrontPage() {
  const [searchvalue, setsearchvalue] = useState("");
  const [searchresult, setsearchresult] = useState([]);

  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const [isDarkmode, setisDarkmode] = useState(false);
  // const [isLoggedin, setisLoggedin] = useState(true);
  const screenwidth = window.innerWidth;
  const navigate = useNavigate();

  function Gotopage() {
    navigate("/login");
  }

  // function toggleLoggedin() {
  //   setisLoggedin(!isLoggedin);
  // }

  const toggleDarkmode = () => {
    setisDarkmode(!isDarkmode);
  };

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
          >
            <span className="material-symbols-outlined">search</span>
          </button>
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
                <a href="/">
                  <span class="material-symbols-outlined dropdown">person</span>
                  Profile
                </a>
                <a href="">
                  <span class="material-symbols-outlined dropdown">
                    dark_mode
                  </span>
                  Dark Mode
                  {/* <input
                    type="checkbox"
                    className="l"
                    onClick={toggleDarkmode}
                  ></input> */}
                </a>
                <a className="Logout-dropdown" onClick={Gotopage}>
                  <span class="material-symbols-outlined dropdown">Login</span>
                  {/* {isLoggedin ? "Log in" : "Log out"} */}
                  Log in
                </a>
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
        />{" "}
        //you can put any variable you want to put at result place
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
