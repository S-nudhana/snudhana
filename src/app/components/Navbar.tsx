"use client";

import { useState, useEffect } from "react";
import "../style/underlineAnimation.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

interface TabLink {
  href: string;
  title: string;
}

const tabLinks: TabLink[] = [
  { href: "#", title: "Home" },
  { href: "#project", title: "Project" },
  { href: "#stack", title: "TechStack" },
  { href: "#teaching", title: "Teaching" },
  { href: "#working", title: "Working" },
  { href: "#contact", title: "Contact" },
];

export default function Navbar(): JSX.Element {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isTop, setIsTop] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(true);

  const handleTabClick = (): void => {
    setIsSheetOpen(false);
  };

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

  return (
    <div
      className={`font-primary fixed top-0 left-0 w-full py-5 px-10 backdrop-blur-xl bg-cloudWhite/30 transition-transform z-50 ${
        visible || isTop ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full flex justify-between text-center font-medium text-[26px] md:px-10 lg:px-24">
        <a href="#" className="text-midnightBlue cursor-pointer text-[26px]">
          S n u d h a n a
        </a>
        <Sheet
          open={isSheetOpen}
          onOpenChange={(open: boolean) => setIsSheetOpen(open)}
        >
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className={`hover:bg-transparent lg:hidden`}
            >
              <motion.div
                className="hamburger-icon"
                initial={false}
                animate={{
                  rotate: isSheetOpen ? 45 : 0,
                }}
              >
                <div
                  className={`w-6 h-[3px] bg-midnightBlue transition-transform duration-300 ease-in-out mb-[5px] ${
                    isSheetOpen ? "rotate-45 opacity-0" : ""
                  }`}
                />
                <div
                  className={`w-4 h-[3px] bg-midnightBlue transition-opacity duration-300 ease-in-out mb-[5px] ${
                    isSheetOpen ? "rotate-45 opacity-0" : ""
                  }`}
                />
                <div
                  className={`w-6 h-[3px] bg-midnightBlue transition-transform duration-300 ease-in-out ${
                    isSheetOpen ? "rotate-45 opacity-0" : ""
                  }`}
                />
              </motion.div>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-cloudWhite">
            <SheetClose />
            <SheetHeader className="h-full flex items-center md:items-start md:px-10">
              <SheetTitle className="text-midnightBlue text-[24px]">Menu</SheetTitle>
              <hr className="w-[80%] md:w-full border-t border-midnightBlue mb-[20px]" />
              <div className="flex flex-col gap-10 pt-[40px]">
                {tabLinks.map((link, index) => (
                  <SheetTitle
                    key={index}
                    className="font-primary font-medium text-deepSlate"
                  >
                    <a
                      href={link.href}
                      onClick={handleTabClick}
                      className="underline-animation"
                    >
                      {link.title}
                    </a>
                  </SheetTitle>
                ))}
              </div>
                <h1 className="pt-[50px] font-primary text-stormBlue font-semibold">@S n u d h a n a</h1>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div
          className={`hidden lg:flex justify-center items-center gap-[8%] font-medium text-[18px]`}
        >
          {tabLinks.map((link, index) => (
            <a key={index} href={link.href} className="underline-animation">
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
