import { useEffect, useState } from "react";
import SkillsData from "./Data/skills.json";
import SkillItems from "./items/skillItems";

const Skills = () => {
  const [frontendSkills, setfrontendSkills] = useState([]);
  const [backendSkills, setbackendSkills] = useState([]);
  const [OtherSkills, setOtherSkills] = useState([]);
  const [databaseSkills, setdatabaseSkills] = useState([]);
  const [CICDSkills, setCICDSkills] = useState([]);
  const [toolsSkills, settoolsSkills] = useState([]);

  useEffect(() => {
    setfrontendSkills(SkillsData.skills.frontend);
    setbackendSkills(SkillsData.skills.backend);
    setCICDSkills(SkillsData.skills.CICD);
    settoolsSkills(SkillsData.skills.tools);
  }, []);
  useEffect(() => {}, []);
  return (
    <div
      id="skills"
      className="mx-auto flex h-full w-screen flex-auto flex-col place-content-around items-center justify-center gap-2  md:h-93 md:gap-8"
    >
      <div className="flex items-center justify-center py-6 text-3xl font-bold uppercase md:pb-10 md:pt-14">
        <h1> Skills :</h1>
      </div>
      <div className="md-gap-10 flex flex-row flex-wrap md:items-center md:justify-center gap-4">
        <div className="flex flex-col rounded-lg px-2 shadow-lg ring-1 ring-black/5 dark:ring-white/10  ">
          <div className="text-md flex items-center justify-center font-bold uppercase   underline decoration-2 underline-offset-4 md:p-3">
            <h1>Frontend :</h1>
          </div>
          <div className=" mx-auto flex flex-row items-center justify-center ">
            <ul className="flex flex-row flex-wrap gap-4">
              {frontendSkills.map((data) => (
                <SkillItems
                  key={data.name}
                  name={data.name}
                  url={data.url}
                  icon={data.icon}
                  summary={data.summary}
                ></SkillItems>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col rounded-lg px-2 shadow-lg ring-1 ring-black/5 dark:ring-white/10  ">
          <div className="text-md flex items-center justify-center font-bold uppercase   underline decoration-2 underline-offset-4 md:p-3 ">
            <h1>Backend :</h1>
          </div>
          <div className=" mx-auto flex w-full flex-col items-center justify-center">
            <ul className="flex flex-row flex-wrap gap-4">
              {backendSkills.map((data) => (
                <SkillItems
                  key={data.name}
                  name={data.name}
                  url={data.url}
                  icon={data.icon}
                  summary={data.summary}
                ></SkillItems>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col rounded-lg px-2 shadow-lg ring-1 ring-black/5 dark:ring-white/10  ">
          <div className="text-md flex items-center justify-center font-bold uppercase   underline decoration-2 underline-offset-4 md:p-3 ">
            <h1>Cloud & DevOps :</h1>
          </div>
          <div className=" mx-auto flex w-full flex-col items-center justify-center">
            <ul className="flex flex-row flex-wrap gap-4">
              {CICDSkills.map((data) => (
                <SkillItems
                  key={data.name}
                  name={data.name}
                  url={data.url}
                  icon={data.icon}
                  summary={data.summary}
                ></SkillItems>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col  rounded-lg px-2 shadow-lg ring-1 ring-black/5 dark:ring-white/10  ">
        <div className="text-md flex items-center justify-center font-bold uppercase   underline decoration-2 underline-offset-4 md:p-3 ">
          <h1>Tools :</h1>
        </div>
        <div className=" mx-auto flex w-full flex-col  items-center justify-center">
          <ul className="flex flex-row flex-wrap gap-4">
            {toolsSkills.map((data) => (
              <SkillItems
                key={data.name}
                name={data.name}
                url={data.url}
                icon={data.icon}
                summary={data.keywords}
              ></SkillItems>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
