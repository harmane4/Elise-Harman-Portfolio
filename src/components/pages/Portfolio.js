import React from "react";
import WeatherDashboard from "../../images/weatherDashboard.png";
import GoTheDistance from "../../images/login.png";
import GigglesAndFood from "../../images/gigglesAndfFood.png";
import TechBlog from "../../images/TechBlog.png";
import DayScheduler from "../../images/Scheduler.png";
import BudgetApp from "../../images/budgetapp.png";

export default function Portfolio() {
  return (
    <div>
      <h1>My Work</h1>
      <div className="container is-fluid">
        <section className="columns is-multiline">
          <div className="column is-half">
            <div className="overlay-area">
              <figure className="image is-3by2">
                <img
                  className="hovered-image"
                  src={WeatherDashboard}
                  alt="Weather Dashboard App placeholder"
                ></img>
              </figure>
              <div className="image-overlay">
                <div className="tools">Tools</div>
                <p className="tools-description">
                  HTML, CSS, JavaScript + OpenWeather API
                </p>
              </div>
            </div>
            <div className="container-content content-has-text-white">
              <p className="has-text-black has-text-centered is-size-5 has-text-info-dark has-text-weight-bold">
                Weather Dashboard
              </p>
            </div>
            <a
              href="https://github.com/harmane4/Weather-Dashboard"
              target="blank"
              className="card-footer-item has-text-black"
            >
              GitHub Repository
            </a>
            <a
              href="https://harmane4.github.io/Weather-Dashboard/"
              target="blank"
              className="card-footer-item has-text-black"
            >
              Visit Site
            </a>
          </div>
          <div className="column is-half">
            <div className="overlay-area">
              <figure className="image is-3by2">
                <img
                  className="hovered-image"
                  src={GoTheDistance}
                  alt="Giggles and Food App placeholder"
                ></img>
              </figure>
              <div className="image-overlay">
                <div className="tools">Tools</div>
                <p className="tools-description">
                  MySQL, Express.JS, Heroku, Node.JS, Handlebars, Sequelize,
                  Chalk & Bycrpt
                </p>
              </div>
            </div>
            <div className="container-content content-has-text-white">
              <p className="has-text-black has-text-centered is-size-5 has-text-info-dark has-text-weight-bold">
                Go The Distance
              </p>
            </div>
            <a
              href="https://github.com/Kel03-byte/go-the-distance-budgeting-app"
              target="blank"
              className="card-footer-item has-text-black"
            >
              GitHub Repository
            </a>
            <a
              href="https://shrouded-shore-09406.herokuapp.com/"
              target="blank"
              className="card-footer-item has-text-black"
            >
              Visit Site
            </a>
          </div>

          <div className="column is-half">
            <div className="overlay-area">
              <figure className="image is-3by2">
                <img
                  className="hovered-image"
                  src={GigglesAndFood}
                  alt="Giggles and Food App placeholder"
                ></img>
              </figure>
              <div className="image-overlay">
                <div className="tools">Tools</div>
                <p className="tools-description">
                  HTML, CSS, JavaScript & Bulma
                </p>
              </div>
            </div>
            <div className="container-content content-has-text-white">
              <p className="has-text-black has-text-centered is-size-5 has-text-info-dark has-text-weight-bold">
                Giggles and Food
              </p>
            </div>
            <a
              href="https://github.com/harmane4/Giggles-and-Food"
              target="blank"
              className="card-footer-item has-text-black"
            >
              GitHub Repository
            </a>
            <a
              href="https://harmane4.github.io/Giggles-and-Food/"
              target="blank"
              className="card-footer-item has-text-black"
            >
              Visit Site
            </a>
          </div>

          <div className="column is-half">
            <div className="overlay-area">
              <figure className="image is-3by2">
                <img
                  className="hovered-image"
                  src={TechBlog}
                  alt="Tech Blog App placeholder"
                ></img>
              </figure>
              <div className="image-overlay">
                <div className="tools">Tools</div>
                <p className="tools-description">
                  Express.JS, MySQL, Seqelize, Bycrpt, Handlebars
                </p>
              </div>
            </div>
            <div className="container-content content-has-text-white">
              <p className="has-text-black has-text-centered is-size-5 has-text-info-dark has-text-weight-bold">
                Tech Blog
              </p>
            </div>
            <a
              href="https://github.com/harmane4/Tech-Blog"
              target="blank"
              className="card-footer-item has-text-black"
            >
              GitHub Repository
            </a>
            <a
              href="http://arcane-badlands-76219.herokuapp.com/"
              target="blank"
              className="card-footer-item has-text-black"
            >
              Visit Site
            </a>
          </div>

          <div className="column is-half">
            <div className="overlay-area">
              <figure className="image is-3by2">
                <img
                  className="hovered-image"
                  src={DayScheduler}
                  alt="Weather Dashboard App placeholder"
                ></img>
              </figure>
              <div className="image-overlay">
                <div className="tools">Tools</div>
                <p className="tools-description">HTML, CSS & JQuery</p>
              </div>
            </div>
            <div className="container-content content-has-text-white">
              <p className="has-text-black has-text-centered is-size-5 has-text-info-dark has-text-weight-bold">
                Day Scheduler
              </p>
            </div>
            <a
              href="https://github.com/harmane4/Work-Day-Scheduler"
              target="blank"
              className="card-footer-item has-text-black"
            >
              GitHub Repository
            </a>
            <a
              href="https://harmane4.github.io/Work-Day-Scheduler/"
              target="blank"
              className="card-footer-item has-text-black"
            >
              Visit Site
            </a>
          </div>

          <div className="column is-half">
            <div className="overlay-area">
              <figure className="image is-3by2">
                <img
                  className="hovered-image"
                  src={BudgetApp}
                  alt="Weather Dashboard App placeholder"
                ></img>
              </figure>
              <div className="image-overlay">
                <div className="tools">Tools</div>
                <p className="tools-description">MongoDB, Mongoose, Heroku</p>
              </div>
            </div>
            <div className="container-content content-has-text-white">
              <p className="has-text-black has-text-centered is-size-5 has-text-info-dark has-text-weight-bold">
                Budget Tracker
              </p>
            </div>
            <a
              href="https://github.com/harmane4/Budget-Tracker"
              target="blank"
              className="card-footer-item has-text-black"
            >
              GitHub Repository
            </a>
            <a
              href="https://mighty-headland-47120.herokuapp.com/"
              target="blank"
              className="card-footer-item has-text-black"
            >
              Visit Site
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
