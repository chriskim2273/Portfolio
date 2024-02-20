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
        github: 'https://github.com/chriskim2273/BogoSortLeaderboard',
        link: 'https://main--magenta-moxie-66d7f2.netlify.app/',
        mvp: true,
        images: ["https://i.ibb.co/5MSmfwS/Screenshot-107.jpg", "https://i.ibb.co/G2wZsgK/Screenshot-106.jpg", "https://i.ibb.co/w0mNYvn/Screenshot-105.jpg"],
        why: "I thought it would be funny and interesting to create an web-app that just runs in the background and records when bogosort is successful. I wanted to see practically, with my own eyes, bogosort being successful in (what seems) a single digit runtime.",
        shoutouts: "Firebase (for user auth) and PythonAnywhere (for hosting Flask backend and MySQL database).",
        learned: "With this web-app, I learned how to implement user authentication with Firebase, and how to authorize firebase authenticated requests in a Flask backend. I also solidied my knowledge of creating a back-end API with flask and my knowledge of ReactJS."
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        technologies: [react, javascript, firebase, flask, python, mysql],
        name: 'SwapSensei Web App',
        description: 'A web-app that recommends users alternative products based on ingredient list similarity. Front-end coded in ReactJS, backend with Flask (python), and web-scraping done with scrapy (python).',
        github: 'https://github.com/chriskim2273/SwapSensei',
        link: '',
        why: "I wanted an app that simply provided recommendations to products like skincare and supplements absed off ingredient lists. There are so many different products in the market and it would be so nice to simply search for an alternative. Whether the reason may be to find a better deal, one that has or doesn't have a certain ingredient, one from a different company, and many more.",
        shoutouts: "Scrapy (for web-scrapping websites like Amazon for product info), ScrapeOps (for proxies), PlanetScale (MySQL Database), Flask (Backend API), Firebase (user authentication).",
        learned: "The main thing I learned from this project was web-scraping using the Scrapy Python library. This was also the first project I set out to use MySQL."
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        technologies: [javascript, react],
        name: 'Ticking Tabs Chrome Extension',
        description: "A chrome extension that allows users to add timers to tabs so that they close automatically. Useful for a quick google search and for tabs that won't be revisited. Saved resources and declutters your workspace for you. A history of closed tabs enables you to re-open tabs you do want to re-visit.",
        github: 'https://github.com/chriskim2273/TickingTabs',
        link: 'https://chromewebstore.google.com/detail/ticking-tabs/ipmnbeojnnjhjnanpjpdeikmochkjjjk?hl=en',
        images: ["https://lh3.googleusercontent.com/tnLY1kXXwnX-AHs7XgxuAgb_a3qHrzT3mQssDO0km_GVuSKsdct-B1jUHorU_4m3Dp4H8GHrjMHN93XfAEEyUD9zkzc=s1280-w1280-h800"],
        why: "Whenever working on a project, I would end up with almost a hundred tabs. I created an extension that I thought would help me with this issue.",
        shoutouts: "ReactJS (for the UI), Webpack",
        learned: "This was the second chrome extension I started and mainly created it because I wanted to use it. However, it definitely solidified my foundations with ReactJS and with creating chrome extensions."
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        technologies: [javascript, typescript, react],
        name: 'SubItUp Google Calendar Integration Chrome Extension',
        description: 'A simple chrome extension written in TypeScript/JavaScript that allows the importation of SubItUp Shifts into Google Calendar.',
        github: 'https://github.com/chriskim2273/SubItUp-Google-Calendar-Integration',
        link: 'https://chromewebstore.google.com/u/5/detail/subitup-google-calendar-i/bpceepmanghbdihilafngmapgjmdfcek?hl=en',
        mvp: true,
        images: ["https://lh3.googleusercontent.com/TXxsEuQzsWGe961UONeIj5AimsFKBf1u2KJL8ePYSwvHnA5QTgVIlGWwc2HUaQeflLzTd4RZM-TDOz4NWb54RN11=s1280-w1280-h800", "https://lh3.googleusercontent.com/KWjGK71dbqrIJruxZuTvnqUgnmajaxmDXmrwkdoIvcV59XjDWikbZlO3j2VUkUTtosgMN5Pi8XFd3S7N4zU280T3TAQ=s1280-w1280-h800", "https://lh3.googleusercontent.com/VH7T-VUOp2kernsb4Dvvsa_ikDgYwe91MPzGEmKixQq7GGX-KMIWd0EyUg6BUmaLW5ZRlh_wDGQo7TWSnQf6xHx_=s1280-w1280-h800"],
        why: "My on campus job started using a new service called SubItUp for our shifts, however, there is not a way to import the shifts into Google Calendar (which is what I mainly use for scheduling my day). In addition, my co-workers also expressed a want for this feature.",
        shoutouts: "Google OAuth (for connecting the extension to Google Calendar)",
        learned: "With this project I learned how to create a Chrome Extension with ReactJS for the UI. It was also my first experience with TypeScript and working with Google OAuth."
    },

    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        technologies: [java, mongodb],
        name: 'Euclid Discord Bot',
        description: 'A versatile Discord chat bot combining moderation, entertainment, math problem-solving, and sleep cycle optimization features, enhancing user engagement and server management',
        github: 'https://github.com/chriskim2273/Euclid-Discord-Chat-Bot',
        link: '',
        completed: true,
        why: "My friends and I use Discord as our main communication and as a platform, it has been growing at a tremendous rate. I wanted to make a custom bot that fulfilled general and specific needs. We wanted features such as equation solving given an image, randomized and MMR based custom team generation, trolling features, knowing when we should go to bed based off sleep cycle data and more.",
        shoutouts: "Discord JDA (framework for Discord bots in Java), MongoDB (storing data), Wolfram API (Equation Solving), MathPix API (OCR)",
        learned: "This was one of the first major personal projects I had embarked on in my time as a prespective Software Engineer and Computer Scientist. Through this project, I learned how to implement APIs and Non-SQL databases while also enforcing and improving my expertise on Java as a whole."
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        technologies: [java, mongodb],
        name: 'Stony Brook Verification Bot',
        description: "A discord bot made in Java (using JDA) that verifies if a user is a student at stony brook using their provided StonyBrook email address. It sends a pin to the user's Stookbrook.edu email address for confirmation",
        github: 'https://github.com/chriskim2273/Stony-Brook-Verification-Bot',
        link: '',
        completed: true,
        images: ["https://preview.redd.it/gncesr0bo3s71.png?width=364&format=png&auto=webp&s=653b9d5ba73ad0e2fab5fe7aa3864d684c108ce6", "https://preview.redd.it/iofsg3xko3s71.png?width=295&format=png&auto=webp&s=93c03705c842674826f4ef0d56cf9d552a30e39a"],
        why: "With the ever increasing popularity of Discord, it become more and more evident how importance security was becoming. Servers that should be safe havens became easily susceptible to raids (mass attacks by foreign users), bot attacks, and more. I wanted to create a bot that could ensure that users in certain servers were actual students at Stony Brook University and not others with malicious intent.",
        shoutouts: "Discord JDA (framework for Discord bots in Java), MongoDB (database), GoogleSMTP (for sending emails)",
        learned: "With this project, I learned how to utilize Google SMTP to send emails. However, a majority of the skills and tools utilized in the development in this project are of those I am already familiar with. Nonetheless, the development of this proejct had definitely solidified my knowledge with said skills and tools."
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        technologies: [python, javascript, css, html],
        name: 'Twitter Sentiment Analysis Stock App (SBUHacks Winner)',
        description: '2022 SBU Hacks Winner for the Fintech Category! A web-app made within the 48 hours alotted for the hackathon that utilizes sentiment analysis machine learning models provided by HuggingFace to analyse tweets retrieved using the Twitter API to provide recommendations to stocks.',
        github: 'https://github.com/chriskim2273/SBUHacks-TwitterStockApp',
        link: 'https://devpost.com/software/twitter-stock-suggestor',
        completed: true,
        images: ["https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/233/651/datas/gallery.jpg"],
        why: "Three friends and I decided to attend Stony Brook University's largest Hackathon. We wanted to create a web-app specifially for the FinTech category and were really passionate and interested in AI at the time.",
        shoutouts: "HuggingFace (provided the Sentiment Analysis Machine Learning Model), MongoDB (database), Flask (API), Tweepy (Twitter API for Python)",
        learned: "We all worked on both the front-end and back-end of the project. However, I mainly worked on the Backend API of the application. I was able to solidify my knowledge on querying and handling API requests to other apis such as the Twitter API alongside utilizing HunggingFace models. Furthermore, it also solidified my knowledge with the Flask framework and implementing Non-SQL databases such as MongoDB.",
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        technologies: [python],
        name: 'Is That Important? (Generative AI Analysis)',
        description: 'The final project for my CSE 354 (Natural Language Processing) class. It is simply research, tests, and observations made about modern text generational models such as GPT and FLAN.',
        github: 'https://github.com/chriskim2273/IsThatImportant',
        link: 'https://github.com/chriskim2273/IsThatImportant/blob/main/CSE_354_FINAL.ipynb',
        completed: true,
        why: "Class Assignment (Final Project)",
        shoutouts: "Google Colab",
        learned: "I mainly learned the current status of mdoern Generative AI, such as their performance (strengths and shortcomings), alongside the effectiveness of strategies in prompting that are known today. I also gained experience creating informative documents in an IPython Notebook.",
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        technologies: [cpp],
        name: 'Text Based RPG',
        description: "My highschool sophomore year computer science class final. It's  a text-based RPG that handles user inputs WASD to move the character, with progression saving, randomized map generation, random enemy movement and item spawns.",
        github: 'https://github.com/chriskim2273/TextBasedRPG',
        link: '',
        completed: true,
        why: "Class Assignment (Final Project)",
        shoutouts: "Coded Almost Entirely in C++.",
        learned: "I mainly learned the C++ language. I was very much still a novice at this stage, however, it is great to see how far I've come since this time."
    },

    {
        iconUrl: estate,
        theme: 'btn-back-black',
        technologies: [javascript, python, react, mongodb, firebase, flask],
        name: 'Split Picker (SBUHacks 2024)',
        description: "The project we made and submitted for the 2024 SBUHacks hackathon. It was a tool aimed to take the weight of having to do research and plan workouts out of the equation.",
        github: 'https://github.com/chriskim2273/SplitPicker_SBUHacks2024/tree/main',
        link: '',
        why: "SBUHacks 2024 and Passion Project",
        shoutouts: "Major League Hacking",
        learned: "Learned how to work with a team to complete a project under a really tight deadline. Communication was a major thing we improved on during this experience."
    },
];