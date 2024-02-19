import Link from "next/link";

const config = {
  Layout: {
    description: "🇲🇽 Edu's",
    title: "Mexican Software engineer, focused on web technologies.",
    title2: "Eduardo's Bautista resume",
    twitter: "Eduardo's Bautista, come by if you are curious.",
  },
  Navbar: {
    cvLink:
      "https://raw.githubusercontent.com/eduardosanzb/eduardosanzb/master/cv.pdf",
  },
  MainBanner: {
    bigText: "EDUARDO",
    firstName: "Eduardo",
    lastName: "Sánchez Bautista",
    description: `
      Hello there! I'm a seasoned <span>Software Engineer</span> with a passion for turning ideas into reality. 
With over 8 years of hands-on experience, I specialize in creating robust web and mobile platforms. 
What sets me apart is my knack for balancing technical prowess with a practical mindset – whether it's diving deep into intricate details or taking strategic shortcuts when needed. 

My journey includes contributing to both startup ventures and established industry leaders. Let's team up and bring your innovative platforms to life! 🇲🇽 🌮
    `,
    twitter: "eduardosanzb",
    linkedin: "https://www.linkedin.com/in/eduardosanzb/",
    github: "eduardosanzb",
    clipboard: "npx eduardosanzb",
  },
  About: {
    title: "I'm from Mexico and I love 🌮 & coding<",
    description: `
      I was born in 1993 and grew up in Puebla, 🇲🇽. After graduating as
      a software engineer I decided to move to CDMX 🇲🇽 and later on
      Berlin 🇩🇪 the land of techno & cold weather. I freaking 💖 it.
      <i>
        (Yeah I know, I'm a city boy and I took the midnight train goin'
        to kotti)
      </i>
    `,
    residence: "Berlin (Moabit)",
    addiction: "☕️ (CAFÉ)",
    email: "eduardosanzb@gmail.com",
  },
  WhatIDo: {
    rows: [
      [
        {
          title: "Web Development",
          description:
            "Specialized in full-stack development using React, React Native, Node, and Go.",
        },
        {
          title: "Software Architecture",
          description:
            "Balancing speed, performance, and scalability. I adopt patterns like 3factor, DDD, micro*, etc.",
          icon: "bx bxs-mobile bx-tada",
        },
      ],
      [
        {
          title: "Agile Development",
          description:
            "Prioritizing the process because quick iterations differentiate innovation from stagnation.",
          icon: "bx bxs-analyse bx-spin",
        },
        {
          title: "Testing",
          description:
            "A professional delivers working and confident code through rigorous testing practices.",
          icon: "bx bxs-check-shield",
        },
      ],
      [
        {
          title: "Product-Oriented Engineering",
          description:
            "Passionate about crafting solutions that align with product goals, blending creativity with technical expertise.",
          icon: "bx bxs-rocket",
        },
      ],
    ],
  },
  MyExperience: {
    title: "I Have <span>8+</span> Years Of Experience",
    description: `
            Proven ability to adapt & deliver under stressful circumstances
            while maintaining the team spirit. Always learning and in pursuit of
            self growth.
    `,
    rows: [
      {
        company: "Unity",
        date: "2022 - Present",
        title: "Senior Software Engineer",
        linkedin: "https://www.linkedin.com/company/unity/",
        // TODO: Add more
        description: `
    <p>As a Senior Software Engineer at Unity, I am an integral part of the Services Foundation Team, contributing to the advancement of developer experience (DevExp).</p>
    <p>In my current role, I specialize in the API Gateway, where I tackle intricate challenges at scale. I thrive on solving complex problems and optimizing system performance.</p>
    <p>Tools and technologies in my toolkit include Kubernetes (k8s), GraphQL, Go, Node.js, Istio, Envoy, C++, CI/CD practices, and Terraform. These tools empower me to create robust solutions that meet Unity's high standards for innovation and scalability.</p>
  `,
      },

      {
        company: "Tilda",
        date: "2021 - 2021(closed)",
        title: "Lead Software Engineer",
        linkedin: "https://www.linkedin.com/company/tildahealth",
        description: () => (
          <div>
            <p>
              Finally!!! Serverless +
              <Link href="https://hasura.io/">
                <a target="_blank"> Hasura</a>
              </Link>
              + NextJS + K8s + Knative
            </p>
            <p>A dream stack!!!</p>
          </div>
        ),
      },
      {
        company: "The Boston Consulting Group",
        date: "2018 - 2021",
        title: "Lead Engineer",
        linkedin: "https://www.linkedin.com/company/bcg-platinion",
        description: () => (
          <div>
            <p>
              Multiple projects, each of them is like starting a new job! React,
              react, react and more react (ofc <strong>typescript</strong>).
              <Link href="https://hasura.io/">
                <a target="_blank"> Hasura</a>
              </Link>
              💘 , node, go, terraform and a lot of other toys!
            </p>
          </div>
        ),
      },
      {
        company: "Optilyz",
        date: "2017 - 2018",
        title: "Senior Fullstack Developer",
        linkedin: "https://www.linkedin.com/company/optilyz",
        description: () => (
          <p>
            A cool marketing platform, manipulating huge amounts of csv using
            node (lots of stream/Transform) and a very cool react+redux+sagas{" "}
            <span>`fork()`</span>
          </p>
        ),
      },
      {
        company: "Generation (from McKinsey & Company)",
        date: "2016 - 2017",
        title: "Software Engineer",
        linkedin: "https://www.linkedin.com/company/generationorg",
        description: () => (
          <p>
            Started a non-profit program via McKinsey & Company social
            initiative. Cross working with Strategic consultants, Experts in
            education, Teachers and Students to develop an educational platform
            with a microservices architecture. We used node.js & react
          </p>
        ),
      },
      {
        company: "Lucasian Labs México S.C.",
        date: "2016",
        title: "Software Engineer Junior",
        linkedin: "https://www.linkedin.com/company/lucasian-labs-mexico",
        description: () => (
          <p>
            A boutique enterprise & governmental software company with offices
            in Mexico city. Mostly angular.js & Java EE with springboot
          </p>
        ),
      },
      {
        company: "Weetsi Solutions",
        date: "2015",
        title: "Software Engineer Internship",
        linkedin: "https://www.linkedin.com/company/weetsi-com/about/",
        description: () => (
          <p>
            Enterprise and consumer mobile app development company. We used
            ionic with angular.js & firebase
          </p>
        ),
      },
    ],
  },
  ContactForm: {
    email: "eduardosanzb@gmail.com",
    twitter: "eduardosanzb",
    linkedin: "https://www.linkedin.com/in/eduardosanzb/",
    github: "eduardosanzb",
  },
};

export default config;
