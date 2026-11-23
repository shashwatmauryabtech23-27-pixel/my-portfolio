// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';


// Experience Section Logo's
import ibmLogo from './assets/company_logo/ibm_logo.png';
import codsoftLogo from './assets/company_logo/codsoft_logo.webp';

// Education Section Logo's
import lloydLogo from './assets/education_logo/logo-lloyd-greater-noida.webp';
import dppsLogo from './assets/education_logo/dpps_logo.png';

// Project Section Logo's
import webdevGenAILogo from "./assets/webdev-genai.png";
import syncflowLogo from "./assets/syncflow.png";
import aiStudyHubLogo from "./assets/ai-studyhub.png";
import wildlifeExplorerLogo from "./assets/wildlife-explorer.png";
import ticTacToeLogo from "./assets/tic-tac-toe.png";
import diceBattleLogo from "./assets/dice-battle.png";
import memoryCardLogo from "./assets/memory-card.png";


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
  {
    id: 0,
    img: ibmLogo,
    role: "PBEL - 6 Weeks Virtual Internship (Generative AI)",
    company: "IBM Developer Skills Network",
    date: "November 2025",
    desc: "Successfully completed and received a passing grade in a PBEL program equivalent to a 6-week virtual internship via FSP, focused on Generative AI and powered by IBM Developer Skills Network.",
    skills: [
      "Generative AI",
      "IBM Developer Skills Network",
    ],
  },

  {
    id: 1,
    img: codsoftLogo,
    role: "Java Programming Intern",
    company: "CodSoft",
    date: "July 2026 - August 2026",
    desc: "Successfully completed a 4-week virtual internship program in Java Programming at CodSoft. Worked on tasks and projects throughout the internship, demonstrating Java programming skills and making valuable contributions.",
    skills: [
      "Java",
      "Object-Oriented Programming",
      "Problem Solving",
      "Programming",
    ],
  },
];
  
  export const education = [
  {
    id: 0,
    img: lloydLogo,
    school: "Lloyd Institute of Engineering and Technology, Greater Noida",
    date: "2023 - Present",
    grade: "Pursuing | 4th Year",
    desc: "Currently pursuing B.Tech in Computer Science and Engineering. Building strong skills in Java, Data Structures & Algorithms, Web Development, React.js, Node.js, MongoDB, SQL, AI, and Cloud Technologies.",
    degree: "B.Tech - Computer Science & Engineering",
  },
  {
    id: 1,
    img: dppsLogo,
    school: "D.P. Public School, Prayag Street, Chayal, Prayagraj",
    date: "2020 - 2022",
    grade: "74%",
    desc: "Completed Senior School Certificate Examination (Class XII) from CBSE with Physics, Chemistry, Mathematics and Computer Science.",
    degree: "CBSE (XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: dppsLogo,
    school: "D.P. Public School, Prayag Street, Chayal, Prayagraj",
    date: "2018 - 2020",
    grade: "74%",
    desc: "Completed Secondary School Examination (Class X) from CBSE with Science and Computer Applications.",
    degree: "CBSE (X) - Science with Computer Applications",
  },
];
  
  export const projects = [
  {
    id: 0,
    title: "WebDev-GenAI",
    description:
      "An AI-powered career platform that analyzes resumes against job descriptions, generates job match scores, identifies skill gaps, and provides technical and behavioral interview preparation to help candidates prepare for job opportunities.",
    image: webdevGenAILogo,
    tags: ["React", "Node.js", "MongoDB", "Express", "Generative AI", "AI"],
    github: "https://github.com/shashwatmauryabtech23-27-pixel/WebDev-GenAI",
    webapp: "https://web-dev-gen-ai.vercel.app/login",
  },
  {
    id: 1,
    title: "SyncFlow",
    description:
      "A real-time collaborative coding platform designed for developers to create and join coding rooms, collaborate on code, and communicate through integrated collaboration features.",
    image: syncflowLogo,
    tags: ["React", "Node.js", "MongoDB", "Firebase", "LiveKit", "Code Editor"],
    github: "https://github.com/shashwatmauryabtech23-27-pixel/Syncflow",
    webapp: "https://syncflow-by-shashwat.netlify.app/",
  },
  {
    id: 2,
    title: "AI Study Hub",
    description:
      "An AI-powered study platform designed to support students in their learning journey with an interactive interface and Google authentication, bringing AI-powered study assistance into a single platform.",
    image: aiStudyHubLogo,
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "Google Auth"],
    github: "https://github.com/shashwatmauryabtech23-27-pixel/AI-StudyHub",
    webapp: "https://ai-studyhub-1-sln3.onrender.com",
  },
  {
    id: 3,
    title: "Wildlife Explorer",
    description:
      "An interactive wildlife exploration project designed to provide users with an engaging experience for discovering and exploring wildlife through a web-based interface.",
    image: wildlifeExplorerLogo,
    tags: ["JavaScript", "Web Development", "Frontend"],
    github: "https://github.com/shashwatmauryabtech23-27-pixel/Wildlife-Explorer",
    webapp: "",
  },
  {
    id: 4,
    title: "Tic-Tac-Toe Arena",
    description:
      "A browser-based Tic-Tac-Toe game featuring an interactive game interface where players can enjoy the classic strategic game.",
    image: ticTacToeLogo,
    tags: ["JavaScript", "HTML", "CSS", "Game Development"],
    github: "https://github.com/shashwatmauryabtech23-27-pixel/tic-tac-toe-arena",
    webapp: "",
  },
  {
    id: 5,
    title: "Dice Battle Game",
    description:
      "An interactive dice-based game built around random dice rolls and game logic, offering a fun and engaging gameplay experience.",
    image: diceBattleLogo,
    tags: ["JavaScript", "HTML", "CSS", "Game Development"],
    github: "https://github.com/shashwatmauryabtech23-27-pixel/Dice-Battle-Game",
    webapp: "",
  },
  {
    id: 6,
    title: "Memory Card Matching Game",
    description:
      "An interactive memory game where players flip cards and try to match pairs while testing their memory and concentration.",
    image: memoryCardLogo,
    tags: ["JavaScript", "HTML", "CSS", "Game Development"],
    github: "https://github.com/shashwatmauryabtech23-27-pixel/Memory-Card-Matching-Game",
    webapp: "",
  },
];