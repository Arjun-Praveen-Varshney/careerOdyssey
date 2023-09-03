import { Link, Outlet, useLocation } from "react-router-dom";
import Analytics from "./Analytics";
import Profile from "./Profile";
import Home from "./Home";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconAnalytics from "../assets/icon-analytics.png";
import IconHome from "../assets/icon-home.png";
import { useState } from "react";

import "./style.css";

function Dashboard() {
  const location = useLocation();
  const [showNavbar, setshowNavbar] = useState(false);
  let screenWidth = window.innerWidth;
  return (
    <div className="min-h-screen py-10 overflow-y-auto bg-gradient-to-b from-[#1D1D22] to-[#070707]">
      <div className="flex flex-wrap md:flex-nowrap justify-center">
        {location.pathname !== "/home" &&
          location.pathname !== "/about" &&
          location.pathname !== "/teams" &&
          location.pathname !== "/howtouse" && (
            <>
              <div
                className={`xl:w-1/5 w-1/4 text-white md:h-auto grow border-r-2 border-r-[#3b3b3b] mr-8 ${
                  screenWidth < 768
                    ? !showNavbar
                      ? "invisible"
                      : "h-screen"
                    : ""
                }`}
              >
                <nav className="hidden md:block list-none px-4">
                  <li>
                    <Link
                      to="/home"
                      className={`${
                        location.pathname === "/home" ? "bg-[#282829]" : ""
                      } flex my-16 p-4 xl:pl-8 rounded-lg`}
                    >
                      <img src={IconHome} alt="" className="mr-4" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/analytics"
                      className={`${
                        location.pathname === "/analytics" ? "bg-[#282829]" : ""
                      } flex my-16 p-4 xl:pl-8 rounded-lg md:overflow-auto lg:overflow-visible`}
                    >
                      <img src={IconAnalytics} alt="" className="mr-4" />
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/profile"
                      className={`${
                        location.pathname === "/profile" ? "bg-[#282829]" : ""
                      } flex my-16 p-4 xl:pl-8 rounded-lg`}
                    >
                      <FontAwesomeIcon
                        icon={faUser}
                        className="mr-4 text-2xl my-auto"
                      />
                      Profile
                    </Link>
                  </li>
                </nav>
                <nav
                  className={`${
                    showNavbar ? "" : "hidden"
                  } md:hidden list-none px-4`}
                >
                  <li>
                    <Link
                      to="/home"
                      className={`${
                        location.pathname === "/home" ? "bg-[#282829]" : ""
                      } flex my-16 p-4 xl:pl-8 rounded-lg`}
                    >
                      <img src={IconHome} alt="" className="mr-4" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/analytics"
                      className={`${
                        location.pathname === "/analytics" ? "bg-[#282829]" : ""
                      } flex my-16 p-4 xl:pl-8 rounded-lg`}
                    >
                      <img src={IconAnalytics} alt="" className="mr-4" />
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/profile"
                      className={`${
                        location.pathname === "/profile" ? "bg-[#282829]" : ""
                      } flex my-16 p-4 xl:pl-8 rounded-lg`}
                    >
                      <FontAwesomeIcon
                        icon={faUser}
                        className="mr-4 text-2xl my-auto"
                      />
                      Profile
                    </Link>
                  </li>
                </nav>
              </div>
              <button
                onClick={() => setshowNavbar(!showNavbar)}
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center mb-6 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </>
          )}
        {(!showNavbar ||
          location.pathname === "/home" ||
          location.pathname === "/about" ||
          location.pathname === "/teams" ||
          location.pathname === "/howtouse") && <Outlet />}
      </div>
    </div>
  );
}

export { Analytics, Dashboard, Profile, Home };
