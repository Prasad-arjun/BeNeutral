import sideEarthImage from "../resource/Banner.jpg";
import enviorment from "../resource/enviorment.jpg";
import climateChange from "../resource/climate change.jpg";
import airPollution from "../resource/airpollution.jpg";
import agriculture from "../resource/farmer.jpg";
import humans from "../resource/humans.jpg";
import ozoneLayer from "../resource/ozonelayer.jpg";
import "../index.css";
import Events from "./events";
const Learn = () => {
  return (
    <>
    <div className=" h-[150vh] w-full flex flex-col  justify-center items-center HeadingFont headColor p-4" id="Learn">
      <div className="h-[30%] w-[95%] flex  mt-4  justify-center ">
        <div className="h-[100%] w-[100%]   flex flex-col justify-center ">
          <h1 className="text-4xl font-semibold  tracking-wide mb-4">Learn</h1>
          <p className="text-2xl font-semibold tracking-wide text-left  pt-1 mt-2 mb-4 w-[90%]">
            Understand the basic of the climate and way to reduce your CO
            <sub>2</sub> footprint.
          </p>
          <p className="w-[90%] paraColor">
            Explore the course made by enviormental expert for better
            Understanding about the mother earth and step through which we can
            save our mother earth. Advisable action and Do's and Dont's avilable
            which vast collection of video and blog
          </p>
        </div>
        <img
          src={sideEarthImage}
          className="h-[100%] w-[50%]"
          alt="mountains image"
        />
      </div>
      <div className="h-[70%] w-[100%]  flex flex-col justify-center items-center">
        <h1 className=" text-[#34a853] text-2xl font-medium tracking-wide text-left HeadingFont relative right-[37rem] bottom-10">
          Courses to explore :
        </h1>
        <div className="w-[95%] h-[90%] bg flex flex-col justify-center items-center mt-2">
          <div className="w-[100%] h-[50%] flex p-2" data-aos="fade-down">
            <div className="w-[33.33%] h-[100%] bg-green-50 rounded-lg mr-2 flex group">
              <img
                src={enviorment}
                className="h-[100%] rounded-l-lg group-hover:scale-105 group-hover:rounded-lg hover:transition-all duration-500 hover:ease-linear"
                alt="enviorement"
              />
              <div className="p-2 flex flex-col justify-start">
                <p className="paraColor text-sm pb-2">1/9/23</p>
                <h1 className="text-lg font-medium text-[#34a853] pb-2">
                  CO<sub>2</sub> and ecosytem
                </h1>

                <p className=" paraColor text-left text-sm relative top-2">
                  Elevated CO2 levels impact ecosystems by altering plant
                  growth, species distribution, and nutrient cycling, leading to
                  biodiversity changes and disruptions in ecological
                  interactions.
                </p>
                <button className="bg-[#34a853] text-white h-10 w-36 rounded-lg relative top-6  hover:bg-white hover:text-[#34a853] hover:border-2 hover:border-[#34a853] hover:scale-95 hover:transition-all duration-500 hover:ease-linear">
                  Read
                </button>
              </div>
            </div>
            <div className="w-[33.33%] h-[100%] mr-2 bg-green-50 rounded-lg  flex group">
              <img
                src={climateChange}
                className="h-[100%] rounded-l-lg  group-hover:scale-105 group-hover:rounded-lg hover:transition-all duration-500 hover:ease-linear"
                alt="enviorement"
              />
              <div className="p-2 flex flex-col justify-start">
                <p className="paraColor text-sm pb-2">1/9/23</p>
                <h1 className="text-lg font-medium text-[#34a853] pb-2">
                  Climate change
                </h1>

                <p className=" paraColor text-left text-sm relative top-2">
                  Elevated CO2 levels drive climate change by trapping heat in
                  the atmosphere, leading to rising temperatures, sea-level
                  rise, and ecological disruptions with far-reaching impacts.
                </p>
                <button className="bg-[#34a853] text-white h-10 w-36 rounded-lg relative top-6 hover:bg-white hover:text-[#34a853] hover:border-2 hover:border-[#34a853] hover:scale-95 hover:transition-all duration-500 hover:ease-linear">
                  Read
                </button>
              </div>
            </div>
            <div className="w-[33.33%] h-[100%] mr-2 bg-green-50 rounded-lg flex group">
              <img
                src={ozoneLayer}
                className="h-[100%] rounded-l-lg  group-hover:scale-105 group-hover:rounded-lg hover:transition-all duration-500 hover:ease-linear"
                alt="enviorement"
              />
              <div className="p-2 flex flex-col justify-start">
                <p className="paraColor text-sm pb-2">1/9/23</p>
                <h1 className="text-lg font-medium text-[#34a853] pb-2">
                  Ozone layer
                </h1>

                <p className=" paraColor text-left text-sm relative top-2">
                  CO2 contributes to climate change by trapping heat, while
                  ozone layer protects us from harmful UV radiation. Balancing
                  CO2 emissions is crucial for both issues.
                </p>
                <button className="bg-[#34a853] text-white h-10 w-36 rounded-lg relative top-8 hover:bg-white hover:text-[#34a853] hover:border-2 hover:border-[#34a853] hover:scale-95 hover:transition-all duration-500 hover:ease-linear">
                  Read
                </button>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[50%]  flex p-2" data-aos="fade-up">
            <div className="w-[33.33%] h-[100%] mr-2 bg-green-50 rounded-lg   flex group">
              <img
                src={humans}
                className="h-[100%] rounded-l-lg  group-hover:scale-105 group-hover:rounded-lg hover:transition-all duration-500 hover:ease-linear"
                alt="enviorement"
              />
              <div className="p-2 flex flex-col justify-start">
                <p className="paraColor text-sm pb-2">1/9/23</p>
                <h1 className="text-lg font-medium text-[#34a853] pb-2">
                  Effects on human being's
                </h1>

                <p className=" paraColor text-left text-sm relative top-2">
                  Elevated CO2 levels contribute to climate change, leading to
                  extreme weather, health risks, and disrupted ecosystems,
                  impacting human well-being and livelihoods.
                </p>
                <button className="bg-[#34a853] text-white h-10 w-36 rounded-lg relative top-6 hover:bg-white hover:text-[#34a853] hover:border-2 hover:border-[#34a853] hover:scale-95 hover:transition-all duration-500 hover:ease-linear">
                  Read
                </button>
              </div>
            </div>
            <div className="w-[33.33%] h-[100%] mr-2 bg-green-50 rounded-lg  flex group">
              {" "}
              <img
                src={agriculture}
                className="h-[100%] rounded-l-lg  group-hover:scale-105 group-hover:rounded-lg hover:transition-all duration-500 hover:ease-linear"
                alt="enviorement"
              />
              <div className="p-2 flex flex-col justify-start">
                <p className="paraColor text-sm pb-2">1/9/23</p>
                <h1 className="text-lg font-medium text-[#34a853] pb-2">
                  Agriculture
                </h1>

                <p className=" paraColor text-left text-sm relative top-2">
                  Elevated CO2 affects agriculture. With a temperature increase
                  of 0.8°C, CO2's impact includes altered crop growth, water
                  availability, and increased pest pressure.
                </p>
                <button className="bg-[#34a853] text-white h-10 w-36 rounded-lg relative top-6 hover:bg-white hover:text-[#34a853] hover:border-2 hover:border-[#34a853] hover:scale-95 hover:transition-all duration-500 hover:ease-linear">
                  Read
                </button>
              </div>
            </div>
            <div className="w-[33.33%] h-[100%] mr-2 bg-green-50 rounded-lg  flex group">
              {" "}
              <img
                src={airPollution}
                className="h-[100%] rounded-l-lg  group-hover:scale-105 group-hover:rounded-lg hover:transition-all duration-500 hover:ease-linear"
                alt="enviorement"
              />
              <div className="p-2 flex flex-col justify-start">
                <p className="paraColor text-sm pb-2">1/9/23</p>
                <h1 className="text-lg font-medium text-[#34a853] pb-2">
                  Air pollution
                </h1>

                <p className=" paraColor text-left text-sm relative top-2">
                  Elevated CO2 contributes to air pollution, impacting climate
                  and health. CO2, a major greenhouse gas, amplifies temperature
                  rise (0.8°C), exacerbating global challenges.
                </p>
                <button className="bg-[#34a853] text-white h-10 w-36 rounded-lg relative top-6 hover:bg-white hover:text-[#34a853] hover:border-2 hover:border-[#34a853] hover:scale-95 hover:transition-all duration-500 hover:ease-linear">
                  Read
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Events/>
    </>
  );
};

export default Learn;
