import "./Navbar.scss";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineCalendar } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { links } from "./links";
import { Link, useLocation } from "react-router-dom";
import SideMenu from "./SideMenu/SideMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setIsScrolled(false);
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      document.addEventListener("scroll", handleScroll);
      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsScrolled(true);
    }
  }, [pathname]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "navbar-active" : ""}`}>
        <div className="navbar__wrapper">
          <div className="navbar__logo-wrapper">
            <Link to={""}>
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
          <ul className="navbar__links-wrapper">
            <li>
              <span className="navbar__search-icon">
                <FiSearch />
              </span>
            </li>
            {links.map((link) => (
              <li key={link.link}>
                <Link to={link.link}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/calendar">
                <span>
                  <HiOutlineCalendar />
                </span>
              </Link>
            </li>
          </ul>
          <div className="navbar__hamburger">
            <span onClick={() => setIsActive(true)}>
              <RxHamburgerMenu />
            </span>
          </div>
        </div>
      </nav>
      <SideMenu isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default Navbar;
