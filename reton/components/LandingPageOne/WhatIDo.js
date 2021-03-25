import React from "react";
import Link from "next/link";

const WhatIDo = () => {
  return (
    <div className="what-area border-bottom pt-100 pb-70">
      <div className="common-right-text">
        <span>SERVICE</span>
      </div>

      <div className="container">
        <div className="section-title">
          <span className="sub-title">WHAT I DO</span>
          <h2>Here Are Some Skills</h2>
        </div>

        <div className="row">
          <div className="col-sm-6 col-lg-6">
            <div className="what-item container">
              <i className="flaticon-global icon"></i>
              <h3>
                <a target="_blank">Web development</a>
              </h3>
              <p>
                Full stack dev specialized in react, react-native, node and go
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-6">
            <div className="what-item">
              <i className="bx bxs-mobile bx-tada icon"></i>

              <h3>
                <a target="_blank">Software architecture</a>
              </h3>
              <p>
                Looking for a balance in speed, performance & scalability. The
                problem defines the pattern, 3factor, DDD, micro*, etc.
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-6">
            <div className="what-item">
              <i className="bx bxs-analyse bx-spin icon"></i>
              <h3>
                <a target="_blank">Agile development</a>
              </h3>
              <p>
                Because the process matters, the ability to quickly iterate is
                the differentiator between innovation and staling
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-6">
            <div className="what-item">
              <i className="bx bxs-check-shield icon"></i>
              <h3>
                <a target="_blank">Testing</a>
              </h3>
              <p>
                A professional delivers working code. Code that works. Only
                through testing you can deliver confident code, professional
                code
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
