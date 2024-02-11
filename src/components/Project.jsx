import React from "react";
import "./project.css";
import meme from './Images/meme.png'
import Love from './Images/love.png'
import Story from './Images/story.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Project() {
  useEffect(()=>{
    AOS.init({
      duration:2000
    },[])
  })
  return (
    <div className="f" id="projects" data-aos="fade-down">
      <h6 className="f1">Explore My</h6>
      <h3 className="f2">Best Projects</h3>
      <p className="f3"></p>

      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="card mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={meme} class="img-fluid rounded-start" alt="..." />
                  <a href="https://659d22b7c836b2930652fbb3--nimble-kashata-9b6d65.netlify.app/" target="_blank" className="f4 cc1">View</a> <br />
                  <a href='https://app.netlify.com/teams/nishikant001/overview' className="f4 cc">|  Resource</a>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Meme Generator</h5>
                    <p class="card-text">
                    Welcome to MemeMagic Reacto, the cutting-edge meme generator designed to amplify your content strategy!

                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
          <div class="card mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                <img src={Love} class="img-fluid rounded-start" alt="..." />
                  <a href="https://nishikant001.github.io/Love-Calculator/" target="_blank" className="f4 cc1">View</a> <br />
                  <a href='https://github.com/dashboard' className="f4 cc">|  Resource</a>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Love Predictor</h5>
                    <p class="card-text">
                    The Love Percentage Predictor is an interactive web application designed to provide users with a fun and engaging way to predict the perceived level of affection between two individuals
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
          <div class="card mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                <img src={Story} class="img-fluid rounded-start" alt="..." />
                  <a href="https://nishikant001.github.io/ParallaX-StoryBook/" target="_blank" className="f4 cc1">View</a> <br />
                  <a href='https://github.com/dashboard' className="f4 cc">|  Resource</a>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Parallax Story Book</h5>
                    <p class="card-text">
                    The Parallax Story Book is a captivating web-based storytelling experience that employs parallax scrolling effects to animate and bring narratives to life.
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Project;