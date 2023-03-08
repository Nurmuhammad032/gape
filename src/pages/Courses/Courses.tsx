import "./Courses.scss";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { data } from "./data";
import { Card } from "../../components";

type DataItem = {
  link: string;
  img: string;
  title: string;
  tab: string;
  day: string;
  month: string;
  desc: string;
};

const tab = ["популярное", "уроки", "дегустация", "КУРСЫ"];

const Courses = () => {
  const [currentTab, setCurrentTab] = useState("популярное");
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);

  useEffect(() => {
    const filtered = data.filter((item) => item.tab === currentTab);

    setFilteredData(filtered);
  }, [currentTab]);

  const handleTabClick = (index: number) => {
    setCurrentTab(tab[index]);
  };

  return (
    <>
      <section
        className="courses"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/courses-back.png)",
        }}
      >
        <div className="courses__container">
          <div className="courses__wrapper">
            <h1>все курсы Corem ipsum dolor sit </h1>
            <p>
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
      </section>

      <section className="courses-items">
        <div className="courses-items__container">
          <div>
            <h1 className="courses-items__title">все курсы</h1>

            <ul className="courses-items__tab-wrapper">
              {tab.map((item, i) => (
                <li
                  key={i}
                  onClick={() => handleTabClick(i)}
                  className={`${currentTab === item ? "active-tab" : ""}`}
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="card-wrapper">
              <AnimatePresence>
                {filteredData.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ type: "tween" }}
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
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
