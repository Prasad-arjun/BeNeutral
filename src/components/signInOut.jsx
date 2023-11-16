import { useState } from "react";
import "../index.css";
import TreeHero from "../resource/Tree house-pana.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

const SignInOut = () => {
  const navigate = useNavigate();
  const { setUserLoggedIn } = useUser();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [registerPanel, setRegisterPanel] = useState(false);

  const toggleToSignIn = () => {
    setRegisterPanel(true);
  };

  const toggleCreateAccount = () => {
    setRegisterPanel(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password, confirmPassword } = formData;
    const isLogin = registerPanel;

    if (isLogin) {
      axios
        .post("http://localhost:3005/login", { username, password })
        .then((response) => {
          console.log(response.data);
          if (response.data === "Login successful!") {
            setUserLoggedIn(true);
            navigate("/calculate"); // Navigate to /calculate only on successful login
          } else {
            alert("Login failed");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post("http://localhost:3005/create-account", {
          username,
          email,
          password,
          confirmPassword,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data === "Account created successfully!") {
            setUserLoggedIn(true);
            navigate("/calculate"); // Navigate to /calculate on successful account creation
          } else {
            alert("Enter the details correctly");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className=" h-[100vh] w-[100vw] flex justify-center items-center HeadingFont">
        <div className="w-[60%] h-[100%] bg-green-200 flex justify-center items-start ">
          <img src={TreeHero} className="h-[110%] " alt="login page image " />
        </div>
        <div className=" w-[40%] h-[100%] flex flex-col justify-center items-center bg-slate-50 shadow-2xl rounded-xl">
          <h1 className="p-2  mt-4  text-2xl text-[#34a853] font-medium Name">
            Be<span className="text-black">Neutral</span>
          </h1>
          <p>One stop solution for the carbon footprint calculation.</p>
          <form
            className="w-[90%] h-full flex flex-col justify-evenly items-center  "
            onSubmit={handleSubmit}
          >
            {!registerPanel ? (
              <div className="h-[65%] w-[60%] flex flex-col justify-between items-center  ">
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
                    value={formData.username}
                    onChange={handleInputChange}
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
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col ">
                  <label className="font-medium text-sm text-[#34a853] mb-2 ">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="abcs@323"
                    autoComplete="true"
                    required={true}
                    className="h-10 w-80 p-2 rounded-md border-2 border-green-200 focus:drop-shadow-xl focus:outline-none group"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col m-2">
                  <label className="font-medium text-sm text-[#34a853] mb-2">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="abcs@323"
                    autoComplete="true"
                    required={true}
                    className="h-10 w-80 p-2 rounded-md border-2 border-green-200 focus:drop-shadow-xl focus:outline-none group"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  className="bg-[#34a853] text-white  h-10 w-80 rounded-md  hover:bg-white hover:text-[#34a853] hover:border-2 hover:border-[#34a853] hover:scale-95 hover:transition-all duration-500 hover:ease-linear"
                  type="submit"
                >
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
                      placeholder="Belli 🐷"
                      className="h-10 w-80 p-2 rounded-md border-2 border-green-200 focus:drop-shadow-xl focus:outline-none group"
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label className="font-medium text-sm text-[#34a853] mb-2 ">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="abcs@323"
                      autoComplete="true"
                      required={true}
                      className="h-10 w-80 p-2 rounded-md border-2 border-green-200 focus:drop-shadow-xl focus:outline-none group"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button
                    className="bg-[#34a853] mt-1 text-white  h-10 w-80 rounded-md  hover:bg-white hover:text-[#34a853] hover:border-2 hover:border-[#34a853] hover:scale-95 hover:transition-all duration-500 hover:ease-linear"
                    type="submit"
                  >
                    Login
                  </button>
                  <button
                    onClick={toggleCreateAccount}
                    className="relative left-20 text-sm text-[#34a853] underline"
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
