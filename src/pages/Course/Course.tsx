import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Payment from "../../components/Payment/Payment";
import "./Course.scss";

const data = [
  "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac ",
  "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac ",
  "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac ",
  "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac ",
];

const Course = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="course-page">
        <div className="course-page__container">
          <div className="course-page__wrapper">
            <div className="course-page__right">
              <div>
                <h1>Torem ipsum dolor sit</h1>
                <p className="course-page__desc-header">старт: 06 февраля</p>
                <p className="course-page__desc">
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
                </p>
                <p className="course-page__desc-price">200.000 сум</p>
                <button onClick={() => setOpenModal(true)}>Купить</button>
              </div>
            </div>
            <div className="course-page__left">
              <img src="/images/course-img.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          position: "relative",
          zIndex: 60,
        }}
      >
        <AnimatePresence>
          {openModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween" }}
            >
              <Payment close={setOpenModal} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* <Payment close={setOpenModal} /> */}
      <section className="course-page__section-2">
        <div className="course-page__sectoin-2-container">
          <h1>Vorem ipsum dolor </h1>
          <div className="course-page__sectoin-2-wrapper">
            {data.map((item, i) => (
              <div key={i} className="course-page__cards">
                <img src="/images/course-section2-img.png" alt="" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;
