import Link from "next/link";

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
                    <Link href={{ pathname: '/cert', query: { data: JSON.stringify(expertise) } }} className={`hover:underline underline-offset-2 bg-transparent text-white p-0 h-0 ml-2 ${expertise.link ? "" : "hidden"} cursor-none`}>
                        See Badge
                    </Link>
                </p>
            </div>
        </div >
    )
}

