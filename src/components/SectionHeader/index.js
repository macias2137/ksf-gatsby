import React, { useState, useEffect } from "react";

const SectionHeader = ({
  title,
  subtitle,
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
        className={`section-header__color-cover is-flex is-align-items-center is-justify-content-center`}
        style={{
          backgroundColor: `rgba(${backgroundRgb}, 0.7)`,
        }}
      >
        <div
          className="container section-header__text is-flex is-flex-direction-column is-align-items-center is-justify-content-center"
          style={
            textTransformSpeed && {
              transform: `translateY(${offsetY * textTransformSpeed}px`,
            }
          }
        >
          <p
            className="section-header__title"
            style={{ color: `${color}`, fontSize: `${titleSize}` }}
          >
            {title}
          </p>
          {subtitle && (
            <p
              className="section-header__subtitle"
              style={{ color: `${color}` }}
            >
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
