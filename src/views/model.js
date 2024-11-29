import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ThreeDModelViewer from './threed'; 

import './model.css';

const Model = (props) => {
  const [modelData, setModelData] = useState({
    modelUrl: `${process.env.PUBLIC_URL}/modern_house1/scene.gltf`,
    name: "Default Model",
    description: "This is a default description for the model.",
  });

  useEffect(() => {
    const surveyData = JSON.parse(localStorage.getItem('surveyData'));
    if (surveyData) {
      console.log("Survey Data Loaded:", surveyData);
      setModelData({
        modelUrl: surveyData.modelUrl || `${process.env.PUBLIC_URL}/modern_house1/scene.gltf`,
        name: surveyData.name || "Default Model",
        description: surveyData.description || "This is a default description for the model.",
        floors: surveyData.floors || "1-4",
        rooms: surveyData.rooms || "1-6"
      });
    }
  }, []);

  return (
    <div className="model-container10">
      <Helmet>
        <title>Crafting Comfort </title>
        <meta property="og:title" content="Software Project" />
      </Helmet>
      <Navbar
        text={
          <Fragment>
            <span className="home-text100">
              <span className="home-text101">HOME</span>
              <br className="home-text102"></br>
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text103 navbar-link">ABOUT US</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text104 navbar-link">WISHLIST</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text105 navbar-link">CONTACT</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="home-text106">SHOP</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="home-text107">LOOKBOOK</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="home-text108">SPECIAL</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="home-text109">ABOUT</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="home-text110">BLOG</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="home-text111">CONTACT</span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="home-text112">Register/Login</span>
          </Fragment>
        }
        imageSrc="/butterfly-200h.jpg"
        logoCenter={
          <Fragment>
            <span className="home-logo-center navbar-logo-title">
              <span className="home-text113">CRAFTING COMFORT</span>
              <br></br>
            </span>
          </Fragment>
        }
        logoCenter1={
          <Fragment>
            <span className="home-text115">CRAFTING COMFORT</span>
          </Fragment>
        }
        rootClassName="navbarroot-class-name3"
      ></Navbar>

      <div className="model-hero section-container">
        <div className="model-contents">
          <div className="model-contentstexty">
            <div className="model-title">
              <div className="model-container11">
                <span className="model-text24">PRICING ESTIMATE</span>
              </div>
            </div>
            <div className="model-name">
              <div className="model-question"><span>MODEL NAME:</span></div>
              <div className="model-answer"><span className="model-text26">{modelData.name}</span></div>
            </div>
            <div className="model-description">
              <div className="model-container12"><span className="model-text27">DESCRIPTION:</span></div>
              <div className="model-container13">
                <span className="model-text28">
                {modelData.description}
                </span>
              </div>
            </div>
            <div className="model-nofloors">
              <div className="model-container14"><span className="model-text29">NO OF FLOORS:</span></div>
              <div className="model-container15"><span className="model-text30">{modelData.floors}</span></div>
            </div>
            <div className="model-norooms">
              <div className="model-container16"><span>NO OF ROOMS:</span></div>
              <div className="model-container17"><span className="model-text32">{modelData.rooms}</span></div>
            </div>
            <div className="model-material-select">
              <div className="model-container18"><span className="model-text33">SELECTION OF MATERIALS:</span></div>
              <select className="model-select">
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <div className="model-calculate-price">
              <button type="button" className="model-button button">CALCULATE PRICE</button>
            </div>
            <div className="model-price-estimate">
              <div className="model-container19"><span className="model-text34">ESTIMATED PRICE:</span></div>
              <div className="model-container20"><span className="model-text35">1</span></div>
            </div>
          </div>
          <div className="model-model">
            <ThreeDModelViewer key ={modelData.modelUrl} modelUrl={modelData.modelUrl} />
          </div>
        </div>
      </div>

      <Footer 
        text={<Fragment><span className="model-text36">4517 Washington Ave. Manchester, Kentucky 39495, United States</span></Fragment>}
        text1={<Fragment><span className="model-text39">584135</span></Fragment>}
        text2={<Fragment><span className="model-text40">Ph: +91 6363996166<br />E-mail: info@iiitr.ac.in</span></Fragment>}
        text3={<Fragment><span className="model-text47">Categories</span></Fragment>}
        text4={<Fragment><span className="model-text48">Bungalow</span></Fragment>}
        text5={<Fragment><span className="model-text49">Wooden villa</span></Fragment>}
        text6={<Fragment><span className="model-text50">Villa</span></Fragment>}
        text7={<Fragment><span className="model-text51">Home</span></Fragment>}
        text8={<Fragment><span className="model-text52">Apartments</span></Fragment>}
        text9={<Fragment><span className="model-text53">Duplex</span></Fragment>}
        text10={<Fragment><span className="model-text54">Company</span></Fragment>}
        text11={<Fragment><span className="model-text55">Shop</span></Fragment>}
        text12={<Fragment><span className="model-text56">Lookbook</span></Fragment>}
        text13={<Fragment><span className="model-text57">Specials</span></Fragment>}
        text14={<Fragment><span className="model-text58">About Us</span></Fragment>}
        text15={<Fragment><span className="model-text59">Blog</span></Fragment>}
        text16={<Fragment><span className="model-text60">Resources</span></Fragment>}
        text17={<Fragment><span className="model-text61">Contact us</span></Fragment>}
        text18={<Fragment><span className="model-text62">Survey</span></Fragment>}
        text19={<Fragment><span className="model-text63">Material pricing</span></Fragment>}
        text20={<Fragment><Link to="/model" className="model-navlink">View page</Link></Fragment>}
        heading={<Fragment><span className="model-text64 Heading-3">CONTACT US</span></Fragment>}
        rootClassName="footerroot-class-name"
      />
    </div>
  );
}

export default Model;
