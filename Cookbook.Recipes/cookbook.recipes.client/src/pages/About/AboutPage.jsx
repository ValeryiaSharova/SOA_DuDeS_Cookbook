import React from "react";
import { useEffect } from "react";

const AboutPage = ({ login }) => {
  useEffect(() => {
    login(localStorage.getItem("token"));
  }, [login]);

  return (
    <div>
      <h2>About</h2>
      <span>Welcome to the library of the recipes.</span>
    </div>
  );
};

export default AboutPage;
