import React from "react";
import { recipesService } from "@/api/recipes";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const RecipesPage = ({ login }) => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = useCallback(() => {
    try {
      recipesService.getAll().then((recipes) => setRecipes(recipes));
    } catch (e) {}
  }, []);

  useEffect(() => {
    fetchRecipes();
    login(localStorage.getItem("token"));
  }, [fetchRecipes, login]);

  const handleDeleteRecipe = (id) => {
    recipesService.delete(id).then(() => fetchRecipes());
  };

  return (
    <div>
      <h2>List of recipes</h2>
      <div className="card-columns mt-3 mb-3 text-center">
        {recipes.length
          ? recipes.map((recipe) => (
              <div className="card" key={recipe.id}>
                <div className="card-body">
                  <h4 className="card-title">{recipe.name}</h4>
                  <hr />
                  <p className="card-text">{recipe.description}</p>
                  <h5 className="card-text">Calories: {recipe.calories}</h5>
                  <h5 className="card-text">Ingredients:</h5>
                </div>
                <ul className="list-group list-group-flush">
                  {recipe.ingredients.length &&
                    recipe.ingredients.map((ingredient, index) => (
                      <li className="list-group-item" key={index}>
                        {ingredient.name} - {ingredient.amount}g
                      </li>
                    ))}
                </ul>
                <div className="card-body">
                  <Link
                    to={`/editRecipe/${recipe.id}`}
                    className="btn btn-primary mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDeleteRecipe(recipe.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          : null}
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Add recipe</h4>
            <hr />
            <Link to="/editRecipe" className="btn btn-primary btn-lg">
              Add
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;
