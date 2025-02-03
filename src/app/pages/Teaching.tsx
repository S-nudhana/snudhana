import "../style/parallelogramBackground.css";

interface teachingItem {
  subject: string;
}

const teachingItems: teachingItem[] = [
  {
    subject: "Java fundemental and Object-Oriented Programming (OOP)",
  },
  {
    subject: "Javascript for beginner",
  },
  {
    subject: "Node.js and Express.js Backend Development",
  },
  {
    subject: "SQL and Database Management",
  },
  {
    subject: "Git and command line usage",
  },
];

export default function Teaching(): JSX.Element {
  return (
    <section id="teaching">
      <div className="w-full h-100dvh text-deepSlate font-primary font-normal mb-[40px]">
        <h1 className="text-[30px] md:text-[40px] underline underline-offset-[15px] tracking-wider flex justify-center mb-[-32px] lg:mb-[-40px] z-10 relative text-midnightBlue">
          Teaching Experiences
        </h1>
        <div className="parallelogram-midnightBlue z-0 relative font-primary text-midnightBlue lg:text-stormBlue">
          {teachingItems.map((item, index) => (
            <h1
              key={index}
              className="flex justify-center items-center text-center p-[20px] lg:text-[18px] hover:text-midnightBlue duration-200 cursor-pointer"
            >
              {item.subject}
            </h1>
          ))}
        </div>
      </div>
    </section>
  );
}
