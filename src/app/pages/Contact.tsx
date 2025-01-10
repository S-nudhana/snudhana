import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

import { Button } from "@/components/ui/button";

interface contactLink {
  name: string;
  icons: any;
  link: string;
}

const contactLink: contactLink[] = [
  {
    name: "Github",
    icons: FaGithub,
    link: "https://github.com/S-nudhana",
  },
  {
    name: "Linkedin",
    icons: FaLinkedin,
    link: "",
  },
  {
    name: "Facebook",
    icons: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=100027228291495",
  },
  {
    name: "Instagram",
    icons: FaInstagram,
    link: "https://www.instagram.com/nnaeeeeeeeee",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-lightBeige px-10">
      <div className="w-full flex flex-col items-center text-charcoalGray font-primary font-medium pt-[20px]">
        <h1 className="text-[22px] font-primary underline underline-offset-4 tracking-wider pb-[20px] text-black">
          Contact
        </h1>
        <Button variant="ghost" className="hover:bg-transparent">
          <a
            className="flex justify-center items-center gap-2 h-5 text-[17px] text-black hover:text-darkGray transition-all ease-in-out duration-300"
            href="mailto:nu37317@gmail.com"
          >
            <HiOutlineMail className="w-[20px] h-[20px]" />
            <span>nu37317@gmail.com</span>
          </a>
        </Button>
        <div className="flex gap-10 py-[30px]">
          {contactLink.map((link, index) => (
            <Button
              variant="link"
              size="icon"
              key={index}
              className="text-charcoalGray hover:text-darkGray"
            >
              <a href={link.link}>
                <link.icons style={{ width: "40px", height: "40px" }} />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
