import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import DitherVeil from "@/components/DitherVeil";
import { Button } from "./ui/button";

import image from "../../public/images/ProfilePicture.jpg";

import { ScrambleOnHover } from "@/components/ScrambledText";
import { menu } from "@/data/menuList"

const visibleMenu = menu.filter((item) => !item.hidden);

export default function Sidebar() {
  const [currentMenu, setCurrentMenu] = useState<string>("about");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentMenu(pathname.includes("projects") ? "projects" : "about");
  }, [pathname]);

  const router = useRouter();
  const isInProjectPage = pathname.includes("projects");
  const isInResumePage = pathname.includes("resume");

  return (
    <div className="hidden md:flex flex-col w-[240px] gap-6 fixed">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full">
        <DitherVeil
          src={image.src}
          fit="cover"
          pattern="floyd"
          pixelSize={2}
          inkColor="#0f0e0e"
          paperColor="#bcbbbb"
          revealRadius={70}
          softness={0.6}
          linger={1}
          clickBurst={false}
        />
      </div>
      <div>
        <h1 className="font-display text-yellow text-[28px]">
          Nudhana Sarutipaisan
        </h1>
        <h1 className="text-gray">Software Engineer</h1>
      </div>
      <div className="gap-2 flex flex-col">
        {visibleMenu.map((item, index) => {
          const isActive = item.id === currentMenu;

          const handleClick = (e: React.MouseEvent) => {
            setCurrentMenu(item.id);
            if (isInProjectPage) {
              e.preventDefault();
              router.push(item.path);
            }
          };

          return (
            <Button
              asChild
              key={index}
              variant="ghost"
              className={`text-white ${
                isActive
                  ? "text-yellow hover:text-[#efdfab]"
                  : "text-gray hover:text-white"
              } hover:bg-transparent w-full justify-start p-0 text-[16px]`}
              onClick={handleClick}
            >
              <a href={isInProjectPage || isInResumePage ? item.path : item.href}>
                <ScrambleOnHover fontFamily="">{item.title}</ScrambleOnHover>
              </a>
            </Button>
          );
        })}
      </div>
      <h1 className="text-gray">@S_nudhana</h1>
    </div>
  );
}