import React from "react";

const SliderTile = ({ name, img, companyName, story }) => {
  return (
    <div className="container pb-3 is-flex is-justify-content-center slider-tile">
      <div className="column is-12-mobile is-8-tablet">
        <div className="columns">
          <div className="column is-flex is-justify-content-center is-4-tablet">
            <figure className="image is-rounded is-128x128">
              <img src={img} alt="customer" />
            </figure>
          </div>
          <div className="column is-flex is-flex-direction-column is-justify-content-center">
            <p className="has-text-left slider-tile__text">
              <b>
                {name}, {companyName}
              </b>
            </p>
            <p className="has-text-left slider-tile__text">{story}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderTile;
