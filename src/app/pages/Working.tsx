import React from "react";

interface WorkingExperience {
  title: string;
  workingProject: {
    name: string;
    description: string;
    role: string;
  }[];
}

const workingExperiences: WorkingExperience[] = [
  {
    title: "SIT Employment Scholarship 2023-2025",
    workingProject: [
      {
        name: "SIT Certificate",
        description:
          "This project is colaborate project with me and friend for building a web application that allows students to generate a certificate from participated SIT KMUTT events and manage the event by SIT admin and professor.",
        role: "Fullstack Developer + UX/UI Designer + Database Designer",
      },
      {
        name: "SIT PM2.5 Display",
        description:
          "This project is a web application that displays PM 2.5 data and graph of PM 2.5 value of a period of time from the sensor around SIT Building and CB2 Building in SIT KMUTT area.",
        role: "Fullstack Developer + UX/UI Designer",
      },
    ],
  },
];

export default function Working() {
  return (
    <section id="working">
      <div className="w-full h-100dvh text-deepSlate font-primary font-normal pb-[40px]">
        <h1 className="text-[30px] md:text-[40px] underline underline-offset-[15px] tracking-wider flex justify-center text-midnightBlue">
          Working Experiences
        </h1>
        <div className="w-[100%]">
          {workingExperiences.map((experience, index) => (
            <div
              key={index}
              className="flex px-10 lg:px-32 justify-center gap-4 pt-[30px] w-[100%]"
            >
              <div>
                <div className="flex flex-col gap-[20px]">
                  <h1 className="text-[24px] font-primary font-semibold text-midnightBlue">
                    {experience.title}
                  </h1>
                  {experience.workingProject.map((project, index) => (
                    <div key={index} className="flex flex-col gap-3">
                      <h1 className="text-[18px] font-primary font-semibold text-midnightBlue">
                        {project.name}
                      </h1>
                      <p className="font-secondary font-medium text-deepSlate">
                        Description : {project.description}
                      </p>
                      <p className="font-secondary font-medium text-deepSlate">
                        Role : {project.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
