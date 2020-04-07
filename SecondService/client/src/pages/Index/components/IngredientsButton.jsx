import React from 'react';
import { Link } from 'react-router-dom';

const IngredientsButton = () => (
  <div className="text-center mt-3">
    <h2 className="title-index">Here you can find all ingredients</h2>
    <Link to="/ingredients" className="btn btn-style-1">
      See all ingredients
    </Link>
  </div>
);

export default IngredientsButton;
