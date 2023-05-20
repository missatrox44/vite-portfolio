import NavBar from "./components/NavBar";
import Landing from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Interests />
      <Footer />
    </>
  );
}

export default App;
