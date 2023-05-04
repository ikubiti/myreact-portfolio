import React from 'react';

export default function Blog() {
  return (
    <div className="container contact mb-5">
      <h1 >Resume</h1>
      <a className="m-3" href='#'>Download Resume</a>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Front-End Generic Technologies - HTML, CSS
        </li>
        <li className="list-group-item">Front-End Frameworks - React, Bootstrap</li>
        <li className="list-group-item">Back-End Technologies - Node.js, Express.js</li>
        <li className="list-group-item">Back-End Frameworks - GraphQL, Apollo</li>
        <li className="list-group-item">Database Technologies - MongoDB, MySQL, Sequelize</li>
        <li className="list-group-item">Deployment Technologies - Heroku, Github, Git</li>
        <li className="list-group-item">Server-side APIs, RESTful APIs</li>
        <li className="list-group-item">Templating Engines such as Handlebars</li>
        <li className="list-group-item">Progressive Web Applications</li>
        <li className="list-group-item">Programming Languages - Java, C++, Javascript</li>
      </ul>
    </div>
  );
}
