import type { Project } from "../types/project";

import Cer_Cover from "../../public/images/Certificate/Cer_Cover.png";

import pm_Cover from "../../public/images/pm25/pm_Cover.png";
import pm1 from "../../public/images/pm25/pm1.png";
import pm2 from "../../public/images/pm25/pm2.png";
import pm3 from "../../public/images/pm25/pm3.png";
import pm4 from "../../public/images/pm25/pm4.png";

import cl_Cover from "../../public/images/CampusLink/cl_Cover.png";
import cl1 from "../../public/images/CampusLink/cl1.png";
import cl2 from "../../public/images/CampusLink/cl2.png";
import cl3 from "../../public/images/CampusLink/cl3.png";
import cl4 from "../../public/images/CampusLink/cl4.png";
import cl5 from "../../public/images/CampusLink/cl5.png";

import DPM_Cover from "../../public/images/DigitalProductDev/DPM_Cover.png";
import DPM1 from "../../public/images/DigitalProductDev/DPM1.png";
import DPM2 from "../../public/images/DigitalProductDev/DPM2.png";

import HW_Cover from "../../public/images/HelloWorld/HW_Cover.png";
import HW1 from "../../public/images/HelloWorld/HW1.png";
import HW2 from "../../public/images/HelloWorld/HW2.png";

import Re_Cover from "../../public/images/ReDine/Re_Cover.png";
import Re2 from "../../public/images/ReDine/Re2.png";
import Re3 from "../../public/images/ReDine/Re3.png";
import Re4 from "../../public/images/ReDine/Re4.png";
import Re5 from "../../public/images/ReDine/Re5.png";
import Re6 from "../../public/images/ReDine/Re6.png";
import Re7 from "../../public/images/ReDine/Re7.png";

import VC_Cover from "../../public/images/VacciTrack/VC_Cover.png";
import VC1 from "../../public/images/VacciTrack/VC1.png";
import VC2 from "../../public/images/VacciTrack/VC2.png";
import VC3 from "../../public/images/VacciTrack/VC3.png";
import VC4 from "../../public/images/VacciTrack/VC4.png";
import VC5 from "../../public/images/VacciTrack/VC5.png";
import VC6 from "../../public/images/VacciTrack/VC6.png";
import VC7 from "../../public/images/VacciTrack/VC7.png";

import sittt_Cover from "../../public/images/sittt_cover.png";

export const projectList: Project[] = [
  {
    id: 10,
    title: "SIT KMUTT Time Table",
    description: "",
    type: "Website",
    features: [

    ],
    status: "github",
    cover: sittt_Cover,
    role: "Full Stack Developer + Database Developer",
    frontend: "React JS + Typescript + Chakra UI + Redux + React Query + Zod",
    backend: "C# + .NET Core + Entity Framework",
    database: "MySQL",
    deploy: "Docker + Linux Ubuntu VM + nginx",
    link: "https://github.com/S-nudhana/SIT_Timetable"
  },
  {
    id: 1,
    title: "SIT KMUTT Certificate",
    description:
      "Internal use web application project that allows students who participate the event construct by SIT KMUTT to generate a certificate and manage features the event by SIT admin and professor.",
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
    cover: Cer_Cover,
    role: "Technical Architech + Full Stack Developer + UI/UX Designer + Database Developer",
    frontend: "React JS + Typescript + Chakra UI + ChartJS",
    backend: "Node.js + ExpressJS + Typescript",
    database: "MySQL",
    deploy: "Docker + Linux Ubuntu VM + nginx",
    link: "https://certificate.sit.kmutt.ac.th",
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
    role: "Technical Architech + Full Stack Developer + UI/UX Designer",
    frontend: "React JS + Typescript + MUI + Redux JS + Grafana",
    backend: "Node.JS + ExpressJS + Typescript",
    database: "Influx DB",
    deploy: "Docker + Linux Ubuntu VM + nginx",
    link: "https://pm25project.sit.kmutt.ac.th",
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
    role: "Full Stack Developer + UI/UX Designer + Database Architect",
    frontend: "React JS + Tailwind CSS + Daisy UI",
    backend: "Node.JS + ExpressJS + Prisma + MinIO",
    database: "PostgreSQL",
    deploy: "Docker + Linux Ubuntu VM + nginx",
    link: "https://github.com/KMUTT-CampusLink",
  },
  {
    id: 8,
    title: "VacciTrack",
    description:
      "A Flutter application designed to track the vaccination status of users and their family members. It allows users to set reminders for upcoming vaccinations, add family members, and receive vaccination recommendations based on age.",
    features: [
      "Family Member Management",
      "Vaccine History Logging",
      "Vaccine Appointment Management",
      "Vaccine Notification Reminder",
      "Age Based Vaccination Recommendation",
    ],
    type: "Application",
    status: "github",
    role: "Full Stack Developer + UI/UX Designer + Database Developer",
    cover: VC_Cover,
    subImage: [VC1, VC2, VC3, VC4, VC5, VC6, VC7],
    frontend: "Flutter + Flutter Material",
    backend: "Hono + Typescript",
    database: "Firebase Realtime Database + Firestore Database",
    link: "https://github.com/G3-VacciTrack",
  },
  {
    id: 6,
    title: "ReDine",
    description:
      "A Flutter app that helps reduce food waste by suggesting personalized recipes using TheMealDB and my custom algorithm. It recommends meals based on available ingredients and least ingredients to by to help users exploring new recipe and reduce waste. We also develop further by implementing AI trained model to improve searching algorithm and add ingredients scanner from image to enhance user experience.",
    features: [
      "Personalized Recipe Suggestions",
      "Category Meal Suggestions",
      "Searching Meal by Ingredients",
      "Custom Searching Algorithm + Menu Display Algorithm",
      "Searching filter by Allergy, Avoidance, Category and Nationality",
      "Auto Complete Input",
      "Step by Step Cooking Method + Youtube Video",
      "Menu Description",
      "Ingredient + Measurement",
      "User Allergy Memorize",
      "User Login + Register",
      "AI powered searching algorithm",
      "Ingredients Scanner from image"
    ],
    type: "Application",
    status: "github",
    role: "Technical Architech + Full Stack Developer + UI/UX Designer",
    cover: Re_Cover,
    subImage: [Re2, Re3, Re4, Re5, Re6, Re7],
    frontend: "Flutter + Flutter Material",
    backend: "Hono + Typescript + FastAPI + Python",
    ai_trained_model: "Custom Model using Google Colab",
    database: "Firebase realtime database + Firestore database",
    deploy: "Docker + Linux Ubuntu VM (Backend)",
    link: "https://github.com/orgs/ReDine-Flutter-Project-G4/repositories",
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
    role: "Full Stack Developer + UI/UX Designer + Database Developer",
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
      "Static time table website for participants in Digital Product Development class, collaboration between SIT KMUTT and Adirek.co to display course schedule of the class.",
    features: ["Static Time Table", "Time Line Display Style"],
    type: "Website",
    status: "github",
    role: "Frotnend Developer + UI/UX Designer",
    cover: DPM_Cover,
    subImage: [DPM1, DPM2],
    frontend: "React JS + Typescript + Chakra UI",
    deploy: "Docker + Linux Ubuntu VM + nginx",
    link: "https://github.com/S-nudhana/KMUTT-SIT-Digital-Product-Development",
  },

];
