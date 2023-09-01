import "../index.css";
import news from "../resource/newspaper.svg";
import coins from "../resource/coins-five.svg";
import calculator from "../resource/calculator.svg";
import community from "../resource/community.svg";
import profile from "../resource/profile.svg";
import task from "../resource/goal.svg";
const HowItWorks = () => {
  return (
    <div className="h-[100vh] w-full  flex justify-center items-center HeadingFont">
      <div className="h-[95%] w-[95%] p-4">
      <p className="ml-4 text-[#34a853] font-medium">Features</p>
        <h1 className="text-4xl font-semibold tracking-wide text-left p-4 headColor">
          How it works
        </h1>
        <p></p>
        <div className="w-[100%] h-[90%] flex flex-col justify-center items-center paraColor">
          <div className="flex ">
            <div className="h-[40vh] w-[30vw]  flex flex-col justify-center relative   items-start">
              <img src={profile} className="h-8  " alt="profileIcon" />
              <h1 className="text-lg headColor   font-medium mt-2 mb-2 ">
                Create your BeNeutral profile
              </h1>
              <p className="w-[90%]">
                Sign up with Email or Google to create your own BeNeutral
                profile. Fill in your details start your journey to living a
                carbon-neutral life.
              </p>
            </div>
            <div className="h-[40vh] w-[30vw]">
              <div className="h-[40vh] w-[30vw]  flex flex-col justify-center items-start">
                <img src={calculator} className="h-8" alt="profileIcon " />
                <h1 className="text-lg headColor font-medium mt-2 mb-2">
                  Calculate your carbon emission
                </h1>
                <p className="w-[90%]">
                  Answer a few simple questions about your lifestyle to
                  calculate your carbon emissions - your utility bills, typical
                  diet, how much you drive, etc.
                </p>
              </div>
            </div>
            <div className="h-[40vh] w-[30vw] ">
              <div className="h-[40vh] w-[30vw]  flex flex-col justify-center items-start">
                <img src={task} className="h-8" alt="profileIcon" />
                <h1 className="text-lg font-medium mt-2 mb-2 headColor">
                  Complete the task and challeneges
                </h1>
                <p className="w-[90%]">
                  Your carbon emissions determine your level. If it's high,
                  you'll receive reduction suggestions. If it's low, you'll get
                  challenges. Exceed critical for tips, stay below for fun
                  challenges.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="h-[40vh] w-[30vw] ">
              <div className="h-[40vh] w-[30vw]-100 flex flex-col justify-center items-start">
                <img src={coins} className="h-8" alt="profileIcon" />
                <h1 className="text-lg font-medium mt-2 mb-2 headColor">
                  Earn green coins on task completion
                </h1>
                <p className="w-[90%]">
                  Based on your type of task and challeneges completed you will
                  get rewarded for it. Which you can you use further for in
                  web/app purchase and coupons
                </p>
              </div>
            </div>
            <div className="h-[40vh] w-[30vw]">
              <div className="h-[40vh] w-[30vw]  flex flex-col justify-center items-start">
                <img src={community} className="h-8" alt="profileIcon" />
                <h1 className="text-lg font-medium mt-2 mb-2 headColor">
                  Create a community or join community
                </h1>
                <p className="w-[90%]">
                  Join the community of like minded people where everyone cares
                  about mother earth or, create a community which takes positive
                  steps towards nature
                </p>
              </div>
            </div>
            <div className="h-[40vh] w-[30vw]">
              <div className="h-[40vh] w-[30vw]  flex flex-col justify-center items-start">
                <img src={news} className="h-8" alt="profileIcon" />
                <h1 className="text-lg font-medium mt-2 mb-2 headColor">
                  Be updated
                </h1>
                <p className="w-[90%]">
                  Browse the latest global carbon-related news and get updates
                  from your program straight from our reforestation partner.
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
