import React from 'react';
import Project from '../Project';
const projects = require('../../utils/projects.json');

export default function Home() {
  return (
    <div className="container px-4 py-5 mb-5">
      <h1 className="pb-2 border-bottom">My Projects</h1>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {projects.map((project, index) => {
          return <Project key={index} title={project.title} image={project.image} deployment={project.deployment} github={project.github} color={project.color} />
        })}
      </div>
    </div>
  );
}
