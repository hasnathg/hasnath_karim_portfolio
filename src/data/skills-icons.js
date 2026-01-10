// src/data/skills-icons// src/data/skills-icons.js
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiAngular,
  SiTailwindcss, SiDaisyui, SiSass,
  SiFigma, SiWordpress,
  SiNodedotjs, SiExpress, SiPython, SiDjango,
  SiMongodb, SiMysql, SiSqlite, SiFirebase,
  SiGit, SiGithub, SiVercel, SiNetlify, SiPostman, SiVite
} from "react-icons/si";
import { FaKey, FaChrome } from "react-icons/fa";

export const skillsIconMap = {
  "Frontend": [
    { name: "React", Icon: SiReact },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "Angular", Icon: SiAngular },
    { name: "JavaScript (ES6+)", Icon: SiJavascript },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "HTML5", Icon: SiHtml5 },
    { name: "CSS3", Icon: SiCss3 },
  ],

  "UI & Styling": [
    { name: "Tailwind CSS", Icon: SiTailwindcss },
    { name: "DaisyUI", Icon: SiDaisyui },
    { name: "SCSS", Icon: SiSass },
    { name: "Figma", Icon: SiFigma },
    { name: "WordPress", Icon: SiWordpress },
  ],

  "Backend": [
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Express", Icon: SiExpress },
    { name: "Python", Icon: SiPython },
    { name: "Django", Icon: SiDjango },
    { name: "REST APIs", Icon: SiPostman }, // icon substitute
     { name: "JWT", Icon: FaKey },       // icon substitute
  ],

  "Databases": [
    { name: "MongoDB", Icon: SiMongodb },
    { name: "MySQL", Icon: SiMysql },
    { name: "SQLite", Icon: SiSqlite },
    { name: "Firebase", Icon: SiFirebase },
  ],

  "Tools & Deploy": [
    { name: "Git", Icon: SiGit },
    { name: "GitHub", Icon: SiGithub },
    { name: "Postman", Icon: SiPostman },
   { name: "Chrome DevTools", Icon: FaChrome },
    { name: "Vercel", Icon: SiVercel },
    { name: "Netlify", Icon: SiNetlify },
    { name: "Vite", Icon: SiVite },
  ],
};
