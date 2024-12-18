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
        name: 'Github',
        icons: FaGithub,
        link: "https://github.com/S-nudhana",
    },
    {
        name: 'Linkedin',
        icons: FaLinkedin,
        link: "",
    },
    {
        name: 'Facebook',
        icons: FaFacebook,
        link: "https://www.facebook.com/profile.php?id=100027228291495",
    },
    {
        name: 'Instagram',
        icons: FaInstagram,
        link: "https://www.instagram.com/nnaeeeeeeeee",
    }
]

export default function Contact() {
    return (
        <section id="contact" className="px-10">
            <div className="w-full flex flex-col items-center text-deepNavy font-primary font-medium pt-2">
                <h1 className="text-[22px] font-primary underline underline-offset-4 tracking-wider pb-[20px]">Contact</h1>
                <Button variant="link" className="text-[18px]">
                    <HiOutlineMail style={{ width: "25px", height: "25px" }}/><a href="mailto:nu37317@gmail.com">nu37317@gmail.com</a>
                </Button>
                <div className="flex gap-10 py-[50px]">
                    {contactLink.map((link, index) => (
                        <Button variant="link" size="icon" key={index} className="hover:text-slateBlue">
                            <a href={link.link}><link.icons style={{ width: "40px", height: "40px" }}/></a>
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    )
}
