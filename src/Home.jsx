import React from "react";
import ActionMovies from "./Movies/ActionMovies";
import BollywoodMovies from "./Movies/BollywoodMovies";
import ComedyMovies from "./Movies/ComedyMovies";
import Documentries from "./Movies/Documentries";
import Movies from "./Movies/Newrelease";
import TVList from "./TV/TVList";

const Home = () => {
  return (
    <div>
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
