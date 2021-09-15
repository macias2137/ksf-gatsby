import React from "react";
import { TestimonialsData as data } from "./testimonials-data";
import Slider from "./components/Slider";

const Testimonials = () => {
  const { title, subtitle } = data;
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <p className="title testimonials__title">{title}</p>
        <p className="subtitle testimonials__subtitle">{subtitle}</p>
      </div>
      <Slider />
    </section>
  );
};

export default Testimonials;
