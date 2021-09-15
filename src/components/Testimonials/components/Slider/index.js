import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderTile from "../SliderTile";
import { TestimonialsData as data } from "../../testimonials-data";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Slider = () => {
  const { customerStories } = data;
  return (
    <Carousel
      className="py-6"
      arrows={false}
      swipeable={true}
      autoPlaySpeed={8000}
      draggable={true}
      showDots={true}
      responsive={responsive}
      centerMode={false}
      ssr={true}
      infinite={true}
      autoPlay={true}
      minimumTouchDrag={80}
      keyBoardControl={true}
      customTransition="all .5s"
      transitionDuration={500}
      containerClass="carousel"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="slider-tile"
    >
      {customerStories.map((story) => (
        <SliderTile
          name={story.customerName}
          img={story.customerImg}
          companyName={story.companyName}
          story={story.storyText}
        />
      ))}
    </Carousel>
  );
};

export default Slider;
