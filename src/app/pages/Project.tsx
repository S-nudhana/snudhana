import "../style/parallelogramBackground.css";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";

interface projectItems {
    name: string;
    link: string;
    linkType: string;
    description: string;
    frontend: string;
    backend: string | null;
}

const projectItems = [
    {
        name: 'Certificate SIT KMUTT',
        link: "",
        linkType: 'In progress',
        description: "This project is a web application that allows students to generate a certificate from participated SIT KMUTT events and manage the event by SIT admin and professor.",
        frontend: "React JS + Chakra UI",
        backend: "Node.JS + ExpressJS + MySQL",
    },
    {
        name: "Pm 2.5 display SIT KMUTT",
        link: "https://pm25project.sit.kmutt.ac.th/",
        linkType: 'Visit website',
        description: "This project is a web application that displays PM 2.5 data from the sensor in SIT KMUTT.",
        frontend: "React JS + Tailwind CSS + MUI",
        backend: "Node.JS + ExpressJS + InfluxDB",
    },
    {
        name: 'CampusLink',
        link: "",
        linkType: 'In progress',
        description: "This is integrated project in 2nd year which is a web application system for students and professor that consist of register, attendance check, online course, online exam, parking reserved and payment system in KMUTT.",
        frontend: "React JS + Tailwind CSS + Daisy UI",
        backend: "Node.JS + ExpressJS + PostgreSQL + Prisma",
    },
    {
        name: 'Snudhana Portfolio',
        link: "",
        linkType: 'Github link',
        description: "This project is a web application that displays my portfolio website.",
        frontend: "Next JS + TypeScript + Tailwind CSS + Shadcn UI",
        backend: null,
    },
    {
        name: 'Odyssey-Traveling',
        link: "https://github.com/S-nudhana/Odyssey-Traveling",
        linkType: 'Github link',
        description: "This project is a hackathon project that has 48 hours in total, It is a web application that allows users to discover new places in Thailand by having an algorithm to add their favorite place, and personal preferences, suggestion the place by calculating latitude-longitude.",
        frontend: "React JS + MUI",
        backend: "Node.JS + ExpressJS + MySQL",
    },
];

export default function Project() {
    return (
        <section id="project">
            <div className="w-full h-100dvh text-deepNavy font-primary font-normal px-10">
                <h1 className="text-[22px] underline underline-offset-4 tracking-wider flex justify-center">Project</h1>
                <div className="py-[20px]">
                    {projectItems.map((project, index) => (
                        <h2 className="lg:px-20">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item">
                                    <AccordionTrigger>
                                        <div className="flex gap-0 w-full items-center justify-between md:justify-start">
                                            <h4 className="text-[14px] md:text-[18px]">{index + 1}. {project.name}:</h4>
                                            <Button variant="link" disabled={project.link ? false : true}>
                                                <a href={`${project.link}`} className="text-darkSlateGray">
                                                    {project.linkType}
                                                </a>
                                            </Button>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slateBlue font-secondary font-medium text-[16px] flex flex-col gap-2">
                                        <p>- {project.description}</p>
                                        <p>- Frontend: {project.frontend}</p>
                                        <p>{project.backend ? `- Backend: ${project.backend}` : ''}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </h2>
                    ))}
                </div>
            </div>
        </section>
    )
}
