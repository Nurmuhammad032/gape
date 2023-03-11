import "./Home.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  Landing,
  Section3,
  Section5,
  Section6,
  Teachers,
} from "../../components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";

const data = [
  {
    link: "course",
    img: "/images/card-img1.png",
    title: "Porem ipsum dolor",
    day: "06",
    month: "февраля",
    desc: "Morem ipsum dolor sit amet, consectetur",
  },
  {
    link: "course",
    img: "/images/card-img1.png",
    title: "Porem ipsum dolor",
    day: "06",
    month: "февраля",
    desc: "Morem ipsum dolor sit amet, consectetur",
  },
  {
    link: "course",
    img: "/images/card-img1.png",
    title: "Porem ipsum dolor",
    day: "06",
    month: "февраля",
    desc: "Morem ipsum dolor sit amet, consectetur",
  },
];

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  const isDesktop = useMediaQuery("(min-width:900px)");

  const animateCard = {
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 50,
  };

  return (
    <>
      <Landing />
      <section className="course">
        <div className="course__title">
          <h1>курсы</h1>
        </div>
        <div className="card-wrapper" ref={ref}>
          {data.map((item, i) =>
            isDesktop ? (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={animateCard}
                transition={{ type: "tween", duration: 0.5 }}
                key={i}
              >
                <Card
                  img={item.img}
                  title={item.title}
                  link={item.link}
                  day={item.day}
                  month={item.month}
                  desc={item.desc}
                />
              </motion.div>
            ) : (
              <div key={i}>
                <Card
                  img={item.img}
                  title={item.title}
                  link={item.link}
                  day={item.day}
                  month={item.month}
                  desc={item.desc}
                />
              </div>
            )
          )}
        </div>
        <div className="course__btn">
          <Link to="/courses">Смотреть все</Link>
        </div>
      </section>
      <Section3 />
      <Teachers />
      <Section5 />
      <Section6 />
    </>
  );
};

export default Home;
