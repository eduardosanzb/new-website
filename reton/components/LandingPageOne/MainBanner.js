import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import bookmark from "react-useanimations/lib/copy";
import UseAnimations from "react-useanimations";

const MainBanner = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActive(false);
      }, 2000);
    }
  }, [active, setActive]);
  const copyAndAnimate = useCallback(() => {
    const el = document.createElement("input");
    el.value = "npx eduardosanzb";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setActive(true);
  }, [setActive]);

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
                <li>
                  <div className="stroke-hover-white d-flex align-items-center justify-content-around">
                    <UseAnimations
                      reverse={active}
                      animation={bookmark}
                      pathCss="stroke: #63a4f7;"
                      size={25}
                      onClick={copyAndAnimate}
                      render={(eventProps, animationProps) => (
                        <div
                          className="common-btn stroke-hover-white "
                          onClick={copyAndAnimate}
                          {...eventProps}
                        >
                          <span className="stroke-hover-white d-flex align-items-center justify-content-around">
                            npx eduardosanzb
                            <div {...animationProps} />
                          </span>
                        </div>
                      )}
                    />
                  </div>
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
