import React from "react";

const PortfolioItem = ({ name, description }) => {
  return (
    <div className="column portfolio-item is-4 p-2">
      <div className="portfolio-item__main p-3">
        <p className="title is-size-4 my-4 portfolio-item__name">{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
