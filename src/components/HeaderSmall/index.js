import React from "react";

const HeaderSmall = ({ id, title, subtitle, background, backgroundRgb }) => {
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
        <div className="container header-small__main">
          <p className="is-size-2 header-small__title">{title}</p>
          <p className="is-size-4">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default HeaderSmall;
