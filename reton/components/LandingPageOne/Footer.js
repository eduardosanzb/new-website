import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <React.Fragment>
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-item">
            <p>Berlin, Germany {currentYear}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
