import React, { useState, useEffect } from "react";
import { NavData as data } from "./nav-data";
import GenerateID from "../../id-generator";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const isBrowser = typeof window !== "undefined";
  let prevScrollPos = isBrowser && window.pageYOffset;

  useEffect(() => {
    const controlNavbar = () => {
      let currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos && currentScrollPos < 400);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={
        showNavbar
          ? "navbar py-4 nav nav--initial"
          : "navbar py-0 nav nav--hidden"
      }
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            href="#home"
            className={
              showNavbar
                ? "navbar-item nav__title nav-item--white"
                : "navbar-item nav__title"
            }
          >
            {data.leftPane.text}
          </a>
          <a
            className="navbar-burger"
            role="button"
            aria-label="menu"
            aria-expanded="false"
            href=""
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            {data.rightPane.map((tab) => (
              <a
                key={GenerateID()}
                className={
                  showNavbar ? "navbar-item nav-item--white" : "navbar-item"
                }
                href={`#${tab.tabName.replace(/\s/g, "-").toLowerCase()}`}
              >
                {tab.tabName}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
