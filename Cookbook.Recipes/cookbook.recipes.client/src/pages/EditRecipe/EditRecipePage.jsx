import React, { useState, useEffect, useCallback, Fragment } from "react";
import { useParams, useHistory } from "react-router-dom";
import { recipesService } from "@/api/recipes";
import { history } from "@/helpers/history";

const EditRecipePage = ({ login }) => {
  const [recipe, setRecipe] = useState({});
  const [ingredientNames, setIngredientNames] = useState([]);
  const recipeId = useParams().id;

  const fetchRecipe = useCallback(() => {
    try {
      if (recipeId) {
        recipesService.getById(recipeId).then((recipe) => setRecipe(recipe));
      } else {
        setRecipe({
          name: "",
          description: "",
          ingredients: [],
        });
      }
    } catch (e) {}
  }, []);

  const fetchIngredientNames = useCallback(() => {
    try {
      recipesService
        .getAllIngredientsName()
        .then((ingredientNames) => setIngredientNames(ingredientNames));
    } catch (e) {}
  }, []);

  useEffect(() => {
    fetchRecipe();
    fetchIngredientNames();
    login(localStorage.getItem("token"));
  }, [fetchRecipe, fetchIngredientNames, login]);

  const handleAddFields = () => {
    const values = [...recipe.ingredients];
    values.push({ name: "", amount: "" });
    setRecipe({ ...recipe, ingredients: values });
  };

  const handleRemoveFields = (index) => {
    const values = [...recipe.ingredients];
    values.splice(index, 1);
    setRecipe({ ...recipe, ingredients: values });
  };

  const handleInputChange = (event) => {
    let { value } = event.target;
    setRecipe({ ...recipe, [event.target.name]: value });
  };

  const handleIngredientChange = (index, event) => {
    const values = [...recipe.ingredients];
    if (event.target.name === "name") {
      values[index].name = event.target.value;
    } else {
      values[index].amount = event.target.value;
    }

    setRecipe({ ...recipe, ingredients: values });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipeId) {
      recipesService.update(recipe).then(history.push("/recipes"));
    } else {
      recipesService.create(recipe).then(history.push("/recipes"));
    }
  };

  return (
    <div>
      <h2>Edit recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-sm-6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={recipe.name}
              onChange={(event) => handleInputChange(event)}
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={recipe.description}
              onChange={(event) => handleInputChange(event)}
            />
          </div>
        </div>
        <div className="form-group col">
          <h5>Ingredients:</h5>
        </div>
        {recipe.ingredients &&
          recipe.ingredients.map((ingredient, index) => (
            <Fragment key={`${ingredient}~${index}`}>
              <div className="form-row">
                <div className="form-group col-sm-6">
                  <label htmlFor="ingredientName">Name</label>
                  <select
                    className="custom-select"
                    id="name"
                    name="name"
                    value={ingredient.name}
                    onChange={(event) => handleIngredientChange(index, event)}
                  >
                    <option>Choose...</option>
                    {ingredientNames &&
                      ingredientNames.map((ingredientName, index) => (
                        <option
                          value={ingredientName}
                          key={`${ingredientName}~${index}~select`}
                        >
                          {ingredientName}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="amount">Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    id="amount"
                    name="amount"
                    value={ingredient.amount}
                    onChange={(event) => handleIngredientChange(index, event)}
                  />
                </div>
                <div className="form-group col-sm-2">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => handleRemoveFields(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </Fragment>
          ))}
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => handleAddFields()}
        >
          Add ingredient
        </button>
        <div className="submit-button mt-2">
          <button
            className="btn btn-primary"
            type="submit"
            onSubmit={handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipePage;
