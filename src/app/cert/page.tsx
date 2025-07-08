'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from "next/image"

import BackBTN from "@/components/BackBTN";

import type { Expertise } from '@/types/expertise'

export default function CertPage() {
    const searchParams = useSearchParams()
    const [data, setData] = useState<Expertise>()

    useEffect(() => {
        const rawData = searchParams.get('data')
        if (rawData) {
            try {
                setData(JSON.parse(rawData))
            } catch (err) {
                console.error('Invalid JSON in data param:', err)
            }
        }
    }, [searchParams])

    return (
        <div className="md:ml-[260px] text-lightGray flex flex-col lg:justify-start gap-3 lg:gap-7 w-full min-h-[70vh]">
            <BackBTN />
            <h1 className="text-3xl font-bold text-yellow">
                {data?.title} Certificates
            </h1>
            <p className='text-gray'>{data?.longDescription}</p>
            <div className="flex flex-col md:flex-row flex-wrap gap-6">
                {data?.link && data.link.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center pt-4 rounded-xl">
                        <Image
                            src={item.img}
                            alt={item.text}
                            width={300}
                            height={200}
                            className="rounded-lg"
                        />
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 text-gray hover:underline underline-offset-2 cursor-none"
                        >
                            {item.text}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
