import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <section id="contact">
            <h1 className="text-yellow text-[20px] font-[600]">Contact</h1>
            <p className='text-gray mt-[10px]'>
                Mail me at <a href="mailto:nu37317@gmail.com" className='text-white hover:underline underline-offset-[3px] cursor-pointer'>nu37317@gmail.com</a>
            </p>
            <div className="mt-[15px] flex items-center align-middle gap-3">
                <Button className="bg-[#272626] hover:bg-[#222121] text-gray hover:text-white duration-300 ease-in-out">
                    <Link href='https://github.com/S-nudhana' target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </Link>
                </Button>
                <Button asChild className=" bg-[#272626] hover:bg-[#222121] text-gray hover:text-white duration-300 ease-in-out">
                    <Link href='https://www.linkedin.com/in/nudhana-sarutipaisan/' target="_blank" rel="noopener noreferrer" >
                        <FaLinkedin />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
