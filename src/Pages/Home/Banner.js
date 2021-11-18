import React from "react";
import { Carousel } from "react-bootstrap";
import '../../Styles/Banner.css'
const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="http://mallikagroups.com/images/home/diamond.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="http://shreedaujijewels.com/wp-content/uploads/2018/09/slide5.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://i.pinimg.com/originals/33/86/28/338628e1c2115db125fbfff2a36415a8.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
