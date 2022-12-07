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
    name: "React Portfolio",
    skills: ["React, CSS, JS"],
    url: "http://brian-nelson10.github.io/react-portfolio",
  },
  {
    id: "project2",
    name: "Now We're Cookin'",
    skills: ["HTML, CSS, JS"],
    url: "https://kristafrancis.github.io/now-were-cookin/",
  },
  {
    id: "project3",
    name: "ca-TOOL-ogue",
    skills: ["MongoDB, Express, React, Node, Material-UI"],
    url: "https://github.com/brian-nelson10/ca-tool-ogue-6.0",
  },
  {
    id: "project4",
    name: "code-it",
    skills: ["MongoDB, Express, React, Node, GraphQL"],
    url: "https://github.com/brian-nelson10/code-it",
  },
  {
    id: "project5",
    name: "Oh-Snap!",
    skills: ["React"],
    url: "https://brian-nelson10.github.io/oh-snap/#about",
  },
  {
    id: "project6",
    name: "The Missing Teeth Ecommerce Store",
    skills: ["MongoDB, Express, React, Node, GraphQL, Material-UI (In-Progress)"],
    url: "https://github.com/brian-nelson10/tmt-ecommerce-store",
  },
];

const section5Title = "Reach Out.";
const contact = {
  pitch:
    "Currently seeking those who can provide eyeball time, brain juice, lines of code, code improvements, raising an issue, asking a question, run the communication outside of the code repo, or just grab some coffee. ",
  copyright: "Brian Nelson",
  contactUrl: "https://formspree.io/f/mbjbzvwl",
};

const social = {
  github: "https://github.com/brian-nelson10",
  instagram: "https://www.instagram.com/b_nel10/",
  linkedin: "http://linkedin.com/in/brian-nelson-6b915b11a",
  
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
