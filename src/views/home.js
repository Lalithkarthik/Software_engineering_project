import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import SectionHeading from '../components/section-heading'
import CategoryCard1 from '../components/category-card1'
import AppComponent from '../components/component'
import Features10 from '../components/features10'
import Features4 from '../components/features4'
import Feedback from '../components/feedback'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Crafting Comfort</title>
        <meta property="og:title" content="Crafting Comfort" />
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
      <div className="home-main">
        <div className="home-hero1 section-container">
          <div className="home-max-width1 max-width-container">
            <div className="home-hero2">
              <div className="home-container2">
                <div className="home-container3">
                  <h1 className="home-text116">
                    <span className="home-text117">WELCOME TO</span>
                    <span className="home-text118">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text119"></br>
                    <span className="home-text120">CRAFTING COMFORT</span>
                    <br className="home-text121"></br>
                  </h1>
                  <span className="home-text122">
                    Tailor your dream home with personalized designs and clear
                    pricing.
                  </span>
                  <Link to="/survey" className="home-navlink1 button">
                    <span className="home-text123">
                      <span>Start Building</span>
                      <br></br>
                    </span>
                  </Link>
                </div>
                <img
                  alt="image23271449"
                  src="/house%20with%20hand-600h.jpg"
                  className="home-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section-container column">
          <div className="max-width-container">
            <SectionHeading heading="EXPLORE MODELS"></SectionHeading>
            <div className="home-cards-container">
              <CategoryCard1
                name="Desks"
                text={
                  <Fragment>
                    <span className="home-text126">
                      <span>Duplex</span>
                      <br></br>
                      <br></br>
                    </span>
                  </Fragment>
                }
                categoryImg="/wooden%20house-1500w.jpg"
              ></CategoryCard1>
              <CategoryCard1
                name="duplex"
                text={
                  <Fragment>
                    <span className="home-text130">Appartment</span>
                  </Fragment>
                }
                categoryImg="/villa-1500w.jpg"
              ></CategoryCard1>
              <CategoryCard1
                name="Tables"
                text={
                  <Fragment>
                    <span className="home-text131">Villa</span>
                  </Fragment>
                }
                categoryImg="/360_f_780780759_yym69djpeq9gdr9qzfjt2f1op2titkzn-1500w.jpg"
              ></CategoryCard1>
              <CategoryCard1
                name="Lamps"
                text={
                  <Fragment>
                    <span className="home-text132">Lamps</span>
                  </Fragment>
                }
                categoryImg="/house%20with%20hand-600h.jpg"
              ></CategoryCard1>
              <CategoryCard1
                name="Plants"
                text={
                  <Fragment>
                    <span className="home-text133">Plants</span>
                  </Fragment>
                }
                categoryImg="https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDU3fHxwbGFudHN8ZW58MHx8fHwxNjUyODIyMDcy&amp;ixlib=rb-1.2.1&amp;h=200"
              ></CategoryCard1>
              <CategoryCard1
                name="Decoration"
                text={
                  <Fragment>
                    <span className="home-text134">Decoration</span>
                  </Fragment>
                }
                categoryImg="https://images.unsplash.com/photo-1558882224-dda166733046?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGRlY29yYXRpb258ZW58MHx8fHwxNjUyODIyMDkx&amp;ixlib=rb-1.2.1&amp;h=200"
              ></CategoryCard1>
              <CategoryCard1
                name="Collections"
                text={
                  <Fragment>
                    <span className="home-text135">Collections</span>
                  </Fragment>
                }
                categoryImg="https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxjb2xsZWN0aW9uc3xlbnwwfHx8fDE2NTI4MjIxMTE&amp;ixlib=rb-1.2.1&amp;h=200"
              ></CategoryCard1>
            </div>
          </div>
          <div className="home-banner">
            <div className="home-container4">
              <h3 id="about-us" className="home-text136 Heading-3">
                ABOUT US
              </h3>
            </div>
          </div>
          <AppComponent
            text={
              <Fragment>
                <span className="home-text137">
                  <br className="home-text138"></br>
                  <span className="home-text139">
                    Welcome to Crafting Comfort, where architecture meets
                    innovation! We are a passionate team of designers,
                    developers, and architects dedicated to transforming the way
                    you experience home design. With our state-of-the-art, 3D
                    interactive website, we empower you to visualize and
                    customize your dream home, ensuring it is not only
                    functional but also a true reflection of your style and
                    comfort.
                  </span>
                  <br className="home-text140"></br>
                  <br className="home-text141"></br>
                  <span>
                                                                               
                             
                  </span>
                  <span className="home-text143">WHO WE ARE</span>
                  <br className="home-text144"></br>
                  <br className="home-text145"></br>
                  <span className="home-text146">
                    At Crafting Comfort, we believe that home is more than just
                    a space—it’s a sanctuary where every detail should resonate
                    with who you are. Founded by a team of architecture and
                    technology enthusiasts, we bridge the gap between modern
                    design and customer personalization. Our mission is to make
                    home design easy, fun, and accessible, allowing you to take
                    charge of every aspect of your home’s layout and aesthetic.
                  </span>
                  <br className="home-text147"></br>
                  <br className="home-text148"></br>
                  <span className="home-text149">
                                                                               
                       
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text150">What We Do</span>
                  <br className="home-text151"></br>
                  <br className="home-text152"></br>
                  <span className="home-text153">
                    Our platform gives you the power to explore and customize
                    architectural designs in real-time. Whether you want to
                    tweak the layout, experiment with materials, or choose
                    colors that match your personality, our interactive tools
                    make it possible. We offer a wide range of design templates
                    to inspire you, or you can start from scratch and build your
                    home exactly the way you want.
                  </span>
                  <br className="home-text154"></br>
                  <br className="home-text155"></br>
                  <span className="home-text156">
                                                                               
                  </span>
                  <span className="home-text157"> </span>
                  <span className="home-text158">Why Choose Us</span>
                  <br className="home-text159"></br>
                  <br className="home-text160"></br>
                  <span className="home-text161">
                    Interactive 3D Models: Visualize every aspect of your home
                    before it’s built with our user-friendly, immersive 3D
                    interface.
                  </span>
                  <br className="home-text162"></br>
                  <span className="home-text163">
                    Customization at Its Best: Choose everything from flooring
                    to fixtures with a few clicks, making it easier to tailor
                    your home to your taste.
                  </span>
                  <br className="home-text164"></br>
                  <span className="home-text165">
                    Collaborative Approach: Work closely with our team of
                    experts who are always ready to guide you through the design
                    process.
                  </span>
                  <br className="home-text166"></br>
                  <span className="home-text167">
                    Cutting-Edge Technology: Using the latest in 3D modeling and
                    web technologies, we provide an innovative platform to make
                    your dream home a reality.
                  </span>
                  <br className="home-text168"></br>
                  <br className="home-text169"></br>
                  <span className="home-text170">
                                                                               
                         
                  </span>
                  <span className="home-text171">   </span>
                  <span className="home-text172">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text173"> </span>
                  <span className="home-text174">Our Vision</span>
                  <br className="home-text175"></br>
                  <br className="home-text176"></br>
                  <span className="home-text177">
                    We aim to revolutionize the home design process by putting
                    the power in your hands. Our vision is to create a seamless,
                    interactive experience where creativity knows no bounds.
                    With Crafting Comfort, you don’t just build a house—you
                    craft a home that suits your lifestyle, your preferences,
                    and your comfort.
                  </span>
                </span>
              </Fragment>
            }
            button={
              <Fragment>
                <span className="home-text178">TAKE THE SURVEY</span>
              </Fragment>
            }
          ></AppComponent>
          <Features10
            sectionTitle={
              <Fragment>
                <span className="home-text179">MATERIALS</span>
              </Fragment>
            }
            feature1Title={
              <Fragment>
                <span className="home-text180">
                  <span> WOOD </span>
                  <br></br>
                  <span>Rs. 40000</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Title={
              <Fragment>
                <span className="home-text185">
                  <span>MARBLE</span>
                  <br></br>
                  <span>   Rs. 56000</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature3Title={
              <Fragment>
                <span className="home-text190">
                  <span>TILES</span>
                  <br></br>
                  <span>Rs. 40000</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature1ImageSrc="/external/screenshot%202024-11-03%20145444-1400w.png"
            feature2ImageSrc="/external/screenshot%202024-11-03%20145349-200h.png"
            feature3ImageSrc="/external/screenshot%202024-11-03%20145305-200h.png"
            feature1Description={
              <Fragment>
                <span className="home-text195">DETAILS</span>
              </Fragment>
            }
            feature2Description={
              <Fragment>
                <span className="home-text196">DETAILS</span>
              </Fragment>
            }
            feature3Description={
              <Fragment>
                <span className="home-text197">DETAILS</span>
              </Fragment>
            }
          ></Features10>
          <Features4
            name="villa"
            sectionTitle={
              <Fragment>
                <span className="home-text198">WishList</span>
              </Fragment>
            }
            feature1Title={
              <Fragment>
                <span className="home-text199">Interactive 3D Models</span>
              </Fragment>
            }
            feature2Title={
              <Fragment>
                <span className="home-text200">Customization Options</span>
              </Fragment>
            }
            feature3Title={
              <Fragment>
                <span className="home-text201">Cutting-Edge Technology</span>
              </Fragment>
            }
            feature4Title={
              <Fragment>
                <span className="home-text202">
                  Discover the Magic of Lorem Ipsum Text Generation
                </span>
              </Fragment>
            }
            feature1Button={
              <Fragment>
                <span className="home-text203">View Model</span>
              </Fragment>
            }
            feature2Button={
              <Fragment>
                <span className="home-text204">View Model</span>
              </Fragment>
            }
            feature3Button={
              <Fragment>
                <span className="home-text205">View Model</span>
              </Fragment>
            }
            feature4Button={
              <Fragment>
                <span className="home-text206">View Model</span>
              </Fragment>
            }
            feature1ImageSrc="/external/whatsapp%20image%202024-11-02%20at%2011.12.08%20pm-600w.jpeg"
            feature2ImageSrc="/external/whatsapp%20image%202024-11-02%20at%2011.12.11%20pm-600w.jpeg"
            feature1Description={
              <Fragment>
                <span className="home-text207">
                  Explore your future home in detail with our interactive 3D
                  models.
                </span>
              </Fragment>
            }
            feature2Description={
              <Fragment>
                <span className="home-text208">
                  Tailor every aspect of your home design to suit your
                  preferences and style.
                </span>
              </Fragment>
            }
            feature3Description={
              <Fragment>
                <span className="home-text209">
                  Experience the latest technology in architectural design for a
                  seamless process.
                </span>
              </Fragment>
            }
            feature4Description={
              <Fragment>
                <span className="home-text210">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </span>
              </Fragment>
            }
          ></Features4>
          <Feedback
            action1={
              <Fragment>
                <span className="home-text211">SUBMIT</span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="home-text212">FEEDBACK </span>
              </Fragment>
            }
            image1Src="/external/screenshot%202024-11-03%20155357-600w.png"
          ></Feedback>
        </div>
      </div>
      <Footer
        text={
          <Fragment>
            <span className="home-text213">
              Indian Institute of Information Technology Raichur
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text214">India,Raichur-584135</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text215">
              <span>Ph: +91 6363996166</span>
              <br className="home-text217"></br>
              <br></br>
              <span>E-mail: info@iiitr.ac.in</span>
              <br className="home-text220"></br>
              <br></br>
            </span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text222">Categories</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="home-text223">Bungalow</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="home-text224">Wooden villa</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="home-text225">Villa</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="home-text226">Home</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="home-text227">Apartments</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="home-text228">Duplex</span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="home-text229">Company</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="home-text230">Shop</span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="home-text231">Lookbook</span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="home-text232">Specials</span>
          </Fragment>
        }
        text14={
          <Fragment>
            <span className="home-text233">About Us</span>
          </Fragment>
        }
        text15={
          <Fragment>
            <span className="home-text234">Blog</span>
          </Fragment>
        }
        text16={
          <Fragment>
            <span className="home-text235">Resources</span>
          </Fragment>
        }
        text17={
          <Fragment>
            <span className="home-text236">Contact us</span>
          </Fragment>
        }
        text18={
          <Fragment>
            <span className="home-text237">
              <Link to="/survey">Survey</Link>
              <br></br>
            </span>
          </Fragment>
        }
        text19={
          <Fragment>
            <span className="home-text239">Material pricing</span>
          </Fragment>
        }
        text20={
          <Fragment>
            <Link to="/model" className="home-navlink3">
              View page
            </Link>
          </Fragment>
        }
        heading={
          <Fragment>
            <span className="home-text240 Heading-3">CONTACT US</span>
          </Fragment>
        }
      ></Footer>
    </div>
  )
}

export default Home
