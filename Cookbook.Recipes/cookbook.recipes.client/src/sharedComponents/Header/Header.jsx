import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./Logout";

const Header = ({ token, logout }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">
        Recipes
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav navbar-right ml-auto">
          <li className="nav-item mr-2">
            {token ? <LogoutButton logout={logout} /> : null}
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
