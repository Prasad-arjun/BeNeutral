
import "./index.css";
import Navabr from "./components/navbar";
import LandingPage from "./components/landingPage";
import HowItWorks from "./components/howItWorks";
import Mission from "./components/mission";
import Learn from "./components/learn";
import Events from "./components/events";
import Industires from "./components/industries";
function App() {
  return (
    <div className="overflow-hidden">
      <Navabr />
      <LandingPage />
      <HowItWorks />
      <Mission />
      <Learn />
      <Events />
      <Industires />
    </div>
  );
}

export default App;
