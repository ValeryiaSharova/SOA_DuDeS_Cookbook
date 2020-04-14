import React from 'react';
import MyCarousel from './components/MyCarousel';
import Footer from '../../sharedComponents/Footer/Footer';
import LoginOrIngredient from './components/LoginOrIngredientButton';

const IndexPage = props => {
  const { login } = props;
  return (
    <div className="container mt-3">
      <MyCarousel />
      <LoginOrIngredient location={props.location} login={login} />
      <Footer />
    </div>
  );
};
export default IndexPage;
