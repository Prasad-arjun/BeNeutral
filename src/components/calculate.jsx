import { useState } from "react";
import React from "react";
import Marquee from "react-fast-marquee";
import { Chart } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import "../index.css";
import earth from "../resource/earthIllustration.svg";
import house from "../resource/house.svg";
import flight from "../resource/flight.svg";
import car from "../resource/car.svg";
import bike from "../resource/bikes.svg";
import train from "../resource/train.svg";
import footprint from "../resource/footprint.png"

const Calculate = () => {
  const [activeButton, setActiveButton] = useState("welcome");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const labels = ["House", "Flight", "Car", "MotorBikes", "Railways"];
  const barColors = ["#b91d47", "#ff6900", "#2b5797", "#e8c3b9", "#008080"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Carbon Emission in detail",
        backgroundColor: barColors, // Background color with alpha (transparency)
        borderColor: "rgba(0,0,0)", // Border color with alpha (1 for no transparency)
        borderWidth: 1, // Border width in pixels
        data: [12, 10, 5, 2, 20],
      },
    ],
  };

  return (
    <div className="h-[100vh] w-[100vw] flex">
      <div className="h-full w-[40%] flex flex-col justify-center items-center">
        <div className="h-[100%] w-[95%]  flex flex-col justify-center bg-slate-50 shadow-md ">
          {/* form  */}
          <div className="h-[10%] w-[100%] bg-green-400 rounded-t-lg  flex items-center justify-center z-[2]  ">
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
                      Flight carbon footprint calculator
                    </p>
                    <p className="z-[1] relative w-[80%] text-center p-2 mt-3">
                      Enter the destination and onboarding location and distance
                      in KM between the locations.
                    </p>
                  </div>

                  <div className="h-[90%] w-[100%] mt-4  z-[1] text-[#1b532a] font-extrabold">
                    <div>
                      <label className="font-medium">
                        Distance between two locations ?
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
                      <label className="font-medium">From:</label>
                      <input
                        type="text"
                        name="noOfPeople"
                        min="1"
                        max="30"
                        className=" ml-2 border-black border-2 rounded-md relative left-8"
                      />
                      <span className="relative left-[2.2rem] font-semibold">
                        KM
                      </span>
                    </div>
                    <div className="mt-2">
                      <label className="font-medium">To:</label>
                      <input
                        type="text"
                        name="noOfPeople"
                        min="1"
                        max="30"
                        className=" ml-2 relative left-[3.30rem] border-black border-2 rounded-md"
                      />
                      <span className="ml-1 relative left-14 font-semibold">
                        KM
                      </span>
                    </div>

                    <div className="w-[100%] h-[100%] flex relative top-10">
                      <button className="relative font-bold text-white rounded-lg bg-[#34a853]  h-8 w-[25%] mr-4  hover:translate-y-1 transition duration-300 ease-linear">
                        Calculate
                      </button>
                      <p className="text-black  relative top-1">
                        Total flight footprint = 23 metric tons of CO
                        <sub>2</sub>
                      </p>
                    </div>
                  </div>
                  <img
                    src={flight}
                    alt="house image"
                    className="opacity-50 absolute z-[0] top-[2rem] h-[70%]"
                  />
                </div>
              </div>
            )}

            {/* Car screen */}
            {activeButton === "car" && (
              <div className="h-full w-full flex justify-center items-center relative top-14">
                <div className="h-[95%] w-[95%] flex flex-col items-center ">
                  <div className="h-[20%] w-[100%] flex  flex-col justify-center  items-center">
                    <p className=" text-xl font-semibold">
                      Car carbon footprint calculator
                    </p>
                    <p className="z-[1] relative w-[80%] text-center p-2 mt-3">
                      Enter the distance in KM and type of fuel used in your
                      vehicle and milege
                    </p>
                  </div>

                  <div className="h-[90%] w-[100%] mt-4  z-[1] text-[#1b532a] font-extrabold">
                    <div>
                      <label className="font-medium">
                        Distance traveled in KM ?
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
                      <label className="font-medium">Type of fuel :</label>
                      <select className="font-medium ml-2 border-black border-2 rounded-md relative left-8">
                        <option>CNG</option>
                        <option>Petrol</option>
                        <option>Diesel</option>
                      </select>
                    </div>
                    <div className="mt-2">
                      <label className="font-medium">Milege :</label>
                      <input
                        type="number"
                        name="noOfPeople"
                        min="1"
                        max="30"
                        className=" ml-2 relative left-[4.30rem] border-black border-2 rounded-md"
                      />
                      <span className="ml-1 relative left-20 font-semibold">
                        KM
                      </span>
                    </div>

                    <div className="w-[100%] h-[100%] flex relative top-10">
                      <button className="relative font-bold text-white rounded-lg bg-[#34a853]  h-8 w-[25%] mr-4  hover:translate-y-1 transition duration-300 ease-linear">
                        Calculate
                      </button>
                      <p className="text-black  relative top-1">
                        Total car footprint = 23 metric tons of CO<sub>2</sub>
                      </p>
                    </div>
                  </div>
                  <img
                    src={car}
                    alt="house image"
                    className="opacity-30 absolute z-[0] top-[12rem]"
                  />
                </div>
              </div>
            )}

            {/* Motorbikes screen */}
            {activeButton === "motorbikes" && (
              <div className="h-full w-full flex justify-center items-center relative top-14">
                <div className="h-[95%] w-[95%] flex flex-col items-center ">
                  <div className="h-[20%] w-[100%] flex  flex-col justify-center  items-center">
                    <p className=" text-xl font-semibold">
                      Bike carbon footprint calculator
                    </p>
                    <p className="z-[1] relative w-[80%] text-center p-2 mt-3">
                      Enter the distance in KM and milege
                    </p>
                  </div>

                  <div className="h-[90%] w-[100%] mt-4  z-[1] text-[#1b532a] font-extrabold">
                    <div>
                      <label className="font-medium">
                        Distance traveled in KM ?
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
                      <label className="font-medium">Type of fuel :</label>
                      <select className="font-medium ml-2 border-black border-2 rounded-md relative left-8">
                        <option selected="true">Petrol</option>
                      </select>
                    </div>
                    <div className="mt-2">
                      <label className="font-medium">Milege :</label>
                      <input
                        type="number"
                        name="noOfPeople"
                        min="1"
                        max="30"
                        className=" ml-2 relative left-[4.30rem] border-black border-2 rounded-md"
                      />
                      <span className="ml-1 relative left-20 font-semibold">
                        KM
                      </span>
                    </div>

                    <div className="w-[100%] h-[100%] flex relative top-10">
                      <button className="relative font-bold text-white rounded-lg bg-[#34a853]  h-8 w-[25%] mr-4  hover:translate-y-1 transition duration-300 ease-linear">
                        Calculate
                      </button>
                      <p className="text-black  relative top-1">
                        Total bike footprint = 23 metric tons of CO<sub>2</sub>
                      </p>
                    </div>
                  </div>
                  <img
                    src={bike}
                    alt="house image"
                    className="opacity-30 absolute z-[0] top-[4rem] h-[80%]"
                  />
                </div>
              </div>
            )}

            {/* Bus and Rail screen */}
            {activeButton === "bus" && (
              <div className="h-full w-full flex justify-center items-center relative top-14">
                <div className="h-[95%] w-[95%] flex flex-col items-center ">
                  <div className="h-[20%] w-[100%] flex  flex-col justify-center  items-center">
                    <p className=" text-xl font-semibold">
                      Train carbon footprint calculator
                    </p>
                    <p className=" relative w-[80%] text-center p-2 mt-3">
                      Enter the distance in KM and train engine type.
                    </p>
                  </div>

                  <div className="h-[90%] w-[100%] mt-4  z-[1] text-[#1b532a] font-extrabold">
                    <div>
                      <label className="font-medium">
                        Distance traveled in KM ?
                      </label>
                      <input
                        type="number"
                        name="noOfPeople"
                        min="1"
                        className=" ml-3 border-black border-2 rounded-md w-[13%]"
                      />
                    </div>
                    <div className="mt-6">
                      <label className="font-medium">
                        Type of train engine :
                      </label>
                      <select className="font-medium ml-2 border-black border-2 rounded-md relative left-8">
                        <option selected="true">Diesel</option>
                        <option selected="true">Electric</option>
                      </select>
                    </div>

                    <div className="w-[100%] h-[100%] flex relative top-10">
                      <button className="relative font-bold text-white rounded-lg bg-[#34a853]  h-8 w-[25%] mr-4  hover:translate-y-1 transition duration-300 ease-linear">
                        Calculate
                      </button>
                      <p className="text-black  relative top-1">
                        Total train footprint = 23 metric tons of CO<sub>2</sub>
                      </p>
                    </div>
                  </div>
                  <img
                    src={train}
                    alt="house image"
                    className="opacity-30 absolute z-[0] bottom-[10rem]"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-full w-[60%] bg-slate-50 shadow-md flex justify-center items-center">
        <div className="h-[98%] w-[98%] ">
          <div className="h-[60%] w-[100%] border-2 flex  border-black ">
            <div className="h-[95%] w-[60%] flex justify-center items-center">
              <Pie data={data} />
            </div>
            <div className=" w-[40%] border-black border-l-2 flex flex-col justify-evenly items-center">
              <h1 className="text-center text-lg p-2">
                You're from 1% from the country with metic ton carbon Emission
              </h1>
              <img src={footprint} alt="footprint image" className="h-[50%]"/>
            </div>
          </div>
          <div className="h-[40%] w-[100%] bg-green-200 flex justify-center items-center">
            <div className="h-[95%] w-[100%]">
              <p className="text-start font-medium text-xl headColor ml-2 mt-2">
                Measure to take in order to reduce your carbon impact on mother
                nature.
              </p>

              <Marquee
                autoFill={true}
                speed={40}
                gradient={true}
                pauseOnHover={false}
                gradientWidth={0}
                className=" w-[100%] mt-5 flex justify-center text-black bg-green-200 items-center relative bottom-4"
              >
                <p className="m-5">
                  1.Limit Car Usage; Opt for Public Transport or Carpooling.
                </p>
                <p className="m-5">
                  2.Conserve Energy; Use LED Bulbs and Unplug Unused Appliances.
                </p>
                <p className="m-5">
                  3.Reduce, Reuse, Recycle; Minimize Single-Use Plastics and
                  Paper.
                </p>
                <p className="m-5">
                  4.Plant Trees; Promote Green Spaces for Carbon Sequestration.
                </p>
                <p className="m-5">
                  5.Choose Sustainable Products; Support Eco-Friendly and Local
                  Businesses.
                </p>
              </Marquee>
              <h1 className="text-start font-medium text-xl headColor ml-2 mt-1">
                Suggested measure based on your result.
              </h1>
              <div className="ml-2 mt-4">
                <p>1.</p>
                <p>2.</p>
                <p>3.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
