import React from 'react';


export default function About() {
  return (
    <div className="container bg-about">

      <div className="row featurette my-5">
        <div className="col-md-7 order-md-2">
          <h1 className="featurette-heading mt-5">About Me</h1>
          <p className="lead">I love solving problems, and coding offers me a
            cost-effective approach to implementing solutions to
            real-world challenges. I have built the technical competencies required to
            develop professional-grade web applications for anyone
            needing such a service.</p>
          <p className="lead">My motivation is to effectively solve real-world problems and leave the world a better place for everyone.</p>
          <p className="lead">I am also team player because I know that an individual can go fast alone, but a team can go far together. In any organization, I will strive to advance its cause through my services. If you are looking for talented individual who can efficiently work in a team, then, I am your man.</p>
          <p className="lead">I love movies, music, computer games, chess, checkers, and sightseeing. If you are up for some fun, you can reach out for a game of chess.</p>
        </div>
        <div className="col-md-5 order-md-1 image-container">
          <div className="image-container">
            <img src={require("../../images/Isoyor_3.jpeg")} alt="{A Head Shot of Me}" className="img-fluid rounded float-right mx-auto size-images" />
            <img src={require("../../images/Isoyor_5.jpeg")} alt="{A Head Shot of Me}" className="img-fluid mx-auto normal-hide" />
          </div>         
        </div>
      </div>

      <hr className="featurette-divider" />

    </div>
  );
}
