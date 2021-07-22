import React from "react";
import image from "./headshot.jpg";

export default function About() {
  return (
    <div>
      <h1>
        HELLO I'M <span className="content has-text-info-dark">ELISE</span>
      </h1>
      <p>
        I am a full stack
        <span className="content has-text-info-dark"> web developer</span> based
        in Perth.
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
            <img src={image} alt="Headshot of Elise Harman"></img>
          </figure>
        </div>
      </div>
    </div>
  );
}
