import {
  NavBar,
  Home,
  About,
  Projects,
  Skills,
  Experience,
  Education,
  ContactMe,
  Footer,
} from "../src/components/index";

import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="bg-lightDesert">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
