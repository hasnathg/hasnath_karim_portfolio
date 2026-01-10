import {
  createBrowserRouter,
  
} from "react-router";
import RootLayout from "../pages/layout/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import Contact from "../pages/Contact";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,

     children: [
      { index: true, element: <Home/> },
      { path: "about", element: <About/> },
      { path: "skills", element: <Skills/> },
      { path: "education", element: <Education/> },
      { path: "experience", element: <Experience/> },
      { path: "projects", element: <Projects/> },
      { path: "projects/:slug", element: <ProjectDetail/> },
      { path: "contact", element: <Contact/> },
    ],
  },

]);