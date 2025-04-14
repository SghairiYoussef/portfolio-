import { Database, Server, Code, Gamepad , Globe, BarChart } from "lucide-react"

// Basic Information
export const personalInfo = {
  name: "Youssef Sghairi",
  title: "Software Engineering Student @ INSAT",
  email: "youssef.sghairi@insat.ucar.tn",
  phone: "+216 97 348 031",
  location: "Tunis, Tunisia",
  bio: "Creating elegant solutions to complex problems.",
  image: "/profilepic.jpg",
  longDescription:
    "I'm Youssef Sghairi, a dedicated software engineering student at INSAT with a burning passion for development & ML. I'm constantly on the lookout for exciting opportunities to expand my knowledge and skills in the world of coding, game design and engineering. I'm passionate about creating intuitive user experiences and solving complex problems with clean, efficient code. When I'm not coding, you can find me playing the drums, reading, or experimenting with new technologies. I'm always eager to learn and grow, and I'm excited to connect with like-minded individuals who share my passion for technology.",
  socialLinks: {
    github: "https://github.com/sghairiyoussef",
    linkedin: "https://linkedin.com/in/youssef-sghairi/",
    twitter: "https://twitter.com",
  },
}

// Skills Categories and Items
export const skillsCategories = [
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "NestJS", icon: "/icons/nestjs.svg" },
      { name: "Spring Boot", icon: "/icons/spring.svg" },
      { name: "ASP.NET Core", icon: "/icons/dotnet.svg" },
      { name: "Symfony", icon: "/icons/symfony.svg" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Globe,
    skills: [
      { name: "Angular", icon: "/icons/angular.svg" },
      { name: "Vue.js", icon: "/icons/vuejs.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind-css.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "HTML/CSS", icon: "/icons/web.svg" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "Redis", icon: "/icons/redis.svg" },
      { name: "Cassandra", icon: "/icons/cassandra.svg" },
      { name: "SQLite", icon: "/icons/sqlite.svg" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    icon: Code,
    skills: [
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Java", icon: "/icons/java.svg" },
      { name: "C#", icon: "/icons/csharp.svg" },
      { name: "PHP", icon: "/icons/php.svg" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: BarChart,
    skills: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "Postman", icon: "/icons/postman.svg" },
      { name: "VS Code", icon: "/icons/vscode.svg" },
      { name: "IntelliJ", icon: "/icons/jetbrains.svg" },
      { name: "Slack", icon: "/icons/slack.svg" },
      { name: "Docker", icon: "/icons/docker.svg" },],
  },
  {
    id: "gamedev",
    label: "Game Development",
    icon: Gamepad,
    skills: [
      { name: "Unity", icon: "/icons/unity.svg" },
      { name: "Godot", icon: "/icons/godot.svg" },
      { name: "Love2D", icon: "/icons/broken.svg" },
      { name: "KaboomJS", icon: "/icons/broken.svg" },
      { name: "Phaser", icon: "/icons/broken.svg" },
    ],
  },
]

export const experiences = [
  {
    period: "Sep 2024 - Nov 2024",
    role: "Jr. Frontend Developer",
    company: "DB",
    description:
      "I collaborated in developing a user-generated content platform for creators and online sellers in a project entitled Levii. My focus was on designing and implementing responsive user interfaces using Vue.js, TailwindCSS, to enhance user engagement and optimize usability. The project showcased my proficiency in frontend web development and UI design, highlighting my problem-solving skills and attention to detail.",
  },
  {
    period: "2020-Present",
    role: "Software Engineering Student @ INSAT",
    company: "INSTITUT NATIONAL DES SCIENCES APPLIQUEES ET DE TECHNOLOGIES - National Institute of Applied Sciences and Technology (INSAT)", 
    description:
      "Currently pursuing a degree in Software Engineering, focusing on backend development, microservices architecture, and cloud computing. Participated in various hackathons and coding competitions.",
  },
]

// Projects
export const projects = [
  {
    id: 1,
    title: "Dungeon AI",
    description:
      "A web app where players describe their actions in a fantasy RPG, and an AI dynamically acts as the Dungeon Master, generating responses, quests, and battles.",
    tags: ["SpringBoot", "Hugging Face", "PostgreSQL"],
    image: "dungeonAI.jpg",
    github: "https://github.com/SghairiYoussef/Dungeon-AI",
    demo: ""
  },
  {
    id: 2,
    title: "ML Concepts from scratch",
    description:
      "A repository that contains implementations of fundamental machine learning concepts built from scratch using only Python and libraries like NumPy. The goal is to provide a clear, hands-on understanding of how common machine learning algorithms and techniques work under the hood.",
    tags: ["Python", "NumPy"],
    image: "/ML.jpg",
    github: "https://github.com/SghairiYoussef/ML_Concepts_from_scratch",  
    demo: ""
  },
  {
    id: 3,
    title: "INSAT Social Club",
    description:
      "INSAT Social Club is a Social Media platform designed to help you connect with friends and family, share your thoughts, ideas, and memories, and stay connected no matter where you are. With real-time chat functionality, you can easily keep in touch with your loved ones.",
    tags: ["Vue.js", "Symfony", "PostgreSQL"],
    image: "/INSATSocialClub.gif",
    github: "https://github.com/safina57/INSAT-Social-Club",
    demo: ""
  },
  {
    id: 4,
    title: "2D Game Portfolio",
    description:
      "Game-Based Navigation: Explore my projects through an interactive game. Responsive Design: Works on all devices. Project Gallery: Displays various projects with descriptions and links.",
    tags: ["KaboomKS", "HTML", "CSS"],
    image: "/2dportfolio.png",
    github: "https://github.com/SghairiYoussef/Portfolio",
    demo: "https://youssefsghairiportfolio.vercel.app/",
  },
  {
    id: 5,
    title: "MeetQuest",
    description:
    "MeetQuest is a virtual meeting platform designed to provide an engaging and interactive experience for users. Inspired by Gather, MeetQuest allows individuals and teams to collaborate in 2D spaces, where they can move their avatars, interact with others in real-time, and access various tools for communication and productivity.",
    tags: ["kaboomJS", "Node.js", "Socket.io", "NestJS"],
    image: "/MeetQuest.png",
    github: "https://github.com/orgs/MeetQuest/repositories",
    demo: ""
  },
  {
    id: 6,
    title: "SpringBoot Microservices",
    description:
      "A collection of microservices built using Spring Boot, demonstrating various design patterns and best practices for building scalable and maintainable applications.",
    tags: ["Spring Boot", "Docker", "JWT", "PostgreSQL", "Kafka"],
    image: "/microservices.jpg",
    github: "https://github.com/SghairiYoussef/microservices-SpringBoot",
    demo: ""
  }
]
