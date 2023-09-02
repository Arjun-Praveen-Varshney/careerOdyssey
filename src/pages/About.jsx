import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../assets/abouthome1.png";
import img2 from "../assets/abouthome2.png";
import img3 from "../assets/abouthome3.png";
import img4 from "../assets/abouthome4.png";
import img5 from "../assets/abouthome5.png";
import anmolgupta from "../assets/anmolgupta.jpg";
import abhishekgupta from "../assets/abhishekgupta.jpg";
import vishalpandey from "../assets/vishalpandey.jpg";
import alekhjohari from "../assets/alekhjohari.jpg";
import anujgarg from "../assets/anujgarg.jpg";
import akashrao from "../assets/akashrao.jpg";
import avinashjain from "../assets/avinashjain.jpg";
import dppr from "../assets/dppr.jpg";
import palakkhetan from "../assets/palakkhetan.jpg";
import rameshshankars from "../assets/rameshshankars.jpg";
import shantanuverma from "../assets/shantanuverma.jpg";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-8 text-white bg-gradient-to-b from-[#1D1D22] to-[#070707] w-full min-h-screen">
      <Link to="/home" className="flex items-center w-full md:w-fit p-2 md:p-6">
        <span className="self-center text-sm md:text-xl font-semibold whitespace-nowrap text-white">
          CareerOdyssey: A MythyaVerse Expedition
        </span>
      </Link>
      <Tabs selectedTabClassName="activeTab">
        <div className="flex justify-center items-center mb-20 space-x-4">
          <FontAwesomeIcon
            onClick={() => {
              navigate("/home");
            }}
            icon={faCircleChevronLeft}
            className="text-white flex h-10 w-10"
          />
          <TabList className="flex flex-wrap items-center justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400 border-2 w-fit rounded-full p-2">
            <Tab className="mr-2">
              <a
                href="#"
                className="inline-block px-4 py-3 text-white font-semibold rounded-full active"
                aria-current="page"
              >
                About
              </a>
            </Tab>
            <Tab className="mr-2">
              <a
                href="#"
                className="inline-block px-4 py-3 text-white font-semibold rounded-full active"
                aria-current="page"
              >
                Teams
              </a>
            </Tab>
            <Tab className="mr-2">
              <a
                href="#"
                className="inline-block px-4 py-3 text-white font-semibold rounded-full active"
                aria-current="page"
              >
                How to Use
              </a>
            </Tab>
          </TabList>
        </div>
        <TabPanel className="space-y-16 w-[92%] mx-auto">
          <div className="flex flex-col space-y-3 border-l-4 border-white text-white pl-8">
            <div className="font-semibold text-2xl">About MythyaVerse</div>
            <div className="">
              MythyaVerse: Where Unreal Becomes Real
              <br />
              At MythyaVerse, we believe in the transformative power of
              technology to redefine boundaries and create unparalleled
              experiences. Our commitment to innovation drives us to explore the
              vast potential of generative AI, pushing the limits of what's
              possible.
            </div>
          </div>
          <div className="flex flex-col space-y-3 border-l-4 border-white text-white pl-8">
            <div className="font-semibold text-2xl">Vision</div>
            <div className="">
              At MythyaVerse, we envision a future where generative AI becomes
              the backbone of HR operations, transforming mundane processes into
              intelligent, efficient, and dynamic tasks. Our aspiration is not
              just to simplify but to revolutionize:
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex w-[95%] mx-auto flex-wrap md:flex-nowrap">
              <div className="md:w-1/3 flex flex-col p-8">
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
              <div className="md:w-1/3 flex flex-col p-8 md:border-x-2 md:border-white md:border-opacity-50">
                <div className="text-center font-semibold text-lg pb-2">
                  Intelligent Screening
                </div>
                <div className="border-t w-1/2 mx-auto"></div>
                <div className="text-justify pt-2">
                  Beyond just analyzing resumes, generative AI can pre-screen
                  candidates, evaluate their fit based on successful employee
                  attributes, and even conduct initial interviews via chatbots.
                </div>
              </div>
              <div className="md:w-1/3 flex flex-col p-8">
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
            </div>
            <div className="border-t border-white border-opacity-50 w-[95%] mx-auto"></div>
            <div className="flex w-[95%] mx-auto flex-wrap md:flex-nowrap">
              <div className="md:w-1/3 flex flex-col p-8">
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
              <div className="md:w-1/3 flex flex-col p-8 md:border-x-2 md:border-white md:border-opacity-50">
                <div className="text-center font-semibold text-lg pb-2">
                  Learning & Development
                </div>
                <div className="border-t w-1/2 mx-auto"></div>
                <div className="text-justify pt-2">
                  Generative AI can assist in developing training materials
                  tailored to the needs of employees, ensuring continuous growth
                  and skill enhancement.
                </div>
              </div>
              <div className="md:w-1/3 flex flex-col p-8">
                <div className="text-center font-semibold text-lg pb-2">
                  Efficient Tool Utilization
                </div>
                <div className="border-t w-1/2 mx-auto"></div>
                <div className="text-justify pt-2">
                  The power of generative AI extends to optimizing the use of
                  existing HR tools, from software programming to training other
                  machine learning models, maximizing efficiency and outcomes.
                </div>
              </div>
            </div>
            <div className="border-t border-white border-opacity-50 w-[95%] mx-auto"></div>
            <div className="w-[95%] mx-auto">
              <div className="md:w-1/3 flex flex-col p-8 md:border-x-2 md:border-white md:border-opacity-50 mx-auto">
                <div className="text-center font-semibold text-lg pb-2">
                  Innovative Interviewing
                </div>
                <div className="border-t w-1/2 mx-auto"></div>
                <div className="text-justify pt-2">
                  Generative AI can transform the interview process, evaluating
                  facial expressions and speech patterns during video
                  interviews, ensuring a holistic assessment of candidates.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 border-l-4 border-white text-white pl-8">
            <div className="font-semibold text-2xl">CareerOdyssey</div>
            <div className="">
              CareerOdyssey is our first step in this journey. At MythyaVerse,
              we aim to harness the full potential of generative AI, creating a
              suite of solutions that redefine HR operations, enhance the
              employee experience, and drive unparalleled business value.
            </div>
          </div>
          <div className="flex"></div>
        </TabPanel>
        <TabPanel className="space-y-8 w-[92%] mx-auto">
          <div className="flex flex-col space-y-3 border-l-4 border-white text-white pl-8">
            <div className="font-semibold text-2xl">Team</div>
            <div className="">
              MythyaVerse: Where Unreal Becomes Real
              <br />
              At MythyaVerse, we believe in the transformative power of
              technology to redefine boundaries and create unparalleled
              experiences. Our commitment to innovation drives us to explore the
              vast potential of generative AI, pushing the limits of what's
              possible.
            </div>
          </div>
          <div className="space-y-12 py-8">
            <div className="flex w-[95%] space-y-5 md:space-y-0 items-center justify-center mx-auto flex-wrap md:flex-nowrap">
              <div className="md:w-1/3 flex flex-col px-8">
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
              <div className="md:w-1/3 flex flex-col px-8 md:border-x-[3px]">
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
              <div className="md:w-1/3 flex flex-col px-8">
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
            <div className="flex w-[95%] space-y-5 md:space-y-0 items-center justify-center mx-auto flex-wrap md:flex-nowrap">
              <div className="md:w-1/3 flex flex-col px-8">
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
              <div className="md:w-1/3 flex flex-col px-8 md:border-x-[3px]">
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
              <div className="md:w-1/3 flex flex-col px-8">
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
            <div className="flex w-[95%] space-y-5 md:space-y-0 items-center justify-center mx-auto flex-wrap md:flex-nowrap">
              <div className="md:w-1/3 flex flex-col px-8 md:border-r-[3px]">
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
                  Associate Professor at IIT Roorkee Computer Science Department
                </div>
              </div>
              <div className="md:w-1/3 flex flex-col px-8">
                <div className="mx-auto">
                  <img
                    src={avinashjain}
                    alt="avinashjain"
                    className="rounded-full w-[187.5px] h-[187.5px]"
                  />
                </div>
                <div className="text-center font-semibold text-lg py-2">
                  Avinash Jain
                </div>
                <div className="border-t w-1/2 mx-auto"></div>
                <div className="text-center font-semibold text-lg pt-2">
                  Product Manager
                </div>
                <div className="text-center pt-2">
                  Blockchain Expert | 21 years of rich IT experience
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 border-l-4 border-white text-white pl-8">
            <div className="font-semibold text-2xl">Advisors</div>
            <div className="">
              Our advisors play a pivotal role in guiding our strategic
              direction, ensuring that we remain aligned with industry trends
              and best practices.
            </div>
          </div>
          <div className="space-y-12 py-4">
            <div className="flex w-[95%] space-y-5 md:space-y-0 items-center justify-center mx-auto flex-wrap md:flex-nowrap">
              <div className="md:w-1/3 flex flex-col px-8">
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
                  Creator: Show called 'The Future of WEB' | Creator: Metaverse
                  Marathon
                </div>
              </div>
              <div className="md:w-1/3 flex flex-col px-8 md:border-x-[3px]">
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
                  Ex. Executive Vice President & Head of HR (South Asia Cluster)
                  - Siemens
                </div>
              </div>
              <div className="md:w-1/3 flex flex-col px-8">
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
          <div className="flex"></div>
        </TabPanel>
        <TabPanel className="space-y-8 w-[92%] mx-auto">
          <div className="flex flex-col space-y-3 border-l-4 border-white text-white pl-8">
            <div className="font-semibold text-2xl">Step 1</div>
            <div className="">
              As soon as the dashboard pops up, effortlessly drag and drop your
              resume or simply hit the upload button to get the ball rolling.
              After your resume is safely onboarded, hit that 'Continue' button
              and let the magic begin!
            </div>
          </div>
          <div className="flex items-center justify-center flex-wrap lg:flex-nowrap space-y-8 lg:space-y-0 lg:space-x-8 mx-auto">
            <img src={img1} alt="img1" className="lg:w-1/2" />
            <img src={img2} alt="img2" className="lg:w-1/2" />
          </div>
          <div className="flex flex-col space-y-3 border-l-4 border-white text-white pl-8">
            <div className="font-semibold text-2xl">Step 2</div>
            <div className="">
              Are you armed with a job description? Fantastic, upload it now and
              let us work our analysis wizardry. No job description on hand? No
              worries! Just check the box, select your desired job profile, and
              watch CareerOdyssey conjure up a customized one for you.
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto">
            <img src={img3} alt="img1" className="lg:w-1/2" />
          </div>
          <div className="flex flex-col space-y-3 border-l-4 border-white text-white pl-8">
            <div className="font-semibold text-2xl">Step 3</div>
            <div className="">
              Landing your dream job is all about aiming right. So, in this
              step, bulls-eye your job role and skill level into our system.
              This ensures tailored resume analysis that hits the mark every
              single time.
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto">
            <img src={img4} alt="img1" className="lg:w-1/2" />
          </div>
          <div className="flex flex-col space-y-3 border-l-4 border-white text-white pl-8">
            <div className="font-semibold text-2xl">Step 4</div>
            <div className="">
              Anticipation makes the heart race! Hold tight for a mere moment
              while our state-of-the-art analysis engines and AI smarts team up
              to unravel your resume's potential. It's like having your career
              fate deciphered in sixty seconds flat.
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto">
            <img src={img5} alt="img1" className="lg:w-1/2" />
          </div>
          <div className="flex flex-col space-y-3 border-l-4 border-white text-white pl-8">
            <div className="font-semibold text-2xl">Step 5</div>
            <div className="">
              Drumroll, please! Your score is ready for its grand reveal. But
              that's not all-uncover the gems that shine and the bits that need
              a little polish in your resume. Illuminate your path to
              improvement, armed with insights that are pure gold.
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto">
            <img src={img5} alt="img1" className="lg:w-1/2" />
          </div>
          <div className="flex"></div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default About;
