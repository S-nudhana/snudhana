import Img from "../../../public/images/ProfilePicture.jpg"
import BackBTN from "@/components/BackBTN";

export default function page() {
    return (
        <div className="md:ml-[260px] text-lightGray flex flex-col lg:justify-start gap-3 lg:gap-7 w-full">
            <BackBTN />
            <div className='justify-center items-center flex flex-col lg:justify-start lg:items-start w-full'>
                <div>
                    <h1 className="text-3xl font-bold text-yellow">Resume</h1>
                    <div className="w-full flex justify-center items-center md:justify-start md:items-start mt-[20px]">
                        <img src={Img.src} alt="" className="w-[100%] md:w-[80%] h-auto shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
