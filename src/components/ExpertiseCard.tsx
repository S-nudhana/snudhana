import Image from "next/image"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button";


import type { Expertise } from '@/types/expertise';

export default function ExpertiseCard({ expertise }: { expertise: Expertise }) {
    return (
        <div
            className="flex items-center justify-center align-middle p-[22px] gap-7 text-gray border-[1px] border-neutral-700 rounded-2xl hover:border-neutral-500 transition duration-300 ease-in-out"
        >
            <div className="text-yellow text-[40px]">{expertise.icon}</div>
            <div className="flex flex-col">
                <h2 className="text-white font-semibold">
                    {expertise.title}
                </h2>
                <p className="text-gray">{expertise.description}
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="link" className={`bg-transparent text-white p-0 ml-2 ${expertise.img ? "" : "hidden"} cursor-none`}>
                                See Badge
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="z-50 w-auto bg-black border-neutral-700 rounded-3xl mr-[20px] md:mr-0 text-white flex gap-4">
                            {expertise.img && expertise.img.map((img, index) => (
                                <Image
                                    key={index}
                                    src={img}
                                    alt={`Badge ${index + 1}`}
                                    className="w-[150px] md:w-[200px] h-auto"
                                />
                            ))}
                        </PopoverContent>
                    </Popover>
                </p>
            </div>
        </div>
    )
}
