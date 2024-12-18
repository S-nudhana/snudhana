import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

interface ProjectDisplayProps {
  index: number;
  project: ProjectItem;
}

interface ProjectItem {
    type: string;
    name: string;
    link: string;
    linkType: string;
    description: string;
    frontend: string;
    backend: string | null;
  }

export default function ProjectDisplay({ index, project }:ProjectDisplayProps) {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item" className="border-[#c3cbd2] border-b">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex gap-0 w-full items-center justify-between md:justify-start">
              <h4 className="text-[14px] md:text-[18px]">
                {index + 1}. {project.name}:
              </h4>
              <Button variant="link" disabled={project.link ? false : true}>
                <a href={`${project.link}`} className="text-deepBlue">
                  {project.linkType}
                </a>
              </Button>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-darkSlateGray font-secondary font-medium text-[16px] flex flex-col gap-2">
            <p>- {project.description}</p>
            <p>- Frontend: {project.frontend}</p>
            <p>{project.backend ? `- Backend: ${project.backend}` : ""}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
