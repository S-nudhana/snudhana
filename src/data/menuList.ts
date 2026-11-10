import type { MenuItem } from "@/types/menu";
import { features } from "@/config/features";

export const menu: MenuItem[] = [
    {
        id: "about",
        title: "Home",
        href: "#",
        path: "/#",
    },
    {
        id: "experience",
        title: "Experience",
        href: "#experience",
        path: "/#experience",
    },
    {
        id: "projects",
        title: "Projects",
        href: "#project",
        path: "/#project",
        hidden: !features.projects,
    },
    {
        id: "stacks",
        title: "Stacks",
        href: "#stack",
        path: "/#stack",
    },
    {
        id: "education",
        title: "Education",
        href: "#education",
        path: "/#education",
    },
    {
        id: "contact",
        title: "Contact",
        href: "#contact",
        path: "/#contact",
    },
];