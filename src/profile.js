// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  once: false,
};

const header = {
  name: "Hi, I'm Brian Nelson",
};
const background = {
  type: "Particle",
};

const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "React",
    faClass: "fab fa-react",
  },
];
  const skillsBar2 = [
  {
    name: "Node",
    faClass: "fab fa-node",
  },
  {
    name: "Express",
    faClass: "fa fa-e",
  },
  {
    name: "MongoDB",
    faClass: "fa fa-leaf",
  },
  {
    name: "GitHub",
    faClass: "fa fa-github",
  },
];

const section3Title = "Projects";
const projects = [
  {
    id: "project1",
    name: "Now We're Cookin'",
    skills: ["HTML, CSS, JS"],
    url: "",
  },
  {
    id: "project2",
    name: "React Portfolio",
    skills: ["React, CSS, JS"],
    url: "",
  },
  {
    id: "project3",
    name: "code-it",
    skills: ["MongoDB, Express, React, Node, GraphQL"],
    url: "",
  },
  {
    id: "project4",
    name: "Project 4",
    skills: ["HTML, CSS, JS"],
    url: "",
  },
  {
    id: "project5",
    name: "Project 5",
    skills: ["HTML, CSS, JS"],
    url: "",
  },
  {
    id: "project6",
    name: "Project 6",
    skills: ["HTML, CSS, JS"],
    url: "",
  },
];

const section5Title = "Drop A Line.";
const contact = {
  pitch:
    "Currently seeking those who can provide eyeball time, brain juice, lines of code, code improvements, raising an issue, asking a question, run the communication outside of the code repo, or just grab some coffee. ",
  copyright: "Brian Nelson",
  contactUrl: "https://formspree.io/f/mbjbzvwl",
};

const social = {
  github: "https://github.com/brian-nelson10",
  slack: "https://slack.com",
  linkedin: "http://linkedin.com/in/brian-nelson-6b915b11a",
  resume: "../../assets/resume/brian.nelson.resume.pdf",
};

export {
  animation,
  header,
  background,
  skillsBar,
  skillsBar2,
  projects,
  contact,
  social,
  section3Title,
  section5Title,
};
