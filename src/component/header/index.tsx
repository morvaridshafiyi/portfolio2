"use client";
import React, { useState } from "react";
import { MenuList } from "../../data/menu";
import { iMenu } from "../../interface/iMenu";
import iconSet from "../../assets/style/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import { useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to: any, element: any) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to: any, element: any) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollTo = () => {
    scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  const scrollMore = () => {
    scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to: any) => {
    console.log(to);
  };
  return (
    <header className="bg-black-100 p-24 flex justify-between fixed left-0 right-0 top-0 z-20">
      <ul className="hidden laptop:flex">
        {MenuList.map((menu: iMenu) => {
          return (
            <Link
              activeClass="active"
              to={menu.label}
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              onSetActive={handleSetActive}
              key={menu.label}
            >
              <span
                className={`cursor-pointer p-8 text-gray-100 text-16 mr-10 border-b-2 border-black-100 ease-in-out duration-300 font-semibold hover:text-orange-100 hover:border-orange-100 ${
                  menu.label === activeMenu
                    ? "border-orange-100 text-orange-100"
                    : ""
                } `}
              >
                {menu.title}
              </span>
            </Link>
          );
        })}
      </ul>
      <div className="flex laptop:hidden">
        <div className="hamburger">
          <input type="checkbox" />
          <div className="hamburgerlines">
            <span className="lines line1"></span>
            <span className="lines line2"></span>
            <span className="lines line3"></span>
          </div>
          <ul className="menu-items">
            {MenuList.map((menu: iMenu) => {
              return (
                <li>
                  <Link
                    activeClass="active"
                    to={menu.label}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={700}
                    onSetActive={handleSetActive}
                    key={menu.label}
                  >
                    <span
                      className={`text-white-100 text-18 ease-in-out duration-300 font-semibold ${
                        menu.label === activeMenu ? "" : ""
                      } `}
                    >
                      {menu.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>{" "}
      </div>
      <div onClick={scrollToTop} className="cursor-pointer">
        <IcomoonReact iconSet={iconSet} color="#fff" size={24} icon="library" />
      </div>
    </header>
  );
};
export default Header;
