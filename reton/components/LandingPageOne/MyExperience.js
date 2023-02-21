import Link from "next/link";
import React from "react";

const MyExperience = ({ config }) => {
  return (
    <div id="experience" className="experience-area border-bottom ptb-100">
      <div className="common-right-text">
        <span>EXPERIENCE</span>
      </div>

      <div className="container">
        <div className="section-title">
          <span className="sub-title">MY EXPERIENCE</span>
          <h2 dangerouslySetInnerHTML={{ __html: config.title }}>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: config.description }}>
          </p>
        </div>

        <div className="experience-content">
          {
            config.rows.map(({ date, company, title, linkedin, description }, index) => (
              <div className="experience-inner" key={index}>
                <ul className="align-items-start">
                  <li>
                    <span>{date}</span>
                  </li>
                  <li>
                    <span>
                      {title},{" "}
                      <Link href={linkedin}>
                        <a target="_blank">{company}</a>
                      </Link>
                    </span>
                  </li>
                  {
                    typeof description === 'string' && (

                      <li dangerouslySetInnerHTML={{ __html: description }}>
                      </li>
                    )
                  }
                  {
                    typeof description !== 'string' &&
                    (<li>{description()}</li>)
                  }
                </ul>
              </div>

            ))
          }
        </div>
      </div>
    </div >
  );
};

export default MyExperience;
