import "../index.css";
import Marquee from "react-fast-marquee";
import Factory from "../resource/Factory.gif";
import rollRoyce from "../resource/rolls-royce.svg";
import google from "../resource/google.svg";
import bank from "../resource/back-office.svg";
import jam from "../resource/jam.svg";
import byNext from "../resource/bynext.svg";
import bolt from "../resource/bolt.svg";
import swissCom from "../resource/swisscom.svg";
import thermoEach from "../resource/theoramreach.svg";
import pipeDirve from "../resource/pipedrive.svg";
import atlasian from "../resource/atlassian.svg";
import limeHome from "../resource/limehome.svg";
const Industires = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-green00  flex justify-center items-center HeadingFont headColor" id="forIndustries">
      <div className="h-[98%] w-[95%]  ">
        <div className="h-[100%] w-[100%] bg-green-0  flex flex-col justify-between items-start relative top-6">
          <div className="flex h-[60%] p-2">
            <div className="relative top-4">
              <h1 className="text-4xl font-semibold tracking-wide mb-4">
                Unlocking Net-Zero Excellence for Industries
              </h1>
              <h2 className="text-xl font-semibold tracking-wide mb-4 w-[65%]">
                Discover how we empower organizations and industries to achieve
                their net-zero ambitions. Our tailored features are your path to
                sustainability success.
              </h2>
              <h4 className="text-xl text-[#34a853] font-semibold tracking-wide">
                Top 10 Achievers, Global Stars
              </h4>
              <p className="w-[65%] paraColor HeadingFont mt-4">
                Stand out in the race to net-zero. Secure a spot in our top 10
                rankings, and you'll earn not just incentives but global acclaim
                among eco-conscious leaders. Join the elite league of
                sustainability champions today.
              </p>
              <button className="bg-[#34a853] text-white h-10 w-36 rounded-lg relative top-6 hover:bg-white hover:text-[#34a853] hover:border-2 hover:border-[#34a853] hover:scale-95 hover:transition-all duration-500 hover:ease-linear">
                Explore{" "}
              </button>
            </div>
            <img
              src={Factory}
              className="h-[105%]  relative z-[-1]"
              alt="factory gif "
              data-aos="zoom-in"
            />
          </div>
          <div className="w-full h-[40%] relative bottom-6 p-2 ">
            <h1 className="text-2xl font-semibold tracking-wide mb-2 w-[65%]">
              Our clients
            </h1>
            <p className="w-[60%] ">
              Calculating Carbon Footprints, Connecting Communities – Together,
              We Make a Sustainable Difference.
            </p>
            <div className="h-[100%]  flex flex-col justify-center items-center">
              <Marquee
                autoFill={true}
                speed={40}
                gradient={true}
                pauseOnHover={true}
                gradientWidth={600}
                className=" w-[100%] flex justify-center items-center relative bottom-4"
              >
                <img
                  src={rollRoyce}
                  className="h-10 ml-8 p-1"
                  alt="roll royce"
                />
                <img src={google} className="h-10 ml-8 p-1" alt="roll royce" />
                <img
                  src={limeHome}
                  className="h-8 ml-8 p-1"
                  alt="roll royce"
                />
                <img src={bank} className="h-8  ml-8    p-1" alt="roll royce" />
                <img src={bolt} className="h-10  ml-8  p-1" alt="roll royce" />
                <img src={jam} className="h-10 ml-8    p-1" alt="roll royce" />
                <img src={byNext} className="h-10 ml-8    p-1" alt="roll royce" />
                <img src={swissCom} className="h-10  ml-8   p-1"  alt="roll royce" />
                <img  src={thermoEach} className="h-10  ml-8   p-1" alt="roll royce"  />
                <img src={pipeDirve} className="h-10  ml-8   p-1" alt="roll royce" />
                <img src={atlasian} className="h-8  ml-8   p-1" alt="roll royce" />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Industires;
