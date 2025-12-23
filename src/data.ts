export interface Project {
    title: string;
    description: string;
    github?: string;
    live?: string;
}

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
