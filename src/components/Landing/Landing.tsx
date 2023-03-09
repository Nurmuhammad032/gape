import "./Landing.scss";
import React from "react";
import { useState, useEffect } from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TiLocationOutline } from "react-icons/ti";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const leftSideSlider = [
  {
    title: "Yorem ipsum dolor",
    desc: "Torem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Yorem ipsum dolor",
    desc: "Torem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Yorem ipsum dolor",
    desc: "Torem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const rightSideSlider = [
  {
    date: "6 февраля",
    hours: "12:00",
    loc: "Yorem ipsum dolor ",
  },

  {
    date: "6 февраля",
    hours: "12:00",
    loc: "Yorem ipsum dolor ",
  },

  {
    date: "6 февраля",
    hours: "12:00",
    loc: "Yorem ipsum dolor ",
  },
];

const Landing = () => {
  const [width, setWidth] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(0);
  const [activeDot, setActiveDot] = useState(0);
  const matches = useMediaQuery("(min-width: 576px)");

  function calculateSliderPositions(
    numSliders: number,
    width: number
  ): number[] {
    const sliderPositions: number[] = [];

    for (let i = 0; i < numSliders; i++) {
      sliderPositions.push(i * width);
    }

    return sliderPositions;
  }

  const numberOfSlides =
    rightSideSlider.length === leftSideSlider.length
      ? leftSideSlider.length
      : 0;

  const sliderPositions = calculateSliderPositions(numberOfSlides, width);

  const ref = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, [matches]);

  const handleDotClick = (index: number) => {
    setActiveDot(index);
    setSliderPosition(-sliderPositions[index]);
  };

  useEffect(() => {
    handleDotClick(0);
  }, [matches]);

  return (
    <section
      className="landing"
      style={{
        background: "url('/gif/landing-back.gif')",
      }}
    >
      <div className="landing__wrapper">
        <div className="landing__right">
          <div className="landing__slider-wrapper">
            {leftSideSlider.map(({ title, desc }, i) => {
              const [firstWord, ...others] = title.split(" ");

              return (
                <div
                  className={`landing__slider ${
                    activeDot === i ? "active-slider" : ""
                  }`}
                  style={{
                    transform: `translateX(${sliderPosition + 3}px)`,
                  }}
                  ref={ref}
                  key={i}
                >
                  <h1 className={`${i !== 0 ? "notFirstSlide-title" : ""}`}>
                    {firstWord} <span>{others.join(" ")}</span>{" "}
                  </h1>
                  <p>{desc}</p>
                </div>
              );
            })}
          </div>
          <Link to="/courses">Купить</Link>
        </div>
        <div className="landing__left">
          <div className="landing__slider-wrapper">
            {rightSideSlider.map(({ date, hours, loc }, i) => (
              <ul
                key={i}
                className={`landing__slider ${
                  activeDot === i ? "active-slider" : ""
                }`}
                style={{
                  transform: `translateX(${sliderPosition}px)`,
                }}
              >
                <li>
                  <span>
                    <HiOutlineCalendar />
                  </span>
                  <p>{date}</p>
                </li>
                <li>
                  <span>
                    <AiOutlineClockCircle />
                  </span>
                  <p>{hours}</p>
                </li>
                <li>
                  <span>
                    <TiLocationOutline />
                  </span>
                  <p>{loc}</p>
                </li>
              </ul>
            ))}
          </div>
          <h6>700.000 сум</h6>
        </div>
      </div>
      <div className="landing__dots-container">
        <div className="landing__dots-wrapper">
          {Array.from({ length: numberOfSlides }, (_, i) => (
            <div
              className={`slider-dots ${activeDot === i ? "active-dot" : ""}`}
              key={i}
              onClick={() => handleDotClick(i)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Landing;
