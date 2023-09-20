// import { useState } from "react";

const Profile = () => {
  const jsonString = localStorage.getItem("careerOdyssey");
  const parsedData = JSON.parse(jsonString);
  const name = parsedData.personal_info.Name;
  const contactDetails = parsedData.personal_info["Contact Information"];
  return (
    <div className="flex flex-col w-[90%] md:w-full md:pr-8 space-y-8">
      <div>
        <div className="bg-[#292929] p-2 px-4 text-white rounded-full w-fit font-semibold text-lg">
          Profile
        </div>
      </div>
      <div className="rounded-3xl border-[1px] border-white text-white p-6 space-y-8">
        <div className="flex flex-wrap md:flex-nowrap items-center">
          <div className="md:w-1/5 font-semibold">Name:</div>
          <div className="w-[90%] md:w-4/5 font-semibold">{name}</div>
        </div>
      </div>
      <div>
        <div className="bg-[#292929] p-2 px-4 text-white w-fit rounded-full font-semibold text-lg">
          Contact
        </div>
      </div>
      <div className="rounded-3xl border-[1px] border-white text-white p-6 space-y-8">
        {Object.entries(contactDetails).map(([key, value]) => {
          return (
            <div
              className="flex flex-wrap md:flex-nowrap items-center"
              key={key}
            >
              <div className="md:w-1/5 font-semibold">{key}:</div>
              <div className="w-[90%] md:w-4/5 overflow-auto lg:overflow-visible">
                {typeof value === "object" ? value.join(" ") : value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
