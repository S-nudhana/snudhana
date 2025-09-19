import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import type { Project } from "@/types/project";

export default function ProjectCard({ projectData }: { projectData: Project }) {
  return (
    <Card className="w-full lg:w-[47%] xl:w-[31%] bg-transparent border-none shadow-none">
      <CardHeader className="px-0">
        <Image
          src={projectData.cover.src}
          alt="Project Image"
          className="h-auto w-full md:w-[auto] object-cover rounded-lg"
        />
      </CardHeader>
      <CardContent className="pb-2 flex flex-col gap-2 px-0">
        <CardTitle className="text-white">{projectData.title}</CardTitle>
        <CardDescription className="text-gray">{projectData.type}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end mt-[10px] px-0">
        <Link href={`/projects/${projectData.id}`} className="w-full">
          <Button className="w-full text-yellow bg-[#272626] hover:bg-[#222121] cursor-none">More Detail</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}