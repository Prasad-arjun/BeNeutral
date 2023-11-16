import "../index.css";
import events from "../resource/events.svg";
import OlderPeopleEvents from "../resource/event1.jpg";
import comunistEvents from "../resource/event2.jpg";
import Industires from "./industries";  
const Events = () => {
  return (
    <>
    <div className="h-[160vh] w-full  flex justify-center items-center headColor HeadingFont" id="Events">
      <div className="h-[98%] w-[95%] ">
        <div className="w-full h-[30%]  flex p-2 justify-start items-start">
          <div className=" relative top-12">
            <h1 className="text-4xl font-semibold tracking-wide mb-4">
              Events
            </h1>
            <p className="w-[60%] text-3xl font-semibold">
              Connect, share and learn skills and knowledge with others on a
              journey to Net Zero.
            </p>
          </div>
          <img src={events} className="h-[100%]" alt="eventImage" />
        </div>
        <div className="w-full h-[70%] p-2 ">
          <div>
            <h1 className="text-2xl text-[#34a853] font-semibold tracking-wide mb-4">
              Upcoming events
            </h1>
            <p className="w-[50%] paraColor">
              Please find below upcoming events from ourselves and our partners
              through the Going Green Together project, and other events to help
              you learn more and take part in climate action.
            </p>
          </div>
          <div className="h-[70%] w-full relative top-12 left-16 flex flex-col justify-center items-center ">
            <div className="h-[50%] w-[100%] flex items-center justify-center group" data-aos="fade-right"  data-aos-offset="50">
              <img
                src={comunistEvents}
                className="h-[100%] w-[50%] rounded-md group-hover:scale-105 hover:transition-all duration-500 hover:ease-linear"
              />
              <div className="relative left-6  ">
                <h1 className="text-2xl font-semibold tracking-wide w-[70%] group-hover:text-[#34a853] hover:transition-all duration-500 hover:ease-linear ">
                  What people from ethnic minority communities want you to do
                  about the environmental crises.
                </h1>
                <p className="p-2 paraColor">Sep 28, 2023 3:00 PM </p>
                <p className="w-[80%] paraColor p-2 group-hover:text-black hover:transition-all duration-500 hover:ease-linear">
                  Join NPC as they share findings from the Everyone’s
                  Environment programme’s engagement with people from ethnic
                  minority communities to explore their priorities in tackling
                  the climate and nature crises. This event will be relevant for
                  social and environmental charities, particularly senior
                  leaders, policy leads, those overseeing strategy and programme
                  development.
                </p>
                <button className="bg-[#34a853] text-white relative left-2 h-9 w-32 rounded-lg  hover:bg-white hover:text-[#34a853] hover:border-2 hover:border-[#34a853] hover:scale-95 hover:transition-all duration-500 hover:ease-linear">
                  Register
                </button>
              </div>
            </div>
            <div className="h-[50%] flex relative mt-8 group" data-aos="fade-left">
              <img
                src={OlderPeopleEvents}
                className="h-[100%] w-[50%] rounded-md group-hover:scale-105 hover:transition-all duration-500 hover:ease-linear"
              />
              <div className=" relative left-6 ">
                <h1 className="text-2xl font-semibold tracking-wide w-[70%]   group-hover:text-[#34a853] hover:transition-all duration-500 hover:ease-linear ">
                  What older people and Disabled people want you to do about the
                  environmental crises.
                </h1>
                <p className="p-2 paraColor">Oct 28, 2023 3:00 PM </p>
                <p className="w-[80%] paraColor p-2 group-hover:text-black hover:transition-all duration-500 hover:ease-linear">
                  Join NPC as they share findings from the Everyone’s
                  Environment programme’s engagement with older people and
                  Disabled people to explore their priorities in tackling the
                  climate and nature crises. This event will be relevant for
                  social and environmental charities, particularly senior
                  leaders, policy leads, those overseeing strategy and programme
                  development.
                </p>
                <button className="bg-[#34a853] relative left-2 text-white h-9 w-32 rounded-lg  hover:bg-white hover:text-[#34a853] hover:border-2 hover:border-[#34a853] hover:scale-95 hover:transition-all duration-500 hover:ease-linear">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Industires/>
    </>
  );
};
export default Events;
