import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import PropTypes from 'proptypes';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

const AddIngredient = ({ onRequestClose, ingredient, changeHandler }) => {
  const { _id } = ingredient;
  const schema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .required('Required'),
    calories: yup
      .number()
      .min(0, 'Calories must be positive')
      .required('Required'),
    squirrels: yup
      .number()
      .min(0, 'Squirrels must be positive')
      .required('Required'),
    fats: yup
      .number()
      .min(0, 'Fats must be positive')
      .required('Required'),
    carbohydrates: yup
      .number()
      .min(0, 'Carbohydrates must be positive')
      .required('Required'),
  });

  const change = values => {
    const changedIngredient = { _id, ...values };
    changeHandler(changedIngredient);
    onRequestClose();
  };

  return (
    <Dialog open>
      <DialogTitle aria-labelledby="customized-dialog-title">Change an ingredient</DialogTitle>
      <DialogContent dividers>
        <div className="modal-body">
          <Formik
            initialValues={{
              name: ingredient.name,
              calories: ingredient.calories,
              squirrels: ingredient.squirrels,
              fats: ingredient.fats,
              carbohydrates: ingredient.carbohydrates,
            }}
            validationSchema={schema}
            onSubmit={change}
          >
            {({ values, errors, touched }) => (
              <Form>
                <fieldset>
                  <div className="form-group">
                    <label htmlFor="title">Name</label>
                    <Field className="form-control" type="text" name="name" value={values.name} />
                    {errors.name && touched.name ? (
                      <span className="error text-center">{errors.name}</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Calories</label>
                    <Field
                      className="form-control"
                      type="number"
                      name="calories"
                      value={values.calories}
                    />
                    {errors.calories && touched.calories ? (
                      <span className="error text-center">{errors.calories}</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Squirrels</label>
                    <Field
                      className="form-control"
                      type="number"
                      name="squirrels"
                      value={values.squirrels}
                    />
                    {errors.squirrels && touched.squirrels ? (
                      <span className="error text-center">{errors.squirrels}</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Fats</label>
                    <Field className="form-control" type="number" name="fats" value={values.fats} />
                    {errors.fats && touched.fats ? (
                      <span className="error text-center">{errors.fats}</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Carbohydrates</label>
                    <Field
                      className="form-control"
                      type="number"
                      name="carbohydrates"
                      value={values.carbohydrates}
                    />
                    {errors.carbohydrates && touched.carbohydrates ? (
                      <span className="error text-center">{errors.carbohydrates}</span>
                    ) : null}
                  </div>
                  <div className="form-group text-center">
                    <button className="btn btn-modal" type="submit">
                      Change
                    </button>
                  </div>
                </fieldset>
              </Form>
            )}
          </Formik>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onRequestClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddIngredient.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
};

export default AddIngredient;
