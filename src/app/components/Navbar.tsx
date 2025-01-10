"use client";

import { useState, useEffect } from "react";
import "../style/underlineAnimation.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetDescription,
} from "@/components/ui/sheet";

interface tabLink {
  href: string;
  title: string;
}

const tabLink: tabLink[] = [
  { href: "#", title: "Home" },
  { href: "#project", title: "Project" },
  { href: "#stack", title: "Tech Stack" },
  { href: "#contact", title: "Contact" },
];

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleTabClick = () => {
    setIsSheetOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`font-primary fixed top-0 left-0 w-full py-3 px-10 backdrop-blur-2xl bg-softWhite/30 transition-transform z-50 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full flex justify-between md:justify-center text-center font-medium text-[26px] md:pb-8">
        <a href="#" className="text-black cursor-pointer">
          S n u d h a n a
        </a>
        <Sheet open={isSheetOpen} onOpenChange={(open) => setIsSheetOpen(open)}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className={`flex md:hidden transform transition-all duration-100 ease-in-out ${
                isSheetOpen ? "opacity-20" : "opacity-100"
              }`}
              size="icon"
            >
              <HiOutlineMenuAlt1
                style={{ width: "30px", height: "30px", color: "#373737" }}
              />
            </Button>
          </SheetTrigger>
          <SheetContent side={"right"} className="w-full bg-softBeige">
            <SheetClose />
            <SheetHeader className="h-full flex items-center pt-[30%]">
              <SheetTitle className="text-black text-[24px]">Menu</SheetTitle>
              <hr className="w-[80%] border-t border-black mb-[20px]" />
              <div className="flex flex-col gap-16 pt-[40px]">
                {tabLink.map((link, index) => (
                  <SheetTitle
                    key={index}
                    className="font-primary font-medium text-charcoalGray"
                  >
                    <a href={link.href} onClick={handleTabClick}>
                      {link.title}
                    </a>
                  </SheetTitle>
                ))}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex justify-center items-center gap-[8%] font-medium">
        {tabLink.map((link, index) => (
          <a key={index} href={link.href} className="underline-animation">
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
