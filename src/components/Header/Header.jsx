import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import logoImg from "../../assests/images/logo.jpeg";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About Us",
    url: "./components/About-us/AboutUs.jsx",
  },

  {
    display: "Our Events",
    url: "#",
  },
 {
    display: "Past Events",
    url: "#",
  },

  {
    display: "Our Team",
    url: "#",
  },
 
  {
    display: "Join Us",
    url: "#",
  },
  
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
        <div className="logo">
        
              <h2 className="d-flex align-items-center justify-content-between gap-2">
                <img src={logoImg} alt="Logo" height={100} width={95} />
                Dhyan Chand Sports Council
              </h2>
            </div>
 
          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
