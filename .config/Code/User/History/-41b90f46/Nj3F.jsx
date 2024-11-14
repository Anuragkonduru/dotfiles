/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Interests from "./Data/interests.json";
import InterestItems from "./items/Interestitems";
import LanguageItems from "./items/LanguageItems";

const Interest = () => {
  const [Inter, setInterest] = useState([]);
  const [Lang, setLang] = useState([]);
  const [educ, setEduc] = useState([]);

  useEffect(() => {
    setEdu(EducationData.education);
    setInterest(Interests.interests);
    setLang(Interests.languages);
  }, []);

  return (
    <div
      id="interests"
      className="mx-auto flex h-full w-screen flex-auto flex-col place-content-around items-center justify-center gap-2  md:h-93 md:gap-8"
    >
      <div className="flex items-center justify-center py-6 text-3xl font-bold uppercase md:pb-10 md:pt-14">
        <h1> Interests & More :</h1>
      </div>
      <div className="md-gap-10 flex flex-row flex-wrap items-center justify-center gap-4">
        <div className="flex flex-col rounded-lg px-2 shadow-lg ring-1 ring-black/5 dark:ring-white/10  ">
          <div className="text-md flex items-center justify-center font-bold uppercase   underline decoration-2 underline-offset-4 md:p-3">
            <h1>education :</h1>
          </div>
          <div className=" mx-auto flex flex-row items-center justify-center ">
            {educ.map((data) => (
              <EducationItems
                key={data.institution}
                institution={data.institution}
                studyType={data.studyType}
                area={data.area}
                endDate={data.endDate}
                url={data.url}
              ></EducationItems>
            ))}
          </div>
        </div>
      </div>
      <div className="md-gap-10 flex flex-row flex-wrap items-center justify-center gap-4">
        <div className="flex flex-col rounded-lg px-2 shadow-lg ring-1 ring-black/5 dark:ring-white/10  ">
          <div className="text-md flex items-center justify-center font-bold uppercase   underline decoration-2 underline-offset-4 md:p-3">
            <h1>Interests :</h1>
          </div>
          <div className=" mx-auto flex flex-row items-center justify-center ">
            <ul className="flex flex-row flex-wrap md:gap-4">
              {Inter.map((data) => (
                <InterestItems
                  key={data.name}
                  name={data.name}
                  keywords={data.keywords}
                  icon={data.icon}
                  summary={data.summary}
                ></InterestItems>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col  rounded-lg px-2 shadow-lg ring-1 ring-black/5 dark:ring-white/10  ">
        <div className="text-md flex items-center justify-center font-bold uppercase   underline decoration-2 underline-offset-4 md:p-3 ">
          <h1>Languages :</h1>
        </div>
        <div className="mx-auto flex w-full  items-center justify-center">
          <ul className="flex flex-row flex-wrap md:gap-4 ">
            {Lang.map((data2) => (
              <LanguageItems
                key={data2.language}
                language={data2.language}
                fluency={data2.fluency}
                icon={data2.icon}
                summary={data2.summary}
              ></LanguageItems>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Interest;
