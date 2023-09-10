import "../index.css";
import Learn from "./learn";
const Mission = () => {
  return (
    <>
    <div
      className="h-[100vh] w-full  flex justify-center items-center headColor HeadingFont"
      id="Mission"
    >
      <div className="h-[95%] w-[95%]">
        <div className="p-4 pb-0">
          <h1 className="text-4xl font-semibold tracking-wide text-left  headColor HeadingFont">
            Our mission
          </h1>
          <p className=" text-2xl font-semibold tracking-wide text-left  pt-2 mt-4 mb-6 headColor HeadingFont w-[50%]">
            Offering individuals, organizations, and industries a path to attain
            their net-zero objectives.
          </p>
          <h1 className="text-[#34a853] text-xl font-medium tracking-wide text-left HeadingFont">
            The problem :
          </h1>
          <h1 className="headColor">Timeline of Carbon Emissions Impact</h1>
        </div>
        <div
          className="w-full h-[70%]  flex justify-center items-center" data-aos="fade-down" >
          <div className="w-[98%] h-[98%]  flex flex-col justify-center items-center">
            <div className="flex justify-around items-center w-[100%] h-[25%] relative bottom-6">
              <p className="w-[15%] h-[100%] text-left flex justify-center items-center border-2 border-dotted border-blue-500  text-blue-500 relative p-2  ">
                Minimal emissions, natural CO2 balance
              </p>

              <p className="w-[15%] h-[100%] text-left flex justify-center items-center text-[#dbb000] border-2 border-dotted border-[#dbb000] relative p-2  right-10">
                Fossil fuels surge, climate impact surfaces
              </p>
              <p className="w-[15%] h-[100%] text-left flex justify-center items-center text-[#008080] border-2 border-dotted border-[#008080] relative p-2  right-24">
                Proof of human-caused warming. Efforts to curb emissions begin
              </p>
              <p className="w-[15%] h-[100%] text-left flex justify-center items-center text-orange-700 border-2 border-dotted border-orange-700 relative p-1  right-36">
                Shift to renewables, health implications. Urgency for change
                mounts
              </p>
            </div>
            <div className="h-[24%] w-[90%] text-white  bg-green-200 rounded-full flex justify-evenly items-center text-center text-xs font-semibold ">
              <div className="h-[90%] w-[8%] bg-blue-500  rounded-full flex justify-center items-center">
                <p>Before 1800s</p>
              </div>
              <div className="h-[90%] w-[8%] bg-[#05e177] rounded-full flex justify-center items-center p-2">
                <p>Late 18th to 19th Century</p>
              </div>
              <div className="h-[90%] w-[8%] bg-[#dbb000] rounded-full flex justify-center items-center">
                <p>20th Century</p>
              </div>
              <div className="h-[90%] w-[8%] bg-[#ff6900] rounded-full flex justify-center items-center">
                <p>Mid-20th Century</p>
              </div>
              <div className="h-[90%] w-[8%] bg-[#008080] rounded-full flex justify-center items-center">
                <p>Late 20th Century</p>
              </div>
              <div className="h-[90%] w-[8%] bg-[#cd7f32] rounded-full flex justify-center items-center">
                <p>21st Century</p>
              </div>
              <div className="h-[90%] w-[8%] bg-orange-700 rounded-full flex justify-center items-center">
                <p>2020s</p>
              </div>
              <div className="h-[90%] w-[8%] bg-orange-800 rounded-full flex justify-center items-center">
                <p>Future</p>
              </div>
            </div>
            <div className="flex justify-evenly w-[100%] h-[25%] relative top-6">
              <p className="w-[15%] h-[100%] text-left flex justify-center items-center text-[#05e177] border-2 border-dotted border-[#05e177] relative p-2 left-28">
                Industrialization spikes emissions. CO2 levels begin to rise
              </p>
              <p className="w-[15%] h-[100%] text-left flex justify-center items-center text-[#cd7f32] border-2 border-dotted border-[#ff6900] relative p-2  left-24">
                Awareness grows, hints of consequence
              </p>
              <p className="w-[15%] h-[100%] text-left flex justify-center items-center text-[#cd7f32] border-2 border-dotted border-[#cd7f32] relative p-2  left-20">
                CO2 climbs, extreme events intensify. Sea levels and
                biodiversity at risk
              </p>
              <p className="w-[15%] h-[100%] text-left flex justify-center items-center text-orange-700 border-2 border-dotted border-orange-800 relative p-2  left-24">
                Our choice: mitigate or endure. Act now to safeguard tomorrow
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Learn/> 
    </>
  );
};
export default Mission;
