import "./Section3.scss";

const Section3 = () => {
  return (
    <section className="section3-page">
      <div className="section3-page__container">
        <div className="section3-page__wrapper">
          <div className="section3-page__right">
            <div className="section3-wrapper">
              <span className="section3-card-header">о нас</span>
              <div className="section3-card">
                <h1>Torem ipsum dolor sit</h1>
                <p className="section3-page__desc">
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="section3-page__left">
            <div className="section3-left-imgWrapper">
              <img src="/images/course-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
