import Link from "next/link";
import React from "react";

const MyExperience = () => {
  return (
    <div className="experience-area border-bottom ptb-100">
      <div className="common-right-text">
        <span>EXPERIENCE</span>
      </div>

      <div className="container">
        <div className="section-title">
          <span className="sub-title">MY EXPERIENCE</span>
          <h2>
            I Have <span>5+</span> Years Of Experience
          </h2>
          <p>
            Proven ability to adapt & deliver under stressful circumstances
            while maintaining the team spirit. Always learning and in pursuit of
            self growth.
          </p>
        </div>

        {/* BCG  */}
        <div className="experience-content">
          <div className="experience-inner">
            <ul className="align-items-start">
              <li>
                <span>2018-2021</span>
              </li>
              <li>
                <span>
                  Lead Engineer,{" "}
                  <Link href="https://www.linkedin.com/company/tildahealth/">
                    <a target="_blank">Tilda</a>
                  </Link>
                </span>
              </li>
              <li>
                <p>
                  Finally!!! Serverless +{" "}
                  <Link href="https://hasura.io/">
                    <a target="_blank"> Hasura</a>
                  </Link>{" "}
                  + NextJS + K8s + Knative
                </p>
                <p>A dream stack!!!</p>
              </li>
            </ul>
          </div>

          {/* BCG  */}
          <div className="experience-inner">
            <ul className="align-items-start">
              <li>
                <span>2018-2021</span>
              </li>
              <li>
                <span>
                  Lead Engineer,{" "}
                  <Link href="https://bcgplatinion.com/">
                    <a target="_blank">BCG Platinion</a>
                  </Link>
                </span>
              </li>
              <li>
                <p>
                  Multiple projects, each of them is like starting a new job!
                  React, react, react and more react (ofc{" "}
                  <strong>typescript</strong>).
                  <Link href="https://hasura.io/">
                    <a target="_blank"> Hasura</a>
                  </Link>
                  💘 , node, go, terraform and a lot of other toys!
                </p>
              </li>
            </ul>
          </div>

          {/* Optilizy  */}
          <div className="experience-inner">
            <ul className="align-items-start">
              <li>
                <span>2017-2018</span>
              </li>
              <li>
                <span>
                  Fullstack Engineer,{" "}
                  <Link href="https://optilyz.com/">
                    <a target="_blank">optilyz</a>
                  </Link>
                </span>
              </li>
              <li>
                <p>
                  A cool marketing platform, manipulating huge amounts of csv
                  using node (lots of stream/Transform) and a very cool
                  react+redux+sagas <span>`fork()`</span>
                </p>
              </li>
            </ul>
          </div>

          <div className="experience-inner">
            <ul className="align-items-start align-items-start">
              <li>
                <span>2016-2017</span>
              </li>
              <li>
                <span>
                  Software Engineer,{" "}
                  <Link href="https://www.mckinsey.org/">
                    <a target="_blank">McKinsey & Company Social Initiative</a>
                  </Link>
                </span>
              </li>
              <li>
                <p>
                  A educational platform with a microservices architecture. We
                  used node.js & react
                </p>
              </li>
            </ul>
          </div>

          <div className="experience-inner">
            <ul className="align-items-start align-items-start">
              <li>
                <span>2016</span>
              </li>
              <li>
                <span>
                  Software Engineer Jr,{" "}
                  <Link href="http://www.lucasianmexico.com/">
                    <a target="_blank">Lucasian Labs México S.C. </a>
                  </Link>
                </span>
              </li>
              <li>
                <p>
                  A boutique enterprise & governmental software company with
                  offices in Mexico city. Mostly angular.js & Java EE with
                  springboot
                </p>
              </li>
            </ul>
          </div>
          <div className="experience-inner">
            <ul className="align-items-start align-items-start">
              <li>
                <span>2015</span>
              </li>
              <li>
                <span>
                  Software Engineer Internship,{" "}
                  <Link href="https://www.linkedin.com/company/weetsi-com/about/">
                    <a target="_blank">Weetsi Solutions</a>
                  </Link>
                </span>
              </li>
              <li>
                <p>
                  Enterprise and consumer mobile app development company. We
                  used ionic with angular.js & firebase
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
