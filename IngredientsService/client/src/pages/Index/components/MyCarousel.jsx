import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import fruits from '../../../resource/fruits.jpg';
import vegetables from '../../../resource/vegetables.jpg';
import berries from '../../../resource/berries.jpg';

const MyCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" src={vegetables} alt="vegetables" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={fruits} alt="fruits" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={berries} alt="berries" />
    </Carousel.Item>
  </Carousel>
);

export default MyCarousel;
