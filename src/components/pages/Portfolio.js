import React from 'react';
const projects = require('../../utils/projects.json');

export default function Home() {
  return (
    <div className="container px-4 py-5 mb-5">
      <h1 className="pb-2 border-bottom">My Projects</h1>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {projects.map((project) => {
          return (
            <div className="col mb-5">
              <div className="m-2 py-2 text-lg-center">
              </div>
              <div className={`card card-cover h-100 overflow-hidden bg-dark rounded-5 shadow-lg bg-min ${project.image}`}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <a
                    href={`${project.deployment}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  ><h2 className={`pt-5 mt-5 mb-4 display-6 lh-1 fw-bold ${project.color}`}>  </h2></a>
                  <ul className="d-flex list-unstyled mt-auto justify-content-between">

                    <li className="me-auto">
                      <a
                        href={`${project.github}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img src={require(`../../images/isoyor_icon.png`)} alt="app repo" width="32" height="32" className="rounded-circle border border-primary" /></a>
                      </li>
                    <li className="d-flex  align-items-center me-3 bg-mini">
                      <svg class="bi me-2" width="1em" height="1em"> </svg>
                      <a
                        href={`${project.deployment}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      ><meduim>{project.title}</meduim></a>

                    </li>

                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
