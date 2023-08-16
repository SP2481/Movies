import React, { useEffect, useState } from "react";
import ActionMovies from "./Movies/ActionMovies";
import BollywoodMovies from "./Movies/BollywoodMovies";
import ComedyMovies from "./Movies/ComedyMovies";
import Documentries from "./Movies/Documentries";
import Movies from "./Movies/Newrelease";
import TVList from "./TV/TVList";
import Preloader from "./preloading";

const Home = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false); // After the delay, hide the preloader
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timeout on component unmount
  }, []);
  return (
    <div>
      {showPreloader && <Preloader />}
      <Movies />
      <TVList />
      <ActionMovies />
      <ComedyMovies />
      <BollywoodMovies />
      <Documentries />
    </div>
  );
};

export default Home;
