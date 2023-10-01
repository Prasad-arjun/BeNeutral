import "../index.css";
import earth1 from "../resource/earthIcon.svg";
import footStep from "../resource/footstep.svg";
import Earth from "../resource/earthIllustration.svg";
import Navabr from "./navbar";
import Mission from "./mission";
import earth from "../resource/earth1.png"


const LandingPage = () => {
  return (
    <>
    <Navabr/>
    <div className=" w-full h-[100vh] flex justify-center items-center HeadingFont overflow-hidden" id="/">
      <div className="w-[95%] h-auto flex absolute">
        <div className="w-[55%] h-full justify-center items-start flex flex-col relative z-[1] top-[10rem] left-[3rem]  ">
          <div className="w-[100%] relative bottom-12">
     <h1 className="text-5xl headColor font-semibold tracking-wide text-left relative">
              Reducing
              <img
                src={footStep}
                alt="footprint"
                className="h-12 inline ml-2 mr-2 animate-bounce"
              />
              Empowering
              <div className="earthAnimation inline relative">
                <img
                  src={earth1}
                  alt="earth"
                  className="h-12 inline ml-2 mr-2"
                />
              </div>
              Your journey to carbon neutrality ,
              <p className="mt-3 ">Begin here</p>
            </h1>  
          </div>
          <div className="w-[100%] mt-4 relative bottom-10">
            <h2 className="text-xl text-left  paraColor">
              Qunatify your impact with personalizes carbon footprint assesment
              embrace <br /> eco-challeneges for{" "}
              <a className="underline underline-offset-4 decoration-[#34a853]">
                green coins
              </a>{" "}
              and join a thriving community united for change
            </h2>
          </div>
          <div className="mt-4 relative bottom-6">
            <button className="h-[3.4rem] w-[12vw] text-xl rounded-lg bg-[#34a853] text-white  hover:border-2 hover:rounded-3xl hover:transition-all duration-700 ease-in-out ">
              Calculate now
            </button>
            <button className="h-[8vh] w-[12vw] ml-4 text-xl text-[#34a853] rounded-xl border-2 border-[#34a853] hover:rounded-3xl hover:transition-all duration-700 hover:ease-in-out ">
              For comapanies
            </button>
          </div>
        </div>
        <div className="w-[45%] flex justify-center  items-center h-full relative earthHero  ">
          <img
            src={earth}
            className=" h-[90%] w-[90%] relative z-[-1] rounded-full  left-8 bottom-6  earthIlu"
          />
        </div>
      </div>
    </div>
<Mission/>
</>
  );
};

export default LandingPage;
