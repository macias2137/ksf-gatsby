import React from "react";

const SliderTile = ({ name, img, companyName, story }) => {
  return (
    <div className="container pb-3 slider-tile">
      <div className="column is-12-mobile is-8-tablet">
        <div className="columns">
          <div className="column slider-tile__left is-4-tablet">
            <figure className="image is-rounded is-128x128">
              <img src={img} alt="customer" />
            </figure>
          </div>
          <div className="column slider-tile__right">
            <p className="slider-tile__text">
              <b>
                {name}, {companyName}
              </b>
            </p>
            <p className="slider-tile__text">{story}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderTile;
