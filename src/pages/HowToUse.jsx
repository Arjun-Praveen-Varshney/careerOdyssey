import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/mythyaverse-logo.png";
import img1 from "../assets/abouthome2.png";

const HowToUse = () => {
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
          <div className="flex text-xs md:text-base font-medium">
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
      <main className="mt-5">
        <div className="mx-auto text-center text-white font-[700] text-3xl w-fit">
          <div className="">
            Get your <span className="text-[#2684FC]">Resume Analyzed</span>
          </div>
          <div className=""> in few steps</div>
          <div className="mt-4 bg-[#646464] h-1 mx-auto rounded-full w-3/4"></div>
        </div>
        <div className="my-8 flex flex-col items-center">
          <div className="flex items-center">
            <div className="border-[1px] border-[#646464] rounded-full h-7 w-7 inline-flex items-center justify-center text-center">
              <div className="bg-white rounded-full h-4 w-4"></div>
            </div>
            <div className="p-1 ml-10 border-[1px] absolute rounded-lg">
              <div className="inline-flex text-white mx-4 font-semibold">
                Step 1
              </div>
            </div>
            <div className="inline-flex absolute ml-40 text-white">
              Upload your Resume/CV
            </div>
          </div>
          <div className="border-l-2 pl-8">
            <div className="z-0 h-[231px] w-[462px] border-[1px] absolute"></div>
            <img
              className="z-1 absolute"
              src={img1}
              alt="howtouse-1"
              height={231}
              width={462}
            />
          </div>
          <div className="text-white">hello</div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </main>
    </div>
  );
};

export default HowToUse;
