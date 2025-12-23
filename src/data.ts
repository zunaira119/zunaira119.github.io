export interface Project {
    title: string;
    description: string;
    github?: string;
    live?: string;
}
export const skills = [
    "Java", "Spring Boot", "Node.js", "NestJS", "PHP", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Oracle", "Microservices", "REST APIs", "GraphQL", "AWS", "Azure", "Git", "Agile/Scrum", "Code Reviews", "System Design"
];

export const experience = [
    {
        role: "Associate Manager Development / OBDX Software Engineer",
        company: "Allied Bank Limited ",
        period: "2024 – Present",
        description: "Provide technical leadership and mentorship to engineers, supporting architectural decisions."
    },
    {
        role: "Senior Software Engineer",
        company: "Invozone Pvt. Ltd ",
        period: "2022 – 2024",
        description: "Designed and developed scalable, API centric backend systems"
    },
    {
        role: "Senior Software Engineer",
        company: "Suave Solutions Pvt. Ltd ",
        period: "2020 – 2022",
        description: "Developed and maintained backend services using Node.js and PHP."
    }
];
export const projects: Project[] = [
    {
        title: "Piqsol",
        description: "Fractional NFT Marketplace that's Multi-Chain.",
        live: "https://piqsol.com/",
    },
    {
        title: "Quiz Patente",
        description: "Online driving license quizzes.",
        live: "https://www.quizpatente.it/",
    },
    {
        title: "Invohub",
        description: "Resource Engagement.",
        live: "https://hub.invozone.com/login",
    },
    {
        title: "ShuftiPro",
        description: "Identity Verification System",
        live: "https://shuftipro.com/"
    },
    {
        title: "IslamicHoney",
        description: "Ecommerce",
        live: "https://islamichoney.com/"
    },
    {
        title: "LokSujag Admin Panel",
        description: "CMS",
        live: "https://admin.loksujag.com/login"

    },
    {
        title: "LokSujag",
        description: "",
        live: "https://loksujag.com/"
    },
    {
        title: "Mintsclub",
        description: "MintsClub is a shared liquidity NFT market smart contract which is used by multiple websites to provide the users the best possible experience.",
        live: "https://mintsclub.io/"
    }
];
