import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface MenuItem {
  id: string;
  title: string;
  href: string;
  path: string;
}

const menu: MenuItem[] = [
  {
    id: "about",
    title: "Home",
    href: "#",
    path: "/#",
  },
  {
    id: "projects",
    title: "Projects",
    href: "#project",
    path: "/#project",
  },
  {
    id: "stacks",
    title: "Stacks",
    href: "#stack",
    path: "/#stack",
  },
  {
    id: "contact",
    title: "Contact",
    href: "#contact",
    path: "/#contact",
  },
];

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isTop, setIsTop] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(true);
  const pathname = usePathname();

  const router = useRouter();
  const isInProjectPage = pathname.includes("projects");

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
      setIsTop(window.scrollY < 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTabClick = (): void => {
    setIsSheetOpen(false);
  };

  return (
    <div
      className={`flex justify-between md:hidden font-primary fixed top-0 left-0 w-full py-5 px-10 backdrop-blur-xl bg-white/30 transition-transform z-50 ${visible || isTop ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <a href="#" className="text-white font-[600] text-[24px] cursor-pointer">
        Snudhana
      </a>
      <Sheet
        open={isSheetOpen}
        onOpenChange={(open: boolean) => setIsSheetOpen(open)}
      >
        <SheetTrigger asChild>
          <Button variant="ghost" className={`hover:bg-transparent lg:hidden`}>
            <motion.div
              className="hamburger-icon"
              initial={false}
              animate={{
                rotate: isSheetOpen ? 45 : 0,
              }}
            >
              <div
                className={`w-6 h-[3px] bg-white transition-transform duration-300 ease-in-out mb-[5px] ${isSheetOpen ? "rotate-45 opacity-0" : ""
                  }`}
              />
              <div
                className={`w-4 h-[3px] bg-white transition-opacity duration-300 ease-in-out mb-[5px] ${isSheetOpen ? "rotate-45 opacity-0" : ""
                  }`}
              />
              <div
                className={`w-6 h-[3px] bg-white transition-transform duration-300 ease-in-out ${isSheetOpen ? "rotate-45 opacity-0" : ""
                  }`}
              />
            </motion.div>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full bg-black border-none">
          <SheetClose />
          <SheetHeader className="h-full flex items-center md:items-start md:px-10 pt-[20px]">
            <SheetTitle className="text-white text-[24px] mb-[20px]">Menu</SheetTitle>
            <Separator className='bg-gray' />
            <div className="flex flex-col gap-10 pt-[40px]">
              {menu.map((item, key) => {
                const handleClick = (e: React.MouseEvent) => {
                  if (isInProjectPage) {
                    e.preventDefault();
                    router.push(item.path);
                  }
                };
                return (
                  <Button
                    key={key}
                    asChild
                    variant="ghost"
                    className="font-primary font-medium text-gray w-full hover:bg-transparent text-[20px] hover:text-gray"
                    onClick={() => {
                      handleClick;
                      handleTabClick();
                    }}
                  >
                    <a href={isInProjectPage ? item.path : item.href}>{item.title}</a>
                  </Button>
                );
              })}
            </div>
            <h1 className="pt-[50px] font-primary text-yellow font-semibold">
              @S n u d h a n a
            </h1>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div >
  );
}