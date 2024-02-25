import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import classes from "./WhatCustomerSaying.module.css";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import Highlight from "../../common/Highlight/Highlight";
import Text from "../../common/Text/Text";
import { avater } from "../../../assets";

import { GiRoundStar } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WhatCustomerSaying.css";
const data = [
  {
    rating: 5,
    info: "“With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website”",
    img: avater,
    name: "Imam Hossain",
    designation: "Product Designer, Karigoor",
  },
  {
    rating: 5,
    info: "“With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website”",
    img: avater,
    name: "Imam Hossain",
    designation: "Product Designer, Karigoor",
  },
  {
    rating: 5,
    info: "“With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website”",
    img: avater,
    name: "Imam Hossain",
    designation: "Product Designer, Karigoor",
  },
];
const WhatCustomerSaying = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow isActive={!currentSlide} />,
    nextArrow: <CustomNextArrow isActive={currentSlide === data.length - 1} />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={classes.wrapper}>
      <div className={classes.headingContainer}>
        <SectionHeading mobileCenter>
          What our customer are <Highlight>saying</Highlight>
        </SectionHeading>
        <Text base100 lg mobileCenter>
          We are trusted numerous companies from different business to meet
          their needs
        </Text>
      </div>
      <div className={classes.container}>
        <Slider {...settings}>
          {data.map((el, i) => (
            <div className={classes.boxWrapper} key={i}>
              <div className={classes.box}>
                <div className={classes.rating}>
                  {[...Array(el.rating)].map((_, i) => (
                    <GiRoundStar className={classes.star} key={i} />
                  ))}
                  <Text md semiBold base0>
                    {el.rating}
                  </Text>
                </div>
                <Text xl base50>
                  {el.info}
                </Text>
                <div className={classes.userContainer}>
                  <img src={el.img} alt="#" className={classes.user} />
                  <div className={classes.nameAndDesignation}>
                    <Text md semiBold base0>
                      {el.name}
                    </Text>
                    <Text base100 sm>
                      {el.designation}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhatCustomerSaying;
const CustomPrevArrow = ({ isActive, onClick }) => {
  return (
    <button
      className={`${classes.previousButton} ${
        isActive ? classes.activeButton : ""
      }`}
      onClick={onClick}
    >
      <IoIosArrowForward className={classes.arrow} />{" "}
    </button>
  );
};

const CustomNextArrow = ({ isActive, onClick }) => {
  // Custom next arrow component
  return (
    <button
      onClick={onClick}
      className={`${classes.nextButton} ${
        isActive ? classes.activeButton : ""
      }`}
    >
      <IoIosArrowBack className={classes.arrow} />
    </button>
  );
};
