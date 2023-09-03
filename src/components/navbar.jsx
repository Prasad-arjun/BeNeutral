import React, { useState, useEffect } from "react";
import Logo from "../resource/footstep.svg";
import "../index.css";
import { Link } from "react-scroll";

const navItems = [
  {
    name: "Mission",
    url: "www.google.com",
  },
  {
    name: "Calculate",
    url: "www.google.com",
  },
  {
    name: "Learn",
    url: "www.google.com",
  },
  {
    name: "Events",
    url: "www.google.com",
  },
  {
    name: "For industries",
    url: "www.google.com",
  },
];

const Navabr = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 100) { // Adjust the scroll threshold as needed
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navHeadingFont ${isSticky ? "sticky" : ""} navHeadingFont h-[5rem] w-[100vw] flex justify-center items-center `}>
      <div className="w-[95%] flex justify-between items-center">
        <Link to="/" className="flex justify-center items-center">
          <img src={Logo} className="h-14" alt="Logo" />
          <h1 className="p-2 m-2 text-xl text-[#34a853] font-medium">
            Be<span className="text-black">Neutral</span>
          </h1>
        </Link>
        <div className="flex justify-evenly items-center h-auto w-[55%] text-gray-900 font-medium text-lg">
          {navItems.map((value, key) => (
            <div className="relative" key={key}>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50} // Adjust this offset as needed
                duration={1300}
                to={value.name}
                className="nav-link"
              >
                {value.name}
              </Link>
            </div>
          ))}
          <button className="bg-[#34a853] text-white h-10 w-24 rounded-md hover:-translate-y-2 transition duration-300 ease-linear">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navabr;
