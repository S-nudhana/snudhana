import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  backend?: string;
  picture?: string[];
}

export default function ProjectDisplay({
  index,
  project,
}: ProjectDisplayProps) {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full font-primary">
        <AccordionItem value="item" className="border-[#afafaf] border-b">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex gap-0 w-full items-center justify-between md:justify-start">
              <h4 className="text-[14px] md:text-[18px] text-black">
                {index + 1}. {project.name}:
              </h4>
              <a
                href={`${project.link}`}
                className={`${
                  project.link
                    ? "text-deepBlue hover:underline hover:underline-offset-2"
                    : "text-gray-500"
                } p-[10px]`}
              >
                {project.linkType}
              </a>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-darkGray font-secondary font-medium text-[16px] flex flex-col gap-2">
            <div>
              <p>- {project.description}</p>
              <p>- Frontend: {project.frontend}</p>
              <p>{project.backend ? `- Backend: ${project.backend}` : ""}</p>
              <div className={`flex justify-center ${project.picture ? "" : "hidden"} py-[10px]`}>
                <Carousel className="w-full max-w-[80%]">
                  <CarouselContent>
                    {project.picture?.map((img, index) => (
                      <CarouselItem key={index} className="md:basis-1/2">
                        <div className="p-1">
                          <img
                            key={index}
                            src={img}
                            alt={project.name}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
