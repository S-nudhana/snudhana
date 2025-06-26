import { Spiral as Hamburger } from 'hamburger-react';
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
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
    id: "expertise",
    title: "Expertise",
    href: "#expertise",
    path: "/#expertise",
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
  const isInAnotherPage = pathname.includes("projects") || pathname.includes("resume");

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
  }, [lastScrollY]);

  const handleTabClick = (): void => {
    setIsSheetOpen(false);
  };

  return (
    <div
      className={`flex justify-between align-middle items-center md:hidden font-primary fixed top-0 left-0 w-full py-2 pl-10 pr-7 bg-black transition-transform z-50 ${visible || isTop ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <a href={isInAnotherPage ? "/" : "#"} className={`text-white font-[600] text-[24px]`}>
        <h1 className={`${isSheetOpen ? "hidden" : "flex"}`}>
          Snudhana
        </h1>
      </a>
      <Sheet
        open={isSheetOpen}
        onOpenChange={(open: boolean) => setIsSheetOpen(open)}
      >
        <SheetTrigger>
          <Hamburger toggled={isSheetOpen} toggle={setIsSheetOpen} color='white' size={25} easing="ease-in-out" direction="right" rounded duration={0.3} />
        </SheetTrigger>
        <SheetContent side="right" className="w-full bg-black border-none px-10 mt-10">
          <SheetHeader className="h-full flex items-start px-5 md:px-10">
            <div className='pt-[80px]'>
              <div className="flex flex-col gap-10">
                {menu.map((item, key) => {
                  const handleClick = (e: React.MouseEvent) => {
                    if (isInAnotherPage) {
                      e.preventDefault();
                      router.push(item.path);
                    }
                  };
                  return (
                    <Button
                      key={key}
                      asChild
                      variant="ghost"
                      className="font-primary font-medium text-gray w-full hover:bg-transparent text-[20px] hover:text-gray justify-start p-0"
                      onClick={(e) => {
                        handleClick(e);
                        handleTabClick();
                      }}
                    >
                      <a href={isInAnotherPage ? item.path : item.href}>{item.title}</a>
                    </Button>
                  );
                })}
              </div>
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