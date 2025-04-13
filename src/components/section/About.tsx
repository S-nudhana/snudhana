import image from '../../../public/images/ProfilePicture.jpg'
import Link from "next/link";
import { IoDocumentText } from "react-icons/io5";
import { Button } from '../ui/button'

export default function About() {
    return (
        <section id="#">
            <div className="md:hidden flex items-center justify-left gap-5 mb-[40px]">
                <img src={image.src} alt="profilePic" className="w-[80px] h-[80px] rounded-full" />
                <div className='flex flex-col gap-2'>
                    <h1 className="text-yellow font-[600] text-[18px]">Nudhana Sarutipaisan</h1>
                    <h1 className="text-gray">Software Engineer</h1>
                </div>
            </div>
            <h1 className="text-yellow text-[20px] font-[600]">About</h1>
            <div className="text-gray flex flex-col gap-2 md:gap-0">
                <h2 className="mt-[10px]">Computer Science International program student at King Monkut's University of Technology Thonburi.</h2>
                <h2>I'm interesting in minimal Web Development, Database Design and Networking.</h2>
                <h2 className='mt-[10px]'>Based in Bangkok, Thailand.</h2>
            </div>
            <Link href="/resume">
                <Button className="mt-[15px] text-gray hover:text-white bg-[#272626] hover:bg-[#272626] gap-2"><IoDocumentText />Resume</Button>
            </Link>
        </section>
    )
}
