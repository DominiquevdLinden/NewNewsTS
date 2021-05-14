import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">
        <img
          style={{ width: 100, height: 100 }}
          src="http://joemiller.us/wp-content/uploads/news-636978_960_720-1.jpg"
        ></img>
      </Link>
    </div>
  );
}
