import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';
import '../../src/assets/css/style.css';
import place from '../../src/assets/images/place.jpg'
import demo1 from '../assets/images/demo-screen-1.jpg';
import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';
import zoe911 from '../assets/images/Zoe911.jpg'
import amls from '../assets/images/amls.jpg'
import rg from '../assets/images/rg.jpg'
import tvscreen from '../assets/images/tv-screen.jpg'
import {
  Card,
  Nav,
  Tab,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Container,
  Jumbotron,
  Button,
  Badge,
  Modal,
  ProgressBar,
} from "react-bootstrap"


const navtabs = {
  display: "flex",
  justifyContent: "center",
}
const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-10 my-auto">
            <div className="header-content">
              <h1 className="mb-5">
                Maximizing digital marketing strategies to give <span class="red-text">content creators</span> a platform to tell their stories in their voices.
              </h1>
              <Scroll type="id" element="download">
                <a href="#download" className="btn btn-outline btn-xl">
                  Learn More
                </a>
              </Scroll>
            </div>
          </div>

        </div>
      </div>
    </header>

    <section className="download text-center" id="download">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <h3 class="section-sub-title">About Us</h3>
          <hr />
          <h3 class="section-title mb-3">Our Story</h3>
          <p class="mb-4"> The creation of World Wide Urban Distribution is a collaboration between Rodger Reiter and Florida Film House Executives Marco Mall and Blademil Grullon.  Realizing they were of like minds when it comes to creating opportunities for new age urban filmmakers, the next natural step was to take their vision to the next level.  As a result, World Wide Urban Distribution was born.


World Wide Urban Distribution was created out of necessity. As filmmakers with completed projects we began searching for suitable distribution companies to represent us. After attending several markets and interviewing hundreds of distributors, we concluded that none of these companies could properly represent us domestically or internationally.</p>

        </div>
        <div class="site-section" id="about-section">
          <div class="container mt-5">
            <div class="row align-items-lg-center">
              <div class="col-md-6 mb-5 mb-lg-0 position-relative">
                <img src={tvscreen} class="img-fluid" alt="Image" />
                <div class="experience">
                  <span class="year">50 years</span>
                  <span class="caption">of experience</span>
                </div>
              </div>
              <div class="col-md-5 mt-5 ml-auto">
                <h3 class="section-sub-title">Mission Statement</h3>
                <hr />
                <h3 class="section-title mb-3"> The Mission</h3>
                <p class="mb-4">World Wide Urban Distribution is dedicated to making the world a better place by providing content that traditionally has not had mainstream exposure. Our job is to get your content out to the world through traditional and contemporary platforms to enhance the perception of human beings, especially the urban community, who have been historically underserved by the media. We are committed to help tell the stories for people who cannot customarily speak for themselves.</p>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <h3 class="section-sub-title">Films</h3>
          <hr />
          <h3 class="section-title mb-3">Our Films</h3>
          <p class="mb-4">
            The creation of World Wide Urban Distribution is a collaboration between Rodger Reiter and Florida Film House Executives Marco Mall and Blademil Grullon.  Realizing they were of like minds when it comes to creating opportunities for new age urban filmmakers, the next natural step was to take their vision to the next level.  As a result, World Wide Urban Distribution was born.</p>
        </div>
        <div >

          <div class="row justify-content-center">
            <div class="col-md-6">

              <div class="card">
                <div class="card-header">
                  <img class="card-img" src={zoe911} alt="Card image" />
                </div>
                <div class="card-body">
                  <h1 class="card-title">Zoe 911</h1>
                  <div class="container">
                    <div class="row">
                      <div class="col-4 metadata">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <p>9.5/10</p>
                      </div>
                      <div class="col-8 metadata">Adventure. Sci-Fi</div>
                    </div>
                  </div>
                  <a class="trailer-preview" href="https://youtu.be/ePbKGoIGAXY" target="new">
                    <i class="fa fa-play" aria-hidden="true"></i>
                  </a>
                </div>
              </div>

            </div>

            <div class="col-md-6">


              <div class="card movie_card">
                <img src={amls} class="card-img-top" alt="..." />
                <div class="card-body">
                  <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
                  </i>
                  <h5 class="card-title">Toy Story 4</h5>
                  <span class="movie_info">2019</span>
                  <span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
                </div>
              </div>

            </div>


            <div class="card movie_card">
              <img src={rg} />
              <div class="card-body">
                <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
                </i>
                <h5 class="card-title">Captain Marvel</h5>
                <span class="movie_info">2019</span>
                <span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
              </div>
            </div>

          </div>

        </div>

      </div>



    </section>

    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            Stop waiting.
            <br />
            Start building.
          </h2>
          <Scroll type="id" element="contact">
            <a href="#contact" className="btn btn-outline btn-xl">
              Let's Get Started!
            </a>
          </Scroll>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>
          We
          <i className="fas fa-heart"></i>
          new friends!
        </h2>
        <Social />
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
