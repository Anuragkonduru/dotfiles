/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PopupModal from "../../PopupModal";
import Anim from "../Data/pics/Anim-page-2020.webp";
import Blog from "../Data/pics/Blog.webp";
import ECDelivery from "../Data/pics/ECDelivery.webp";
import Portfolio from "../Data/pics/Portfolio.webp";
import oldprof from "../Data/pics/Profile-2020.webp";
import Taskmanager from "../Data/pics/Taskmanager.webp";
import bot from "../Data/pics/bot.webp";
import countweather from "../Data/pics/countweather.webp";
import fan from "../Data/pics/fan.webp";
import power from "../Data/pics/power.webp";
import samplelayout from "../Data/pics/samplelayout.webp";
import ProjectPopup from "./ProjectPopup";

const ProjectItems = (props) => {
  const [Source, setSource] = useState(false);
  const [Demo, setDemo] = useState(false);
  const [showPopup, setshowPopup] = useState(false);
  useEffect(() => {
    if (props.source !== "") {
      setSource(true);
    }
    if (props.url !== "") {
      setDemo(true);
    }
  }, [props.source, props.url]);
  const openSource = () => {
    const Url = props.source;
    window.open(Url, "_blank");
  };
  const openDemo = () => {
    const Url = props.url;
    window.open(Url, "_blank");
  };
  const openPopup = () => {
    setshowPopup(true);
  };
  const closePopup = () => {
    setshowPopup(false);
  };
  const imgsrcComponent = {
    bot: (
      <img
        alt="photo_of_proj"
        src={bot}
        className="max-h-96 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    ),
    Portfolio: (
      <img
        alt="photo_of_proj"
        src={Portfolio}
        className="max-h-96 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    ),
    ECDelivery: (
      <img
        alt="photo_of_proj"
        src={ECDelivery}
        className="max-h-96 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    ),
    Taskmanager: (
      <img
        alt="photo_of_proj"
        src={Taskmanager}
        className="max-h-96 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    ),
    fan: (
      <img
        alt="photo_of_proj"
        src={fan}
        className="max-h-96 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    ),
    power: (
      <img
        alt="photo_of_proj"
        src={power}
        className="max-h-96 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    ),
    Profile2020: (
      <img
        alt="photo_of_proj"
        src={oldprof}
        className="max-h-96 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    ),
    Animpage2020: (
      <img
        alt="photo_of_proj"
        src={Anim}
        className="max-h-96 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    ),
    Blog: (
      <img
        alt="photo_of_proj"
        src={Blog}
        className="max-h-96 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    ),
    countweather: (
      <img
        alt="photo_of_proj"
        src={countweather}
        className="max-h-96 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    ),
    samplelayout: (
      <img
        alt="photo_of_proj"
        src={samplelayout}
        className="max-h-96 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    ),
  };
  return (
    <div
      className="m-auto w-80 cursor-pointer overflow-hidden rounded-lg min-h-mobile  md:min-h-custom
     bg-white/10 px-4 py-2 shadow-2xl ring-1  ring-black/5  transition-transform  hover:bg-white hover:backdrop-blur-none
      dark:bg-black/10 dark:ring-white/10 hover:dark:bg-gray-800 hover:dark:backdrop-blur-none lg:min-w-custom md:p-0  xl:w-1/5"
    >
      {imgsrcComponent[props.image]}

      <div className="w-full p-2">
        <p className="text-md font-medium text-indigo-500">{props.Company}</p>
        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
          {props.name}
        </p>
        <p className="text-md font-light text-gray-700 dark:text-gray-300">
          {props.endDate}
        </p>
      </div>
      <div className="flex justify-center gap-2">
        {props.skills.map((data, index) => (
          <button
            key={index}
            className="my-2 border-2 border-violet
        px-3 rounded-lg  py-1 text-sm
         text-gray-800  shadow-sm
           bg-transparent dark:text-white"
          >
            {data}
          </button>
        ))}
      </div>
      <div className="pb-6 flex gap-4 place-content-around">
        {Source && (
          <button
            type="submit"
            className="my-2 w-40 hover:border-b-2 border-gray-800 bg-transparent 
        px-4  py-2 hover:py-1 text-lg font-semibold 
         text-gray-800  shadow-sm duration-300
         ease-in-out hover:bg-violet
          hover:text-white dark:border-gray-50
           dark:bg-transparent dark:text-white
            hover:dark:border-gray-50 hover:dark:bg-violet hover:dark:text-black"
            onClick={openSource}
          >
            Code
          </button>
        )}
        {Demo && (
          <button
            type="submit"
            className="my-2 w-40 hover:border-b-2 border-gray-800 bg-transparent 
        px-4  py-2 hover:py-1 text-lg font-semibold 
         text-gray-800  shadow-sm duration-300
         ease-in-out hover:bg-violet
          hover:text-white dark:border-gray-50
           dark:bg-transparent dark:text-white
            hover:dark:border-gray-50 hover:dark:bg-violet hover:dark:text-black"
            onClick={openDemo}
          >
            {" "}
            <a target="_blank" href={props.url} rel="noreferrer">
              Demo
            </a>
          </button>
        )}

        <button
          type="submit"
          className="my-2 w-40 hover:border-b-2 border-gray-800 bg-transparent 
        px-4  py-2 hover:py-1 text-lg font-semibold 
         text-gray-800  shadow-sm duration-300
         ease-in-out hover:bg-violet
          hover:text-white dark:border-gray-50
           dark:bg-transparent dark:text-white
            hover:dark:border-gray-50 hover:dark:bg-violet hover:dark:text-black"
          onClick={openPopup}
        >
          More..
        </button>
        <PopupModal isOpen={showPopup} onClose={closePopup}>
          <ProjectPopup
            name={props.name}
            Company={props.Company}
            endDate={props.endDate}
            summary={props.summary}
            url={props.url}
            source={props.source}
            image={props.image}
            onClose={closePopup}
            skills={props.skills}
          ></ProjectPopup>
        </PopupModal>
      </div>
    </div>
  );
};

export default ProjectItems;
