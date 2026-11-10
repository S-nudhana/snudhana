import Image from "next/image";

import { experienceList } from "@/data/experienceList";

export default function ExperienceSection() {
  return (
    <section id="experience">
      <h1 className="font-display text-yellow text-[28px] mb-[20px]">
        Experience
      </h1>

      <div className="flex flex-col gap-8">
        {experienceList.map((experience) => (
          <article key={experience.company} className="flex gap-4">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-neutral-800">
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                fill
                sizes="44px"
                unoptimized
                className="object-contain p-1"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="font-semibold text-white">{experience.company}</h2>
              {experience.summary && (
                <p className="text-gray">{experience.summary}</p>
              )}
              <p className="text-gray">{experience.location}</p>

              <ol className="ml-2 mt-5">
                {experience.roles.map((role, index) => (
                  <li
                    key={`${role.title}-${role.period}`}
                    className={`relative ml-5 ${
                      index < experience.roles.length - 1 ? "pb-7" : ""
                    }`}
                  >
                    {index < experience.roles.length - 1 && (
                      <span className="absolute -left-[21px] top-[9px] h-full w-px bg-neutral-700" />
                    )}
                    <span className="absolute -left-[26px] top-1 h-2.5 w-2.5 rounded-full bg-neutral-500 ring-4 ring-[#0f0e0e]" />

                    <h3 className="font-semibold text-white">{role.title}</h3>
                    <p className="text-gray">
                      {role.employmentType && `${role.employmentType} · `}
                      {role.period}
                    </p>

                    {role.description && (
                      <p className="mt-3 leading-relaxed text-gray">
                        {role.description}
                      </p>
                    )}

                    {role.skills && (
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-gray bg-gray-900 p-1 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
