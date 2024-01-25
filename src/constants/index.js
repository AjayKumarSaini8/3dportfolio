import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  python,
  django,
  mysql,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
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
    title: "Data Science Enthusiast",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Python",
    icon: python,
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
    name: "Django",
    icon: django,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  }
];

const projects = [
  {
    name: "Discord Clone",
    description:
    "Web application that enables users to create and join servers, chat in text channels, and customize their profiles.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AjayKumarSaini8/discord_like_application",
  },
  {
    name: "Blog app",
    description:
      "Web application that enables users to create and join servers, chat in text channels, and customize their profiles.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AjayKumarSaini8/React-JS/tree/main/11blogapp",
  },
  {
    name: "Used Car Price Prediction",
    description:
      "web application to be able to predict used cars market value can help both buyers and sellers.",
    tags: [
      {
        name: "Jupyter",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AjayKumarSaini8/used-car-price-prediction.git",
  },
];

export { services, technologies, projects };