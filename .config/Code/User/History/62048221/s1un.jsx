/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import PopupModal from "../PopupModal";
import nav from "./Data/nav_items.json";
import logo from "./Data/pics/home_logo.webp";
import NavItems from "./items/navitems";
import Theme from "./theme";
function Nav() {
  const [navs, setItems] = useState([]);
  const [showNavbar, setShowNavbar] = useState(false);
  const [navClicked, setnavClicked] = useState(false);

  const breakpoint = 1120;
  useEffect(() => {
    setItems(nav.nav_items);
    if (window.innerWidth < breakpoint) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200 || window.innerWidth < breakpoint) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth < breakpoint) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  const handleClick = () => {
    setnavClicked(!navClicked);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scrool", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`sticky left-0 right-0 top-0 z-20 justify-between
 ${showNavbar ? "sticky" : ""}
 ${navClicked && showNavbar ? "h-screen w-screen backdrop-blur-3xl" : ""}
 `}
    >
      <div
        className={` ${
          navClicked && showNavbar
            ? "flex w-screen flex-col content-end items-end justify-end"
            : ""
        }`}
      >
        <div
          className={`flex h-16 px-5 transition-transform ease-in-out  ${
            showNavbar
              ? "items-end justify-end"
              : "mx-auto items-end justify-between"
          }`}
        >
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            <a
              className={`text-stroke-3 flex cursor-pointer items-end justify-end stroke-black  pb-1
         text-2xl text-dark_violet transition-colors ease-in-out hover:text-blue dark:text-violet dark:hover:text-blue
         ${showNavbar ? "hidden" : ""}`}
              href="/profile"
            >
              <img src={logo} alt="logo" className="w-48" />
            </a>
          </Link>
          <ul
            className={`flex items-end gap-x-5 transition-transform ease-in-out ${
              showNavbar ? "" : ""
            }`}
          >
            <div
              className={`pb-2 transition-transform ease-in-out ${
                showNavbar ? "hidden" : "flex items-center gap-x-7 ease-in-out"
              }
             `}
            >
              {navs.map((data) => (
                <NavItems
                  key={data.item}
                  items={data.item}
                  to={data.to}
                  showNavbar={showNavbar}
                  navClicked={navClicked}
                />
              ))}
            </div>
            <li className="transition-transform duration-300 ease-in-out">
              <Theme />
            </li>
            <li>
              <button
                className={`group relative transition-transform ease-in-out ${
                  showNavbar ? "" : "hidden"
                }`}
                onClick={handleClick}
              >
                <div className="relative flex h-[50px] w-[50px] transform items-center justify-center rounded-full shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200  hover:bg-slate-200 hover:ring-8 dark:hover:bg-slate-700 ">
                  <div
                    className={`flex h-[20px] w-[20px] origin-center transform flex-col justify-between transition-all duration-300 ${
                      navClicked ? "-rotate-[45deg]" : ""
                    }`}
                  >
                    <div
                      className={`h-[2px] w-1/2 origin-right transform rounded bg-black transition-all delay-75 duration-300 dark:bg-white  ${
                        navClicked
                          ? "h-[3px] -translate-y-[2px] -rotate-90"
                          : ""
                      }`}
                    ></div>
                    <div
                      className={`h-[2px] rounded bg-black dark:bg-white  ${
                        navClicked ? "h-[3px]" : ""
                      }`}
                    ></div>
                    <div
                      className={`h-[2px] w-1/2 origin-left transform self-end rounded bg-black transition-all delay-75 duration-300 dark:bg-white  ${
                        navClicked ? "h-[3px] translate-y-[2px] -rotate-90" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </div>
        <PopupModal isOpen={navClicked} onClose={handleClick}>
          <div
            className={`z-10 flex flex-col items-end h-screen w-screen backdrop-blur-3xl transition-transform duration-500 ease-in-out
      ${navClicked && showNavbar ? " " : "hidden"}
      `}
          >
            <button
              className={`group relative transition-transform ease-in-out pt-3 pr-5 ${
                showNavbar ? "" : "hidden"
              }`}
              onClick={handleClick}
            >
              <div className="relative flex h-[50px] w-[50px] transform items-center justify-center rounded-full shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200  hover:bg-slate-200 hover:ring-8 dark:hover:bg-slate-700 ">
                <div
                  className={`flex h-[20px] w-[20px] origin-center transform flex-col justify-between transition-all duration-300 ${
                    navClicked ? "-rotate-[45deg]" : ""
                  }`}
                >
                  <div
                    className={`h-[2px] w-1/2 origin-right transform rounded bg-black transition-all delay-75 duration-300 dark:bg-white  ${
                      navClicked ? "h-[3px] -translate-y-[2px] -rotate-90" : ""
                    }`}
                  ></div>
                  <div
                    className={`h-[2px] rounded bg-black dark:bg-white  ${
                      navClicked ? "h-[3px]" : ""
                    }`}
                  ></div>
                  <div
                    className={`h-[2px] w-1/2 origin-left transform self-end rounded bg-black transition-all delay-75 duration-300 dark:bg-white  ${
                      navClicked ? "h-[3px] translate-y-[2px] -rotate-90" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </button>
            <div className="mb-6 flex flex-col sm:h-93 sm:flex-row sm:justify-end dark:text-white ">
              <div className="h-screen w-screen ">
                <nav className="mt-10 flex h-full flex-col items-center gap-10 pb-12 text-3xl sm:justify-center md:text-4xl lg:text-5xl ">
                  {navs.map((data) => (
                    <NavItems
                      key={data.item}
                      items={data.item}
                      to={data.to}
                      showNavbar={showNavbar}
                      navClicked={navClicked}
                      handleClick={handleClick}
                    />
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </PopupModal>
      </div>
    </div>
  );
}

export default Nav;

<Link to="home" spy={true} smooth={true} offset={50} duration={500}></Link>;
