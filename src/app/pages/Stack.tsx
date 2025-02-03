import StackCard from "../components/StackCard";

interface StackItem {
  type: string;
  description: string;
  detail: string[];
}

const stack: StackItem[] = [
  {
    type: "Frontend",
    description:
      "Both static and dynamic web applications that I have worked with using the following technologies and frameworks.",
    detail: [
      "Next JS",
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "Chakra UI",
      "Material UI",
      "Daisy UI",
      "Shadcn/UI",
      "Bootstrap",
      "Radix UI",
    ],
  },
  {
    type: "Backend",
    description:
      "Working on the server-side of the web application Ex. RESTful API, Backend service, Database connection and many more. The following technologies and frameworks are the ones that I have worked with.",
    detail: ["Node.JS", "ExpressJS", "ElysiaJS","Bun", "Prisma"],
  },
  {
    type: "Database",
    description:
      "Capable of working on the Database such as the Database administrator, Database designer and SQL developer. The following technologies and frameworks are the ones that I have worked with.",
    detail: [
      "MySQL",
      "InfluxDB",
      "PostgreSQL",
      "MongoDB",
      "MariaDB",
      "IBM DB2",
      "Firebase",
    ],
  },
  {
    type: "Others",
    description: "Other technologies that I have worked with",
    detail: [
      "Git",
      "Docker",
      "Linux",
      "Figma",
      "Adobe Photoshop",
      "Adobe Lightroom Classic",
      "Adobe Premiere Pro",
    ],
  },
  {
    type: "Programming Language",
    description: "Programming languages that I have worked with",
    detail: [
      "JavaScript",
      "TypeScript",
      "Java",
      "SQL",
      "Swift",
      "Dart",
    ],
  },
];

export default function Stack(): JSX.Element {
  const filterFrontend: StackItem[] = stack.filter(
    (item) => item.type === "Frontend"
  );
  const filterBackend: StackItem[] = stack.filter(
    (item) => item.type === "Backend"
  );
  const filterDatabase: StackItem[] = stack.filter(
    (item) => item.type === "Database"
  );
  const filterOthers: StackItem[] = stack.filter(
    (item) => item.type === "Others"
  );
  const filterProgrammingLanguage: StackItem[] = stack.filter(
    (item) => item.type === "Programming Language"
  );

  return (
    <section id="stack">
      <div className="w-full h-100dvh bg-cloudWhite text-deepSlate font-primary font-normal pt-3 pb-[40px]">
        <h1 className="text-[30px] md:text-[40px] underline underline-offset-[15px] tracking-wider flex justify-center text-midnightBlue">
          Tech Stack
        </h1>
        <div className="h-[100%] flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4 pt-[30px] px-[25px] width-[90%]">
          <div className="flex w-full flex-col lg:flex-row gap-[20px] items-center lg:items-stretch justify-center">
            <div className="w-[90%] lg:w-[30%] flex flex-col gap-[20px]">
              <StackCard
                data={filterFrontend}
                title="Frontend 🖥️"
                style="flex-grow"
              />
              <StackCard
                data={filterBackend}
                title="Backend ⚙️"
                style="flex-grow"
              />
            </div>
            <div className="w-[90%] lg:w-[30%] flex flex-col gap-[20px]">
              <StackCard
                data={filterDatabase}
                title="Database 🗄️"
                style="flex-grow"
              />
              <StackCard
                data={filterOthers}
                title="Others 🧰"
                style="flex-grow"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex justify-center pt-4 w-[80%] custom-width">
            <StackCard
              data={filterProgrammingLanguage}
              title="Programming Language 🛠️"
              style="flex-grow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
