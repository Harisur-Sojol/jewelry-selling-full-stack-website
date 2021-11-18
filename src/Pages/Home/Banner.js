import React from "react";
import { Carousel } from "react-bootstrap";

import img1 from "../../images/banner-img/img1.png"
import img2 from "../../images/banner-img/img2.png"
import img3 from "../../images/banner-img/img3.png"

const Banner = () => {
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={img1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={img2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={img3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
  );
};

export default Banner;


