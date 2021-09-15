import React from "react";
import PortfolioItem from "./components/PortfolioItem";
import { PortfolioData as data } from "./portfolio-data";

const Portfolio = () => {
  const { title, portfolio } = data;
  return (
    <section id="portfolio" className="section portfolio">
      <div className="container portfolio__main">
        {/* <p className="products__main--title subtitle">{title}</p> */}
        <div className="columns portfolio___main--list is-multiline is-centered is-marginless">
          {portfolio.map((item) => (
            <PortfolioItem name={item.name} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
