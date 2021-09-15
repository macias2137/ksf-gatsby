import React from "react";
import "../Sass/App.sass";
import contactImg from "../images/pink-screen.jpg";
import productsImg from "../images/pink.jpg";
import Nav from "../components/Nav";
import Home from "../components/Home";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs/";
import Team from "../components/Team";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ArrowUp from "../components/ArrowUp";
import HeaderSmall from "../components/HeaderSmall";

function App() {
  return (
    <div className="App">
      <main className="main">
        <Nav />
        <ArrowUp />
        <Home />
        <Services />
        <AboutUs />
        <Team />
        <HeaderSmall
          id="products-header"
          title="Nasze realizacje"
          background={productsImg}
          backgroundRgb="20, 30, 61"
        />
        <Portfolio />
        <Testimonials />
        <HeaderSmall
          id="contact-header"
          title="Skontaktuj się z nami"
          subtitle="Odpowiadamy 24 na h"
          background={contactImg}
          backgroundRgb="252, 163, 17"
        />
        <Footer />
      </main>
    </div>
  );
}

export default App;
