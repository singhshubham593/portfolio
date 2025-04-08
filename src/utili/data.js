import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";
import { 
    VscVscode,
    VscCommentUnresolved,
    VscTerminalPowershell,
 } from "react-icons/vsc";
import { FaGitAlt, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { MdGroups3} from "react-icons/md";

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png"; 

export const MENU_LINKS = [
    { id: "01", label: "Home", offset:-100, to: "hero" },
    { id: "02", label: "Skills", offset:-80, to: "skills" },
    { id: "03", label: "About Me", offset:-80, to: "about" },
    { id: "04", label: "Project", offset:-80, to: "projects" },
    { id: "05", label: "Contact", offset:-80, to: "contact" },
];

export const STATS = [
    { id: "01", count: "10", label: 'Years of \n Experience' },
    {id: "02", count: "12", label:'Certifications \nEarned'},
    { id: "03", count: "43", label: 'Projects \nCompleted'},
    { id: "04", count: "37", label: 'Happy \nClient' },
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
    progress: 95,
    type: "frontend",
    description:
        "Experienced in building scalable, component-driven web applications using React.js. Proficient in state management, hooks, and lifecycle methods.",
    },
    {
        id: "02",
        icon: FaHtml5,
        skill: "HTML",
        progress: 99,
        type: "frontend",
        description:
            "Expert in structuring web content using HTML5. Proficient in semantic markup, accessibility standards, and SEO best practices.",
    },
    {
        id: "03",
        icon: FaCss3,
        skill: "CSS",
        progress: 65,
        type: "frontend",
        description:
            "Skilled in styling web applications using CSS3. Proficient in responsive design, Flexbox, Grid, and CSS preprocessors.",
    },
    {
        id: "04",
        icon: BiLogoJavascript,
        skill: "JavaScript",
        progress: 88,
        type: "frontend",
        description:
            "Proficient in JavaScript ES6+ for building interactive web applications. Experienced with asynchronous programming, DOM manipulation, and event handling.",
    },
    {
        id: "05",
        icon: FaNodeJs,
        skill: "Node.JS",
        progress: 95,
        type: "backend",
        description:
            "Experienced in building server-side applications using Node.js. Proficient in RESTful APIs, middleware, and server management.",
    },
    {
        id: "06",
        icon: SiExpress,
        skill: "Express.JS",
        progress: 98,
        type: "backend",
        description:
            "Skilled in building web applications and APIs using Express.js. Proficient in routing, middleware, and error handling.",
    },
    {
        id: "07",
        icon: SiMongodb,
        skill: "MongoDB",
        progress: 75,
        type: "backend",
        description:
            "Experienced in database management using MongoDB. Proficient in data modeling, aggregation, and indexing.",
    },
    {
        id: "08",
        icon: SiMysql,
        skill: "SQL",
        progress: 90,
        type: "backend",
        description:
            "Skilled in relational database management using MySQL. Proficient in SQL queries, joins, and database design.",
    },
    {
      id:"09",
      icon : FaGitAlt,
      skill : 'Git',
      progress : 90,
      type : 'tools',
      description :
        'Proficient in version control using Git. Experienced with branching strategies, pull requests, and collaboration workflows.'
    },
];

export const ABOUT_ME = {

    content: "I'm a passionate Frontend Developer with a strong foundation in building responsive, user-friendly web applications. I have a keen eye for design and a commitment to writing clean, maintainable code. My goal is to create seamless user experiences that not only meet but exceed client expectations. I thrive in collaborative environments and am always eager to learn new technologies and improve my skills.",
    
    socialLinks: [
        {id: "01", label: "Facebook", icon: FaFacebook, link: "#"},
        {id: "02", label: "Instagram", icon: FaInstagram, link: "#"},
        {id: "03", label: "Twitter", icon: FaXTwitter, link: "#" },
        {id: "04", label: "LinkedIn", icon: FaLinkedin, link: "#" },
    ], 
    
    email: "alex.doe@timetoprogram.com",
    phone: "+1 (123) 456-7890",
    website: "https://timetoprogram.com",
};

export const PROJECTS = [
{
        id: 1,
        title:
            "Full Stack Notes App using MERN MongoDB, Express, React JS, Node JS",
        image: PROJECT_IMG_1,
        tags: ["React", "Express.js", "MongoDB", "Node.js"],
    },
    {
        id: 2,
        title:
            "Responsive Portfolio Website Using React JS | Portfolio Website in React",
        image: PROJECT_IMG_2,
        tags: ["React", "HTML", "CSS"],
    },
    {
        id: 3,
        title: "Full Stack Travel Story App Using MERN Stack MongoDB, Express, React, Node.js MERN Project",
        image: PROJECT_IMG_3,
        tags: ["React", "Node.js", "Express.js", "MongoDB"],
    },
];