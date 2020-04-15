import React from "react";
import { useHistory } from "react-router-dom";

const LogoutButton = ({ logout }) => {
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    logout();
    history.push("/");
  };

  return (
    <button
      type="button"
      className="btn btn-link nav-link"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
