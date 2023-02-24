import React from "react";

const WhatIDo = ({ config }) => {
  const defaultIconName = "flaticon-global";
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
              {items.map((row,i) => (

                <div key={i} className="col-sm-6 col-lg-6">
                  <div className="what-item container">
                    <i className={`${row?.icon ?? defaultIconName} icon`}></i>
                    <h3>
                      <a target="_blank">{row.title}</a>
                    </h3>
                    <p>
                      {row.description}
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
