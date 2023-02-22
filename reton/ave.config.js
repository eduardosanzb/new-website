import Link from "next/link";

const config = {
  Layout: {
    description: "José Alberto Vera Vigil",
    title: "Resume",
    title2: "Ave Resume",
    twitter: "Ufff we",
  },
  Navbar: {
    cvLink:
      "https://raw.githubusercontent.com/eduardosanzb/eduardosanzb/master/cv.pdf",
  },
  MainBanner: {
    bigText: "ALBERTO",
    firstName: "José Alberto",
    lastName: "Vera Vigil",
    description: `
    I am a passionate Mechanical Engineer excited for innovation & technology.
     With 7+ years of profound and
      wide-ranging experience. Expert in product design and development in the automotive industry.
    `,
    linkedin: "https://www.linkedin.com/in/jose-vigil/",
    github: "AveVigil",
    clipboard: "npx AveVigil",
  },
  About: {
    title: "I'm from Mexico and I love CrossFit, reading, hiking & 🌮",
    description: () =>(
    <p>
        I was born in 1991 and grew up in Puebla, Mexico.
        After I finished studying as an automotive design engineer, I started working on projects for Volkswagen.
        Then, I joined Lightyear's mission, where I helped develop the world's first long-range solar electric vehicle that's production-ready.
      </p><p>
          Outside of work you can find me in the GYM or at CorssFit competitions.
        </p><p>
          That's me doing (and almost dying in the process) a 140 kilos clean.
        </p>
    residence: "Eindhoven",
    addiction: "☕️ (ESPRESSO)",
    email: "a.ve.vigil@gmail.com",
    ),
  },
  WhatIDo: {
    rows: [
      [
        {
          title: "Product Development",
          description:
            "Automotive components development, from concept to production.",
        },
        {
          title: "CAD Design",
          description: `
            3D modeling & 2D drawings in CATIA V5 and 3DExperience.
          `,
        },
      ],
      [
        {
          title: "Agile Development",
          description: `
            Because the process matters, the ability to quickly iterate is
            the differentiator between innovation and staling.
          `,
        },
        {
          title: "Testing",
          description: `
           A professional delivers working code. code that works. only
           through testing you can deliver confident code, professional
           code
          `,
        },
      ],
    ],
  },
  MyExperience: {
    title: "I Have <span>7+</span> Years Of Experience",
    description: `
            Proven ability to adapt & deliver under stressful circumstances
            while maintaining the team spirit. Always learning and in pursuit of
            self growth.
    `,
    rows: [
      {
        company: "Lightyear",
        date: "2018 - Present",
        title: "Mechanical Engineer",
        linkedin: "https://lightyear.one/",
        // TODO: Add more
        description: "<p> Part of the <strong>Thermal Management System.</strong> Delivering the <i>Front Hex Unit</i> starting from scratch, while working within a multidisciplinary & driven team. Built several driving prototyes <strong>(Lightyear P0, Lightyear VP, Lightyear DV1-16).</strong> </p>",
      },
      {
        company: "EDAG Aguascalientes",
        date: "2018",
        title: "Mechanical Engineer",
        linkedin: "https://mx.edag.com/en/",
        description: () => (
          <p>
            Development of fastening and positioning devices for the integration of the new Mercedes-Benz A-Class 
            production line into the current Infiniti QX50 production line.
          </p>
        ),
      },
      {
        company: "EDAG Puebla",
        date: "2015 - 2018",
        title: "CAD Design Engineer",
        linkedin: "https://mx.edag.com/en/",
        description: () => (
            <p>
             Design and development of the <strong>Doors-in-White</strong> for the new Jetta A7 platform and the Passat GP2 facelift.
             Workstay in Wolfsburg, Germany during 2015-2016. 
            </p>
        ),
      },
    ],
  },
  ContactForm: {
    email: "a.ve.vigil@gmail.com",
    linkedin: "https://www.linkedin.com/in/jose-vigil/",
    github: "AveVigil",
  },
};

export default config;
