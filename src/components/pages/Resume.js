import React from "react";

export default function Resume() {
  return (
    <div className="container is-fluid">
      <h2>Elise Harman</h2>
      <h1>Resume</h1>
      <div className="buttons is-justify-content-center">
        <a
          className="button is-info"
          href="https://docs.google.com/document/d/1GIlNdDKb7qi_bHt4c_Ji4QWeo43m53zoKi_2Z06XRug/export?format=pdf"
          target="blank"
        >
          Download my resume
        </a>
      </div>

      <h1>SKILLS</h1>
      <h3>DEVELOPMENT</h3>
      <p>HTML + CSS + JavaScript are my bread & butter</p>
      <p>Dev Tools I use: Bulma, Github</p>
      <p>SQL, Heroku, Express, Node, React </p>

      <h3>EDUCATION</h3>
      <p>
        2021 - University of Western Australia & Trilogy Education: Full Stack
        Coding Bootcamp
      </p>
      <p>
        2015 - University of Western Australia: Bachelor of Arts Majoring in
        Communications & Media Studies
      </p>
    </div>
  );
}
