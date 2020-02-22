import React from 'react';
import Zoe from '../components/zoe';
import Aml from '../components/aml';
import Goons from '../components/goons';
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




function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
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

                    <h1 class="mb-3">WWUD specializes in augmenting the distribution of content creation throughout the world while preserving the authenticity of creators.</h1>

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
              <p>WWUD is dedicated to propelling content that traditionally doesn’t receive mainstream exposure. We’re committed to providing the world with Urban Content to enhance the perception of individuals, primarily those who have been historically underserved by the media. Our job is to get your content out to the world through traditional and new age contemporary platforms - AVOD, TVOD, SVOD, OTT, PPV, Communication Broadcasters, Apps and Live Streaming. We can monetize and market content directly to consumers while creators can manage their online visibility, brand awareness, and measure their video assets.</p>
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
                  <p>Florida Film House created World Wide Urban Distribution after being in the film industry for 20 plus years and recognized the lack of support and knowledge of urban content creators. We’re in an era where the traditional distribution models are no longer the standard and are changing on a quarterly basis which is being driven by digital media companies. By providing a digital platform that not only represents the creators originality but understands the market we can maximize every opportunity and take advantage of the leading tech industry by the distribution of digitally based goods and services.
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
                  <button class="trailer-preview" target="new"><Aml />

                  </button>
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
                  <button class="trailer-preview" target="new"><Zoe />

                  </button>
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
                  <button class="trailer-preview" target="new"><Goons />

                  </button>
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
