import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column has-text-centered">
            <div className="buttons is-justify-content-center">
              <a
                className="button is-info"
                href="mailto:elise_harman@hotmail.com"
              >
                Email
              </a>
              <a
                className="button is-info"
                href="https://www.linkedin.com/in/elise-harman-1676b4a8/"
                target="blank"
              >
                Linkedin
              </a>
              <a
                className="button is-info"
                href="https://github.com/harmane4"
                target="blank"
              >
                GitHub
              </a>
              <a
                className="button is-info"
                href="Assests/images/ResumeEliseHarman.pdf"
                target="blank"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
