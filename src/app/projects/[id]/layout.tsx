'use client'

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="font-primary cursor-none">
                <Navbar />
                <div className="mt-[80px] lg:mt-[100px] flex justify-center">
                    <div className="flex flex-col md:flex-row gap-6 w-[90%] lg:w-[75%]">
                        <Sidebar />
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}