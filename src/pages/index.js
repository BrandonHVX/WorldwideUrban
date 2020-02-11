import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';
import '../../src/assets/css/style.css';
import '../../src/assets/css/animate.css';
import place from '../../src/assets/images/place.jpg'
import demo1 from '../assets/images/demo-screen-1.jpg';
import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';
import zoe911 from '../assets/images/Zoe911.jpg'
import amls from '../assets/images/amls.jpg'
import rg from '../assets/images/rg.jpg'
import tvscreen from '../assets/images/tv-screen.jpg'
import bg1 from '../assets/images/bg_1.jpg'
import about from '../assets/images/about.jpg'
import film1 from '../assets/images/film-1.jpeg'
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


const hero = {

  width: '100%',
  backgroundImage: `url(${bg1})`,
  borderTopLeftRadius: '1800%',
  borderBottomLeftRadius: '300',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
}

const aboutSection = {
  height: '950px',
  backgroundImage: `url(${film1})`,
  backgroundSize: 'cover',
  zIndex: 2,
  backgroundPosition: 'center center',
}

const IndexPage = () => (
  <Layout>
    <Header />

    <section class="banner_part">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">

            <section class="hero-wrap d-flex">
              <div class="forth d-flex">
                <div class="bg-after d-flex align-self-stretch"></div>
                <div class="text">
                  <div class="desc pt-5">

                    <h1 class="mb-3">Maximizing digital marketing strategies to give content creators a platform to tell their stories in their voices.</h1>

                  </div>
                  <Scroll type="id" element="download">
                    <a href="#download" className="btn-outline ">
                      Learn More
                </a>
                  </Scroll>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>



    <section className="download " id="download">
      <div className="container">

        <div class="row">
          <div class="col-md-6 sposition-relative">
            <img src={tvscreen} class="img-fluid" alt="Image" />
            <div class="experience">

            </div>
          </div>

          <div class="col-md-5 mt-2 ml-auto">
            <div class="heading-section text-center">
              <span class="subheading">Mission Statement</span>
              <h2 class="mb-4" style={{ fontSize: '35px' }}>Our Mission</h2>
              <p>World Wide Urban Distribution is dedicated to making the world a better place by providing content that traditionally has not had mainstream exposure. Our job is to get your content out to the world through traditional and contemporary platforms to enhance the perception of human beings, especially the urban community, who have been historically underserved by the media. We are committed to help tell the stories for people who cannot customarily speak for themselves.</p>
            </div>

          </div>

        </div>
      </div>

    </section>








    <section class="ftco-section ftco-no-pt ftco-no-pb" id="download">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-5  img img-2 d-flex justify-content-center align-items-center order-md-last" style={aboutSection}>
          </div>
          <div class="col-md-7 wrap-about pt-md-2">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div class="pr-md-5 mr-md-5 text-md-right">
                <span class="subheading">about us</span>
                <h2 class="mb-5">Worldwide Urban Distribution</h2>
              </div>
            </div>
            <div class="pr-md-3 pr-lg-5 pl-md-5 mr-md-5 mb-5">
              <div class="services-wrap d-flex">

                <div class="media-body pl-md-0 pl-4 pr-4 order-md-first text-md-right">
                  <h3 class="heading">Our Story</h3>
                  <p>World Wide Urban Distribution was created by Florida Film House executive Marco Mall to provide opportunities for new age urban filmmakers.
</p>
                  <p>
                    Marco is an entertainment entrepreneur whose career spans over 15 years of winning. He has established vertically integrated companies in entertainment, marketing, and branding.
         </p>
                  <p>
                    By 21 Marco was the sales and Promotions Manager of WVHT in Tallahassee, FL, establishing himself as a pioneer in the industry. In 2004, Marco created JamTV, a music entertainment TV show, which ran on UPN and CW for 3 consecutive years in 39 counties, with interviews and guest artists such as Neyo, Alicia Keys, DJ Khaled and many more. He was also a tour supervisor and manager at T-Pain’s Nappy Boy Records.
                  </p>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </section>






    <section className="features" id="features">
      <div className="container">
        <div class="heading-section text-center">
          <span class="subheading">Films</span>
          <h2 class="mb-5">Our Films</h2>

        </div>
        <div>
          <div class="row justify-content-center">
            <div class="col-md-6">

              <div class="card">
                <div class="card-header">
                  <img class="card-img" src={amls} alt="Card image" />
                </div>
                <div class="card-body">
                  <h1 class="card-title">A Miami Love Story</h1>
                  <div class="container">
                    <div class="row">
                      <div class="col-4 metadata">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <p>9.5/10</p>
                      </div>
                      <div class="col-8 metadata">Drama</div>
                    </div>
                  </div>
                  <a class="trailer-preview" href="" target="new">
                    <i class="fa fa-play" aria-hidden="true"></i>
                  </a>
                </div>
              </div>

            </div>

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
                      <div class="col-8 metadata">Comedy/Drama</div>
                    </div>
                  </div>
                  <a class="trailer-preview" href="" target="new">
                    <i class="fa fa-play" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <img class="card-img" src={rg} alt="Card image" />
                </div>
                <div class="card-body">
                  <h1 class="card-title">RealGoons.com</h1>
                  <div class="container">
                    <div class="row">
                      <div class="col-4 metadata">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <p>9.5/10</p>
                      </div>
                      <div class="col-8 metadata">Crime/Drama</div>
                    </div>
                  </div>
                  <a class="trailer-preview" href="" target="new">
                    <i class="fa fa-play" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>






    <Footer />
  </Layout >
);

export default IndexPage;
