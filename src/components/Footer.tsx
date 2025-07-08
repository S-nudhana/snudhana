import { FaGithub, FaHandPointRight  } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="text-gray flex flex-col items-center mt-10 pb-5 md:pb-[100px] text-[14px] gap-2">
      <p>
        © 2025 Copyright All Rights Reserved - snudhana
      </p>
      <div className="flex items-center gap-2 text-neutral-500 pt-[10px]">
        <FaGithub/>
        <p>View source code of this website</p>
        <FaHandPointRight/>
        <a
          href="https://github.com/S-nudhana/snudhana"
          target="_blank"
          className="hover:underline text-neutral-400 underline-offset-[3px] cursor-none"
        >
          Click me !!
        </a>
      </div>
    </div>
  )
}
