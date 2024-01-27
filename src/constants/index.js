import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    aws,
    c,
    car,
    contact,
    cpp,
    css,
    elasticsearch,
    estate,
    express,
    firebase,
    flask,
    git,
    github,
    html,
    iotnation,
    java,
    javascript,
    kibana,
    linkedin,
    mongodb,
    motion,
    mui,
    mysql,
    nextjs,
    nodejs,
    postman,
    pricewise,
    python,
    react,
    redux,
    sass,
    sbu,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    vsc
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Backend"
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Backend"
    },
    {
        imageUrl: c,
        name: "C",
        type: "Backend"
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend"
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database"
    },
    {
        imageUrl: elasticsearch,
        name: "ElasticSearch",
        type: "Database"
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend"
    },
    {
        imageUrl: aws,
        name: "Amazon Web Services",
        type: "Backend"
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend"
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "Tool"
    },
    {
        imageUrl: kibana,
        name: "Kibana",
        type: "Tool"
    },
    {
        imageUrl: vsc,
        name: "Visual Studio Code",
        type: "Tool"
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
];

export const experiences = [
    {
        title: "Data Engineer/Software Development Intern",
        company_name: "IoT Nation",
        icon: iotnation,
        iconBg: "#accbe1",
        date: "July 2022 - Present",
        points: [
            "Architected and maintained a robust backend API for a globally used mobile app, streamlining tracking of funding investment rounds; optimized data processing, resulting in 30% faster response times and improved overall user experience.",
            "Developed a streamlined script ran on an AWS EC2 instance to process large amounts of data from an AWS S3 bucket and seamlessly upload it to an ElasticSearch database.",
            "Finetuned and integrated a BERT large language model with a custom dataset for classification / filtering, increasing data processing efficiency by over 200%.",
            "Collaborated closely with a diverse cross - functional team using Agile technologies such as JIRA and communication channels such as Slack, participating in bi - weekly meetings to discuss progress, define next steps, and ensure a smooth integration between the backend and the app’s frontend."
        ],
    },
    {
        title: "Undergraduate Teaching Assistant",
        company_name: "Stony Brook University",
        icon: sbu,
        iconBg: "#fbc3bc",
        date: "Sep 2023 - Dec 2023",
        points: [
            "Assisted in teaching Data Structures and Programming Abstractions, a core course for honors computer science majors, using Java as the programming language.",
            "Led weekly lab sessions and helped students with coding assignments and debugging issues.",
            "Designed and implemented lab questions that challenged students to apply the concepts learned in lectures and readings.",
            "Collaborated with the instructor and other teaching assistants to provide feedback and grading for students’ work.",
            "Demonstrated strong communication, leadership, and problem-solving skills in a fast-paced and dynamic environment.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/chriskim2273',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/christopher-kim-45bb95202/',
    }
];

export const projects = [
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        technologies: [react, javascript, python, flask, firebase, mysql],
        name: 'BogoSort Leaderboard Web App',
        description: 'A small mini project to prove that BogoSort is the best sorting algorithm. "Theory will only take you so far." - Robert J. Oppenheimer',
        link: 'https://github.com/chriskim2273/BogoSortLeaderboard',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        technologies: [react, javascript, firebase, flask, python, mysql],
        name: 'SwapSensei Web App',
        description: 'A web-app that recommends users alternative products based on ingredient list similarity. Front-end coded in ReactJS, backend with Flask (python), and web-scraping done with scrapy (python).',
        link: 'https://github.com/chriskim2273/SwapSensei',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        technologies: [javascript, react],
        name: 'Ticking Tabs Chrome Extension',
        description: "A chrome extension that allows users to add timers to tabs so that they close automatically. Useful for a quick google search and for tabs that won't be revisited. Saved resources and declutters your workspace for you. A history of closed tabs enables you to re-open tabs you do want to re-visit.",
        link: 'https://github.com/chriskim2273/TickingTabs',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        technologies: [javascript, typescript, react],
        name: 'SubItUp Google Calendar Integration Chrome Extension',
        description: 'A simple chrome extension written in TypeScript/JavaScript that allows the importation of SubItUp Shifts into Google Calendar.',
        link: 'https://github.com/chriskim2273/SubItUp-Google-Calendar-Integration',
    },

    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        technologies: [java, mongodb],
        name: 'Euclid Discord Bot',
        description: 'A versatile Discord chat bot combining moderation, entertainment, math problem-solving, and sleep cycle optimization features, enhancing user engagement and server management',
        link: 'https://github.com/chriskim2273/Euclid-Discord-Chat-Bot',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        technologies: [java, mongodb],
        name: 'Stony Brook Verification Bot',
        description: 'A discord bot made in Java (using JDA) that verifies if a user is a student at stony brook using their provided StonyBrook email address.',
        link: 'https://github.com/chriskim2273/Stony-Brook-Verification-Bot',
    }
];