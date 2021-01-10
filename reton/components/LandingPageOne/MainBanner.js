import React, { useEffect, useState } from "react";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

const COOL_WORDS = ["tech", "Edu", "Innovation"];

const MainBanner = () => {
  const [theWordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((currentIndex) => {
        if (currentIndex >= COOL_WORDS.length - 1) {
          return 0;
        }

        return currentIndex + 1;
      });
    }, 3000);

    return () => clearInterval(id);
  }, [setWordIndex]);
  return (
    <div id="home" className="banner-area border-bottom">
      <div className="common-right-text">
        <span>EDUARDO</span>
      </div>

      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="banner-content">
              <h1>Eduardo Bautista</h1>
              <p>
                Hello I am a passionate <span>Software Engineer</span> excited
                for innovation & technology. With 5+ years of profound and
                wide-ranging experience. Expert in developing web & mobile
                solutions. 🇲🇽 🌮
              </p>

              <div className="banner-btn-area">
                <AnchorLink className="common-btn" href="#contact">
                  Contact With Me
                </AnchorLink>
              </div>

              <ul>
                <li>
                  <Link href="https://twitter.com/eduardosanzb">
                    <a target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/eduardosanzb/">
                    <a target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="https://github.com/eduardosanzb">
                    <a target="_blank">
                      <i className="bx bxl-github"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
