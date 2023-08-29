import React from "react";
import Logo from "../resource/footstep.svg";
import "../index.css";

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
  return (
    <div className="navHeadingFont h-[5rem] w-[100vw] flex justify-center items-center  ">
      <div className="w-[95%] flex justify-between items-center ">
        <a href="#" className="flex justify-center items-center">
          <img src={Logo} className="h-14" />
          <h1 className="p-2 m-2 text-xl text-[#34a853] font-medium">
            Be<span className="text-black">Neutral</span>
          </h1>
        </a>
        <div className=" flex justify-evenly items-center h-auto w-[55%] text-gray-900 font-medium text-lg  ">
       
            {navItems.map((value, index) => (
              <div className="relative">
              <a
                href={value.url}
                className="nav-link "
                key={index}
              >
                {value.name}
              </a>
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
