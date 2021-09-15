import React from "react";

const PortfolioItem = ({ name, description }) => {
  return (
    <div className="column portfolio-item is-4 p-2 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      <div className="portfolio-item__main p-3">
        <p className="title is-size-4 my-4 portfolio-item__name">{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
