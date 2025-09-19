import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

import image from "../../public/images/ProfilePicture.jpg";

import { menu } from "@/data/menuList"

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
    <div className="hidden md:flex flex-col w-[200px] gap-6 fixed">
      <Image
        src={image.src}
        alt="profilePic"
        width={80}
        height={80}
        className="rounded-full"
      />
      <div>
        <h1 className="text-yellow font-[600] text-[18px]">
          Nudhana Sarutipaisan
        </h1>
        <h1 className="text-gray">Software Engineer</h1>
      </div>
      <div className="gap-2 flex flex-col">
        {menu.map((item, index) => {
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
              } hover:bg-transparent w-full justify-start p-0 text-[16px] cursor-none`}
              onClick={handleClick}
            >
              <a href={isInProjectPage || isInResumePage ? item.path : item.href}>{item.title}</a>
            </Button>
          );
        })}
      </div>
      <h1 className="text-gray">@S_nudhana</h1>
    </div>
  );
}