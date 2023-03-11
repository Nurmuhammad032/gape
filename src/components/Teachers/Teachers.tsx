import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./Teachers.scss";
import { useMediaQuery } from "@mui/material";

const images = [
  "/images/teachers-img1.png",
  "/images/teachers-img1.png",
  "/images/teachers-img1.png",
  "/images/teachers-img1.png",
  "/images/teachers-img1.png",
];

const Teachers = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const isDesktop = useMediaQuery("(min-width:900px)");

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const handleAnimation = async () => {
    if (inView) {
      await controls1.start({ y: 0, opacity: 1 });
      await controls2.start({ y: 0, opacity: 1 });
    } else {
      await controls1.start({ y: 50, opacity: 0 });
      await controls2.start({ y: 50, opacity: 0 });
    }
  };

  useEffect(() => {
    handleAnimation();
  }, [inView]);

  return (
    <section className="teachers" ref={ref}>
      <div className="teachers__container">
        <h1 className="teachers__title">Наставники</h1>
      </div>
      <div className="teachers__img-wrapper">
        {images.map((img, i) =>
          isDesktop ? (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={controls1}
              transition={{ duration: 0.5, type: "tween" }}
              className="teachers__img"
              key={i}
            >
              <img src={img} alt="teachers" />
            </motion.div>
          ) : (
            <div className="teachers__img" key={i}>
              <img src={img} alt="teachers" />
            </div>
          )
        )}
      </div>
      <div className="teachers__container">
        {isDesktop ? (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={controls2}
            transition={{ duration: 0.5, type: "tween" }}
            className="teachers__info-wrapper"
          >
            <div className="teachers__info-left">
              <h1>Horem ipsum </h1>
              <p className="teachers__info-p">
                Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus.
              </p>
            </div>
            <div className="teachers__info-right">
              <p>“Jorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
            </div>
          </motion.div>
        ) : (
          <div className="teachers__info-wrapper">
            <div className="teachers__info-left">
              <h1>Horem ipsum </h1>
              <p className="teachers__info-p">
                Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus.
              </p>
            </div>
            <div className="teachers__info-right">
              <p>“Jorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Teachers;
