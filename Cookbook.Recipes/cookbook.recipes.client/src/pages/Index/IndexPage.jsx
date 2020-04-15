import React, { useEffect } from "react";
import IndexContent from "./components/IndexContent";

const IndexPage = (props) => {
  const { login } = props;

  useEffect(() => {
    login(localStorage.getItem("token"));
  }, [login]);

  return (
    <div className="text-center mt-3">
      <IndexContent location={props.location} login={login} />
    </div>
  );
};
export default IndexPage;
