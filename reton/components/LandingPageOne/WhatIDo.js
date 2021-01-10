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
                full stack dev specialized in react, react-native, node and go.
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-6">
            <div className="what-item">
              <i className="flaticon-smartphone icon"></i>
              <h3>
                <a target="_blank">Software design & architecture</a>
              </h3>
              <p>
                I'm always pursuing clean code & clean architecture!{" "}
                <strong>interfaces for all!!!</strong>
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-6">
            <div className="what-item">
              <i className="flaticon-paintbrush icon"></i>
              <h3>
                <Link href="/service-details">
                  <a target="_blank">Agile development</a>
                </Link>
              </h3>
              <p>
                Please keep your tasks in the board{" "}
                <strong>UP TO DATE!!</strong>
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-6">
            <div className="what-item">
              <i className="flaticon-branding icon"></i>
              <h3>
                <Link href="/service-details">
                  <a target="_blank">Testing</a>
                </Link>
              </h3>
              <p>TDD FTW</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
