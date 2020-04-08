import React from 'react';
import MyCarousel from './components/MyCarousel';
import IngredientsButton from './components/IngredientsButton';
import Footer from '../../sharedComponents/Footer/Footer';

const IndexPage = () => (
  <div className="container mt-3">
    <MyCarousel />
    <IngredientsButton />
    <Footer />
  </div>
);

export default IndexPage;
