import "./SideMenu.scss";
import { IoIosClose } from "react-icons/io";
import { links } from "../links";
import { Link } from "react-router-dom";

interface Props {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideMenu = ({ isActive, setIsActive }: Props) => {
  return (
    <aside
      className={`app__side-container ${isActive ? "app__side-active" : ""}`}
    >
      <div
        style={{
          textAlign: "end",
        }}
      >
        <span className="app__close-icons" onClick={() => setIsActive(false)}>
          <IoIosClose />
        </span>
      </div>
      <div>
        {links.map(({ label, link }, i) => (
          <Link key={i} to={`/${link}`} className="app__link">
            {label}
          </Link>
        ))}
        <Link to={`/contact`} className="app__link">
          календарь
        </Link>
      </div>
    </aside>
  );
};

export default SideMenu;
