import React from "react";
import SectionHeader from "../SectionHeader";
import { HomeData as data } from "./home-data";

const Home = () => {
  const { id, title, subtitle, buttonText, img } = data;
  return (
    <SectionHeader
      id={id}
      title={title}
      subtitle={subtitle}
      buttonText={buttonText}
      height="100vh"
      backgroundRgb="20, 30, 61"
      color="white"
      img={img}
      textTransformSpeed="0.4"
    />
  );
};

export default Home;
