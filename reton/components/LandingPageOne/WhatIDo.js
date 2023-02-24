import React from "react";

const WhatIDo = ({ config }) => {
  const iconName = "bx bxs-moile bx-tada icon"
  return (
    <div id="whatido" className="what-area border-bottom pt-100 pb-70">
      <div className="common-right-text">
        <span>SERVICE</span>
      </div>

      <div className="container">
        <div className="section-title">
          <span className="sub-title">WHAT I DO</span>
          <h2>Here Are Some Skills</h2>
        </div>

        {
          config.rows.map((items, index) => (
            <div className="row" key={index}>
              {items.map((a,i) => (

                <div key={i} className="col-sm-6 col-lg-6">
                  <div className="what-item container">
                    <i className={`what-item ${iconName}`}></i>
                    // <i className="flaticon-global icon"></i>
                    <h3>
                      <a target="_blank">{a.title}</a>
                    </h3>
                    <p>
                      {a.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default WhatIDo;
