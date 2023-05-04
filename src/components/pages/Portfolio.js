import React from 'react';
// import images from '../images';
const projects = require('../../utils/projects.json');

console.log(projects);
const overPicture = 'bg-1';
// const mainPicture = 'knowledge_hub.png';
// background - image: url('../images/knowledge_hub.png')

export default function Home() {
  return (
    <div className="container px-4 py-5">
      <h1 className="pb-2 border-bottom">My Projects</h1>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <a
            href='https://www.twitter.com/ikubiti'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className={`card card-cover h-100 overflow-hidden bg-dark rounded-5 shadow-lg ${overPicture}`}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-danger ">Jetset Social</h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src={require(`../../images/isoyor_icon.png`)} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>

        <div className="col">
          <a
            href='https://www.twitter.com/ikubiti'
            target='_blank'
            rel='noopener noreferrer'
          ><div className="card card-cover h-100 overflow-hidden bg-dark rounded-5 shadow-lg bg-2">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-danger">Knowledge Hub</h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src={require(`../../images/isoyor_icon.png`)} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                  </li>
                </ul>
              </div>
            </div></a>
        </div>

        <div className="col">
          <div className="card card-cover h-100 overflow-hidden bg-dark rounded-5 shadow-lg bg-3" >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-danger">Password Generator</h2>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src={require(`../../images/isoyor_icon.png`)} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-100 overflow-hidden bg-dark rounded-5 shadow-lg bg-3" >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-danger">Password Generator</h2>
              <a
                href='https://www.linkedin.com/in/isoyor-kubiti-3aa21812/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src={require(`../../images/isoyor_icon.png`)} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                  </li>
                </ul>
              </a>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="card card-cover h-100 overflow-hidden bg-dark rounded-5 shadow-lg bg-3" >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-danger">Password Generator</h2>
              <ul className="d-flex list-unstyled mt-auto">
                <a
                  href='https://www.linkedin.com/in/isoyor-kubiti-3aa21812/'
                  target='_blank'
                  rel='noopener noreferrer'
                >

                  <li className="me-auto">
                    <img src={require(`../../images/isoyor_icon.png`)} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                  </li>

                </a>
              </ul>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="card card-cover h-100 overflow-hidden bg-dark rounded-5 shadow-lg bg-3" >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <a
                href="https://ikubiti.github.io/password-generator/"
                target='_blank'
                rel='noopener noreferrer'
              ><h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-danger">Password Generator</h2></a>
              <ul className="d-flex list-unstyled mt-auto">
                <a
                  href='https://www.linkedin.com/in/isoyor-kubiti-3aa21812/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <li className="me-auto">
                    <img src={require(`../../images/isoyor_icon.png`)} alt="app repo" width="32" height="32" className="rounded-circle border border-primary" />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
