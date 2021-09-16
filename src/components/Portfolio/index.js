import React from "react";
import PortfolioItem from "./components/PortfolioItem";
import { PortfolioData as data } from "./portfolio-data";
import GenerateID from "../../id-generator";

const Portfolio = () => {
  const { portfolio } = data;
  return (
    <section id="portfolio" className="section portfolio">
      <div className="container portfolio__main">
        <div className="columns portfolio___main--list is-multiline is-centered">
          {portfolio.map((item) => (
            <PortfolioItem
              key={GenerateID()}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
