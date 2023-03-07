import "./Navbar.scss";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineCalendar } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { links } from "./links";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { RxChevronDown } from "react-icons/rx";
import SideMenu from "./SideMenu/SideMenu";
import { accordionStyles, accordionSummeryStyles } from "../accordionStyles";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

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
            {links.map((link, i) =>
              link.drop ? (
                <li key={i} className="drop-li">
                  <Link to={link.link}>{link.label}</Link>
                  <div className="navbar__drop-container">
                    {link.dropItem?.map(({ title, dropLink }, i) => (
                      <div key={i} className="navbar__drop-wrapper">
                        <Accordion
                          expanded={expanded === `panel${i}`}
                          onChange={handleChange(`panel${i}`)}
                          sx={{
                            ...accordionStyles,
                          }}
                        >
                          <AccordionSummary
                            expandIcon={
                              <RxChevronDown className="app__expand-icon" />
                            }
                            aria-controls={`panel${i + 1}bh-content`}
                            id={`panel${i + 1}bh-header`}
                            sx={{
                              ...accordionSummeryStyles,
                            }}
                          >
                            <p className="app__drop-title">{title}</p>
                          </AccordionSummary>
                          <AccordionDetails
                            sx={{
                              borderTop: "2px solid #000",
                            }}
                          >
                            {dropLink.map(({ label, link }, i) => (
                              <Link to={link} key={i} className="drop-links">
                                {label}
                              </Link>
                            ))}
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={i}>
                  <Link to={link.link}>{link.label}</Link>
                </li>
              )
            )}
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
