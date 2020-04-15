import React from "react";
import config from "config";
import { Link } from "react-router-dom";

const IndexContent = ({ location, login }) => {
  const handleRedirect = () => {
    window.location.href = `${config.authUrl}/login?callbackUrl=${window.location.href}`;
  };

  let token = localStorage.getItem("token");
  if (!token) {
    const query = new URLSearchParams(location.search);
    token = query.get("token");

    if (!token) {
      return (
        <div className="text-center mt-3">
          <h2 className="title-index">
            Please login or register to see all recipes
          </h2>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleRedirect}
          >
            Login or register
          </button>
        </div>
      );
    }

    localStorage.setItem("token", token);
    login(token);
  }

  return (
    <div className="text-center mt-3">
      <h2 className="title-index">Here you can find all recipes</h2>
      <Link to="/recipes" className="btn btn-primary">
        See all recipes
      </Link>
    </div>
  );
};

export default IndexContent;
