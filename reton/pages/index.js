import React from "react";
import Navbar from "../components/LandingPageOne/Navbar";
import MainBanner from "../components/LandingPageOne/MainBanner";
import About from "../components/LandingPageOne/About";
import WhatIDo from "../components/LandingPageOne/WhatIDo";
import MyExperience from "../components/LandingPageOne/MyExperience";
import ContactForm from "../components/LandingPageOne/ContactForm";
import Footer from "../components/LandingPageOne/Footer";
import Image from "next/image";

const Index = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div className="main-area">
        <div className="main-left-img">
          <img src="/images/banner/banner-main1.webp" alt="Image" />
        </div>

        <div className="main-content">
          <MainBanner />
          <About />
          <WhatIDo />
          <MyExperience />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
