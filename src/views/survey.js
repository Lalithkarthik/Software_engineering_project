import React, { useState, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './survey.css';
import { ceil } from 'three/webgpu';

const Survey = (props) => {
  const [landscape, setLandscape] = useState('');
  const [houseType, setHouseType] = useState('');
  const [numRooms, setNumRooms] = useState('');
  const [ceilHeight, setCeilHeight] = useState('');
  const [pool, setPool] = useState('');
  const [balcony, setBalcony] = useState('');
  const [garage, setGarage] = useState('');
  const [parking, setParking] = useState('');
  const [numEntrances, setNumEntrances] = useState('');

  const history = useHistory();

  const handleLandscapeChange = (value) => {
    setLandscape(value);
  };

  const handleHouseTypeChange = (value) => {
    setHouseType(value);
  };

  const handleNumRoomsChange = (value) => {
    setNumRooms(value);
  };

  const handleCeilHeightChange = (value) => {
    setCeilHeight(value);
  };

  const handlePoolChange = (value) => {
    setPool(value);
  };

  const handleBalconyChange = (value) => {
    setBalcony(value);
  };

  const handleGarageChange = (value) => {
    setGarage(value);
  };

  const handleParkingChange = (value) => {
    setParking(value);
  };

  const handleNumEntrancesChange = (value) => {
    setNumEntrances(value);
  };

  const handleSubmit = () => {
    // Answers to the questions stored in this survey data variable
    const surveyData = {
      landscape,
      houseType,
      numRooms,
      ceilHeight,
      pool,
      balcony,
      garage,
      parking,
      numEntrances
    };

    let modelUrl = '/002/scene.gltf'; 

    if(houseType=='Quadruplex') {

      modelUrl = '/002/scene.gltf';
    }
    else if((houseType=='Single Storey' && balcony=='Yes' && parking=='Yes') || (houseType=='Single Storey' && pool=='No' && balcony=='Yes' && garage=='No' && parking=='No')) {
      modelUrl = '/008/scene.gltf';
    }
    else if((houseType=='Single Storey' && parking=='Yes') || (houseType=='Single Storey' && pool=='No' && balcony=='No' && garage=='No' && parking=='Yes') || (houseType=='Single Storey' && pool=='No' && balcony=='Yes' && garage=='No' && parking=='Yes')) {
      modelUrl = '/004/scene.gltf';
    }
    else if(houseType=='Single Storey') {
      modelUrl = '/005/scene.gltf';
    }
    else if(houseType=='Duplex' && pool=='No' && balcony=='No' && garage=='Yes' && parking=='Yes') {
      modelUrl = '/001/scene.gltf';
    }
    else if(houseType=='Villa' && pool=='No' && balcony=='Yes' && garage=='No' && parking=='Yes') {
      modelUrl = '/003/scene.gltf';
    } 
    else if(houseType=='Villa' && pool=='No' && balcony=='No' && garage=='No' && parking=='Yes') {
      modelUrl = '/006/scene.gltf';
    }
    else if(houseType=='Duplex' && pool=='No' && balcony=='Yes' && garage=='No' && parking=='Yes') {
      modelUrl = '/007/scene.gltf';
    }
    else {
      modelUrl = '/001/scene.gltf';
    }

    surveyData.modelUrl = modelUrl;
    localStorage.setItem('surveyData', JSON.stringify(surveyData));
    
    history.push('/model');
  };

  return (
    <div className="survey-container1">
      <Helmet>
        <title>Survey - Mobillio Online Store</title>
        <meta property="og:title" content="Survey - Mobillio Online Store" />
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
            <span className="home-text115">MOBILLIO</span>
          </Fragment>
        }
        rootClassName="navbarroot-class-name3"
      ></Navbar>
      
      <div className="survey-container2">
        <div className="survey-instructions">
          <span className="survey-text24">
            <span className="survey-text25">INSTRUCTIONS</span>:<br />
            <span>Read Each Question Carefully</span><br />
            <span>Answer Thoroughly</span><br />
            <span>Select All Relevant Options</span><br />
            <span>Use the “Other” Option if Needed</span><br />
            <span>Submit When Finished</span>
          </span>
        </div>

        {/* Landscape Question */}
        <div className="survey-landscape">
          <span>1. ENTER THE DIMENSIONS OF YOUR PLOT</span>
        </div>
        <div className="survey-placeholder">
          <input
            type="text"
            placeholder="Enter landscape"
            className="survey-textinput input"
            value={landscape}
            onChange={(e) => handleLandscapeChange(e.target.value)}
          />
        </div>

        {/* House Type Question */}
        <div className="survey-type">
          <span className="survey-text38">2. WHAT TYPE OF HOUSE DO YOU PREFER?</span>
        </div>
        <div className="survey-housetypes">
          {['Single Storey', 'Duplex', 'Triplex', 'Quadruplex', 'Villa'].map((type) => (
            <button
              key={type}
              type="button"
              className={`survey-button button ${houseType === type ? 'selected' : ''}`}
              onClick={() => handleHouseTypeChange(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Number of Rooms Question */}
        <div className="survey-rooms">
          <div className="survey-container3">
            <span className="survey-text39">3. SELECT THE NO. OF ROOMS YOU REQUIRE</span>
          </div>
        </div>
        <div className="survey-choicesofrooms-question">
          <div className="survey-container4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                type="button"
                className={`survey-button button ${numRooms === num ? 'selected' : ''}`}
                onClick={() => handleNumRoomsChange(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Ceiling height question */}
        <div className="survey-type">
          <span className="survey-text38">4. WHAT CEILING HEIGHT DO YOU PREFER?</span>
        </div>
        <div className="survey-housetypes">
          {['Standard (9 ft.)', 'High (9-12 ft.)'].map((type) => (
            <button
              key={type}
              type="button"
              className={`survey-button button ${ceilHeight === type ? 'selected' : ''}`}
              onClick={() => handleCeilHeightChange(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Swimming pool question */}
        <div className="survey-rooms">
          <div className="survey-container3">
            <span className="survey-text39">5. DO YOU REQUIRE A SWIMMING POOL?</span>
          </div>
        </div>
        <div className="survey-choicerooms">
          <div className="survey-container4">
            {['Yes', 'No'].map((type) => (
              <button
                key={type}
                type="button"
                className={`survey-button button ${numRooms === type ? 'selected' : ''}`}
                onClick={() => handlePoolChange(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Balcony question */}
        <div className="survey-rooms">
          <div className="survey-container3">
            <span className="survey-text38">6. DO YOU REQUIRE A BALCONY?</span>
          </div>
        </div>
        <div className="survey-choicerooms">
          <div className="survey-container4">
          {['Yes', 'No'].map((type) => (
            <button
              key={type}
              type="button"
              className={`survey-button button ${balcony === type ? 'selected' : ''}`}
              onClick={() => handleBalconyChange(type)}
            >
              {type}
            </button>
          ))}
          </div>
        </div>

        {/* Garage question */}
        <div className="survey-rooms">
          <div className="survey-container3">
            <span className="survey-text38">7. DO YOU REQUIRE A GARAGE?</span>
          </div>
        </div>
        <div className="survey-choicerooms">
          <div className="survey-container4">
            {['Yes', 'No'].map((type) => (
              <button
                key={type}
                type="button"
                className={`survey-button button ${garage === type ? 'selected' : ''}`}
                onClick={() => handleGarageChange(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Parking question */}
        <div className="survey-rooms">
          <div className="survey-container3">
            <span className="survey-text38">8. DO YOU REQUIRE AN EXTRA PARKING SPACE?</span>
          </div>
        </div>
        <div className="survey-choicerooms">
          <div className="survey-container4">
            {['Yes', 'No'].map((type) => (
              <button
                key={type}
                type="button"
                className={`survey-button button ${parking === type ? 'selected' : ''}`}
                onClick={() => handleParkingChange(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* No. of entrances question */}
        <div className="survey-rooms">
          <div className="survey-container3">
            <span className="survey-text38">9. SELECT THE NO. OF ENTRANCES YOU REQUIRE</span>
          </div>
        </div>
        <div className="survey-choicerooms">
          <div className="survey-container4">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                type="button"
                className={`survey-button button ${numEntrances === num ? 'selected' : ''}`}
                onClick={() => handleNumEntrancesChange(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="survey-submit-container">
          <button type="button" className="survey-submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>

      <Footer
        text={<span className="survey-text40">4517 Washington Ave. Manchester, Kentucky 39495, United States</span>}
        text1={<span className="survey-text43">584135</span>}
        text2={
          <span className="survey-text44">
            Ph: +91 6363996166
            <br />
            E-mail: info@iiitr.ac.in
          </span>
        }
        text3={<span className="survey-text51">Categories</span>}
        text4={<span className="survey-text52">Bungalow</span>}
        text5={<span className="survey-text53">Wooden villa</span>}
        text6={<span className="survey-text54">Villa</span>}
        text7={<span className="survey-text55">Home</span>}
        text8={<span className="survey-text56">Apartments</span>}
        text9={<span className="survey-text57">Duplex</span>}
        text10={<span className="survey-text58">Company</span>}
        text11={<span className="survey-text59">Shop</span>}
        text12={<span className="survey-text60">Lookbook</span>}
        text13={<span className="survey-text61">Specials</span>}
        text14={<span className="survey-text62">About Us</span>}
        text15={<span className="survey-text63">Blog</span>}
        text16={<span className="survey-text64">Resources</span>}
        text17={<span className="survey-text65">Contact us</span>}
        text18={<span className="survey-text66">Survey</span>}
        text19={<span className="survey-text67">Material pricing</span>}
        text20={
          <Link to="/model" className="survey-navlink">
            View page
          </Link>
        }
        heading={<span className="survey-text68 Heading-3">CONTACT US</span>}
        rootClassName="footerroot-class-name1"
      />
    </div>
  );
};

export default Survey;
