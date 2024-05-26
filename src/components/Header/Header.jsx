import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"
const Header = () => {
  return (
    <div>
      <nav>

        <span><Link to="/">Home</Link> </span>
        <span><Link to="/News">List News</Link> </span>
        <span><Link to="/FormNews">Form News</Link> </span>
      </nav>
    </div>
  );
};

export default Header;