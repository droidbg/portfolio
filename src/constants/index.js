import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  tw,
  reactcarousel,
  foodpeek,
  movieBooking,
  nokia,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Node Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Thoughtworks",
    icon: tw,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Node.js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Worked on System Design & Architecture of the portal and implemented various features like real-time report, multiple filtering on candidates and jobs, sorting and pagination.",
      "Improved recruiter and candidate engagement by 90% with a responsive redesign of client application",
      "Integrated Keycloak and developed RESTful APIs for user management functionalities, including user creation, deletion, data retrieval, and temporary password resets; enhanced application security by 40% and reduced manual account management.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Implemented notification service from scratch, responsible for managing and delivering notifications to users, including email, whatsapp, storing templates and logging in db.",
      "Migrated 22k+ client data from old platform to new portal.",
    ],
  },
  {
    title: "Software Intern",
    company_name: "Nokia",
    icon: nokia,
    iconBg: "#E6DEDD",
    date: "May 2021 - June 2022",
    points: [
      "Developed and Maintained new features in internal website.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Identified and reduced code smells in the internal website, improving code quality, maintainability, and performance.",
    ],
  },
];

const testimonials = [
  {
    content:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    content:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    content:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie Booking System",
    description:
      "Developed a Movie booking Website with admin and user panel that allows users to search, book, and manage movie booking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: movieBooking,
    source_code_link: "https://github.com/droidbg/",
  },
  {
    name: "React Carousel",
    description:
      "Developed and published an NPM package for a highly customizable, responsive card slider/carousel component, enhancing user interface interactivity. ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: reactcarousel,
    source_code_link: "https://www.npmjs.com/package/react-carousel-latest",
  },
  {
    name: "Food Peek",
    description:
      "Web application that enables users to search for different restaurants, top-rated restaurants, thier food menu.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: foodpeek,
    source_code_link: "https://github.com/droidbg/FoodPeek",
  },
];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

const projectsHeading =
  "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies,and manage projects effectively.";

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  projectsHeading,
};
