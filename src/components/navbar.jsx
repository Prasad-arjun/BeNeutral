import React, { useState, useEffect } from "react";
import Logo from "../resource/footstep.svg";
import { debounce } from "lodash";
import "../index.css";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Shery from "sheryjs";

/**
 * Navbar component that displays a navigation bar with links to different sections of the website.
 * @returns {JSX.Element} The JSX element that represents the Navbar component.
 */
const Navabr = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Function to handle scroll events
  const handleScroll = debounce(() => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

/*   Shery.makeMagnet(".Name", {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  }); */

  return (
    <div
      className={` navHeadingFont ${
        isSticky ? "sticky" : ""
      } navHeadingFont h-[5rem] w-[100vw] flex justify-center items-center pt-4 cursor-pointer`}
    >
      <div className="w-[95%] flex justify-between items-center">
        <ScrollLink
          to="/"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={5}
          duration={1300}
          className="flex justify-center items-center"
        >
          <img src={Logo} className="h-14" alt="Logo" />
          <h1 className="p-2 m-2 text-xl text-[#34a853] font-medium Name">
            Be<span className="text-black">Neutral</span>
          </h1>
        </ScrollLink>
        <div className="flex justify-evenly items-center h-auto w-[55%] text-gray-900 font-medium text-lg">
          <ScrollLink
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1300}
            to="Mission"
            className="Name nav-link relative"
          >
            Mission
          </ScrollLink>
          {/*      <RouterLink to="/calculate" className="nav-link relative">
            Calculate
          </RouterLink> */}
          <ScrollLink
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1300}
            to="Learn"
            className="Name nav-link relative"
          >
            Learn
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1300}
            to="Events"
            className=" Name nav-link relative"
          >
            Events
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1300}
            to="forIndustries"
            className="Name nav-link relative"
          >
            For industries
          </ScrollLink>
          <RouterLink
            to="signInOut"
            transition
            duration-300
            ease-linear
            className="bg-[#34a853] text-center text-white h-10 w-24 rounded-md hover:-translate-y-2 "
          >
            <p className="mt-1">Sign in</p>
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default Navabr;
