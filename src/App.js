import { useRef } from "react";
import "./index.css";
import Navabr from "./components/navbar";
import LandingPage from "./components/landingPage";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import HowItWorks from "./components/howItWorks";
import Mission from "./components/mission";
import Learn from "./components/learn";
import Events from "./components/events";

function App() {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <main
        data-scroll-container
        ref={containerRef}
        className="overflow-hidden"
      >
        <Navabr />
        <LandingPage />
        <HowItWorks />
        <Mission />
        <Learn />
        <Events />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
