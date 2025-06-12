'use client'

import { Lato } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-primary",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <head>
        <link rel="icon" href="/images/Sn.png" />
        <title>snudhana</title>
      </head>
      <body>
        <LenisProvider>
          <Provider store={store}>{children}</Provider>
        </LenisProvider>
      </body>
    </html>
  );
}

