import { Database, Server, Code, Gamepad, Globe, BarChart } from "lucide-react"

    // Basic Information
    export const personalInfo = {
      name: "Sghairi Youssef",
      title: "Software Engineering Student — Full-Stack / Backend Developer",
      email: "youssef.sghairi@insat.ucar.tn",
      phone: "+216 97 348 031",
      location: "Tunis, Tunisia",
      bio: "Creating elegant solutions to complex problems.",
      image: "/profilepic.jpg",
      longDescription:
        "I'm Sghairi Youssef, a software engineering student at INSAT focused on full‑stack and backend development. I build maintainable systems, microservices and cloud-native applications, and enjoy working on AI-integrated and game-related side projects. Outside of coding I play drums, read, and explore new technologies.",
      socialLinks: {
        github: "https://github.com/sghairiyoussef",
        linkedin: "https://linkedin.com/in/youssef-sghairi/",
        twitter: "https://twitter.com",
        portfolio: "https://youssefsghairiportfolio.vercel.app/"
      },
    }

    // Education
    export const education = [
      {
        institution: "National Institute of Applied Science and Technology (INSAT)",
        location: "Tunis, Tunisia",
        degree: "Software Engineering Degree",
        note: "Top public engineering school in Tunisia",
        period: "Sept 2022 – Present",
        expectedGraduation: "June 2027",
      },
    ]

    // Skills Categories and Items
    export const skillsCategories = [
      {
        id: "backend",
        label: "Backend",
        icon: Server,
        skills: [
          { name: "Java", icon: "/icons/java.svg" },
          { name: "Spring Boot", icon: "/icons/spring.svg" },
          { name: "Quarkus", icon: "/icons/broken.svg" },
          { name: "NestJS", icon: "/icons/nestjs.svg" },
          { name: "Node.js", icon: "/icons/nodejs.svg" },
          { name: "ASP.NET Core", icon: "/icons/dotnet.svg" },
        ],
      },
      {
        id: "frontend",
        label: "Frontend",
        icon: Globe,
        skills: [
          { name: "React", icon: "/icons/react.svg" },
          { name: "Angular", icon: "/icons/angular.svg" },
          { name: "Next.js", icon: "/icons/nextjs.svg" },
          { name: "Tailwind CSS", icon: "/icons/tailwind-css.svg" },
          { name: "TypeScript", icon: "/icons/typescript.svg" },
          { name: "JavaScript", icon: "/icons/javascript.svg" },
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
        ],
      },
      {
        id: "tools",
        label: "Tools",
        icon: BarChart,
        skills: [
          { name: "Git", icon: "/icons/git.svg" },
          { name: "Docker", icon: "/icons/docker.svg" },
          { name: "Kafka", icon: "/icons/broken.svg" },
          { name: "RabbitMQ", icon: "/icons/broken.svg" },
          { name: "Postman", icon: "/icons/postman.svg" },
          { name: "VS Code", icon: "/icons/vscode.svg" },
        ],
      },
      {
        id: "gamedev",
        label: "Game Development",
        icon: Gamepad,
        skills: [
          { name: "Unity", icon: "/icons/unity.svg" },
          { name: "Godot", icon: "/icons/godot.svg" },
          { name: "KaboomJS", icon: "/icons/broken.svg" },
          { name: "Phaser", icon: "/icons/broken.svg" },
        ],
      },
    ]

    // Experiences
    export const experiences = [
      {
        period: "Jul 2025 – Present",
        role: "Part‑Time Full‑Stack Developer",
        company: "Uvey",
        description:
          "Developed and maintained production-grade full‑stack features aligned with client requirements. Contributed to microservices design and implemented backend services using Quarkus, Kafka and HTTP clients; built frontend features with React. Collaborated with cross‑functional teams to deliver clean, maintainable solutions.",
      },
      {
        period: "Jun 2025 – Jul 2025",
        role: "Full‑Stack Developer Intern",
        company: "Wecraft",
        description:
          "Built a secure system for managing medical prescriptions and patient data across multiple user roles. Designed and implemented an event‑driven architecture using Quarkus, Kafka, and Docker while applying healthcare compliance and data protection practices.",
      },
      {
        period: "Sep 2024 – Nov 2024",
        role: "Junior Frontend Developer",
        company: "Digital Bundle",
        description:
          "Developed responsive, intuitive interfaces for a user‑generated content platform using Vue.js and TailwindCSS. Improved usability and engagement through UI/UX best practices and interactive components.",
      },
      {
        period: "2022 – Present",
        role: "Software Engineering Student",
        company: "INSAT",
        description:
          "Pursuing a Software Engineering degree with a focus on backend development, microservices architecture and cloud computing. Participated in hackathons and student chapter activities.",
      },
    ]

    // Projects
    export const projects = [
      {
        id: 1,
        title: "e‑Sihha",
        description:
          "Doctor appointment and unified medical records platform with AI symptom assessment. Architected microservices using NestJS, Next.js, Docker, RabbitMQ and Clerk. Implemented role‑based authentication and GDPR‑compliant data handling.",
        tags: ["NestJS", "Next.js", "Docker", "RabbitMQ", "Clerk"],
        image: "/eSihha.png",
        github: "",
        demo: "",
      },
      {
        id: 2,
        title: "GrindAI",
        description:
          "AI‑powered fitness assistant with a Spring Boot microservices backend and RabbitMQ. Integrated Gemini 2.0 Flash for personalized, vision‑aware workout feedback and built an interactive frontend with Angular.",
        tags: ["Spring Boot", "RabbitMQ", "PostgreSQL", "Google Gemini", "Angular"],
        image: "/grindAI.png",
        github: "https://github.com/SghairiYoussef/grindAI",
        demo: "",
      },
      {
        id: 3,
        title: "CareSync",
        description:
          "Healthcare microservices platform demonstrating inter‑service communication via gRPC, Kafka and REST. Applied domain‑driven design and event‑driven architecture with saga coordination.",
        tags: ["Spring Boot", "gRPC", "Kafka", "Docker"],
        image: "/microservices.png",
        github: "https://github.com/SghairiYoussef/caresync",
        demo: "",
      },
      {
        id: 4,
        title: "Dungeon AI",
        description:
          "A web app where players describe actions in a fantasy RPG and an AI acts as the Dungeon Master, generating quests and battles.",
        tags: ["SpringBoot", "Hugging Face", "PostgreSQL"],
        image: "/dungeonAI.jpg",
        github: "https://github.com/SghairiYoussef/Dungeon-AI",
        demo: "",
      },
      {
        id: 5,
        title: "ML Concepts from scratch",
        description:
          "Implementations of fundamental machine learning concepts built from scratch using Python and NumPy to teach algorithm internals.",
        tags: ["Python", "NumPy"],
        image: "/ML.jpg",
        github: "https://github.com/SghairiYoussef/ML_Concepts_from_scratch",
        demo: "",
      },
      {
        id: 6,
        title: "INSAT Social Club",
        description:
          "Social media platform for students with real‑time chat and community features built with Vue.js and Symfony.",
        tags: ["Vue.js", "Symfony", "PostgreSQL"],
        image: "/INSATSocialClub.gif",
        github: "https://github.com/safina57/INSAT-Social-Club",
        demo: "",
      },
      {
        id: 7,
        title: "2D Game Portfolio",
        description:
          "Interactive game‑based navigation to explore portfolio projects; responsive and mobile‑friendly with a project gallery.",
        tags: ["KaboomJS", "HTML", "CSS"],
        image: "/2dportfolio.png",
        github: "https://github.com/SghairiYoussef/Portfolio",
        demo: "https://youssefsghairiportfolio.vercel.app/",
      },
      {
        id: 8,
        title: "MeetQuest",
        description:
          "Virtual meeting platform inspired by Gather allowing users to move avatars and interact in 2D spaces using Node.js and Socket.io.",
        tags: ["KaboomJS", "Node.js", "Socket.io", "NestJS"],
        image: "/MeetQuest.png",
        github: "https://github.com/orgs/MeetQuest/repositories",
        demo: "",
      },
    ]

    // Leadership & Volunteering
    export const activities = [
      {
        role: "Event Manager",
        org: "INSAT ACM Student Chapter",
        period: "2024 – 2025",
        description:
          "Organized large technical events including WinterCup, Hour of Code and CodeQuest.",
      },
      {
        role: "Exchange Participant",
        org: "AIESEC Eskisehir, Türkiye",
        period: "2024",
        description:
          "Promoted Sustainable Development Goals through intercultural education programs.",
      },
      {
        role: "Founding President",
        org: "Interact Club Le Kef",
        period: "2020 – 2022",
        description:
          "Founded and led youth‑driven community impact initiatives.",
      },
    ]