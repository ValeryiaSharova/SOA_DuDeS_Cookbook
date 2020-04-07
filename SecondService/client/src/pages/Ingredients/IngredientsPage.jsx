import React, { useState, useCallback, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useHttp } from '../../hooks/http.hook';
import Spinner from '../../sharedComponents/Spinner/Spinner';
import { ModalConsumer } from '../../context/ModalContext';
import DialogAddIngredient from './components/DialogAddIngredient';
import TrOfIngredients from './components/TrOfIngredints';
import Footer from '../../sharedComponents/Footer/Footer';

const IngredientsPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const { loading, request } = useHttp();
  const [message, setMessage] = useState('');

  const fetchIngredients = useCallback(async () => {
    try {
      const fetched = await request('/api/ingredients', 'GET');
      setIngredients(fetched);
    } catch (e) {}
  }, [request]);

  const addHandler = async newIngredient => {
    try {
      const data = await request('/api/ingredients/add', 'POST', {
        ...newIngredient,
      });

      if (data.message) {
        setMessage(data.message);
      }
      fetchIngredients();
    } catch (error) {}
  };

  const changeHandler = async changedIngredient => {
    try {
      const data = await request('/api/ingredients/change', 'POST', {
        ...changedIngredient,
      });

      if (data.message) {
        setMessage(data.message);
      }
      fetchIngredients();
    } catch (error) {}
  };

  const deleteHandler = async name => {
    try {
      const data = await request('/api/ingredients/delete', 'POST', { name });
      if (data.message) {
        setMessage(data.message);
      }
      fetchIngredients();
    } catch (error) {}
  };

  useEffect(() => {
    fetchIngredients();
  }, [fetchIngredients]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container mt-3">
      <h2>List of ingredients</h2>
      {message ? <Alert>{message}</Alert> : null}
      <hr />
      <ModalConsumer>
        {({ showModal }) => (
          <button
            type="button"
            className="btn btn-add"
            onClick={() => showModal(DialogAddIngredient, { addHandler })}
          >
            Add new ingredient
          </button>
        )}
      </ModalConsumer>
      <table className="table table-hover text-center">
        <thead>
          <tr className="table-color">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Calories</th>
            <th scope="col">Squirrels</th>
            <th scope="col">Fats</th>
            <th scope="col">Carbohydrates</th>
            <th scope="col" />
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient, index) => (
            <TrOfIngredients
              ingredient={ingredient}
              index={index}
              deleteHandler={deleteHandler}
              changeHandler={changeHandler}
              key={ingredient._id}
            />
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default IngredientsPage;
