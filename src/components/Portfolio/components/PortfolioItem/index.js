import React from "react";

const PortfolioItem = ({ name, description }) => {
  return (
    <div className="column portfolio-item is-12-touch is-12-desktop is-12-widescreen is-4-fullhd p-2">
      <div className="portfolio-item__main p-3 pb-5">
        <p className="title is-size-3 my-4 portfolio-item__name">{name}</p>
        <p className="portfolio-item__description">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
