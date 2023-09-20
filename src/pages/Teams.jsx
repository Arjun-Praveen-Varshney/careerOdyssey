import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/mythyaverse-logo.png";
import anmolgupta from "../assets/anmolgupta.jpg";
import abhishekgupta from "../assets/abhishekgupta.jpg";
import vishalpandey from "../assets/vishalpandey.jpg";
import alekhjohari from "../assets/alekhjohari.jpg";
import anujgarg from "../assets/anujgarg.jpg";
import akashrao from "../assets/akashrao.jpg";
// import avinashjain from "../assets/avinashjain.jpg";
import dppr from "../assets/dppr.jpg";
import palakkhetan from "../assets/palakkhetan.jpg";
import rameshshankars from "../assets/rameshshankars.jpg";
import shantanuverma from "../assets/shantanuverma.jpg";

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
          Our Team
          <div className="mt-4 bg-[#646464] h-1 mx-auto rounded-full"></div>
        </div>
        <div className="relative">
          <div className="absolute z-0 w-[90%] -my-8 left-28 h-full border-[1px] rounded-3xl"></div>
          <div className="relative w-[90%] z-10 py-20 my-20 mx-auto border-[1px] px-8 text-white rounded-3xl space-y-16 bg-[#151518]">
            <div className="flex flex-col space-y-3 border-l-4 border-white text-white pl-8">
              <div className="font-semibold text-2xl">Team</div>
              <div className="">
                Our team is a blend of visionaries, technologists, and dreamers,
                united by a shared passion for reimagining the future. Each
                member brings a wealth of experience and expertise, ensuring
                that MythyaVerse remains at the forefront of technological
                advancements.
              </div>
            </div>
            <div className="space-y-12 py-8">
              <div className="flex w-full space-y-5 md:space-y-0 items-center justify-center lg:justify-between mx-auto flex-wrap md:flex-nowrap">
                <div className="md:w-[30%] flex flex-col py-4 rounded-2xl px-2 md:border-[1px]">
                  <div className="mx-auto">
                    <img
                      src={anmolgupta}
                      alt="anmolgupta"
                      className="rounded-full w-[187.5px] h-[187.5px]"
                    />
                  </div>
                  <div className="text-center font-semibold text-lg py-2">
                    Anmol Gupta
                  </div>
                  <div className="border-t w-1/2 mx-auto"></div>
                  <div className="text-center font-semibold text-lg pt-2">
                    CEO
                  </div>
                  <div className="text-center pt-2">
                    Ph.D. IIT Roorkee and University of Groningen
                  </div>
                </div>
                <div className="md:w-[30%] flex flex-col py-4 rounded-2xl px-2 md:border-[1px]">
                  <div className="mx-auto">
                    <img
                      src={vishalpandey}
                      alt="vishalpandey"
                      className="rounded-full w-[187.5px] h-[187.5px]"
                    />
                  </div>
                  <div className="text-center font-semibold text-lg py-2">
                    Vishal Pandey
                  </div>
                  <div className="border-t w-1/2 mx-auto"></div>
                  <div className="text-center font-semibold text-lg pt-2">
                    CTO
                  </div>
                  <div className="text-center pt-2">Ph.D. IIT Roorkee</div>
                </div>
                <div className="md:w-[30%] flex flex-col py-4 rounded-2xl px-2 md:border-[1px]">
                  <div className="mx-auto">
                    <img
                      src={akashrao}
                      alt="akashrao"
                      className="rounded-full w-[187.5px] h-[187.5px]"
                    />
                  </div>
                  <div className="text-center font-semibold text-lg py-2">
                    Akash Rao
                  </div>
                  <div className="border-t w-1/2 mx-auto"></div>
                  <div className="text-center font-semibold text-lg pt-2">
                    COO
                  </div>
                  <div className="text-center pt-2">Ph.D. IIT Mandi</div>
                </div>
              </div>
              <div className="flex w-full space-y-5 md:space-y-0 items-center justify-center lg:justify-between mx-auto flex-wrap md:flex-nowrap">
                <div className="md:w-[30%] flex flex-col py-4 rounded-2xl px-2 md:border-[1px]">
                  <div className="mx-auto">
                    <img
                      src={anujgarg}
                      alt="anujgarg"
                      className="rounded-full w-[187.5px] h-[187.5px]"
                    />
                  </div>
                  <div className="text-center font-semibold text-lg py-2">
                    Anuj Kumar Garg
                  </div>
                  <div className="border-t w-1/2 mx-auto"></div>
                  <div className="text-center font-semibold text-lg pt-2">
                    Business Head
                  </div>
                  <div className="text-center pt-2">
                    Blockchain Expert and Coach with 21+ years of rich IT
                    experience
                  </div>
                </div>
                <div className="md:w-[30%] flex flex-col py-4 rounded-2xl px-2 md:border-[1px]">
                  <div className="mx-auto">
                    <img
                      src={shantanuverma}
                      alt="shantanuverma"
                      className="rounded-full w-[187.5px] h-[187.5px]"
                    />
                  </div>
                  <div className="text-center font-semibold text-lg py-2">
                    Shantanu Verma
                  </div>
                  <div className="border-t w-1/2 mx-auto"></div>
                  <div className="text-center font-semibold text-lg pt-2">
                    CMO
                  </div>
                  <div className="text-center pt-2">
                    Serial Entrepreneur, Founder of Gobuzzinga, Madduo Ideas,
                    Delhi Co. etc.
                  </div>
                </div>
                <div className="md:w-[30%] flex flex-col py-4 rounded-2xl px-2 md:border-[1px]">
                  <div className="mx-auto">
                    <img
                      src={palakkhetan}
                      alt="palakkhetan"
                      className="rounded-full w-[187.5px] h-[187.5px]"
                    />
                  </div>
                  <div className="text-center font-semibold text-lg py-2">
                    Palak Khetan
                  </div>
                  <div className="border-t w-1/2 mx-auto"></div>
                  <div className="text-center font-semibold text-lg pt-2">
                    CSO
                  </div>
                  <div className="text-center pt-2">
                    Co-founder Delhi-Co.| Sales head at Gobuzzinga and SO Delhi
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="md:w-[30%] flex flex-col py-4 rounded-2xl px-2 md:border-[1px] mx-auto">
                  <div className="mx-auto">
                    <img
                      src={dppr}
                      alt="dppr"
                      className="rounded-full w-[187.5px] h-[187.5px]"
                    />
                  </div>
                  <div className="text-center font-semibold text-lg py-2">
                    Dr. Partha Pratim Roy
                  </div>
                  <div className="border-t w-1/2 mx-auto"></div>
                  <div className="text-center font-semibold text-lg pt-2">
                    Mentor
                  </div>
                  <div className="text-center pt-2">
                    Associate Professor at IIT Roorkee Computer Science
                    Department
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute z-0 w-[90%] -my-8 left-28 h-full border-[1px] rounded-3xl"></div>
          <div className="relative w-[90%] z-10 py-20 my-20 mx-auto border-[1px] px-8 text-white rounded-3xl space-y-16 bg-[#151518]">
            <div className="flex flex-col space-y-3 border-l-4 border-white text-white pl-8">
              <div className="font-semibold text-2xl">Advisors</div>
              <div className="">
                Our advisors play a pivotal role in guiding our strategic
                direction, ensuring that we remain aligned with industry trends
                and best practices.
              </div>
            </div>
            <div className="space-y-12 py-4">
              <div className="flex w-full space-y-5 md:space-y-0 items-center justify-center lg:justify-between mx-auto flex-wrap md:flex-nowrap">
                <div className="md:w-[30%] flex flex-col py-4 rounded-2xl px-2 md:border-[1px]">
                  <div className="mx-auto">
                    <img
                      src={alekhjohari}
                      alt="alekhjohari"
                      className="rounded-full w-[187.5px] h-[187.5px]"
                    />
                  </div>
                  <div className="text-center font-semibold text-lg py-2">
                    Alekh Johari
                  </div>
                  <div className="border-t w-1/2 mx-auto"></div>
                  <div className="text-center font-semibold text-lg pt-2">
                    Founder: Anemoi Solution
                  </div>
                  <div className="text-center pt-2">
                    Creator: Show called 'The Future of WEB' | Creator:
                    Metaverse Marathon
                  </div>
                </div>
                <div className="md:w-[30%] flex flex-col py-4 rounded-2xl px-2 md:border-[1px]">
                  <div className="mx-auto">
                    <img
                      src={rameshshankars}
                      alt="rameshshankars"
                      className="rounded-full w-[187.5px] h-[187.5px]"
                    />
                  </div>
                  <div className="text-center font-semibold text-lg py-2">
                    Ramesh Shankar S
                  </div>
                  <div className="border-t w-1/2 mx-auto"></div>
                  <div className="text-center font-semibold text-lg pt-2">
                    Chief Joy Officer: Hrishti.com
                  </div>
                  <div className="text-center pt-2">
                    Ex. Executive Vice President & Head of HR (South Asia
                    Cluster) - Siemens
                  </div>
                </div>
                <div className="md:w-[30%] flex flex-col py-4 rounded-2xl px-2 md:border-[1px]">
                  <div className="mx-auto">
                    <img
                      src={abhishekgupta}
                      alt="abhishekgupta"
                      className="rounded-full w-[187.5px] h-[187.5px]"
                    />
                  </div>
                  <div className="text-center font-semibold text-lg py-2">
                    Abhishek Gupta
                  </div>
                  <div className="border-t w-1/2 mx-auto"></div>
                  <div className="text-center font-semibold text-lg pt-2">
                    Head of Human Resources @ ZebPay
                  </div>
                  <div className="text-center pt-2">
                    ET NOW's 'Young HR Leader of the Year' | SCMHRD, Pune
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute z-0 w-[90%] -my-8 left-28 h-full border-[1px] rounded-3xl"></div>
          <div className="relative w-[90%] z-10 py-12 my-20 mx-auto border-[1px] px-8 text-white rounded-3xl bg-[#151518]">
            <div className="flex flex-col space-y-3 border-l-4 border-white text-white pl-8">
              <div className="font-semibold text-2xl">
                Join Us on Our Expedition
              </div>
              <div className="">
                We invite you to be a part of our journey as we continue to
                explore, innovate, and redefine the boundaries of technology.
                Together, let's make the unreal, Real.
              </div>
            </div>
          </div>
        </div>
        <div className="flex"></div>
      </main>
    </div>
  );
};

export default Teams;
