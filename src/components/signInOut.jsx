import { useState } from "react";
import "../index.css";
import TreeHero from "../resource/Tree house-pana.svg"
const SignInOut = () => {
  const [registerPanel, setregisterPanel] = useState(false);
  const toggleToSignIn = () => {
    setregisterPanel(true);
  };
  const toggleCreateAccount = () => {
    setregisterPanel(false);
  };
  return (
    <>
      <div className=" h-[100vh] w-[100vw] flex justify-center items-center HeadingFont">
        <div className="w-[60%] h-[100%] bg-green-200 flex justify-center items-start ">
          <img src={TreeHero} className="h-[110%] " alt="login page image " />
        </div>
        <div className="w-[40%] h-[100%] flex justify-center items-center">
          <form className="w-[90%] h-full flex flex-col justify-evenly items-center  ">
            {!registerPanel ? (
              <div className="h-[65%] w-[60%] flex flex-col justify-between items-center ">
                <label className="text-2xl font-semibold relative  bottom-6">
                  Create an account
                </label>
                <div className="flex flex-col ">
                  <label className="font-medium text-sm text-[#34a853] mb-2 ">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    required={true}
                    placeholder="Belli 🐷"
                    className="h-10 w-80 p-2 rounded-md border-2 border-green-200 focus:drop-shadow-xl focus:outline-none group"
                  />
                </div>
                <div className="flex flex-col ">
                  <label className="font-medium text-sm text-[#34a853] mb-2 ">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required={true}
                    placeholder="abc@gmail.com"
                    className="h-10 w-80 p-2 rounded-md border-2 border-green-200 focus:drop-shadow-xl focus:outline-none group"
                  />
                </div>
                <div className="flex flex-col ">
                  <label className="font-medium text-sm text-[#34a853] mb-2 ">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="1213131"
                    required={true}
                    className="h-10 w-80 p-2 rounded-md border-2 border-green-200 focus:drop-shadow-xl focus:outline-none group"
                  />
                </div>
                <div className="flex flex-col m-2">
                  <label className="font-medium text-sm text-[#34a853] mb-2">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="Cpassword"
                    placeholder="1213131"
                    required={true}
                    className="h-10 w-80 p-2 rounded-md border-2 border-green-200 focus:drop-shadow-xl focus:outline-none group"
                  />
                </div>
                <button className="bg-[#34a853] text-white  h-10 w-80 rounded-md  hover:bg-white hover:text-[#34a853] hover:border-2 hover:border-[#34a853] hover:scale-95 hover:transition-all duration-500 hover:ease-linear">
                  Create
                </button>
                <button
                  onClick={toggleToSignIn}
                  className="relative left-20 text-sm text-[#34a853] underline"
                >
                  Already have account?
                </button>
              </div>
            ) : (
              <div className="h-[65%] w-[60%] flex flex-col justify-center items-center ">
                <label className="text-2xl font-semibold">Login </label>
                <div className=" h-[50%] flex flex-col justify-evenly items-center">
                  <div className="flex flex-col ">
                    <label className="font-medium text-sm text-[#34a853] mb-2 ">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      required={true}
                      placeholder="Arjun"
                      className="h-10 w-80 p-2 rounded-md border-2 border-green-200 focus:drop-shadow-xl focus:outline-none group"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label className="font-medium text-sm text-[#34a853] mb-2 ">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="1213131"
                      required={true}
                      className="h-10 w-80 p-2 rounded-md border-2 border-green-200 focus:drop-shadow-xl focus:outline-none group"
                    />
                  </div>
                  <button className="bg-[#34a853] text-white  h-10 w-80 rounded-md relative top-2   hover:bg-white hover:text-[#34a853] hover:border-2 hover:border-[#34a853] hover:scale-95 hover:transition-all duration-500 hover:ease-linear">
                    Login
                  </button>
                  <button
                    onClick={toggleCreateAccount}
                    className="relative left-24 top-2 text-sm text-[#34a853] underline"
                  >
                    Create an account
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
export default SignInOut;
