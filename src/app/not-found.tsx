import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaHome } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

const NotFound = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen text-gray gap-[20px] px-[30px]'>
      <div className='flex flex-row items-center justify-center text-yellow gap-[20px] text-[20px]'>
        <h1 className='font-semibold'>404</h1>
        <Separator orientation="vertical" className='bg-yellow'/>
        <h1>Page Not Found</h1>
      </div>
      <p className='text-center'>Oops! The page you are looking for does not exist.</p>
      <Link href="/">
        <Button className="mt-[15px] text-gray hover:text-white bg-[#272626] hover:bg-[#272626] gap-2 cursor-none">
          <FaHome />Go back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
