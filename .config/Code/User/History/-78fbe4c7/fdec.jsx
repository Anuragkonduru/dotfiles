/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import "./App.css";
import BackToTop from "./Components/BackToTop";
import Cert from "./Components/Certifications";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Interest from "./Components/Interests";
import Nav from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import OrbitingCirclesDemo from "./Components/";

function App() {
  return (
    <div>
      <BackToTop />
      <div className="font-jet overflow-x-hidden bg-300% animate-gradient bg-gradient-to-r from-cyan-500 via-cyan-300 to-slate-50 bg-fixed bg-no-repeat font-sans dark:animate-none dark:bg-cover dark:bg-1">
        <div className="h-full text-black bg-black/20 backdrop-blur-3xl dark:bg-black/70 dark:bg-opacity-50 dark:text-white dark:backdrop-blur-3xl">
          <Nav />
          <Home />
          <OrbitingCirclesDemo/>
          <Projects />
          <Work />
          <Skills />
          <Interest />
          <Cert />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
