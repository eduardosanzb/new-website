import React from "react";

const About = ({ config }) => {
  return (
    <div id="about" className="about-area border-bottom ptb-100">
      <div className="common-right-text">
        <span>ABOUT</span>
      </div>

      <div className="container">
        <div className="about-content">
          <div className="section-title">
            <span className="sub-title">ABOUT ME</span>
            <h2>{config.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: config.description }}>
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-6">
              <div className="left">
                <ul>
                  {
                    config.residence && (

                      <li>
                        <span>Residence:</span> {config.residence}
                      </li>
                    )
                  }
                  {
                    config.addiction && (

                      <li>
                        <span>Addiction:</span>{config.addiction}
                      </li>
                    )
                  }
                </ul>
              </div>
            </div>

            {config.email && (
              <div className="col-sm-6 col-lg-6">
                <div className="right">
                  <ul>
                    <li>
                      <span>Email:</span>
                      <a href="mailto:eduardosanzb@gmail.com">
                        {config.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
