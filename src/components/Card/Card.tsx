import "./Card.scss";
import { Link } from "react-router-dom";

interface Props {
  img: string;
  title: string;
  link: string;
  day: string;
  month: string;
  desc: string;
}

const Card = ({ img, title, link, day, month, desc }: Props) => {
  return (
    <Link to={`/${link}`} className="card">
      <div>
        <div className="card__img-wrapper">
          <img src={`${img}`} alt="" />
        </div>
        <div className="card__title">
          <h1>{title} </h1>
          <div>
            <p>{day}</p>
            <span>{month}</span>
          </div>
        </div>
        <div className="card__desc">
          <p>{desc}</p>
          <img src="/svg/arrow-right.svg" alt="" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
