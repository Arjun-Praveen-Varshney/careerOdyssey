import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/mythyaverse-logo.png";
import "./style.css";

const About = () => {
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
          About Us
          <div className="mt-4 bg-[#646464] h-1 mx-auto rounded-full"></div>
        </div>
        <div className="relative">
          <div className="absolute z-0 w-4/5 -my-8 right-28 h-full border-[1px] rounded-3xl"></div>
          <div className="relative w-4/5 z-10 py-20 my-20 mx-auto border-[1px] px-8 text-white rounded-3xl space-y-16 bg-[#151518]">
            <div className="flex flex-col space-y-3 border-l-4 border-white text-white pl-8">
              <div className="font-semibold text-2xl">
                About <span className="text-[#2684FC]">MythyaVerse</span>
              </div>
              <div className="">
                <div className="font-semibold mb-3">
                  MythyaVerse: Where Unreal Becomes Real
                </div>
                At MythyaVerse, we believe in the transformative power of
                technology to redefine boundaries and create unparalleled
                experiences. Our commitment to innovation drives us to explore
                the vast potential of generative AI, pushing the limits of
                what's possible.
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute z-0 w-4/5 -my-8 right-28 h-full border-[1px] rounded-3xl"></div>
          <div className="relative w-4/5 z-10 py-20 my-20 mx-auto border-[1px] px-8 text-white rounded-3xl space-y-16 bg-[#151518]">
            <div className="flex flex-col space-y-3 border-l-4 border-white text-white pl-8">
              <div className="font-semibold text-2xl">Vision</div>
              <div className="">
                At MythyaVerse, we envision a future where generative AI becomes
                the backbone of HR operations, transforming mundane processes
                into intelligent, efficient, and dynamic tasks. Our aspiration
                is not just to simplify but to revolutionize:
              </div>
            </div>
            <div className="space-y-12">
              <div className="flex items-stretch w-full space-y-5 md:space-y-0 justify-center lg:justify-around mx-auto flex-wrap md:flex-nowrap">
                <div className="md:w-[30%] flex flex-col py-4 justify-center rounded-2xl px-4 md:border-[1px]">
                  <div className="text-center font-semibold text-lg pb-2">
                    Automated Content Creation
                  </div>
                  <div className="border-t w-1/2 mx-auto"></div>
                  <div className="text-justify pt-2">
                    Generative AI can craft, wordsmith, and grammar-check
                    essential HR documents, from job descriptions to onboarding
                    materials, ensuring consistency and professionalism.
                  </div>
                </div>
                <div className="md:w-[30%] flex flex-col py-4 justify-center rounded-2xl px-4 md:border-[1px]">
                  <div className="text-center font-semibold text-lg pb-2">
                    Intelligent Screening
                  </div>
                  <div className="border-t w-1/2 mx-auto"></div>
                  <div className="text-justify pt-2">
                    Beyond just analyzing resumes, generative AI can pre-screen
                    candidates, evaluate their fit based on successful employee
                    attributes, and even conduct initial interviews via
                    chatbots.
                  </div>
                </div>
              </div>
              <div className="flex items-stretch w-full space-y-5 md:space-y-0 justify-center lg:justify-around mx-auto flex-wrap md:flex-nowrap">
                <div className="md:w-[30%] flex flex-col py-4 justify-center rounded-2xl px-4 md:border-[1px]">
                  <div className="text-center font-semibold text-lg pb-2">
                    Enhanced Decision Making
                  </div>
                  <div className="border-t w-1/2 mx-auto"></div>
                  <div className="text-justify pt-2">
                    With generative AI, HR can make nuanced hiring decisions,
                    leveraging machine learning algorithms trained on attributes
                    of successful employees, ensuring the right fit for every
                    role.
                  </div>
                </div>
                <div className="md:w-[30%] flex flex-col py-4 justify-center rounded-2xl px-4 md:border-[1px]">
                  <div className="text-center font-semibold text-lg pb-2">
                    Competitive Compensation
                  </div>
                  <div className="border-t w-1/2 mx-auto"></div>
                  <div className="text-justify pt-2">
                    Generative AI can provide real-time salary benchmarking,
                    analyzing vast external labor market data to offer insights
                    into competitive compensation, benefits, and incentives.
                  </div>
                </div>
              </div>
              <div className="flex items-stretch w-full space-y-5 md:space-y-0 justify-center lg:justify-around mx-auto flex-wrap md:flex-nowrap">
                <div className="md:w-[30%] flex flex-col py-4 justify-center rounded-2xl px-4 md:border-[1px]">
                  <div className="text-center font-semibold text-lg pb-2">
                    Learning & Development
                  </div>
                  <div className="border-t w-1/2 mx-auto"></div>
                  <div className="text-justify pt-2">
                    Generative AI can assist in developing training materials
                    tailored to the needs of employees, ensuring continuous
                    growth and skill enhancement.
                  </div>
                </div>
                <div className="md:w-[30%] flex flex-col py-4 justify-center rounded-2xl px-4 md:border-[1px]">
                  <div className="text-center font-semibold text-lg pb-2">
                    Efficient Tool Utilization
                  </div>
                  <div className="border-t w-1/2 mx-auto"></div>
                  <div className="text-justify pt-2">
                    The power of generative AI extends to optimizing the use of
                    existing HR tools, from software programming to training
                    other machine learning models, maximizing efficiency and
                    outcomes.
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="md:w-[30%] flex flex-col py-4 justify-center rounded-2xl px-4 md:border-[1px] mx-auto">
                  <div className="text-center font-semibold text-lg pb-2">
                    Innovative Interviewing
                  </div>
                  <div className="border-t w-1/2 mx-auto"></div>
                  <div className="text-justify pt-2">
                    Generative AI can transform the interview process,
                    evaluating facial expressions and speech patterns during
                    video interviews, ensuring a holistic assessment of
                    candidates.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute z-0 w-4/5 -my-8 right-28 h-full border-[1px] rounded-3xl"></div>
          <div className="relative w-4/5 z-10 py-12 my-20 mx-auto border-[1px] px-8 text-white rounded-3xl bg-[#151518]">
            <div className="flex flex-col space-y-3 border-l-4 border-white text-white pl-8">
              <div className="font-semibold text-2xl">CareerOdyssey</div>
              <div className="">
                CareerOdyssey is our first step in this journey. At MythyaVerse,
                we aim to harness the full potential of generative AI, creating
                a suite of solutions that redefine HR operations, enhance the
                employee experience, and drive unparalleled business value.
              </div>
            </div>
          </div>
        </div>
        <div className="flex"></div>
      </main>
    </div>
  );
};

export default About;
