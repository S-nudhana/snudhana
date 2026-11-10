import Image from "next/image";

import { educationList } from "@/data/educationList";

export default function EducationSection() {
  return (
    <section id="education">
      <h1 className="font-display text-yellow text-[28px] mb-[20px]">
        Education
      </h1>

      <div className="flex flex-col gap-8">
        {educationList.map((education) => (
          <article key={education.institution} className="flex gap-4">
            {education.logo && (
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-neutral-800">
                <Image
                  src={education.logo}
                  alt={`${education.institution} logo`}
                  fill
                  sizes="44px"
                  unoptimized
                  className="object-contain p-1"
                />
              </div>
            )}

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h2 className="font-semibold text-white">
                  {education.institution}
                </h2>
                <span className="shrink-0 text-[13px] text-neutral-500">
                  {education.period}
                </span>
              </div>

              <p className="text-gray">{education.degree}</p>

              {education.grade && (
                <p className="mt-1 text-neutral-500">
                  Grade: {education.grade}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
