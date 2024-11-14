/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
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
const ProjectItems = (props) => {
  const [Source, setSource] = useState(false);
  const [Demo, setDemo] = useState(false);

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
  const imgsrcComponent = {
    bot: <img alt="photo_of_proj" src={bot} className="h-4/6  object-cover" />,
    Portfolio: (
      <img
        alt="photo_of_proj"
        src={Portfolio}
        className="h-4/6  object-cover"
      />
    ),
    ECDelivery: (
      <img
        alt="photo_of_proj"
        src={ECDelivery}
        className="h-4/6  object-cover"
      />
    ),
    Taskmanager: (
      <img
        alt="photo_of_proj"
        src={Taskmanager}
        className="h-4/6  object-cover"
      />
    ),
    fan: <img alt="photo_of_proj" src={fan} className="h-4/6 object-cover" />,
    power: (
      <img alt="photo_of_proj" src={power} className="h-4/6 object-cover" />
    ),
    Profile2020: (
      <img alt="photo_of_proj" src={oldprof} className="h-4/6 object-cover" />
    ),
    Animpage2020: (
      <img alt="photo_of_proj" src={Anim} className="h-4/6 object-cover" />
    ),
    Blog: <img alt="photo_of_proj" src={Blog} className="h-4/6 object-cover" />,
    countweather: (
      <img
        alt="photo_of_proj"
        src={countweather}
        className="h-4/6 object-cover"
      />
    ),
    samplelayout: (
      <img
        alt="photo_of_proj"
        src={samplelayout}
        className="h-4/6 object-cover"
      />
    ),
  };
  return (
    <div
      className="m-auto w-80 cursor-pointer overflow-hidden  min-h-mobile  md:h-screen
     px-4 py-2 shadow-2xl ring-1  ring-black/5  transition-transform bg-white backdrop-blur-none
       dark:ring-white/10 dark:bg-gray-800 dark:backdrop-blur-none lg:min-w-custom md:px-4  md:w-10/12 "
      onClick={props.onClose}
    >
      <button
        className="my-2 w-40 border-gray-800 bg-transparent 
        px-4  py-2 text-lg font-semibold 
         text-gray-800  shadow-sm duration-300
         ease-in-out bg-violet
           dark:bg-transparent dark:text-white
            dark:border-gray-50 dark:bg-violet hover:text-xl"
        onClick={props.onClose}
      >
        GO Back
      </button>
      <div className="max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-violet scrollbar-track-gray-800">
        <div className="md:flex md:items-center md:justify-center content-center md:px-24">
          {imgsrcComponent[props.image]}
        </div>

        <div className="w-full p-8 md:px-24">
          <p className="text-md font-medium text-indigo-500">{props.Company}</p>
          <p className="mb-2 text-xl  font-semibold text-gray-800 dark:text-white">
            {props.name}
          </p>
          <p className="text-md font-light text-gray-700 dark:text-gray-300">
            {props.endDate}
          </p>
          <p className="mb-2 text-xl text-indigo-500 pt-4 font-medium dark:text-white">
            Details:
          </p>
          <p className="text-md font-light text-gray-700 dark:text-gray-300">
            {props.summary}
          </p>
        </div>
        <div className="flex justify-center gap-2">
          {props.skills.map((data) => (
            <button
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
              className="my-2 w-40  border-gray-800 bg-transparent 
        px-4  py-2 text-lg font-semibold 
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
              className="my-2 w-40  border-gray-800 bg-transparent 
        px-4  py-2 text-lg font-semibold 
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
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
