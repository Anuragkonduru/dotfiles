import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { default as info, default as infos } from "./Data/info.json";
import OrbitingCirclesDemo from "./items/OrbitingItems";
import SocialItems from "./items/socialItems";
const Home = () => {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    setSocial(info.basics.footer.socials);
  }, []);

  return (
    <div
      id="home"
      className="relative isolate flex flex-col items-center justify-center px-1  py-1 align-middle md:h-93 lg:px-8"
    >
      <div className="w-full justify-center items-center flex flex-col md:flex-row">
        <div className="w-1/2 md:pl-4">
          <p className="pl-2 mb-5 mt-10 text-lg  leading-8 text-black dark:text-white sm:text-3xl">
            hi, I'm
            <span className="text-dark_violet dark:text-violet mb-2 m-6 leading-8 ">
              {infos.basics.name}
            </span>
          </p>
          <h1 className="mb-3 md:text-6xl text-4xl font-bold text-gray-900 dark:text-white lg:text-7xl">
            {infos.basics.title}
          </h1>
          <ul className="flex mb-2 flex-row">
            {social.map((data) => (
              <SocialItems
                key={data.icon}
                icon={data.icon}
                size="1.2em"
                url={data.url}
              ></SocialItems>
            ))}
          </ul>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
            <button
              className="my-2 w-40 border-2 border-gray-800 bg-transparent 
        pr-4  py-2 text-lg font-semibold uppercase
         text-gray-800  shadow-sm duration-300
         ease-in-out hover:scale-125 hover:bg-violet
          hover:text-white dark:border-gray-50
           dark:bg-transparent dark:text-white
            hover:dark:border-gray-50 hover:dark:bg-violet hover:dark:text-black"
            >
              <p>Contact Me</p>
            </button>
          </Link>
          <div className="flex pt-3 text-center">
            <p className="text-slate-900 dark:text-white">
              {infos.basics.location.city}
            </p>
            <p className="text-slate-900 dark:text-white">
              , {infos.basics.location.country}
            </p>
          </div>
        </div>
        <div className="w-1/3">
          <OrbitingCirclesDemo />
        </div>
      </div>
    </div>
  );
};
export default Home;
