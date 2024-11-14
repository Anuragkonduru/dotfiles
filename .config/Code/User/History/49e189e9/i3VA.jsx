/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { BiArrowToTop, BiMoviePlay } from "react-icons/bi";
import {
  FaAngular,
  FaAws,
  FaBlog,
  FaBootstrap,
  FaCodepen,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJava,
  FaJenkins,
  FaJira,
  FaLinkedin,
  FaMarkdown,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaVolleyball } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";
import { MdClose, MdPsychologyAlt, MdSportsKabaddi } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import {
  SiBmcsoftware,
  SiBroadcom,
  SiC,
  SiCoursera,
  SiCplusplus,
  SiEclipseide,
  SiGnubash,
  SiInformatica,
  SiJavascript,
  SiMicrosoftoffice,
  SiMongodb,
  SiSnowflake,
  SiTailwindcss,
  SiTypescript,
  SiUdemy,
  SiVim,
  SiVisualstudiocode,
} from "react-icons/si";

import { PiFileSqlFill } from "react-icons/pi";
import Vite from "../../assets/vite.svg";
import Anime from "../Data/pics/anime.webp";
import Cambridge from "../Data/pics/cambridge.webp";
import Hindi from "../Data/pics/hindi.webp";
import Manga from "../Data/pics/manga.webp";
import Telugu from "../Data/pics/telugu.webp";

const IconItems = (props) => {
  const size = props.size;
  const iconComponents = {
    FaAngular: <FaAngular size={size} color="#dd1b16" />,
    FaAws: <FaAws size={size} color="#ff9a00" />,
    FaBootstrap: <FaBootstrap size={size} color="#7d12f9" />,
    FaCss3Alt: <FaCss3Alt size={size} color="#1572b6" />,
    FaGitAlt: <FaGitAlt size={size} color="#f34f29" />,
    FaHtml5: <FaHtml5 size={size} color="#e44d26" />,
    FaJava: <FaJava size={size} color="#ea2d2e" />,
    FaJenkins: <FaJenkins size={size} />,
    FaJira: <FaJira size={size} color="#2684ff" />,
    FaMarkdown: <FaMarkdown size={size} />,
    FaNodeJs: <FaNodeJs size={size} color="#83cd29" />,
    FaPython: <FaPython size={size} color="#4685b7" />,
    FaReact: <FaReact size={size} color="#61dafb" />,
    SiTailwindcss: <SiTailwindcss size={size} color="#38bdf8" />,
    SiC: <SiC size={size} color="#03599c" />,
    SiBmcsoftware: <SiBmcsoftware size={size} color="#fe5000" />,
    SiCplusplus: <SiCplusplus size={size} color="#9c033a" />,
    SiEclipseide: <SiEclipseide size={size} color="#423181" />,
    SiGnubash: <SiGnubash size={size} />,
    SiInformatica: <SiInformatica size={size} color="#fa4c00" />,
    SiJavascript: <SiJavascript size={size} color="#f0db4f" />,
    SiMicrosoftoffice: <SiMicrosoftoffice size={size} color="#db3c02" />,
    SiMongodb: <SiMongodb size={size} color="#4faa41" />,
    SiSnowflake: <SiSnowflake size={size} color="#29b5e8" />,
    SiTypescript: <SiTypescript size={size} color="#007acc" />,
    SiVim: <SiVim size={size} color="#179a33" />,
    SiVisualstudiocode: <SiVisualstudiocode size={size} color="#3c99d4" />,
    SiBroadcom: <SiBroadcom size={size} color="#cf2031" />,
    PiFileSqlFill: <PiFileSqlFill size={size} color="#f80000" />,
    CambridgeIcon: (
      <img src={Cambridge} width="30" height="30" alt="Cambridge"></img>
    ),
    SiCoursera: <SiCoursera size="2em" color="#0056d2" />,
    SiUdemy: <SiUdemy size="2em" color="#a435f0" />,
    FcLinux: <FcLinux size={size} />,
    BiMoviePlay: <BiMoviePlay size={size} />,
    Anime: <img src={Anime} width="70" height="70" alt="Anime"></img>,
    Manga: <img src={Manga} width="60" height="70" alt="Manga"></img>,
    MdPsychologyAlt: <MdPsychologyAlt size={size} color="#a435f0" />,
    FaVolleyball: <FaVolleyball size={size} color="#1b70ed" />,
    MdSportsKabaddi: <MdSportsKabaddi size={size} color="#ff692e" />,
    Telugu: <img src={Telugu} width="60" height="60" alt="Telugu"></img>,
    Hindi: <img src={Hindi} width="60" height="60" alt="Hindi"></img>,
    RiEnglishInput: <RiEnglishInput size={size} color="#1967d2" />,
    FaInstagram: <FaInstagram size={size} />,
    FaLinkedin: <FaLinkedin size={size} />,
    FaGithub: <FaGithub size={size} />,
    FaBlog: <FaBlog size={size} />,
    FaCodepen: <FaCodepen size={size} />,
    BiArrowToTop: <BiArrowToTop size={size} color="#826aed" />,
    MdClose: <MdClose size={size | size} color="#826aed" />,
    Vite: <img src={Vite} width="40" height="40" alt="Vite"></img>,
  };
  const selectedIcon = iconComponents[props.icon] || <div>Default Content</div>;
  return <div>{selectedIcon} </div>;
};
export default IconItems;
