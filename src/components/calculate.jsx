import { useState, useEffect } from "react";
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
import footprint from "../resource/footprint.png";

const Calculate = () => {
  const [activeButton, setActiveButton] = useState("welcome");

  // state variables for the input fields in the "House" section
  const [noOfPeople, setNoOfPeople] = useState(0);
  const [electricity, setElectricity] = useState(0);
  const [naturalGas, setNaturalGas] = useState(0);
  const [lpg, setLpg] = useState(0);

  // state variable for the flight
  const [distanceBetweenTwoPlaces, setDistanceBetweenTwoPlaces] = useState(0);

  // state variable for the car
  const [cdistanceTravelled, setCDistanceTravelled] = useState(0);
  const [cmilege, setCMilege] = useState(0);
  const [typeOfFule, setTypeOfFuel] = useState("CNG");

  // state variable for the bike
  const [bdistanceTravelled, setBDistanceTravelled] = useState(0);
  const [bmilege, setBMilege] = useState(0);

  // state variable for the rail
  const [rdistanceTravelled, setRDistanceTravelled] = useState(0);

  // total footprint from household
  const [houseHoldFootprint, setHouseHoldFootPrint] = useState(0);
  //total flight footprint
  const [flightFootprint, setFlightFootprint] = useState(0);
  //total car footprint
  const [carFootrpint, setCarFootprint] = useState(0);
  // total bike footprint
  const [bikeFooptrint, setBikeFootprint] = useState(0);
  //total railways footprint
  const [railwaysFootprint, setRailwaysFootprint] = useState(0);

  //visibilty controls for the suggested measures
  const [isClicked, setIsClicked] = useState(false);

  //measures
  const [measures, setMeasures] = useState("");

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
        data: [
          houseHoldFootprint / 1000,
          flightFootprint / 1000,
          carFootrpint,
          bikeFooptrint,
          railwaysFootprint,
        ],
      },
    ],
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const houseHoldCo2Calcu = () => {
    if (
      noOfPeople === 0 ||
      electricity === 0 ||
      naturalGas === 0 ||
      lpg === 0
    ) {
      alert("Enter the value");
    } else {
      const calculatedFootprint =
        parseFloat(noOfPeople) * 190 +
        parseFloat(electricity) * 815 +
        parseFloat(naturalGas) * 642 +
        parseFloat(lpg) * 734;

      setHouseHoldFootPrint(Number(calculatedFootprint.toFixed(3)));
    }
  };

  useEffect(() => {}, [houseHoldFootprint]);

  const FlightFootCalcu = () => {
    /* CO2 emission = Distance * Fuel burn * Emission factor
    emission factor 3.15 kg CO2/kg fuel
    Fuel burn = 0.6 kg average 
   */
    if (distanceBetweenTwoPlaces === 0) {
      alert("Enter the values");
    } else {
      const FcalculatedFootprint = distanceBetweenTwoPlaces * 0.6 * 3.15;
      setFlightFootprint(Number(FcalculatedFootprint.toFixed(3)));
    }
  };
  useEffect(() => {}, [flightFootprint]);

  /* carbon emission factor based on type of fuel */

  const CarbonEmissionFactorBasedOnFuel = {
    CNG: 0.985,
    Diesel: 2.66,
    Petrol: 2.33,
  };

  const carCarbonCalcu = () => {
    /* formula to calculate the carbon footprint :
carbonFootprint = (distanceNum / mileageNum) * emissionFactor;
 */

    if (cdistanceTravelled === 0 || cmilege === 0 || typeOfFule === "") {
      alert("Enter the values");
    } else {
      const CcalculatedFootprint =
        (cdistanceTravelled / cmilege) *
        CarbonEmissionFactorBasedOnFuel[typeOfFule];

      setCarFootprint(Number(CcalculatedFootprint.toFixed(3)));
    }
  };
  useEffect(() => {}, [carFootrpint]);

  const bikeCarbonCalcu = () => {
    /* formula to calculate the carbon footprint : 
    carbonFootprint =(distance/mileage)* emissionFactor
     */
    if (bdistanceTravelled === 0 || bmilege === 0) {
      alert("Enter the values ");
    } else {
      const BcalculatedFootprint = (bdistanceTravelled / bmilege) * 2.33;
      setBikeFootprint(Number(BcalculatedFootprint.toFixed(3)));
    }
  };
  useEffect(() => {}, [bikeFooptrint]);

  const RcarbonCalcu = () => {
    /* formula to calculate the carbon footprint  
      CarbonFootprint =(distance/mileage)*emissionFactor 
    */
    if (rdistanceTravelled === 0) {
      alert("Enter the values");
    } else {
      const RcalculatedFootprint = (rdistanceTravelled / 7.97) * 2.66;
      setRailwaysFootprint(Number(RcalculatedFootprint.toFixed(3)));
    }
  };
  useEffect(() => {}, [railwaysFootprint]);

  // Assuming you have all your calculated values in these variables

  const maxCarbonEmissionSource = () => {
    const values = data.datasets[0].data;

    // Finding the maximum value
    const maxValue = Math.max(...values);

    // Finding the index of the maximum value
    const maxIndex = values.indexOf(maxValue);

    // Extracting the corresponding label for the maximum value
    const maxLabel = data.labels[maxIndex];

    // Logging or using the maximum value and label
    console.log("Maximum Value:", maxValue);
    console.log("Corresponding Label:", maxLabel);
    TotalFootPrint();

    switch (maxLabel) {
      case "Railways":
        setMeasures(
          <>
            1. Choose Electric Train
            <br />
            2. Travel Off-Peak
            <br />
            3. Use Railcards
            <br />
          </>
        );
        break;
      case "Car":
        setMeasures(
          <>
            1.Choose a fuel-efficient or electric car for lower emissions.
            <br />
            2.Regular maintenance improves efficiency, reducing your vehicle's
            carbon footprint.
            <br />
            3.Carpool, use public transport to cut down individual car trips.
            <br />
          </>
        );
        break;
      case "MotorBikes":
        setMeasures(
          <>
            1.Optimize Routes: Plan efficient routes to minimize mileage and
            reduce fuel consumption.
            <br />
            2.Regular Maintenance: Ensure your bike is well-maintained for
            optimal fuel efficiency.
            <br />
            3.Eco-friendly Driving: Practice smooth acceleration and braking for
            fuel-efficient and eco-friendly biking.
            <br />
          </>
        );
        break;
      case "Flight":
        setMeasures(
          <>
            1.Fly Direct: Non-stop flights emit less carbon, reducing your
            overall environmental impact.
            <br />
            2.Choose Eco-friendly Airlines: Opt for airlines committed to
            sustainability and carbon offset programs.
            <br />
            3.Pack Light: Less luggage means lower fuel consumption and reduced
            carbon emissions during flights.
            <br />
          </>
        );
        break;
      case "House":
        setMeasures(
          <>
            1. Energy-Efficient Appliances: Upgrade to energy-efficient devices
            to reduce electricity consumption in your household.
            <br />
            2.Waste Recycling: Implement a recycling system for household waste
            to minimize environmental impact.
            <br />
            3.Water Conservation: Use water-saving techniques and fix leaks to
            reduce water consumption at home.
            <br />
          </>
        );
        break;
      default:
        console.log("Error occurred");
        break;
    }
  };

  const TotalFootPrint = () => {
    if (
      houseHoldFootprint === 0 ||
      carFootrpint === 0 ||
      bikeFooptrint === 0 ||
      flightFootprint === 0 ||
      railwaysFootprint === 0
    ) {
      alert("first calculate the footprint for the all the inputs ");
    } else {
      setIsClicked(!isClicked);
    }
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
              Railways
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
                      Enter your consumption of each type of energy in monthly
                      basis, and press the Calculate button.
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
                        className="pl-1 ml-3 border-black border-2 rounded-md"
                        onChange={(e) => setNoOfPeople(e.target.value)}
                      />
                    </div>
                    <div className="mt-6">
                      <label className="font-medium">Electricity:</label>
                      <input
                        type="number"
                        name="elcectricity"
                        min="1"
                        max="30"
                        className="pl-1 ml-2 border-black border-2 rounded-md relative left-14"
                        onChange={(e) => setElectricity(e.target.value)}
                      />
                      <span className="relative left-[3.8rem] font-semibold">
                        kWh
                      </span>
                    </div>
                    <div className="mt-2">
                      <label className="font-medium">Natural gas :</label>
                      <input
                        type="number"
                        name="natural gas"
                        min="1"
                        max="30"
                        className="pl-1 ml-2 relative left-[2.30rem] border-black border-2 rounded-md"
                        onChange={(e) => setNaturalGas(e.target.value)}
                      />
                      <span className="ml-1 relative left-10 font-semibold">
                        cubic feet (scf)
                      </span>
                    </div>
                    <div className="mt-2">
                      <label className="font-medium">LPG:</label>
                      <input
                        type="number"
                        name="LPG"
                        min="1"
                        max="30"
                        className="pl-1 ml-3 border-black border-2 rounded-md relative left-[5.8rem]"
                        onChange={(e) => setLpg(e.target.value)}
                      />
                      <span className="ml-1 relative left-24 font-semibold">
                        Liters
                      </span>
                    </div>

                    <div className="w-[100%] h-[100%] flex relative top-10">
                      <button
                        className="relative font-bold text-white rounded-lg bg-[#34a853]  h-8 w-[20%] mr-4  hover:translate-y-1 transition duration-300 ease-linear"
                        onClick={houseHoldCo2Calcu}
                      >
                        Calculate
                      </button>
                      <p className="text-black relative text-base top-1 w-[100%]">
                        CO2 footprint on monthly basis ={" "}
                        {houseHoldFootprint / 1000} tones
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
                        name="fdistance"
                        min="100"
                        max=""
                        className="pl-1 ml-3 w-[15%] border-black border-2 rounded-md"
                        onChange={(e) =>
                          setDistanceBetweenTwoPlaces(e.target.value)
                        }
                      />
                    </div>
                    <div className="mt-6">
                      <label className="font-medium">From:</label>
                      <input
                        type="text"
                        name="from"
                        className="pl-1 ml-2 border-black border-2 rounded-md relative left-8"
                      />
                    </div>
                    <div className="mt-2">
                      <label className="font-medium">To:</label>
                      <input
                        type="text"
                        name="to"
                        className="pl-1 ml-2 relative left-[3.30rem] border-black border-2 rounded-md"
                      />
                    </div>

                    <div className="w-[100%] h-[100%] flex relative top-10">
                      <button
                        className="relative font-bold text-white rounded-lg bg-[#34a853]  h-8 w-[25%] mr-4  hover:translate-y-1 transition duration-300 ease-linear"
                        onClick={FlightFootCalcu}
                      >
                        Calculate
                      </button>
                      <p className="text-black  relative top-1">
                        Total flight footprint = {flightFootprint / 1000} metric
                        tons of CO
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
                        name="cdistance"
                        min="1"
                        className="pl-1 ml-3 border-black border-2 rounded-md w-[10%]"
                        onChange={(e) => setCDistanceTravelled(e.target.value)}
                      />
                    </div>
                    <div className="mt-6">
                      <label className="font-medium">Type of fuel :</label>
                      <select
                        className="font-medium ml-2 border-black border-2 rounded-md relative left-8"
                        onChange={(e) => setTypeOfFuel(e.target.value)}
                      >
                        <option>CNG</option>
                        <option>Petrol</option>
                        <option>Diesel</option>
                      </select>
                    </div>
                    <div className="mt-2">
                      <label className="font-medium">Milege :</label>
                      <input
                        type="number"
                        name="cmilege"
                        min="1"
                        className="pl-1 ml-2 w-[12%] relative left-[4.30rem] border-black border-2 rounded-md"
                        onChange={(e) => setCMilege(e.target.value)}
                      />
                      <span className="ml-1 relative left-20 font-semibold">
                        KM
                      </span>
                    </div>

                    <div className="w-[100%] h-[100%] flex relative top-10">
                      <button
                        className="relative font-bold text-white rounded-lg bg-[#34a853]  h-8 w-[25%] mr-4  hover:translate-y-1 transition duration-300 ease-linear"
                        onClick={carCarbonCalcu}
                      >
                        Calculate
                      </button>
                      <p className="text-black  relative top-1">
                        Total car footprint = {carFootrpint} metric tons of CO
                        <sub>2</sub>
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
                        name="bdistance"
                        min="1"
                        className="pl-1 ml-3 w-[12%] border-black border-2 rounded-md"
                        onChange={(e) => setBDistanceTravelled(e.target.value)}
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
                        name="bmilege"
                        min="1"
                        className="pl-1 ml-2 w-[12%] relative left-[4.30rem] border-black border-2 rounded-md"
                        onChange={(e) => setBMilege(e.target.value)}
                      />
                      <span className="ml-1 relative left-20 font-semibold">
                        KM
                      </span>
                    </div>

                    <div className="w-[100%] h-[100%] flex relative top-10">
                      <button
                        className="relative font-bold text-white rounded-lg bg-[#34a853]  h-8 w-[25%] mr-4  hover:translate-y-1 transition duration-300 ease-linear"
                        onClick={bikeCarbonCalcu}
                      >
                        Calculate
                      </button>
                      <p className="text-black  relative top-1">
                        Total bike footprint = {bikeFooptrint} metric tons of CO
                        <sub>2</sub>
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
                        name="rdistance"
                        min="1"
                        className="pl-1 ml-3 border-black border-2 rounded-md w-[13%]"
                        onChange={(e) => setRDistanceTravelled(e.target.value)}
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
                      <button
                        className="relative font-bold text-white rounded-lg bg-[#34a853]  h-8 w-[25%] mr-4  hover:translate-y-1 transition duration-300 ease-linear"
                        onClick={RcarbonCalcu}
                      >
                        Calculate
                      </button>
                      <p className="text-black  relative top-1">
                        Total train footprint ={railwaysFootprint} metric tons
                        of CO<sub>2</sub>
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

      {/* right pannel start  */}
      <div className="h-full w-[60%] bg-slate-50 shadow-md flex justify-center items-center">
        <div className="h-[98%] w-[98%] ">
          <div className="h-[60%] w-[100%] border-2 flex  border-black ">
            <div className="h-[95%] w-[60%] flex justify-center items-center">
              <Pie data={data} />
            </div>
             <div className=" w-[40%] border-black border-l-2 flex flex-col justify-evenly items-center">
              <h1 className="text-center text-lg p-2 relative bottom-8 font-bold headColor">
                Based on the input data you comes in top {2 + 2}% people
              </h1>
              <img
                src={footprint}
                alt="footprint image"
                className="h-[55%] relative bottom-3"
              />
            </div> 
          </div>
          <div className="h-[40%] w-[100%] flex justify-center items-center">
            <div className="h-[95%] w-[100%]">
              <p className="text-start font-medium text-xl headColor ml-2 mt-2">
                Measure to take in order to reduce your carbon impact on mother
                nature.
              </p>

              <Marquee
                autoFill={true}
                speed={30}
                gradient={true}
                pauseOnHover={false}
                gradientWidth={0}
                className=" w-[100%] mt-2 flex justify-center text-black b items-center relative bottom-2"
              >
                <p className="m-4">
                  Limit Car Usage; Opt for Public Transport or Carpooling.
                </p>
                <p className="m-4">
                  Conserve Energy; Use LED Bulbs and Unplug Unused Appliances.
                </p>
                <p className="m-4">
                  Reduce, Reuse, Recycle; Minimize Single-Use Plastics and
                  Paper.
                </p>
                <p className="m-4">
                  Plant Trees; Promote Green Spaces for Carbon Sequestration.
                </p>
                <p className="m-4">
                  Choose Sustainable Products; Support Eco-Friendly and Local
                  Businesses.
                </p>
              </Marquee>
              <h1 className="text-start font-medium text-xl headColor ml-2">
                Suggested measure based on your result :
              </h1>
              <div className="ml-2 mt-2 flex justify-center items-center h-[50%] w-[100%] ">
                <button
                  className={`notClicked ${isClicked ? "clicked" : ""}`}
                  onClick={maxCarbonEmissionSource}
                >
                  Get measures
                </button>
                <div
                  className={`notClickedP ${
                    isClicked ? "clickedP" : ""
                  }blur-[5px] relative h-[100%] w-[100%] z-[3] rounded-md bg-green-200 `}
                >
                  <p className="m-2 font-medium mt-5 pl-3">{measures}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right pannel ends  */}
    </div>
  );
};

export default Calculate;
