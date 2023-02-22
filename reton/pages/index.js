import React from "react";
import Navbar from "../components/LandingPageOne/Navbar";
import MainBanner from "../components/LandingPageOne/MainBanner";
import About from "../components/LandingPageOne/About";
import WhatIDo from "../components/LandingPageOne/WhatIDo";
import MyExperience from "../components/LandingPageOne/MyExperience";
import ContactForm from "../components/LandingPageOne/ContactForm";
import Footer from "../components/LandingPageOne/Footer";
import Eduardo from "../eduardo.config";
import Ave from "../ave.config";

const config = process.env.WHO === "Ave" ? Ave : Ave;
const imgUrl = process.env.WHO === "Ave" ? "ave" : "banner-main1";

console.log(config);
console.log(imgUrl);
const Index = () => {
  return (
    <React.Fragment>
      <Navbar config={config.Navbar} />

      <div className="main-area">
        <div className={"main-left-img " + imgUrl}>
          <img src={`/images/banner/${imgUrl}.webp`} alt="Image" />
        </div>

        <div className="main-content">
          <MainBanner config={config.MainBanner} />
          <About config={config.About} />
          <WhatIDo config={config.WhatIDo} />
          <MyExperience config={config.MyExperience} />
          <ContactForm config={config.ContactForm} />
          <Footer config={config.Footer} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
