"use client";

import React from "react";
//@ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/drink1.jpg",
  "/drink2.jpg",
  "/drink3.jpg",
  "/drink4.jpg",
  "/drink5.jpg",
  "/drink6.jpg",
  "/drink7.jpg",
  "/drink8.jpg",
  "/drink9.jpg",
  "/drink10.jpg",
];

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="flex justify-center items-center">
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-84 object-contain rounded-lg shadow-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
