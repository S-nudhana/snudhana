"use client";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/section/About";
import Projects from "@/components/section/Projects";
import Stack from "@/components/section/Stack";
import Contact from "@/components/section/Contact";

export default function page() {
  return (
    <div className="font-primary">
      <Navbar />
      <div className="mt-[100px] flex justify-center">
        <div className="flex flex-col md:flex-row gap-6 w-[80%] lg:w-[75%]">
          <Sidebar />
          <div className="md:ml-[260px] text-lightGray flex flex-col gap-7 w-full">
            <About />
            <Projects />
            <Stack />
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

