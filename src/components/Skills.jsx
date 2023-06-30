import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiMongodb,
  SiTailwindcss,
  SiMui,
  SiTypescript,
  SiJavascript,
  SiYarn,
  SiVite,
  SiMysql,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

const skills = [
  { id: "html", Component: FaHtml5 },
  { id: "css", Component: FaCss3Alt },
  { id: "javascript", Component: SiJavascript },
  { id: "bootstrap", Component: FaBootstrap },
  { id: "typescript", Component: SiTypescript },
  { id: "react", Component: FaReact },
  { id: "mui", Component: SiMui },
  { id: "tailwind", Component: SiTailwindcss },
  { id: "node", Component: FaNodeJs },
  { id: "sql", Component: SiMysql },
  { id: "npm", Component: FaNpm },
  { id: "yarn", Component: SiYarn },
  { id: "mongodb", Component: SiMongodb },
  { id: "vite", Component: SiVite },
  { id: "vscode", Component: SiVisualstudiocode },
  { id: "github", Component: DiGithubBadge },
];

export default function Skills() {
  return (
    <div
      id="skills"
      className="bg-lightDesert rounded-lg shadow-md flex items-center justify-center min-h-screen"
    >
      <div className="text-center max-w-2xl w-full mx-auto">
        <h2 className="text-4xl font-bold text-darkDesert mb-6">Expertise</h2>
        <div className="grid grid-cols-4 gap-4 my-4 justify-items-center">
          {skills.map(({ id, Component }) => (
            <div
              className="text-5xl text-goldDesert transition-all duration-300 transform hover:scale-110 hover:text-darkDesert"
              key={id}
            >
              <Component />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
