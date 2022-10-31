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

const section2title = "Objective";
const about = {
  paragraph:
    "Full Stack Web Developer with a background in Executive Level Management and a life-long dedication to learning. Has ability to learn and collaborate in rapidly changing environments and compositions. Effective at combining creativity and problem solving to develop user-friendly applications. Eager to tackle web development/design challenges to achieve lasting impacts on user experience. Perfect balance of technical and managerial skills stands him apart from the crowd.",
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
    name: "Project 1",
    skills: ["HTML, CSS, JS"],
    url: "",
  },
  {
    id: "project2",
    name: "Project 2",
    skills: ["HTML, CSS, JS"],
    url: "",
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

// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
  copyright: "",
  contactUrl: "",
};

const social = {
  github: "https://github.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  resume: "https://novoresume.com/",
};

export {
  animation,
  header,
  background,
  about,
  skillsBar,
  skillsBar2,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
