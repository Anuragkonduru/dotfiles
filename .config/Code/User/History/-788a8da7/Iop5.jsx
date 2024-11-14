import { useEffect, useState } from "react";
import EducationData from "./Data/education.json";

const Education = () => {
  const [educ, setEdu] = useState([]);
  useEffect(() => {
    setEdu(EducationData.education);
  }, []);
  return (
    <div
      id="education"
      className="flex h-full flex-col items-center gap-4 px-4 selection:rounded-t sm:px-6 md:h-93 md:pt-20"
    >
      <div className="flex py-6 text-3xl font-bold uppercase md:pb-10 md:pt-10">
        <h1>Education :</h1>
      </div>
      
    </div>
  );
};

export default Education;
