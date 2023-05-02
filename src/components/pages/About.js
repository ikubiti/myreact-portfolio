import React from 'react';

export default function About() {
  return (
    <div className="container">
      {/* <hr className="featurette-divider" /> */}

      <div className="row featurette my-5">
        <div className="col-md-7 order-md-2">
          <h1 className="featurette-heading">About Me</h1>
          <p className="lead">I love solving problems, and coding offers me a
            cost-effective approach to implementing solutions to
            real-world challenges. I am building the competency to
            develop professional-grade web applications for anyone
            needing such a service.</p>
          <p className="lead">I am a team player because I accept that an individual can go fast alone, but a team can go far together. In any organization, I strive to advance its cause through my service.</p>
          <p className="lead">I love movies, music, computer games, chess, checkers, and sightseeing. If you are up for some fun, you can reach out for a game of chess.</p>
        </div>
        <div className="col-md-5 order-md-1">
          <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

        </div>
      </div>

      <hr className="featurette-divider" />

    </div>
  );
}
