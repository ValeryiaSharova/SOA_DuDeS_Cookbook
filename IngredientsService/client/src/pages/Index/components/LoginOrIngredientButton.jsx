import React from 'react';
import { Link } from 'react-router-dom';

const LoginOrIngredient = ({ location }) => {
  const handleRedirect = () => {
    window.location.href = `http://localhost:2020/login?callbackUrl=${window.location.href}`;
  };

  let token = localStorage.getItem('token');
  if (!token) {
    const query = new URLSearchParams(location.search);
    token = query.get('token');

    if (!token) {
      return (
        <div className="text-center mt-3">
          <h2 className="title-index">Please login or register to see all ingredients</h2>
          <button type="button" className="btn btn-style-1" onClick={handleRedirect}>
            Login or register
          </button>
        </div>
      );
    }

    localStorage.setItem('token', token);
  }

  return (
    <div className="text-center mt-3">
      <h2 className="title-index">Here you can find all ingredients</h2>
      <Link to="/ingredients" className="btn btn-style-1">
        See all ingredients
      </Link>
    </div>
  );
};

export default LoginOrIngredient;
