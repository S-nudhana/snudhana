import "../style/parallelogramBackground.css";
import "../style/underlineAnimation.css";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ProjectDisplay from "../components/ProjectDisplay";

interface ProjectItem {
  type: string;
  name: string;
  link: string;
  linkType: string;
  description: string;
  frontend: string;
  backend?: string;
  picture?: string[];
}

const projectItems: ProjectItem[] = [
  {
    type: "website",
    name: "Certificate SIT KMUTT",
    link: "",
    linkType: "In progress",
    description:
      "This project is a web application that allows students to generate a certificate from participated SIT KMUTT events and manage the event by SIT admin and professor.",
    frontend: "React JS + Chakra UI + Chart JS",
    backend: "Node.JS + ExpressJS + MySQL",
  },
  {
    type: "website",
    name: "Pm 2.5 display SIT KMUTT",
    link: "https://pm25project.sit.kmutt.ac.th/",
    linkType: "Visit website",
    description:
      "This project is a web application that displays PM 2.5 data and graph of PM 2.5 value of a period of time from the sensor(node MCU) around SIT Building and CB2 Building in SIT KMUTT area.",
    frontend: "React JS + Tailwind CSS + MUI + Grafana",
    backend: "Node.JS + ExpressJS + InfluxDB",
    picture: ["/images/SIT_PM1.png", "/images/SIT_PM2.png"],
  },
  {
    type: "website",
    name: "CampusLink",
    link: "https://github.com/KMUTT-CampusLink",
    linkType: "Github link",
    description:
      "This is integrated project in 2nd year which is a web application system for students and professor that consist of register system, attendance check system, online course system, online exam system, parking reserved system, payment system and many more in KMUTT.",
    frontend: "React JS + Tailwind CSS + Daisy UI",
    backend: "Node.JS + ExpressJS + PostgreSQL + Prisma + MinIO",
  },
  {
    type: "website",
    name: "Snudhana Portfolio",
    link: "https://github.com/S-nudhana/S_nudhana",
    linkType: "Github link",
    description:
      "This project is a web application that displays my portfolio as website.",
    frontend: "Next JS + TypeScript + Tailwind CSS + Shadcn/UI",
  },
  {
    type: "website",
    name: "Odyssey-Traveling",
    link: "https://github.com/S-nudhana/Odyssey-Traveling",
    linkType: "Github link",
    description:
      "This project is a hackathon project that has 48 hours in total, It is a web application that allows users to discover new places in Thailand by having an algorithm to add their favorite place, and personal preferences, suggestion the place by calculating latitude-longitude.",
    frontend: "React JS + MUI",
    backend: "Node.JS + ExpressJS + MySQL",
  },
];

const filterWebsite: ProjectItem[] = projectItems.filter(
  (project) => project.type === "website"
);

const filterApplication: ProjectItem[] = projectItems.filter(
  (project) => project.type === "application"
);

export default function Project() {
  return (
    <section id="project">
      <div className="w-full h-100dvh text-charcoalGray font-primary font-normal">
        <h1 className="text-[30px] underline underline-offset-[10px] tracking-wider flex justify-center mb-[-32px] lg:mb-[-40px] z-10 relative text-black">
          Project
        </h1>
        <div className="parallelogram-black z-0 relative">
          <Tabs defaultValue="website" className="w-full px-10 lg:px-20 pt-5">
            <TabsList className="flex justify-center lg:justify-around gap-2 lg:gap-4 bg-transparent">
              <TabsTrigger
                value="website"
                className="w-[30%] data-[state=active]:bg-transparent data-[state=active]:shadow-none underline-animation"
              >
                Website
              </TabsTrigger>
              <TabsTrigger
                value="application"
                className="w-[30%] data-[state=active]:bg-transparent data-[state=active]:shadow-none underline-animation"
              >
                Application
              </TabsTrigger>
            </TabsList>
            <TabsContent value="website">
              <div>
                {filterWebsite.map((project, index) => (
                  <ProjectDisplay key={index} index={index} project={project} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="application">
              <div>
                <div
                  className={`${
                    filterApplication.length === 0 ? "hidden" : ""
                  }`}
                >
                  {filterApplication.map((project, index) => (
                    <ProjectDisplay
                      key={index}
                      index={index}
                      project={project}
                    />
                  ))}
                </div>
                <div
                  className={`${
                    filterApplication.length === 0
                      ? "flex justify-center items-center h-[300px] text-[18px]"
                      : "hidden"
                  }`}
                >
                  No application project...
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
