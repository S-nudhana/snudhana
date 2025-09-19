"use client";

import { use, useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoLinkOutline } from "react-icons/io5";
import { type CarouselApi } from "@/components/ui/carousel";

import BackBTN from "@/components/BackBTN";
import { projectList } from "@/data/projectList";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Project } from "@/types/project";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = Number(use(params).id);
  const projects: Project[] = projectList.filter(
    (project) => project.id === id
  );
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <div className="md:ml-[260px] text-lightGray flex flex-col lg:justify-start gap-3 lg:gap-7 w-full">
        <BackBTN />
        <div className="justify-center items-center flex flex-col lg:justify-start lg:items-start w-full">
          <div className="flex flex-col lg:flex-row justify-start items-start lg:justify-between lg:items-center w-full gap-3">
            <div>
              <h1 className="text-3xl font-bold text-yellow">
                {projects[0].title}
              </h1>
              <h2 className="text-gray">{projects[0].type}</h2>
            </div>
            {projects[0].link && (
              <Button asChild className="bg-[#272626] hover:bg-[#222121] cursor-none">
                <Link
                  href={projects[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLinkOutline />
                  <span className="text-gray">
                    {projects[0].status === "website"
                      ? "Visit Website"
                      : "Visit Repository"}
                  </span>
                </Link>
              </Button>
            )}
          </div>
          <Separator className="my-[20px] bg-neutral-700" />
          <div className="w-full flex justify-center items-center">
            {projects[0].subImage &&
              <Carousel className="w-[100%] md:w-[85%] mt-[20px]" setApi={setApi}>
                <CarouselContent>
                  {projects[0].subImage?.map(
                    (image: StaticImageData, index: number) => (
                      <CarouselItem
                        key={index}
                        className={`w-full h-auto rounded-xl flex justify-center ${projects[0].type === "Application" ? "md:basis-1/2" : ""}`}
                      >
                        <div className={`overflow-hidden rounded-xl ${projects[0].type === "Website" || projects[0].type === "UX/UI" ? "" : "max-w-[300px]"}`}>
                          <Image
                            src={image.src}
                            alt={projects[0].title}
                            className="object-cover w-full h-auto"
                          />
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex bg-gray border-gray hover:bg-white hover:border-white text-black duration-200 cursor-none" />
                <CarouselNext className="hidden md:flex bg-gray border-gray hover:bg-white hover:border-white text-black duration-200 cursor-none " />
                <div className="mt-[20px] text-center text-[14px] text-muted-foreground">
                  {current} of {count}
                </div>
              </Carousel>
            }
          </div>
          <div className="text-gray mt-[30px] mb-[20px]">
            <h1 className="text-white text-[18px] mt-[10px] mb-[5px]">
              Description
            </h1>
            <h2>{projects[0].description}</h2>
            <h1 className="text-white text-[18px] mt-[30px] mb-[5px]">Role</h1>
            <h2>{projects[0].role}</h2>
            <h1
              className={`text-white text-[18px] mt-[30px] mb-[5px] ${projects[0].features ? "block" : "hidden"
                }`}
            >
              Features
            </h1>
            <div className="list-disc list-inside">
              {projects[0].features?.map((feature: string, index: number) => (
                <p key={index}>- {feature}</p>
              ))}
            </div>
            {(projects[0].frontend ||
              projects[0].backend ||
              projects[0].database) && (
                <div>
                  <h1 className="text-white text-[18px] mt-[30px] mb-[5px]">
                    Tech Stack
                  </h1>
                  {projects[0].frontend && (
                    <h2>- Frontend: {projects[0].frontend}</h2>
                  )}
                  {projects[0].backend && <h2>- Backend: {projects[0].backend}</h2>}
                  {projects[0].ai_trained_model && <h2>- AI Trained Model: {projects[0].ai_trained_model}</h2>}
                  {projects[0].database && (
                    <h2>- Database: {projects[0].database}</h2>
                  )}
                  {projects[0].deploy && (
                    <h2>- Deployment: {projects[0].deploy}</h2>
                  )}
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
}
