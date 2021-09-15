import React from "react";

const HeaderSmall = ({ title, subtitle, background, backgroundRgb, id }) => {
  return (
    <section
      id={id}
      className={`section p-0 header-small ${id}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className="header-small__color-cover"
        style={{ backgroundColor: `rgba(${backgroundRgb},0.8)` }}
      >
        <div className="container header-small__main is-flex is-flex-direction-column is-justify-content-center">
          <p className={`is-size-2 has-text-weight-bold ${id}__title`}>
            {title}
          </p>
          <p className={`is-size-4 ${id}__subtitle`}>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default HeaderSmall;
