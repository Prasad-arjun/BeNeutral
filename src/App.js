import { useEffect } from "react";
import "./index.css";
import LandingPage from "./components/landingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Calculate from "./components/calculate";
import SignInOut from "./components/signInOut";
import { UserProvider } from "./components/UserContext";
import Shery from "sheryjs";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 }, { offset: 50 });
    AOS.refresh();
  }, []);
/*   Shery.mouseFollower({
   skew:false,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,}); */
  return (
    <div className="overflow-hidden">
      <UserProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/calculate" element={<Calculate />}></Route>
          <Route exact path="/signInOut" element={<SignInOut />}></Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
