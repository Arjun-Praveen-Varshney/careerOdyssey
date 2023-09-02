import { PieChart } from "react-minimal-pie-chart";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

export default function Analytics() {
  const jsonString = localStorage.getItem("careerOdyssey");
  const parsedData = JSON.parse(jsonString);
  // console.log(parsedData);

  const score = parsedData.score;
  // const skills = parsedData.technical_skills;
  const personalDetails = parsedData.personal_info;
  // const colorArray = ["#72d782", "#29b2ff", "#7087ff", "#ffa15b"];

  function convertToTitleCase(inputString) {
    let words = inputString.split("_");
    let capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    let titleCaseString = capitalizedWords.join(" ");
    return titleCaseString;
  }

  return (
    <div className="w-[90%] md:w-full space-y-8 md:pr-8">
      <div className="md:space-x-5 space-y-5 md:space-y-0 flex flex-wrap md:flex-nowrap md:h-[15rem]">
        <div className="flex flex-col w-full md:w-2/5 lg:w-1/4 space-y-5">
          <div>
            <div className="bg-[#292929] p-2 px-4 w-fit text-white rounded-full font-semibold">
              Resume Score
            </div>
          </div>
          <div className="rounded-3xl bg-[#252525] text-white flex items-center justify-center lg:px-20 lg:py-5 md:px-12 md:py-1 py-5 px-20 overflow-hidden grow shrink">
            <PieChart
              data={[{ value: score.score, color: "#29B2FF" }]}
              rounded
              lineWidth={15}
              startAngle={270}
              totalValue={10}
              label={({ dataEntry }) => dataEntry.value}
              labelStyle={{
                fontSize: "25px",
                fontFamily: "sans-serif",
                fill: "white",
                fontWeight: "bold",
              }}
              labelPosition={0}
              background="#3b3b3b"
            />
          </div>
        </div>
        <div className="md:w-3/5 lg:w-3/4 space-y-5 flex flex-col">
          <div>
            <div className="bg-[#292929] w-fit p-2 px-4 text-white rounded-full font-semibold">
              Summary
            </div>
          </div>
          <div className="rounded-3xl bg-[#252525] text-white p-6 overflow-y-auto custom-scrollbar h-48 md:h-auto grow shrink">
            <div className="text-justify">{personalDetails.Summary}</div>
          </div>
        </div>
      </div>
      <div className="space-y-5 h-[30rem] flex flex-col">
        <div className="flex items-center justify-center">
          <div className="w-fit py-2 px-6 text-white rounded-full font-semibold text-lg">
            <FontAwesomeIcon
              icon={faFileSignature}
              className="mr-2 text-lg my-auto"
            />
            Feedback
          </div>
          <div className="flex-1 h-[0.5px] bg-white mx-2"></div>
        </div>
        <div className="rounded-3xl bg-[#252525] text-white p-6 grow overflow-y-auto custom-scrollbar">
          <Tabs selectedTabClassName="activeTab">
            <TabList className="flex flex-wrap items-center justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400 border-2 w-fit rounded-full mb-8 p-2">
              {Object.keys(score.feedback).map((key) => {
                let outputString = convertToTitleCase(key);
                return (
                  <Tab className="mr-2" key={key}>
                    <a
                      href="#"
                      className="inline-block px-4 py-3 text-white font-semibold rounded-full active"
                      aria-current="page"
                    >
                      {outputString}
                    </a>
                  </Tab>
                );
              })}
            </TabList>
            {Object.keys(score.feedback).map((key) => {
              return (
                <TabPanel className="space-y-8" key={key}>
                  {Object.entries(score.feedback[key]).map(([key, value]) => {
                    let outputString = convertToTitleCase(key);
                    return (
                      <div className="flex flex-col space-y-5" key={key}>
                        <div>
                          <div className="text-black w-fit py-3 px-6 bg-white rounded-full font-semibold">
                            {outputString}
                          </div>
                        </div>
                        <div className="rounded-3xl bg-[#2f2f2f] text-white p-6">
                          <div className="border-l-4 border-[#29b2ff] pl-3">
                            {value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </TabPanel>
              );
            })}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
