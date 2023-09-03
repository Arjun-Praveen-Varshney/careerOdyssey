import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/mythyaverse-logo.png";

const Teams = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="w-screen">
      <nav className="border-gray-200 -mt-6">
        <div className="px-10 flex flex-wrap lg:flex-nowrap items-center mx-auto justify-center md:justify-between">
          <div className="flex space-x-5">
            <div
              className="w-full md:w-auto flex -mt-6 md:mt-0 justify-center"
              id="navbar-default"
            >
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                <img src={Logo} alt="logo" className="w-24" />
              </Link>
            </div>
            <Link to="/home" className="hidden md:flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                CareerOdyssey: A MythyaVerse Expedition
              </span>
            </Link>
          </div>
          <div className="flex text-sm md:text-base font-medium">
            <button
              onClick={() => {
                navigate("/about");
              }}
              className={`rounded-full py-2 px-4 ${
                location.pathname === "/about"
                  ? "text-black bg-white"
                  : "text-white"
              } mr-2`}
            >
              About
            </button>
            <button
              onClick={() => {
                navigate("/teams");
              }}
              className={`rounded-full py-2 px-4 ${
                location.pathname === "/teams"
                  ? "text-black bg-white"
                  : "text-white"
              } mr-2`}
            >
              Teams
            </button>
            <button
              onClick={() => {
                navigate("/howtouse");
              }}
              className={`rounded-full py-2 px-4 ${
                location.pathname === "/howtouse"
                  ? "text-black bg-white"
                  : "text-white"
              }`}
            >
              How to use
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Teams;
