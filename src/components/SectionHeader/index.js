import React, { useState, useEffect } from "react";

const SectionHeader = ({
  title,
  subtitle,
  buttonText,
  children,
  height,
  id,
  img,
  backgroundRgb,
  color,
  titleSize,
  textTransformSpeed,
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.innerHeight > 800 && window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offsetY]);

  return (
    <section
      id={id}
      className={`section p-0 section-header ${id}`}
      style={{
        backgroundImage: `url(${img})`,
        height: `${height}`,
      }}
    >
      <div
        className="section-header__color-cover"
        style={{
          backgroundColor: `rgba(${backgroundRgb}, 0.7)`,
        }}
      >
        <div
          className="container section-header__text"
          style={
            textTransformSpeed && {
              transform: `translateY(${offsetY * textTransformSpeed}px`,
            }
          }
        >
          <p className="section-header__title" style={{ color: `${color}` }}>
            {title}
          </p>
          <p className="section-header__subtitle" style={{ color: `${color}` }}>
            {subtitle}
          </p>
          <a
            href="#products"
            className="button section-header__button px-6 is-link"
          >
            <b>{buttonText.toUpperCase()}</b>
          </a>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
