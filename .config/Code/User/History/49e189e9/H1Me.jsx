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
  const sizeem = "3em";
  const sizesm = "2em";
  const size = props.size;
  const iconComponents = {
    FaAngular: <FaAngular size={props.size | sizeem} color="#dd1b16" />,
    FaAws: <FaAws size={props.size | sizeem} color="#ff9a00" />,
    FaBootstrap: <FaBootstrap size={props.size | sizeem} color="#7d12f9" />,
    FaCss3Alt: <FaCss3Alt size={props.size | sizeem} color="#1572b6" />,
    FaGitAlt: <FaGitAlt size={props.size | sizeem} color="#f34f29" />,
    FaHtml5: <FaHtml5 size={props.size | sizeem} color="#e44d26" />,
    FaJava: <FaJava size={props.size | sizeem} color="#ea2d2e" />,
    FaJenkins: <FaJenkins size={props.size | sizeem} />,
    FaJira: <FaJira size={props.size | sizeem} color="#2684ff" />,
    FaMarkdown: <FaMarkdown size={props.size | sizeem} />,
    FaNodeJs: <FaNodeJs size={props.size | sizeem} color="#83cd29" />,
    FaPython: <FaPython size={props.size | sizeem} color="#4685b7" />,
    FaReact: <FaReact size={props.size | sizeem} color="#61dafb" />,
    SiTailwindcss: <SiTailwindcss size={props.size | sizeem} color="#38bdf8" />,
    SiC: <SiC size={props.size | sizeem} color="#03599c" />,
    SiBmcsoftware: <SiBmcsoftware size={props.size | sizeem} color="#fe5000" />,
    SiCplusplus: <SiCplusplus size={props.size | sizeem} color="#9c033a" />,
    SiEclipseide: <SiEclipseide size={props.size | sizeem} color="#423181" />,
    SiGnubash: <SiGnubash size={props.size | sizeem} />,
    SiInformatica: <SiInformatica size={props.size | sizeem} color="#fa4c00" />,
    SiJavascript: <SiJavascript size={props.size | sizeem} color="#f0db4f" />,
    SiMicrosoftoffice: <SiMicrosoftoffice size={props.size | sizeem} color="#db3c02" />,
    SiMongodb: <SiMongodb size={props.size | sizeem} color="#4faa41" />,
    SiSnowflake: <SiSnowflake size={props.size | sizeem} color="#29b5e8" />,
    SiTypescript: <SiTypescript size={props.size | sizeem} color="#007acc" />,
    SiVim: <SiVim size={props.size | sizeem} color="#179a33" />,
    SiVisualstudiocode: <SiVisualstudiocode size={props.size | sizeem} color="#3c99d4" />,
    SiBroadcom: <SiBroadcom size={props.size | sizeem} color="#cf2031" />,
    PiFileSqlFill: <PiFileSqlFill size={props.size | sizeem} color="#f80000" />,
    CambridgeIcon: (
      <img src={Cambridge} width="30" height="30" alt="Cambridge"></img>
    ),
    SiCoursera: <SiCoursera size="2em" color="#0056d2" />,
    SiUdemy: <SiUdemy size="2em" color="#a435f0" />,
    FcLinux: <FcLinux size={props.size | sizeem} />,
    BiMoviePlay: <BiMoviePlay size={props.size | sizeem} />,
    Anime: <img src={Anime} width="70" height="70" alt="Anime"></img>,
    Manga: <img src={Manga} width="60" height="70" alt="Manga"></img>,
    MdPsychologyAlt: <MdPsychologyAlt size={props.size | sizeem} color="#a435f0" />,
    FaVolleyball: <FaVolleyball size={props.size | sizeem} color="#1b70ed" />,
    MdSportsKabaddi: <MdSportsKabaddi size={props.size | sizeem} color="#ff692e" />,
    Telugu: <img src={Telugu} width="60" height="60" alt="Telugu"></img>,
    Hindi: <img src={Hindi} width="60" height="60" alt="Hindi"></img>,
    RiEnglishInput: <RiEnglishInput size={props.size | sizeem} color="#1967d2" />,
    FaInstagram: <FaInstagram size={size} />,
    FaLinkedin: <FaLinkedin size={size} />,
    FaGithub: <FaGithub size={size} />,
    FaBlog: <FaBlog size={size} />,
    FaCodepen: <FaCodepen size={size} />,
    BiArrowToTop: <BiArrowToTop size={props.size | sizeem} color="#826aed" />,
    MdClose: <MdClose size={sizesm} color="#826aed" />,
    Vite: <img src={Vite} width="40" height="40" alt="Vite"></img>,
  };
  const selectedIcon = iconComponents[props.icon] || <div>Default Content</div>;
  return <div>{selectedIcon} </div>;
};
export default IconItems;
