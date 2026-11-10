'use client';

import { Lato, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";

import LenisProvider from "@/components/LenisProvider";
import Dither from "@/components/Dither";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-primary",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${instrumentSerif.variable}`}>
      <head>
        <link rel="icon" href="/images/Sn.png" />
        <title>snudhana</title>
      </head>
      <body>
        <div className="fixed inset-0 h-[100lvh] z-0 pointer-events-none">
          <Dither
            palette={["#0f0e0e", "#191817", "#232221", "#2d2b2a"]}
            ditherMode="bayer"
            colorNum={4}
            pixelSize={2}
            waveSpeed={0.05}
            waveFrequency={3}
            waveAmplitude={0.3}
            mouseEffect="erase"
            mouseRadius={0.3}
            clickRipple={false}
          />
        </div>
        <div className="relative z-10">
          <LenisProvider>
            <Provider store={store}>{children}</Provider>
          </LenisProvider>
        </div>
      </body>
    </html>
  );
}
