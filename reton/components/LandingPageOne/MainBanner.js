import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import bookmark from "react-useanimations/lib/copy";
import UseAnimations from "react-useanimations";

const MainBanner = ({ config }) => {
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
    el.value = config.clipboard;
    document.body.appendChild(el);
    el.select();
    // TODO update this is deprecated
    document.execCommand("copy");
    document.body.removeChild(el);
    setActive(true);
  }, [setActive]);

  return (
    <div id="home" className="banner-area border-bottom">
      <div className="common-right-text" style={{ top: 300, right: -250 }}>
        <span>{config.bigText}</span>
      </div>

      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="banner-content">
              <h1>
                {config.firstName} <br />
                {config.lastName}
              </h1>
              <p dangerouslySetInnerHTML={{ __html: config.description }}>
              </p>

              <ul>
                {config.twitter && (< li >
                  <Link href={`https://twitter.com/${config.twitter}`}>
                    <a target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </Link>
                </li>)}
                {
                  config.linkedin && (
                    <li>
                      <Link href={config.linkedin}>
                        <a target="_blank">
                          <i className="bx bxl-linkedin"></i>
                        </a>
                      </Link>
                    </li>
                  )
                }
                {
                  config.github && (
                    <li>
                      <Link href="https://github.com/eduardosanzb">
                        <a target="_blank">
                          <i className="bx bxl-github"></i>
                        </a>
                      </Link>
                    </li>

                  )
                }

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
                            {config.clipboard}
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
    </div >
  );
};

export default MainBanner;
