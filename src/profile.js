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
    skills: ["React.Js, CSS, JS"],
    url: "https://brian-nelson10.github.io/react-portfolio/",
  },
  {
    id: "project3",
    name: "Project 3",
    skills: ["HTML, CSS, JS"],
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
    "Currently seeking those who can provide eyeball time, brain juice, lines of code, code improvements, raising an issue, asking a question, run the communication outside of the code repo, or even stump up some coin. Lets talk, Collaborate, and grab some coffee.",
  copyright: "Brian Nelson",
  contactUrl: "https://formspree.io/f/mbjbzvwl",
};

const social = {
  github: "https://github.com/brian-nelson10",
  instagram: "https://www.instagram.com/b_nel10/",
  linkedin: "https://www.linkedin.com/in/brian-nelson-6b915b11a/",
  resume: "src/components/assets/resume/brian.nelson.resume.pdf",
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
