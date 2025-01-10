"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogOverlay,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface StackItem {
  type: string;
  description: string;
  detail: string[];
  img?: img[];
}

interface img {
  title: string;
  img: string[];
}

interface StackCardProps {
  data: StackItem[];
  title: string;
  style: string;
}

export default function StackCard({ data, title, style }: StackCardProps) {
  return (
    <Card className={`font-primary shadow-none border-none ${style} bg-softWhite`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-[20px] text-black">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {data.map((item, index) => (
          <div key={index} className="lg:flex lg:justify-between">
            <CardDescription className="font-secondary font-medium">
              {item.detail.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
            </CardDescription>
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex items-end pt-[10px] lg:pt-0">
                  <Button className="rounded-full w-full bg-charcoalGray hover:bg-black transition duration-300 ease-in-out">
                    See more
                  </Button>
                </div>
              </DialogTrigger>
              <DialogOverlay className="bg-black opacity-50" />
              <DialogContent className="w-[85%] rounded-lg bg-softWhite">
                <DialogClose className="focus:ring-"/>
                <DialogHeader>
                  <DialogTitle className="font-medium text-[20px] text-black">
                    {item.type}
                  </DialogTitle>
                  <DialogDescription className="font-secondary text-charcoalGray">
                    {item.description}
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="w-[100%] h-auto max-h-[500px] rounded-lg">
                  <div>
                    {item.img?.map((img, idx) => (
                      <div key={idx} className="flex flex-col gap-2">
                        <h3 className="font-medium text-[16px] text-black">{img.title}</h3>
                        {img.img.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            className="w-[100%] h-auto object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
