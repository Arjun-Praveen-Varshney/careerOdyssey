import { useState, useEffect, useRef } from "react";
import logo from "../assets/mythyaverse-logo.png";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import "./style.css";

const SplashScreen = () => {
  const navigate = useNavigate();
  const nodeRef = useRef(null);
  const [showScreen, setshowScreen] = useState(false);

  useEffect(() => {
    setshowScreen(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[#1D1D22] to-[#070707]">
      <CSSTransition
        in={showScreen}
        nodeRef={nodeRef}
        timeout={1000}
        classNames="slide"
        unmountOnExit
        // onEnter={() => setshowScreen(false)}
        // onExited={() => setshowScreen(true)}
      >
        <div
          ref={nodeRef}
          className="flex flex-col items-center justify-center space-y-5"
        >
          <img src={logo} alt="logo" className="w-48 h-[7.5rem]" />
          <div className="text-white font-bold text-4xl">CareerOdyssey</div>
          <div className="flex items-center justify-center">
            <div className="flex-1 w-16 bg-white h-[1px]"></div>
          </div>
          <div className="text-white font-semibold text-xl md:text-2xl">
            A MythyaVerse Expedition
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default SplashScreen;
