'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { FaAngleLeft } from "react-icons/fa6";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className="group w-[70px] font-primary bg-transparent hover:bg-transparent text-gray hover:text-white duration-200 ease-in-out gap-1 flex justify-start items-center p-0 m-0"
    >
      <FaAngleLeft />
      <span className="text-[16px] text-gray group-hover:translate-x-[4px] group-hover:text-white duration-200 ease-in-out">
        Back
      </span>
    </Button>
  );
}
