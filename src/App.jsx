import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
    <Router>
      <div className="bg-lightDesert">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
