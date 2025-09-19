"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuMapPin } from "react-icons/lu";
import { FaAngleDown, FaAngleUp, FaGithub, FaLinkedin } from "react-icons/fa";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ExpertiseCard from "@/components/ExpertiseCard";

import { Button } from "@/components/ui/button";
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

import type { RootState } from "@/store/store";
import { setData } from "@/store/reduxSlices/dataSlice";
import { projectList } from "@/data/projectList";
import { stackList } from "@/data/stackList";
import { expertiseList } from "@/data/expertiseList";

import type { Project } from "@/types/project";
import type { Stack } from "@/types/stack";
import type { Expertise } from "@/types/expertise";

import image from "../../public/images/ProfilePicture.jpg";

export default function Page() {
  const dispatch = useDispatch();
  const storeData = useSelector((state: RootState) => state.counter);

  const [isOpen, setIsOpen] = useState<boolean>(storeData.IsOpen);
  const [selectedType, setSelectedType] = useState<string>(
    storeData.SelectedType
  );
  const [category, setCategory] = useState<string>(storeData.Category);
  const [isIpad, setIsIpad] = useState(false);

  const categorizedType = Array.from(
    new Set(projectList.map((project: Project) => project.type))
  );

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth;
      setIsIpad(width >= 768 && width <= 1080);
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    dispatch(
      setData({
        IsOpen: isOpen,
        SelectedType: selectedType,
        Category: category,
      })
    );
  }, [dispatch, isOpen, selectedType, category]);

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    setCategory(value.charAt(0).toUpperCase() + value.slice(1));
  };

  const categorizedStack = stackList.reduce<Record<string, Stack[]>>(
    (acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
    },
    {}
  );

  return (
    <div className="font-primary">
      <Navbar />
      <div className="mt-[100px] flex justify-center">
        <div className="flex flex-col md:flex-row gap-6 w-[85%] lg:w-[75%]">
          <Sidebar />
          <div className="md:ml-[260px] text-gray flex flex-col gap-7 w-full">
            <section id="#">
              <div className="md:hidden flex items-center justify-left gap-5 mb-[40px]">
                <Image
                  src={image}
                  alt="profilePic"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <h1 className="text-yellow font-[600] text-[18px]">
                    Nudhana Sarutipaisan
                  </h1>
                  <h1 className="text-gray">Software Engineer</h1>
                </div>
              </div>
              <h1 className="text-yellow text-[20px] font-[600]">About</h1>
              <div className="text-gray flex flex-col gap-2 md:gap-0">
                <h2 className="mt-[10px]">
                  Computer Science International Program student at King
                  Mongkut&#39;s University of Technology Thonburi, driven by a
                  strong passion for creating clean, efficient, and user-focused
                  digital experiences. I&#39;m particularly interested in minimalist
                  web development, where design meets functionality, and in
                  database design and development, where structure and
                  optimization play key roles in building scalable systems.
                  Eager to apply my skills to solve real-world problems and
                  continuously grow as a developer in a fast-evolving tech
                  landscape.
                </h2>
                <div className="flex items-center align-middle gap-2 mt-[15px]">
                  <LuMapPin className="text-[16px]" />
                  <h2 className="mt-[3px]">Based in Bangkok, Thailand.</h2>
                </div>
              </div>
            </section>
            <section id="expertise">
              <h1 className="text-yellow text-[20px] font-[600] mb-[20px]">
                Expertise
              </h1>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {expertiseList.map((expertise: Expertise, index: number) => (
                  <ExpertiseCard key={index} expertise={expertise}></ExpertiseCard>
                ))}
              </div>
            </section>
            <section id="project">
              <div className="flex items-center justify-between align-middle mt-[20px]">
                <h1 className="text-yellow text-[20px] font-[600]">Projects</h1>
                <Select onValueChange={handleTypeChange}>
                  <SelectTrigger className="w-[150px] lg:w-[200px] text-gray border-neutral-700 hover:border-neutral-600 duration-300 ease-in-out cursor-none">
                    <SelectValue placeholder={category} />
                  </SelectTrigger>
                  <SelectContent className="bg-[#201f1f] text-white border-none cursor-none">
                    <SelectItem
                      value={"all"}
                      className="z-0 text-gray hover:bg-gray focus:text-white focus:bg-transparent duration-300 ease-in-out cursor-none"
                    >
                      All
                    </SelectItem>
                    {categorizedType.map((type: string, index: number) => (
                      <SelectItem
                        key={index}
                        value={type}
                        className="z-0 text-gray hover:bg-gray focus:text-white focus:bg-transparent duration-300 ease-in-out cursor-none"
                      >
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="w-full"
              >
                <div className="flex flex-wrap justify-center md:justify-between gap-x-2">
                  {(() => {
                    const filtered = projectList
                      .filter(
                        (project) =>
                          project.type === selectedType ||
                          selectedType === "all"
                      )
                      .slice(0, isIpad ? 4 : 3);
                    const placeholders =
                      filtered.length < 3 ? 3 - filtered.length : 0;
                    return (
                      <>
                        {filtered.map((project, index) => (
                          <ProjectCard key={index} projectData={project} />
                        ))}
                        {Array.from({ length: placeholders }).map(
                          (_, index) => (
                            <div
                              key={`placeholder-${index}`}
                              className="w-[30%] invisible"
                            />
                          )
                        )}
                      </>
                    );
                  })()}
                </div>
                <CollapsibleContent>
                  <div className="flex flex-wrap justify-center md:justify-between gap-x-2">
                    {(() => {
                      const filtered = projectList
                        .filter(
                          (project) =>
                            project.type === selectedType ||
                            selectedType === "all"
                        )
                        .slice(isIpad ? 4 : 3);
                      const placeholders = filtered.length % 3;
                      return (
                        <>
                          {filtered.map((project, index) => (
                            <ProjectCard key={index} projectData={project} />
                          ))}
                          {Array.from({ length: placeholders }).map(
                            (_, index) => (
                              <div
                                key={`placeholder-${index}`}
                                className="w-[30%] invisible"
                              />
                            )
                          )}
                        </>
                      );
                    })()}
                  </div>
                </CollapsibleContent>
                <CollapsibleTrigger
                  asChild
                  className={`${projectList.filter(
                    (project) =>
                      project.type === selectedType || selectedType === "all"
                  ).length <= 3
                    ? "hidden"
                    : ""
                    }`}
                >
                  <button className="flex items-center gap-2 mx-auto text-gray hover:text-white transition duration-300 cursor-none">
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
            <section id="stack">
              <h1 className="text-yellow text-[20px] font-semibold">
                Development Stack
              </h1>
              <div>
                {Object.entries(categorizedStack).map(([category, items]) => (
                  <div key={category} className="mt-4">
                    <h2 className="text-white capitalize">{category}</h2>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item.name}
                          className="text-gray bg-gray-900 p-1 rounded-md"
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section id="contact">
              <h1 className="text-yellow text-[20px] font-[600]">Contact</h1>
              <p className="text-gray mt-[10px]">
                For work, mail me at{" "}
                <a
                  href="mailto:nu37317@gmail.com"
                  className="text-white hover:underline underline-offset-[3px] cursor-none"
                >
                  nu37317@gmail.com
                </a>
              </p>
              <div className="mt-[15px] flex items-center gap-3">
                <Button className="bg-[#272626] hover:bg-[#222121] text-gray hover:text-white cursor-none">
                  <Link
                    href="https://github.com/S-nudhana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-none"
                  >
                    <FaGithub className="cursor-none" />
                  </Link>
                </Button>
                <Button className="bg-[#272626] hover:bg-[#222121] text-gray hover:text-white cursor-none">
                  <Link
                    href="https://www.linkedin.com/in/nudhana-sarutipaisan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-none"
                  >
                    <FaLinkedin className="cursor-none" />
                  </Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
