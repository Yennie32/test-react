// import {motion} from "framer-motion";
// import image1 from "/public/1.png"
// import image2 from "/public/2.png"
// import image3 from "/public/3.png"
// import image4 from "/public/4.png"
// import image5 from "/public/5.png"
// import { div, span } from "framer-motion/client";

// const projectData = [
//   {
//     image: image1, 
//     title: "Habit Tracker",
//     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae rerum dignissimos dicta similique, fugit illum eos amet excepturi, laboriosam corporis quod atque exercitationem aliquid ipsa!",
//     technologies: ["HTML", "CSS", "Javascript", "MySQL"]
//   },
//   {
//     image: image2, 
//     title: "To do App",
//     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae rerum dignissimos dicta similique, fugit illum eos amet excepturi, laboriosam corporis quod atque exercitationem aliquid ipsa!",
//     technologies: ["Typescript", "Next.js", "TailwindCSS", "PostgreSQL"]
//   },
//   {
//     image: image3, 
//     title: "Social media App",
//     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae rerum dignissimos dicta similique, fugit illum eos amet excepturi, laboriosam corporis quod atque exercitationem aliquid ipsa!",
//     technologies: ["Typescript", "React", "TailwindCSS", "Supabase"]
//   },
//   {
//     image: image4, 
//     title: "Restaurant Website",
//     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae rerum dignissimos dicta similique, fugit illum eos amet excepturi, laboriosam corporis quod atque exercitationem aliquid ipsa!",
//     technologies: ["Typescript", "NExt.js", "TailwindCSS", "PostgreSQL"]
//   },
//   {
//     image: image5, 
//     title: "Admin Dashboard",
//     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae rerum dignissimos dicta similique, fugit illum eos amet excepturi, laboriosam corporis quod atque exercitationem aliquid ipsa!",
//     technologies: ["React", "Docker", "TailwindCSS", "MySQL"]
//   },
// ]

// const ProjectCard = ({project}) => {
//   return (
//     <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
//       <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" />
//       <div className="flex flex-col gap-5">
//         <div className="flex flex-col gap-3">
//           <div className="text-xl font-semibold">{project.title}</div>
//           <p className="text-gray-400">{project.description}</p>
//         </div>
//       </div>
//       <div className="flex flex-wrap gap-5">
//         {
//           project.technologies.map((tech, index) => (
//             <span key={index} className="rounded-lg bg-black p-3">
//               {tech}
//             </span>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// const Projects = () => {
//   return (
//     <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-' md:px-14 md:py-24">
//       <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
//       <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
//         {
//           projectData.map((project, index) => (
//             <ProjectCard key={index} project={project}/>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Projects


// TYPESCRIPT

// components/Projects.tsx
import { FC } from "react";
import { motion } from "framer-motion";
import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import image4 from "/public/4.png";
import image5 from "/public/5.png";

// Typage du projet
type Project = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
};

// Données des projets
const projectData: Project[] = [
  {
    image: image1,
    title: "Habit Tracker",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae rerum dignissimos dicta similique, fugit illum eos amet excepturi, laboriosam corporis quod atque exercitationem aliquid ipsa!",
    technologies: ["HTML", "CSS", "Javascript", "MySQL"],
  },
  {
    image: image2,
    title: "To do App",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae rerum dignissimos dicta similique, fugit illum eos amet excepturi, laboriosam corporis quod atque exercitationem aliquid ipsa!",
    technologies: ["Typescript", "Next.js", "TailwindCSS", "PostgreSQL"],
  },
  {
    image: image3,
    title: "Social media App",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae rerum dignissimos dicta similique, fugit illum eos amet excepturi, laboriosam corporis quod atque exercitationem aliquid ipsa!",
    technologies: ["Typescript", "React", "TailwindCSS", "Supabase"],
  },
  {
    image: image4,
    title: "Restaurant Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae rerum dignissimos dicta similique, fugit illum eos amet excepturi, laboriosam corporis quod atque exercitationem aliquid ipsa!",
    technologies: ["Typescript", "Next.js", "TailwindCSS", "PostgreSQL"],
  },
  {
    image: image5,
    title: "Admin Dashboard",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae rerum dignissimos dicta similique, fugit illum eos amet excepturi, laboriosam corporis quod atque exercitationem aliquid ipsa!",
    technologies: ["React", "Docker", "TailwindCSS", "MySQL"],
  },
];

// Props typées pour ProjectCard
type ProjectCardProps = {
  project: Project;
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img
        src={project.image}
        alt={project.title}
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"ù
      />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {project.technologies.map((tech, index) => (
            <span key={index} className="rounded-lg bg-black p-3">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: FC = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8 md:px-14 md:py-24"
    >
      <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
