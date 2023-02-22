import Link from "next/link";

const config = {
  Layout: {
    description: "Ave",
    title: "Mamador",
    title2: "Ave resume",
    twitter: "Ufff we",
  },
  Navbar: {
    cvLink:
      "https://raw.githubusercontent.com/eduardosanzb/eduardosanzb/master/cv.pdf",
  },
  MainBanner: {
    bigText: "AVE",
    firstName: "Jose Alberto",
    lastName: "Vera Vigil",
    description: `
    Hello I am a passionate Mechanical Engineer excited for innovation & technology.
     With 7+ years of profound and
      wide-ranging experience. Expert in product design and development in the automotive industry. 🇲🇽 🌮
    `,
    twitter: "AveVigil",
    linkedin: "https://www.linkedin.com/in/jose-vigil/",
    github: "AveVigil",
    clipboard: "npx eduardosanzb",
  },
  About: {
    title: "I'm from Mexico and I love CrossFit, philosophy, hiking & 🌮s",
    description: `
    I was born in '91 and grew up in Puebla, Mexico 🇲🇽.
    After I finished studying as an automotive design engineer, I landed a job with Volkswagen, one of the big guys in the car industry. 
    Then, I joined Lightyear's mission, where I helped develop the world's first long-range solar electric vehicle that's production-ready.
    `,
    residence: "Eindhoven",
    addiction: "☕️ (CAFÉ)",
    email: "a.ve.vigil@gmail.com",
  },
  WhatIDo: {
    rows: [
      [
        {
          title: "Web development",
          description:
            "Full stack dev specialized in react, react-native, node and go",
        },
        {
          title: "Software architecture",
          description: `
            Looking for a balance in speed, performance & scalability. The
            problem defines the pattern, 3factor, DDD, micro*, etc.
          `,
        },
      ],
      [
        {
          title: "Agile development",
          description: `
            Because the process matters, the ability to quickly iterate is
            the differentiator between innovation and staling
          `,
        },
        {
          title: "Testing",
          description: `
           a professional delivers working code. code that works. only
           through testing you can deliver confident code, professional
           code
          `,
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
        description: "<p>Part of the Live-Platform Team; delivering DevExp</p>",
      },
      {
        company: "Tilda",
        date: "2021 - 2021(closed)",
        title: "Lead Software Engineer",
        linkedin: "https://www.linkedin.com/company/tildahealth",
        description: "hola ssssoy perra",
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
    email: "a.ve.vigil@gmail.com",
    twitter: "AveVigil",
    linkedin: "https://www.linkedin.com/in/jose-vigil/",
    github: "AveVigil",
  },
};

export default config;
