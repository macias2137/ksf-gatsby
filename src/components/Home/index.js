import React from "react";
import SectionHeader from "../SectionHeader";
import img from "../../images/code-purple.jpg";

const Home = () => {
  return (
    <SectionHeader
      id="home"
      title="Zajebiste programy"
      subtitle={
        "Jesteśmy firmą spod Gniezna produkującą nowatorskie oprogramowanie dla administracji i wszystkich gałęzi przemysłu"
      }
      children={
        <a href="#products" className="button home__button px-6 is-link">
          <b>ZOBACZ NASZE PRODUKTY</b>
        </a>
      }
      height="100vh"
      backgroundRgb="20, 30, 61"
      color="white"
      // titleSize="100px"
      img={img}
      textTransformSpeed="0.4"
    />
  );
};

export default Home;
