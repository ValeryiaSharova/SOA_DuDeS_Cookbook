import React from 'react';
import MyCarousel from './components/MyCarousel';
import Footer from '../../sharedComponents/Footer/Footer';
import LoginOrIngredient from './components/LoginOrIngredientButton';

const IndexPage = props => (
  <div className="container mt-3">
    <MyCarousel />
    <LoginOrIngredient location={props.location} />
    <Footer />
  </div>
);
export default IndexPage;
