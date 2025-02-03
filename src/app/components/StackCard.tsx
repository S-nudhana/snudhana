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

interface StackItem {
  type: string;
  description: string;
  detail: string[];
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

export default function StackCard({ data, title, style }: StackCardProps): JSX.Element {
  return (
    <Card className={`font-primary shadow-none border-none ${style} bg-skyMist`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-[20px] text-midnightBlue">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {data.map((item, index) => (
          <div key={index} className="lg:flex lg:justify-between">
            <CardDescription className="font-secondary font-medium">
              {item.detail.map((detail, idx) => (
                <p key={idx} className="text-deepSlate">{detail}</p>
              ))}
            </CardDescription>
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex items-end pt-[10px] lg:pt-0">
                  <Button className="rounded-full w-full bg-deepSlate hover:bg-midnightBlue transition duration-300 ease-in-out">
                    More Detail
                  </Button>
                </div>
              </DialogTrigger>
              <DialogOverlay className="bg-midnightBlue opacity-50" />
              <DialogContent className="w-[85%] rounded-lg bg-cloudWhite">
                <DialogClose className="focus:ring-"/>
                <DialogHeader>
                  <DialogTitle className="font-medium text-[20px] text-midnightBlue">
                    {item.type}
                  </DialogTitle>
                  <DialogDescription className="font-secondary text-deepSlate">
                    {item.description}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
