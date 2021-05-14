import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import HomePageArticle from "../components/HomePageArticle";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Link to="/articles">
        <button>Search Articles!</button>
      </Link>
      <HomePageArticle />
    </div>
  );
}
