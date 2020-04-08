import React from 'react';
import { ModalConsumer } from '../../../context/ModalContext';
import DialogChangeIngredient from './DialogChangeIngredient';

const TrOfIngredients = ({ ingredient, index, deleteHandler, changeHandler }) => {
  const deleteIngredient = () => {
    deleteHandler(ingredient.name);
  };
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{ingredient.name}</td>
      <td>{ingredient.calories}</td>
      <td>{ingredient.squirrels}</td>
      <td>{ingredient.fats}</td>
      <td>{ingredient.carbohydrates}</td>
      <td>
        <ModalConsumer>
          {({ showModal }) => (
            <button
              type="button"
              className="btn btn-delete"
              onClick={() => showModal(DialogChangeIngredient, { ingredient, changeHandler })}
            >
              Change
            </button>
          )}
        </ModalConsumer>
      </td>
      <td>
        <button type="button" className="btn btn-delete" onClick={deleteIngredient}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TrOfIngredients;
