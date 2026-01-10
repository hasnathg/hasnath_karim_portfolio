import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
         <section>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => <ProjectCard key={p.slug} project={p}/>)}
      </div>
    </section>
    );
};

export default Projects;