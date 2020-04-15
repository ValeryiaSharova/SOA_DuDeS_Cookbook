import React from "react";
import config from "config";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, login, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      let token = localStorage.getItem("token");
      if (!token) {
        const query = new URLSearchParams(props.location.search);
        token = query.get("token");

        if (!token) {
          window.location.href =
            config.authUrl + "/login?callbackUrl=" + window.location.href;
          return null;
        }

        localStorage.setItem("token", token);
        login(token);
      }

      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
