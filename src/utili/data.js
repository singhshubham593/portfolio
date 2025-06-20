import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3,
    FaLinkedin,
} from "react-icons/fa";

import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql, SiFirebase, SiRedux,SiReactquery,SiIntellijidea  } from "react-icons/si";
import { 
    VscVscode,
    VscCommentUnresolved,
    VscTerminalPowershell,
 } from "react-icons/vsc";
import { FaGitAlt, FaXTwitter, FaDribbble ,FaGithub } from "react-icons/fa6";
import { MdGroups3} from "react-icons/md";

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png"; 
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";

export const MENU_LINKS = [
    { id: "01", label: "Home", offset:-100, to: "hero" },
    { id: "02", label: "Skills", offset:-80, to: "skills" },
    { id: "03", label: "About Me", offset:-80, to: "about" },
    { id: "04", label: "Project", offset:-80, to: "projects" },
    { id: "05", label: "Contact", offset:-80, to: "contact" },
];

export const STATS = [
    { id: "01", count: "01", label: 'Years of \n Experience' },
    {id: "02", count: "03", label:'Certifications \nEarned'},
    { id: "03", count: "7", label: 'Projects \nCompleted'},
];
    
export const SKILL_TABS = [
    
    { id: "01", label: "All", value: "all"},
    {id: "02", label: "Frontend", value: "frontend" },
    { id: "03", label: "Backend", value: "backend"},
    {id: "04", label: "Tools", value: "tools"},
    { id: "05", label: "Skills", value: "soft-skills"},
];

export const SKILLS = [

    {
    id: "01",
    icon: FaReact,
    skill: "React JS",
    progress: 90,
    type: "frontend",
    description:
        "Experienced in building scalable, component-driven web applications using React.js. Proficient in state management, hooks, and lifecycle methods.",
    },
    {
        id: "02",
        icon: FaHtml5,
        skill: "HTML",
        progress: 90,
        type: "frontend",
        description:
            "Expert in structuring web content using HTML5. Proficient in semantic markup, accessibility standards, and SEO best practices.",
    },
    {
        id: "03",
        icon: FaCss3,
        skill: "CSS",
        progress: 70,
        type: "frontend",
        description:
            "Skilled in styling web applications using CSS3. Proficient in responsive design, Flexbox, Grid, and CSS preprocessors.",
    },
    {
        id: "04",
        icon: BiLogoJavascript,
        skill: "JavaScript",
        progress: 80,
        type: "frontend",
        description:
            "Proficient in JavaScript ES6+ for building interactive web applications. Experienced with asynchronous programming, DOM manipulation, and event handling.",
    },
    {
        id: "05",
        icon: FaNodeJs,
        skill: "Node.JS",
        progress: 90,
        type: "backend",
        description:
            "Experienced in building server-side applications using Node.js. Proficient in RESTful APIs, middleware, and server management.",
    }, 
    {
        id: "06",
        icon: SiExpress,
        skill: "Express.JS",
        progress: 80,
        type: "backend",
        description:
            "Express.js is a minimal and flexible Node.js web framework for building APIs and web apps.It simplifies routing, middleware integration, and server-side logic handling.",
    }, 
    {
        id: "07",
        icon: SiMysql,
        skill: "SQL",
        progress: 70,
        type: "backend",
        description:
            "Skilled in relational database management using SQL. Proficient in SQL queries, joins, and database design.",
    },
    {
        id: "08",
        icon: SiMongodb,
        skill: "MongoDB",
        progress: 70,
        type: "backend",
        description:
            "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.It’s ideal for applications needing scalability, schema flexibility, and fast data access.",
    }, 
    {
        id: "09",
        icon: SiFirebase,
        skill: " Firebase",
        progress: 70,
        type: "backend",
        description:
            "Firebase is a platform by Google offering backend services like real-time database, authentication, and hosting.It helps developers quickly build and deploy secure, full-featured applications.",
    }, 
    {
      id:"10",
      icon : FaGitAlt,
      skill : 'Git',
      progress : 90,
      type : 'tools',
      description :
        'Proficient in version control using Git. Experienced with branching strategies, pull requests, and collaboration workflows.'
    },
    {
      id:"11",
      icon : SiRedux,
      skill : 'Redux Toolkit',
      progress : 70,
      type : 'frontend',
      description :
        'a popular state management library for JavaScript applications. It provides helpful utilities and best practices to streamline Redux development, making it easier and more efficient.'
    },
    {
      id:"12",
      icon : SiReactquery,
      skill : 'TanStack Query',
      progress : 70,
      type : 'frontend',
      description :
        'it is a collection of high-quality open-source libraries designed for modern frontend developmen.'
    },
    {
      id:"13",
      icon : FaGithub,
      skill : 'Github',
      progress : 90,
      type : 'tools',
      description :
        'GitHub is a cloud-based platform for version control using Git, enabling collaboration and code management.It supports repositories, pull requests, issues, and CI/CD workflows for modern development.'
    },
    {
      id:"14",
      icon : VscVscode,
      skill : 'VSCode',
      progress : 90,
      type : 'tools',
      description :
        ' VS Code is a lightweight, open-source code editor developed by Microsoft with rich extension support.It offers features like IntelliSense, debugging, Git integration, and terminal acces.'
    },
    {
      id:"15",
      icon : SiIntellijidea ,
      skill : 'Intellij IDEA',
      progress : 90,
      type : 'tools',
      description :
        'IntelliJ IDEA is a powerful IDE developed by JetBrains, widely used for Java and other JVM languages.It offers smart code assistance, advanced refactoring, and built-in developer tools.'
    },
];

export const ABOUT_ME = {

    content: "I'm a passionate Frontend Developer with a strong foundation in building responsive, user-friendly web applications. I have a keen eye for design and a commitment to writing clean, maintainable code. My goal is to create seamless user experiences that not only meet but exceed client expectations. I thrive in collaborative environments and am always eager to learn new technologies and improve my skills.",
    
    socialLinks: [
         
        {id: "01", label: "Twitter", icon: FaXTwitter, link: "#" },
        {id: "02", label: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/shubham-singh-a9889b220/" },
        {id: "03", label: "Github", icon: FaGithub, link: "https://github.com/singhshubham593" }

    ], 
    
    email: "shubhamhai593@gmail.com",
    phone: "9330789940",
    website: "https://www.linkedin.com/in/shubham-singh-a9889b220/",
};

export const PROJECTS = [
    {
        id: 1,
        title:
            " Built a Gemini AI Clone using React.js and Tailwind CSS, featuring a responsive chatbot interface with clean modular component architecture.",
        image: PROJECT_IMG_6,
        tags: ["React", "Tailwind CSS","Gemini API"],
        link: "https://geminishubh.netlify.app/",
    },
    {
        id: 2,
        title:
            "This is my personal portfolio website built to showcase my skills, projects, and resume using modern web technologies.",
        image: PROJECT_IMG_2,
        tags: ["React", "Tailwind CSS"],
        link: "https://github.com/singhshubham593/portfolio",
    },
    {
        id: 3,
        title: 
            "EduStore is a web platform that provides semester papers, interview questions, and DSA practice resources to help students prepare for exams and placements",
        image: PROJECT_IMG_3,
        tags: ["React", "Tailwind Css", "Emailjs","Dynamic Routing"],
        link: "https://github.com/singhshubham593/edustore",
    },
    {
        id: 4,
        title:
            " The Adventure website is designed to provide information about various adventurous activities and destinations.",
        image: PROJECT_IMG_4,
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/singhshubham593/adventure?tab=readme-ov-file",
    },
    {
        id: 5,
        title:
            "A responsive, single-page React Dashboard UI built using React, JavaScript, and Tailwind CSS.It includes sidebar navigation, a sortable/filterable data table, loading skeletons, and dummy routing.",
        image: PROJECT_IMG_5,
        tags: ["React", "Tailwind CSS"],
        link: "https://recdashboard.netlify.app/",
    },
    {
        id: 6,
        title:
            "web app that helps users track and improve their DSA practice by categorizing problems and visualizing progress.",
        image: PROJECT_IMG_1,
        tags: ["React", "Tailwind CSS"],
        link: "https://dsa-tracker-kappa.vercel.app/",
    },
    {
        id: 7,
        title:
            " Built a Gemini AI Clone using React.js and Tailwind CSS, featuring a responsive chatbot interface with clean modular component architecture.",
        image: PROJECT_IMG_6,
        tags: ["React", "Tailwind CSS","Gemini API"],
        link: "https://geminishubh.netlify.app/",
    },
    {
        id: 8,
        title:
            "This is my personal portfolio website built to showcase my skills, projects, and resume using modern web technologies.",
        image: PROJECT_IMG_2,
        tags: ["React", "Tailwind CSS"],
        link: "https://github.com/singhshubham593/portfolio",
    },
    {
        id: 9,
        title: 
            "EduStore is a web platform that provides semester papers, interview questions, and DSA practice resources to help students prepare for exams and placements",
        image: PROJECT_IMG_3,
        tags: ["React", "Tailwind Css", "Emailjs","Dynamic Routing"],
        link: "https://github.com/singhshubham593/edustore",
    },
    {
        id: 10,
        title:
            " The Adventure website is designed to provide information about various adventurous activities and destinations.",
        image: PROJECT_IMG_4,
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/singhshubham593/adventure?tab=readme-ov-file",
    },
    {
        id: 11,
        title:
            "A responsive, single-page React Dashboard UI built using React, JavaScript, and Tailwind CSS.It includes sidebar navigation, a sortable/filterable data table, loading skeletons, and dummy routing.",
        image: PROJECT_IMG_5,
        tags: ["React", "Tailwind CSS"],
        link: "https://recdashboard.netlify.app/",
    },{
        id: 12,
        title:
            "web app that helps users track and improve their DSA practice by categorizing problems and visualizing progress.",
        image: PROJECT_IMG_1,
        tags: ["React", "Tailwind CSS"],
        link: "https://dsa-tracker-kappa.vercel.app/",
        
    },
];