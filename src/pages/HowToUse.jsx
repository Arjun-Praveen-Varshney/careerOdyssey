import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/mythyaverse-logo.png";
import img1 from "../assets/abouthome2.png";
import img2 from "../assets/abouthome3.png";
import img3 from "../assets/abouthome4.png";
import img4 from "../assets/abouthome5.png";

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
        <div className="my-8 flex flex-col lg:items-center mx-4 lg:mx-0 space-y-8 lg:space-y-0">
          <div className="flex items-center">
            <div className="border-[1px] border-white border-opacity-50 rounded-full h-7 w-7 inline-flex items-center justify-center text-center">
              <div className="bg-[#D9D9D9] rounded-full h-4 w-4"></div>
            </div>
            <div className="p-1 ml-10 border-[1px] absolute rounded-lg">
              <div className="inline-flex text-white mx-4 font-semibold">
                Step 1
              </div>
            </div>
            <div className="inline-flex absolute ml-40 text-white font-semibold">
              Upload your Resume/CV
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex-1 lg:block hidden"></div>
            <div className="lg:border-l-2 lg:border-[#D9D9D9] flex-1 my-6">
              <div className="pl-3 lg:pl-[4.5rem] relative overflow-hidden lg:overflow-visible">
                <div className="z-0 h-[231px] w-[462px] border-[1px] top-3 left-8 lg:left-24 absolute opacity-50"></div>
                <img
                  className="z-10 relative"
                  src={img1}
                  alt="howtouse-1"
                  height={231}
                  width={462}
                />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row-reverse items-center">
            <div className="border-[1px] border-white border-opacity-50 rounded-full h-7 w-7 inline-flex items-center justify-center text-center">
              <div className="bg-[#D9D9D9] rounded-full h-4 w-4"></div>
            </div>
            <div className="p-1 ml-10 lg:ml-0 lg:mr-10 border-[1px] absolute rounded-lg">
              <div className="inline-flex text-white mx-4 font-semibold">
                Step 2
              </div>
            </div>
            <div className="inline-flex absolute ml-40 lg:ml-0 lg:mr-40 text-white font-semibold">
              Add Job Description or Generate using AI
            </div>
          </div>
          <div className="flex w-full">
            <div className="lg:border-r-2 lg:border-[#D9D9D9] flex-1 my-6">
              <div className="relative pl-3 lg:pl-0 lg:pr-[4.5rem] lg:flex lg:justify-end overflow-hidden lg:overflow-visible">
                <div className="z-0 h-[231px] w-[462px] border-[1px] top-3 left-8 lg:left-auto lg:right-12 absolute opacity-50"></div>
                <img
                  className="z-10 relative"
                  src={img2}
                  alt="howtouse-2"
                  height={231}
                  width={462}
                />
              </div>
            </div>
            <div className="flex-1 lg:block hidden"></div>
          </div>
          <div className="flex items-center">
            <div className="border-[1px] border-white border-opacity-50 rounded-full h-7 w-7 inline-flex items-center justify-center text-center">
              <div className="bg-[#D9D9D9] rounded-full h-4 w-4"></div>
            </div>
            <div className="p-1 ml-10 border-[1px] absolute rounded-lg">
              <div className="inline-flex text-white mx-4 font-semibold">
                Step 3
              </div>
            </div>
            <div className="inline-flex absolute ml-40 text-white font-semibold">
              Select Job role and Experience level
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex-1 lg:block hidden"></div>
            <div className="lg:border-l-2 lg:border-[#D9D9D9] flex-1 my-6">
              <div className="pl-3 lg:pl-[4.5rem] relative overflow-hidden lg:overflow-visible">
                <div className="z-0 h-[231px] w-[462px] border-[1px] top-3 left-8 lg:left-24 absolute opacity-50"></div>
                <img
                  className="z-10 relative"
                  src={img3}
                  alt="howtouse-3"
                  height={231}
                  width={462}
                />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row-reverse items-center">
            <div className="border-[1px] border-white border-opacity-50 rounded-full h-7 w-7 inline-flex items-center justify-center text-center">
              <div className="bg-[#D9D9D9] rounded-full h-4 w-4"></div>
            </div>
            <div className="p-1 ml-10 lg:ml-0 lg:mr-10 border-[1px] absolute rounded-lg">
              <div className="inline-flex text-white mx-4 font-semibold">
                Step 4
              </div>
            </div>
            <div className="inline-flex absolute ml-40 lg:ml-0 lg:mr-40 text-white font-semibold">
              Improve your CV or Resume with CareerOdyssey result and feedback
            </div>
          </div>
          <div className="flex w-full">
            <div className="lg:border-r-2 lg:border-[#D9D9D9] flex-1 my-6">
              <div className="relative pl-3 lg:pl-0 lg:pr-[4.5rem] lg:flex lg:justify-end overflow-hidden lg:overflow-visible">
                <div className="z-0 h-[231px] w-[462px] border-[1px] top-3 left-8 lg:left-auto lg:right-12 absolute opacity-50"></div>
                <img
                  className="z-10 relative"
                  src={img4}
                  alt="howtouse-4"
                  height={231}
                  width={462}
                />
              </div>
            </div>
            <div className="flex-1 lg:block hidden"></div>
          </div>
          <div className=""></div>
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
