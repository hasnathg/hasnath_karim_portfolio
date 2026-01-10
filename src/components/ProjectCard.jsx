import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const ProjectCard = ({project}) => {
    return (
 <motion.article
      className="card bg-base-200 shadow-xl overflow-hidden group h-full"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.6 }}
    >
      <figure className="relative aspect-video overflow-hidden">
        {/* image: keep top visible, consistent aspect */}
        <motion.img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover object-top"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.25 }}
        />
        {/* top gradient for readability */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent" />
        {/* readable tags */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-2">
          {project.tags?.map((t) => (
            <span key={t} className="badge bg-black/70 text-white border-0">
              {t}
            </span>
          ))}
        </div>
      </figure>

      {/* body uses flex so buttons sit at the bottom */}
      <div className="card-body flex flex-col">
        <h3 className="card-title">{project.name}</h3>
        <p className="opacity-80">{project.description}</p>

        {/* tech pills (first 6) */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.slice(0, 6).map((tech) => (
            <span key={tech} className="badge badge-outline">{tech}</span>
          ))}
          {project.stack.length > 6 && (
            <span className="badge badge-ghost">+{project.stack.length - 6} more</span>
          )}
        </div>

        <div className="card-actions mt-3 pt-1">
          <Link to={`/projects/${project.slug}`} className="btn btn-accent">
            View Details
          </Link>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-outline">
              Live
            </a>
          )}
        </div>
      </div>
    </motion.article>    );
};

export default ProjectCard;