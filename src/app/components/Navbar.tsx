import "../style/underlineAnimation.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

interface tabLink {
    href: string;
    title: string;
}

const tabLink = [
    { href: "#", title: "Home" },
    { href: "#project", title: "Project" },
    { href: "#stack", title: "Stack" },
    { href: "#contact", title: "Contact" },
];

export default function Navbar() {
    return (
        <div className="pb-8 px-10">
            <div className="w-full flex justify-between lg:justify-center text-center font-primary font-medium text-[26px] pb-8">
                <a href="#" className="text-deepNavy cursor-pointer">S n u d h a n a</a>
                <Sheet>
                    <SheetTrigger>
                        <Button variant="ghost" className="flex lg:hidden" size={"icon"}>
                            <HiOutlineMenuAlt1 style={{ width: "30px", height: "30px" }} className="text-deepNavy" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={"right"} className="w-full">
                        <SheetHeader className="h-full flex justify-center items-center gap-5 text-deepNavy">
                            {tabLink.map((link, index) => (
                                <SheetTitle key={index} className="font-primary font-medium">
                                    <a href={link.href} className="text-deepNavy">{link.title}</a>
                                </SheetTitle>
                            ))}
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="hidden lg:flex justify-center items-center gap-[8%]">
                {tabLink.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className="underline-animation text-deepNavy"
                    >
                        {link.title}
                    </a>
                ))}
            </div>
        </div>
    );
}
