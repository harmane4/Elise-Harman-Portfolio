import React from "react";
import image from "../../images/headshot.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="container is-fluid">
      <h1 className="content is-size-1">
        HELLO I'M
        <span id="introduction" className="content  is-size-1">
          {" "}
          ELISE
        </span>
      </h1>
      <p>
        I am a full stack
        <span id="text" className="content">
          {" "}
          web developer
        </span>{" "}
        based in Perth.
      </p>
      <p>
        Long gone is the idea that your web developer is a middle aged man
        wearing a tracksuit working from his mother's basement. Now you have me,
        customer focused and results driven. With a background in event
        management and marketing, I combine my organisation and creativity into
        building websites.
      </p>

      <div className="columns is-centered">
        <div className="column is-one-quarter">
          <figure className="image is-200x200">
            <img id="headshot" src={image} alt="Headshot of Elise Harman"></img>
          </figure>
        </div>
      </div>
    </div>
  );
}
