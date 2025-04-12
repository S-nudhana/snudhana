import { useState } from "react";
import { StaticImageData } from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import ProjectCard from "@/components/ProjectCard";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import image from "../../../public/images/ProfilePicture.jpg";

import pm1 from "../../../public/images/pm25/pm1.png";
import pm2 from "../../../public/images/pm25/pm2.png";
import pm3 from "../../../public/images/pm25/pm3.png";

interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
  image: StaticImageData;
  subImage?: StaticImageData[];
  type: string;
  role: string;
  frontend?: string;
  backend?: string;
  database?: string;
  link?: string;
}

export const projectList: Project[] = [
  {
    id: 1,
    title: "SIT KMUTT Certificate",
    description: "Web application project that allows students who participate the event construct by SIT KMUTT to generate a certificate and manage features the event by SIT admin and professor.",
    type: "Website",
    status: 'website',
    image: image,
    subImage: [image, image, image],
    role: "Full Stack Developer + UI/UX Designer + Database Designer",
    frontend: "React JS + Chakra UI + ChartJS",
    backend: "Node.js + ExpressJS",
    database: "MySQL",
    link: "https://sit-kmutt-certificate.vercel.app/",
  },
  {
    id: 2,
    title: "SIT KMUTT PM2.5",
    description: "Web application project that displays PM 2.5 data and graph of PM 2.5 value of a period of time from the sensor (esp8266 and Xiaomi Air Purifier) around SIT, Lx and CB2 Building in SIT KMUTT area.",
    type: "Website",
    status: 'website',
    image: pm1,
    subImage: [pm1, pm2, pm3],
    role: "Full Stack Developer + UI/UX Designer",
    frontend: "React JS + Typescript + MUI + Redux JS + Grafana",
    backend: "Node.JS + ExpressJS",
    database: "Influx DB",
    link: "https://pm25project.sit.kmutt.ac.th",
  },
  {
    id: 3,
    title: "Campus Link",
    description: "This is integrated project in 2nd year which is a web application system for students and professor that consist of register system, attendance check system, online course system, online exam system, parking reserved system, payment system and many more in KMUTT.",
    type: "Website",
    status: 'github',
    image: image,
    role: "Full Stack Developer + UI/UX Designer",
    frontend: "React JS + Tailwind CSS + Daisy UI",
    backend: "Node.JS + ExpressJS + Prisma + MinIO",
    database: "PostgreSQL",
    link: "https://github.com/KMUTT-CampusLink"
  },
  {
    id: 4,
    title: "SIT Hello World",
    description: "Web appplication for teaching student who study in this activities to learn how to create and use Backend server properly using Node.js + ExpressJS which I'm teaching Backend and Database in this activities.",
    type: "Website",
    status: 'github',
    role: "Full Stack Developer + UI/UX Designer + Database Designer",
    image: image,
    frontend: "React JS + Chakra UI",
    backend: "Node.JS + ExpressJS",
    database: "MySQL",
    link: "https://github.com/Hello-Hippo-Backend"
  },
  {
    id: 5,
    title: "Odyssey Traveling",
    description: "Web application made in 36 hour hackathon that allows users to find travel information inside Thailand with clever suggestion and recommendation system by using longitude, latitude and user preferences for being part of recommendation features.",
    type: "Website",
    status: 'inProgress',
    role: "Full Stack Developer + UI/UX Designer + Database Designer",
    image: image,
    frontend: "React JS + MUI",
    backend: "Node.JS + ExpressJS",
    database: "MySQL",
    link: "https://github.com/S-nudhana/Odyssey-Traveling",
  },
  {
    id: 6,
    title: "Apps",
    description: "Web application made in 36 hour hackathon that allows users to find travel information inside Thailand with clever suggestion and recommendation system by using longitude, latitude and user preferences for being part of recommendation features.",
    type: "Mobile Application",
    status: 'inProgress',
    role: "Full Stack Developer + UI/UX Designer + Database Designer",
    image: image,
    frontend: "Flutter + Flutter Cupertino",
    backend: "Go + Hono",
    database: "firebase",
    link: "",
  },
  {
    id: 7,
    title: "Cluo Biz",
    description: "Redesign of IA/POS system for staff and cashier that allows user to clean their clothes and pick up their clothes in the laundry shop.",
    type: "UX/UI",
    status: 'inProgress',
    role: "UX/UI Designer",
    image: image,
  },
];


export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("all");
  const categorizedType = projectList.reduce<Record<string, Project[]>>((acc, item) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push(item);
    return acc;
  }, {});

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };

  return (
    <section id="project">
      <div className="flex items-center justify-between align-middle mt-[25px]">
        <h1 className="text-yellow text-[20px] font-[600]">Projects</h1>
        <Select onValueChange={handleTypeChange}>
          <SelectTrigger className="w-[150px] lg:w-[200px] text-gray border-neutral-700 hover:border-neutral-600 duration-300 ease-in-out">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent className="bg-[#201f1f] text-white border-none">
            <SelectItem value={"all"} className="text-gray hover:bg-gray focus:text-white focus:bg-transparent duration-300 ease-in-out cursor-pointer">
              All
            </SelectItem>
            {Object.entries(categorizedType).map(([type, projects]: [string, Project[]], index: number) => {
              return (
                <SelectItem key={index} value={type} className="text-gray hover:bg-gray focus:text-white focus:bg-transparent duration-300 ease-in-out cursor-pointer">
                  {type}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <div className="flex flex-wrap justify-center md:justify-between">
          {(() => {
            const filtered = projectList
              .filter((project) => project.type === selectedType || selectedType === "all")
              .slice(0, 3);

            const placeholders = filtered.length < 3 ? 3 - filtered.length : 0;

            return (
              <>
                {filtered.map((project, index) => (
                  <ProjectCard key={index} projectData={project} />
                ))}
                {Array.from({ length: placeholders }).map((_, index) => (
                  <div key={`placeholder-${index}`} className="w-[30%] invisible" />
                ))}
              </>
            );
          })()}
        </div>
        <CollapsibleContent className="flex flex-wrap justify-center md:justify-between gap-y-4">
          {(() => {
            const filtered = projectList.filter(
              (project) => project.type === selectedType || selectedType === "all"
            ).slice(3);

            const remainder = filtered.length % 3;
            const placeholders = remainder === 0 ? 0 : 3 - remainder;

            return (
              <>
                {filtered.map((project, index) => (
                  <ProjectCard key={index} projectData={project} />
                ))}
                {Array.from({ length: placeholders }).map((_, index) => (
                  <div key={`placeholder-${index}`} className="w-[30%] invisible" />
                ))}
              </>
            );
          })()}
        </CollapsibleContent>

        <div className="flex justify-center">
          <CollapsibleTrigger className="flex items-center gap-2 text-[14px] text-gray hover:text-white transition-all duration-300">
            {isOpen ? (
              <>
                see less <FaAngleUp />
              </>
            ) : (
              <>
                see more <FaAngleDown />
              </>
            )}
          </CollapsibleTrigger>
        </div>
      </Collapsible>
    </section>
  );
}
