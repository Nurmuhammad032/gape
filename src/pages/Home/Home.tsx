import "./Home.scss";
import { Card, Landing, Section3, Section5, Teachers } from "../../components";
import { Link } from "react-router-dom";

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
  return (
    <>
      <Landing />
      <section className="course">
        <div className="course__title">
          <h1>курсы</h1>
        </div>
        <div className="card-wrapper">
          {data.map((item, i) => (
            <Card
              key={i}
              img={item.img}
              title={item.title}
              link={item.link}
              day={item.day}
              month={item.month}
              desc={item.desc}
            />
          ))}
        </div>
        <div className="course__btn">
          <Link to="/courses">Смотреть все</Link>
        </div>
      </section>
      <Section3 />
      <Teachers />
      <Section5 />
    </>
  );
};

export default Home;
