import React from "react";

const About = () => {
  return (
    <div id="about" className="about-area border-bottom ptb-100">
      <div className="common-right-text">
        <span>ABOUT</span>
      </div>

      <div className="container">
        <div className="about-content">
          <div className="section-title">
            <span className="sub-title">ABOUT ME</span>
            <h2>I'm from Mexico and I love 🌮 & coding</h2>
            <p>
              I was born in 1993 and grew up in Puebla, 🇲🇽. After graduating as
              a software engineer I decided to move to Berlin 🇩🇪 the land of
              techno & bad weather. I freaking 💖 it.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-6">
              <div className="left">
                <ul>
                  <li>
                    <span>Residence:</span> Berlin
                  </li>
                  <li>
                    <span>Addiction:</span> ☕️ (CAFÉ)
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-lg-6">
              <div className="right">
                <ul>
                  <li>
                    <span>Phone:</span>
                    <a href="tel:+4917664298047">+49 176 6429 8047</a>
                  </li>
                  <li>
                    <span>Email:</span>
                    <a href="mailto:eduardosanzb@gmail.com">
                      eduardosanzb@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
