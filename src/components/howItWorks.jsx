import "../index.css";
import footStep from "../resource/footstep.svg";
import news from "../resource/news.svg"
import coins from "../resource/coins-five.svg"
import calculator from "../resource/calculator.svg"
import community from "../resource/community.svg"
import profile from "../resource/profile.svg"
import task from "../resource/objective.svg"
const HowItWorks = () => {
  return (
    <div className="h-[100vh] w-full  flex justify-center items-center HeadingFont">
      <div className="h-[95%] w-[95%] p-4">
        <h1 className="text-4xl font-semibold tracking-wide text-left p-4">
          How it works
        </h1>
        <div className="w-[100%] h-[90%] flex flex-col justify-center items-center">
          <div className="flex">
            <div className="h-[40vh] w-[30vw]  flex flex-col justify-center items-start">
              <img src={profile} className="h-10" alt="profileIcon" />
              <h1 className="text-lg font-medium mt-2 mb-2">
                Create your BeNeutral profile
              </h1>
              <p className="w-[90%]">
                Sign up with Email, Google or Apple to create your own Neutral
                profile. Fill in your details start your journey to living a
                carbon-neutral life.
              </p>
            </div>
            <div className="h-[40vh] w-[30vw]">
              <div className="h-[40vh] w-[30vw]  flex flex-col justify-center items-start">
                <img src={calculator} className="h-10" alt="profileIcon" />
                <h1 className="text-lg font-medium mt-2 mb-2">
                  Create your BeNeutral profile
                </h1>
                <p className="w-[90%]">
                  Sign up with Email, Google or Apple to create your own Neutral
                  profile. Fill in your details start your journey to living a
                  carbon-neutral life.
                </p>
              </div>
            </div>
            <div className="h-[40vh] w-[30vw] ">
              <div className="h-[40vh] w-[30vw]  flex flex-col justify-center items-start">
                <img src={task} className="h-10" alt="profileIcon" />
                <h1 className="text-lg font-medium mt-2 mb-2">
                  Create your BeNeutral profile
                </h1>
                <p className="w-[90%]">
                  Sign up with Email, Google or Apple to create your own Neutral
                  profile. Fill in your details start your journey to living a
                  carbon-neutral life.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="h-[40vh] w-[30vw] ">
              <div className="h-[40vh] w-[30vw]-100 flex flex-col justify-center items-start">
                <img src={coins} className="h-10" alt="profileIcon" />
                <h1 className="text-lg font-medium mt-2 mb-2">
                  Create your BeNeutral profile
                </h1>
                <p className="w-[90%]">
                  Sign up with Email, Google or Apple to create your own Neutral
                  profile. Fill in your details start your journey to living a
                  carbon-neutral life.
                </p>
              </div>
            </div>
            <div className="h-[40vh] w-[30vw]">
              <div className="h-[40vh] w-[30vw]  flex flex-col justify-center items-start">
                <img src={community} className="h-10" alt="profileIcon" />
                <h1 className="text-lg font-medium mt-2 mb-2">
                  Create your BeNeutral profile
                </h1>
                <p className="w-[90%]">
                  Sign up with Email, Google or Apple to create your own Neutral
                  profile. Fill in your details start your journey to living a
                  carbon-neutral life.
                </p>
              </div>
            </div>
            <div className="h-[40vh] w-[30vw]">
              <div className="h-[40vh] w-[30vw]  flex flex-col justify-center items-start">
                <img src={news} className="h-10" alt="profileIcon" />
                <h1 className="text-lg font-medium mt-2 mb-2">
                  Create your BeNeutral profile
                </h1>
                <p className="w-[90%]">
                  Sign up with Email, Google or Apple to create your own Neutral
                  profile. Fill in your details start your journey to living a
                  carbon-neutral life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
