import { useState } from "react";
import "../index.css";
import earth from "../resource/earthIllustration.svg";
import house from "../resource/house.svg";
import flight from "../resource/flight.svg"

const Calculate = () => {
  const [activeButton, setActiveButton] = useState("welcome");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="h-[100vh] w-[100vw] flex">
      <div className="h-full w-[40%] flex flex-col justify-center items-center">
        <div className="h-[100%] w-[95%]  flex flex-col justify-center bg-slate-50 shadow-md ">
          {/* form  */}
          <div className="h-[10%] w-[100%] bg-green-400 rounded-t-lg  flex items-center justify-center  ">
            <button
              className={`p-2 m-2 bg-white font-semibold text-[#34a853] rounded-lg hover:shadow-xl hover:transition-all duration-100 ease-linear ${
                activeButton === "welcome" && "bg-[#228b22]"
              }`}
              onClick={() => handleButtonClick("welcome")}
            >
              Welcome
            </button>
            <button
              className={`p-2 m-2 bg-white font-semibold text-[#34a853] rounded-lg hover:shadow-xl hover:transition-all duration-100 ease-linear ${
                activeButton === "house" && "bg-[#228b22]"
              }`}
              onClick={() => handleButtonClick("house")}
            >
              House
            </button>
            <button
              className={`p-2 m-2 bg-white font-semibold text-[#34a853] rounded-lg hover:shadow-xl hover:transition-all duration-100 ease-linear ${
                activeButton === "flight" && "bg-[#228b22]"
              }`}
              onClick={() => handleButtonClick("flight")}
            >
              Flight
            </button>
            <button
              className={`p-2 m-2 w-14 bg-white font-semibold text-[#34a853] rounded-lg hover:shadow-xl hover:transition-all duration-100 ease-linear ${
                activeButton === "car" && "bg-[#228b22]"
              }`}
              onClick={() => handleButtonClick("car")}
            >
              Car
            </button>
            <button
              className={`p-2 m-2 bg-white font-semibold text-[#34a853] rounded-lg hover:shadow-xl hover:transition-all duration-100 ease-linear ${
                activeButton === "motorbikes" && "bg-[#228b22]"
              }`}
              onClick={() => handleButtonClick("motorbikes")}
            >
              Motorbikes
            </button>
            <button
              className={`p-2 m-2 bg-white font-semibold text-[#34a853] rounded-lg hover:shadow-xl hover:transition-all duration-100 ease-linear${
                activeButton === "bus" && "bg-[#228b22]"
              }`}
              onClick={() => handleButtonClick("bus")}
            >
              Bus and Rail
            </button>
          </div>
          <div className="w-[100%] h-[90%]">
            {/* Welcome screen */}
            {activeButton === "welcome" && (
              <div className="h-full w-full rounded-md shadow-xl flex justify-center items-center">
                <div className="h-[95%] w-[95%] flex flex-col justify-center items-center ">
                  <p className="text-xl font-semibold text-center text-[#34a853] z-[1] ">
                    Join BeNeutral Calculator in reducing your carbon footprint
                    today for a greener, more sustainable future
                  </p>
                  <div>
                    <img
                      src={earth}
                      alt="footprint image"
                      className="w-[60vh] h-[50vh] m-4 earthIllu rounded-full z-[-3]"
                    />
                  </div>
                  <div className="font-semibold headColor">
                    <p>Steps to calculate:</p>
                    <p>
                      1.Enter the necessary asked details clicking on button
                      repsectively.
                    </p>
                    <p>
                      2.Make sure you have enter the data in asked format only.
                    </p>
                    <p>
                      3.Click on calculate button to see your CO<sub>2</sub>{" "}
                      footprint.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* House screen */}
            {activeButton === "house" && (
              <div className="h-full w-full flex justify-center items-center relative top-14">
                <div className="h-[95%] w-[95%] flex flex-col items-center ">
                  <div className="h-[20%] w-[100%] flex  flex-col justify-center  items-center">
                    <p className=" text-xl font-semibold">
                      Household carbon footprint calculator
                    </p>
                    <p className="z-[1] relative w-[80%] text-center p-2 mt-3">
                      Enter your consumption of each type of energy, and press
                      the Calculate button.
                    </p>
                  </div>

                  <div className="h-[90%] w-[100%] mt-4  z-[1] text-[#1b532a] font-extrabold">
                    <div>
                      <label className="font-medium">
                        How many people are in your Household?
                      </label>
                      <input
                        type="number"
                        name="noOfPeople"
                        min="1"
                        max="30"
                        className=" ml-3 border-black border-2 rounded-md"
                      />
                    </div>
                    <div className="mt-6">
                      <label className="font-medium">Electricity:</label>
                      <input
                        type="number"
                        name="noOfPeople"
                        min="1"
                        max="30"
                        className=" ml-2 border-black border-2 rounded-md relative left-14"
                      />
                      <span className="relative left-[3.8rem] font-semibold">
                        kWh
                      </span>
                    </div>
                    <div className="mt-2">
                      <label className="font-medium">Natural gas :</label>
                      <input
                        type="number"
                        name="noOfPeople"
                        min="1"
                        max="30"
                        className=" ml-2 relative left-[2.30rem] border-black border-2 rounded-md"
                      />
                      <span className="ml-1 relative left-10 font-semibold">
                        kWh
                      </span>
                    </div>
                    <div className="mt-2">
                      <label className="font-medium">LPG:</label>
                      <input
                        type="number"
                        name="noOfPeople"
                        min="1"
                        max="30"
                        className=" ml-3 border-black border-2 rounded-md relative left-[5.8rem]"
                      />
                      <span className="ml-1 relative left-24 font-semibold">
                        Liters
                      </span>
                    </div>
                    <div className="mt-2">
                      <label className="font-medium">Woodeen pallets:</label>
                      <input
                        type="number"
                        name="noOfPeople"
                        min="1"
                        max="30"
                        className=" ml-3 border-black border-2 rounded-md"
                      />
                      <span className="ml-1 font-semibold">kg</span>
                    </div>
                    <div className="w-[100%] h-[100%] flex relative top-10">
                      <button className="relative font-bold text-white rounded-lg bg-[#34a853]  h-8 w-[25%] mr-4  hover:translate-y-1 transition duration-300 ease-linear">
                        Calculate
                      </button>
                      <p className="text-black  relative top-1">
                        Total house footprint = 23 metric tons of CO<sub>2</sub>
                      </p>
                    </div>
                  </div>
                  <img
                    src={house}
                    alt="house image"
                    className="opacity-30 absolute z-[0] top-[2rem]"
                  />
                </div>
              </div>
            )}

            {/* Flight screen */}
            {activeButton === "flight" && (
            <div className="h-full w-full flex justify-center items-center relative top-14">
                <div className="h-[95%] w-[95%] flex flex-col items-center ">
                  <div className="h-[20%] w-[100%] flex  flex-col justify-center  items-center">
                    <p className=" text-xl font-semibold">
                      Household carbon footprint calculator
                    </p>
                    <p className="z-[1] relative w-[80%] text-center p-2 mt-3">
                      Enter your consumption of each type of energy, and press
                      the Calculate button.
                    </p>
                  </div>

                  <div className="h-[90%] w-[100%] mt-4  z-[1] text-[#1b532a] font-extrabold">
                    <div>
                      <label className="font-medium">
                        How many people are in your Household?
                      </label>
                      <input
                        type="number"
                        name="noOfPeople"
                        min="1"
                        max="30"
                        className=" ml-3 border-black border-2 rounded-md"
                      />
                    </div>
                    <div className="mt-6">
                      <label className="font-medium">Electricity:</label>
                      <input
                        type="number"
                        name="noOfPeople"
                        min="1"
                        max="30"
                        className=" ml-2 border-black border-2 rounded-md relative left-14"
                      />
                      <span className="relative left-[3.8rem] font-semibold">
                        kWh
                      </span>
                    </div>
                    <div className="mt-2">
                      <label className="font-medium">Natural gas :</label>
                      <input
                        type="number"
                        name="noOfPeople"
                        min="1"
                        max="30"
                        className=" ml-2 relative left-[2.30rem] border-black border-2 rounded-md"
                      />
                      <span className="ml-1 relative left-10 font-semibold">
                        kWh
                      </span>
                    </div>
                    <div className="mt-2">
                      <label className="font-medium">LPG:</label>
                      <input
                        type="number"
                        name="noOfPeople"
                        min="1"
                        max="30"
                        className=" ml-3 border-black border-2 rounded-md relative left-[5.8rem]"
                      />
                      <span className="ml-1 relative left-24 font-semibold">
                        Liters
                      </span>
                    </div>
                    <div className="mt-2">
                      <label className="font-medium">Woodeen pallets:</label>
                      <input
                        type="number"
                        name="noOfPeople"
                        min="1"
                        max="30"
                        className=" ml-3 border-black border-2 rounded-md"
                      />
                      <span className="ml-1 font-semibold">kg</span>
                    </div>
                    <div className="w-[100%] h-[100%] flex relative top-10">
                      <button className="relative font-bold text-white rounded-lg bg-[#34a853]  h-8 w-[25%] mr-4  hover:translate-y-1 transition duration-300 ease-linear">
                        Calculate
                      </button>
                      <p className="text-black  relative top-1">
                        Total house footprint = 23 metric tons of CO<sub>2</sub>
                      </p>
                    </div>
                  </div>
                  <img
                    src={flight}
                    alt="house image"
                    className="opacity-50 absolute z-[0] top-[2rem]"
                  />
                </div>
              </div>
            )}

            {/* Car screen */}
            {activeButton === "car" && (
              <div className="h-full w-full bg-purple-500">Car Screen</div>
            )}

            {/* Motorbikes screen */}
            {activeButton === "motorbikes" && (
              <div className="h-full w-full bg-pink-500">Motorbikes Screen</div>
            )}

            {/* Bus and Rail screen */}
            {activeButton === "bus" && (
              <div className="h-full w-full bg-gray-500">
                Bus and Rail Screen
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-full w-[60%] bg-green-200">{/* output section */}</div>
    </div>
  );
};

export default Calculate;
