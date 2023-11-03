import { useEffect } from "react";
import "./index.css";
import LandingPage from "./components/landingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Calculate from "./components/calculate";
import SignInOut from "./components/signInOut";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 }, { offset: 50 });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/calculate" element={<Calculate />}></Route>
        <Route exact path="/signInOut" element={<SignInOut />}></Route>
      </Routes>
    </div>
  );
}

export default App;
