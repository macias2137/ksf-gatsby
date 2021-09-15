import React from "react";
import { AboutUsData as data } from "./about-us-data";

const AboutUs = () => {
  const { title, text } = data;
  return (
    <section id="about-us" className="section about-us">
      <div className="container">
        <p className="title is-1 has-text-centered about-us__title">{title}</p>
        <p className="about-us__text">{text}</p>
      </div>
    </section>
  );
};

export default AboutUs;
