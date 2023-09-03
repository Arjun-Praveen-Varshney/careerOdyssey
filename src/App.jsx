import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";

import {
  Dashboard,
  Analytics as DashboardAnalytics,
  Profile as DashboardProfile,
  Home as DashboardHome,
} from "./pages/Dashboard";
import About from "./pages/About";
import Teams from "./pages/Teams";
import HowToUse from "./pages/HowToUse";
import SplashScreen from "./pages/SplashScreen";

import "./App.css";

export default function App() {
  const style = {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("/bg-image.jpg")`,
    backgroundSize: "contain",
    width: "100%",
    height: "100%",
    position: "fixed",
  };

  const bodyRef = useRef(null);

  return (
    <div style={style} ref={bodyRef} className={"overflow-y-auto"}>
      <TransitionGroup>
        <Routes>
          <Route index element={<SplashScreen />} />
          <Route path="/" exact element={<Dashboard />}>
            <Route path="/home" exact element={<DashboardHome />} />
            <Route path="/analytics" exact element={<DashboardAnalytics />} />
            <Route path="/profile" exact element={<DashboardProfile />} />
            <Route path="/teams" exact element={<Teams />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/howtouse" exact element={<HowToUse />} />
          </Route>
        </Routes>
      </TransitionGroup>
    </div>
  );
}
