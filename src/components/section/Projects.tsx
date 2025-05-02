import { useState, useEffect } from "react";
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
} from "@/components/ui/select";
import ProjectCard from "@/components/ProjectCard";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import image from "../../../public/images/ProfilePicture.jpg";

import pm_Cover from "../../../public/images/pm25/pm_Cover.jpg";
import pm1 from "../../../public/images/pm25/pm1.png";
import pm2 from "../../../public/images/pm25/pm2.png";
import pm3 from "../../../public/images/pm25/pm3.png";
import pm4 from "../../../public/images/pm25/pm4.png";

import cl_Cover from "../../../public/images/CampusLink/cl_Cover.png";
import cl1 from "../../../public/images/CampusLink/cl1.png";
import cl2 from "../../../public/images/CampusLink/cl2.png";
import cl3 from "../../../public/images/CampusLink/cl3.png";
import cl4 from "../../../public/images/CampusLink/cl4.png";
import cl5 from "../../../public/images/CampusLink/cl5.png";

import DPM_Cover from "../../../public/images/DigitalProductDev/DPM_Cover.png";
import DPM1 from "../../../public/images/DigitalProductDev/DPM1.png";
import DPM2 from "../../../public/images/DigitalProductDev/DPM2.png";

import HW_Cover from "../../../public/images/HelloWorld/HW_Cover.png";
import HW1 from "../../../public/images/HelloWorld/HW1.png";
import HW2 from "../../../public/images/HelloWorld/HW2.png";

interface Project {
  id: number;
  title: string;
  description: string;
  features?: string[];
  status: string;
  cover: StaticImageData;
  subImage?: StaticImageData[];
  type: string;
  role: string;
  frontend?: string;
  backend?: string;
  database?: string;
  deploy?: string;
  link?: string;
}

export const projectList: Project[] = [
  {
    id: 1,
    title: "SIT KMUTT Certificate",
    description:
      "Web application project that allows students who participate the event construct by SIT KMUTT to generate a certificate and manage features the event by SIT admin and professor.",
    type: "Website",
    features: [
      "Certificate Generating",
      "Event Management",
      "Event Registration",
      "Event Report + Statistics",
      "Event History",
      "Event Setting",
      "Anti Certificate Regeneration",
      "Certificate Watermark",
      "Send Certificate via Email",
      "Staff-Professor Communication",
      "Professor Approval",
    ],
    status: "website",
    cover: image,
    subImage: [image, image, image],
    role: "Full Stack Developer + UI/UX Designer + Database Designer",
    frontend: "React JS + Typescript + Chakra UI + ChartJS",
    backend: "Node.js + ExpressJS + Typescript",
    database: "MySQL",
    deploy: "Docker + Linux Ubuntu VM + nginx",
    link: "https://sit-kmutt-certificate.vercel.app/",
  },
  {
    id: 2,
    title: "SIT KMUTT PM2.5",
    description:
      "Web application project that displays PM 2.5 data and graph of PM 2.5 value of a period of time from the sensor (ESP8266 and Xiaomi Air Purifier) around SIT, Lx and CB2 Building in SIT KMUTT area using Agile development approach.",
    type: "Website",
    features: [
      "PM2.5 Value Display",
      "PM2.5 History Graph",
      "Indoor + Outdoor Air Quality Comparison",
      "Health Recommendation",
      "Building Catagory",
      "State Management",
    ],
    status: "website",
    cover: pm_Cover,
    subImage: [pm1, pm2, pm3, pm4],
    role: "Full Stack Developer + UI/UX Designer",
    frontend: "React JS + Typescript + MUI + Redux JS + Grafana",
    backend: "Node.JS + ExpressJS",
    database: "Influx DB",
    deploy: "Docker + Linux Ubuntu VM + nginx",
    link: "https://pm25project.sit.kmutt.ac.th",
  },
  {
    id: 7,
    title: "Cluo Biz",
    description:
      "Redesign UX of IA/POS system for staff and cashier use in laundry shop of Cluo Biz software.",
    type: "UX/UI",
    status: "inProgress",
    role: "UX/UI Designer",
    cover: image,
  },
  {
    id: 3,
    title: "Campus Link",
    description:
      "This is integrated project in 2nd year which is a web application system build by CS24 for students and professor that consist of register system, attendance check system, online course system, online exam system, parking reserved system, payment system and many more in KMUTT which me and my team responsible for online exam session using Agile development approach.",
    features: [
      "Create + Edit Exam",
      "Automatic Grading",
      "Manually Grading",
      "Exam management",
      "Review Exam",
      "Exam Report and Statistics",
      "Exam History",
      "Examination",
      "Exam Setting",
      "Examination time countdown",
      "Anti tab switching",
    ],
    type: "Website",
    status: "github",
    cover: cl_Cover,
    subImage: [cl1, cl2, cl3, cl4, cl5],
    role: "Full Stack Developer + UI/UX Designer + Database Analyst",
    frontend: "React JS + Tailwind CSS + Daisy UI",
    backend: "Node.JS + ExpressJS + Prisma + MinIO",
    database: "PostgreSQL",
    deploy: "Docker + Linux Ubuntu VM + nginx",
    link: "https://github.com/KMUTT-CampusLink",
  },
  {
    id: 4,
    title: "SIT Hello World",
    description:
      "Spotify inspired web appplication for teaching student who study in this activities to learn how to create and use Backend server and API properly using Node.js + ExpressJS, CRUD operations and basic to advance SQL using spotify model which I'm a mentoring in this class.",
    features: [
      "Register + Login",
      "CRUD Operation",
      "User Profile",
      "User Playlist",
      "Playlist name + picture change",
      "User Favorite Song",
      "Admin Top Favorite Song Panel",
      "Cookie + JWT",
      "API Documentation",
      "API Testing",
    ],
    type: "Website",
    status: "github",
    role: "Full Stack Developer + UI/UX Designer + Database Designer",
    cover: HW_Cover,
    subImage: [HW1, HW2],
    frontend: "React JS + Chakra UI",
    backend: "Node.JS + ExpressJS",
    database: "MySQL",
    link: "https://github.com/Hello-Hippo-Backend",
  },
  {
    id: 5,
    title: "Digital Product Development",
    description:
      "Static website for participants in Digital Product Development class construct by SIT KMUTT and Adirek.co to display the schedule of the class.",
    type: "Website",
    status: "website",
    role: "Frotnend Developer + UI/UX Designer",
    cover: DPM_Cover,
    subImage: [DPM1, DPM2],
    frontend: "React JS + Typescript + Chakra UI",
    link: "",
    deploy: "Docker + Linux Ubuntu VM + nginx",
  },
  // {
  //   id: 5,
  //   title: "Odyssey Traveling",
  //   description:
  //     "Web application made in 36 hour hackathon when I'm a first year student that allows users to find travel information inside Thailand with clever suggestion and recommendation system by using longitude, latitude and user preferences for being part of recommendation features and allow register user favorite their places.",
  //   features: [
  //     "Favorite Place",
  //     "Place Recommendation by User Preference and Latitude, Longitude Calculation",
  //     "Place Search",
  //     "Place Filter",
  //     "User Preference",
  //     "Place Information",
  //   ],
  //   type: "Website",
  //   status: "github",
  //   role: "Full Stack Developer + UI/UX Designer + Database Designer",
  //   cover: image,
  //   frontend: "React JS + MUI",
  //   backend: "Node.JS + ExpressJS",
  //   database: "MySQL",
  //   link: "https://github.com/S-nudhana/Odyssey-Traveling",
  // },
  {
    id: 6,
    title: "Redine",
    description:
      "Web application made in 36 hour hackathon that allows users to find travel information inside Thailand with clever suggestion and recommendation system by using longitude, latitude and user preferences for being part of recommendation features.",
    type: "Mobile Application",
    status: "inProgress",
    role: "Full Stack Developer + UI/UX Designer",
    cover: image,
    frontend: "Flutter + Flutter Material",
    backend: "Bun + Hono + Typescript",
    database: "firebase",
    link: "",
  },
];

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("all");
  const categorizedType = Array.from(
    new Set(projectList.map((project: Project) => project.type))
  );

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };
  const [isIpad, setIsIpad] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth;
      setIsIpad(width >= 768 && width <= 1080);
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <section id="project">
      <div className="flex items-center justify-between align-middle mt-[20px]">
        <h1 className="text-yellow text-[20px] font-[600]">Projects</h1>
        <Select onValueChange={handleTypeChange}>
          <SelectTrigger className="w-[150px] lg:w-[200px] text-gray border-neutral-700 hover:border-neutral-600 duration-300 ease-in-out">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent className="bg-[#201f1f] text-white border-none">
            <SelectItem
              value={"all"}
              className="text-gray hover:bg-gray focus:text-white focus:bg-transparent duration-300 ease-in-out cursor-pointer"
            >
              All
            </SelectItem>
            {categorizedType.map((type: string, index: number) => (
              <SelectItem
                key={index}
                value={type}
                className="text-gray hover:bg-gray focus:text-white focus:bg-transparent duration-300 ease-in-out cursor-pointer"
              >
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <div className="flex flex-wrap justify-center md:justify-between gap-x-2">
          {(() => {
            const filtered = projectList
              .filter(
                (project) =>
                  project.type === selectedType || selectedType === "all"
              )
              .slice(0, isIpad ? 4 : 3);
            const placeholders = filtered.length < 3 ? 3 - filtered.length : 0;
            return (
              <>
                {filtered.map((project, index) => (
                  <ProjectCard key={index} projectData={project} />
                ))}
                {Array.from({ length: placeholders }).map((_, index) => (
                  <div
                    key={`placeholder-${index}`}
                    className="w-[30%] invisible"
                  />
                ))}
              </>
            );
          })()}
        </div>
        <CollapsibleContent>
          <div className="flex flex-wrap justify-center md:justify-between gap-x-2 mt-4">
            {projectList
              .filter(
                (project) =>
                  project.type === selectedType || selectedType === "all"
              )
              .slice(isIpad ? 4 : 3)
              .map((project, index) => (
                <ProjectCard key={index} projectData={project} />
              ))}
          </div>
        </CollapsibleContent>
        <CollapsibleTrigger asChild>
          <button className="mt-6 flex items-center gap-2 mx-auto text-gray hover:text-white transition duration-300">
            {isOpen ? (
              <>
                <FaAngleUp />
                Show Less
              </>
            ) : (
              <>
                <FaAngleDown />
                Show More
              </>
            )}
          </button>
        </CollapsibleTrigger>
      </Collapsible>
    </section>
  );
}
