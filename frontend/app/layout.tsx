import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { GlobalProvider } from "@/components/GlobalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orchave",
  description: "Making web2 anaytics trustless with the power of mass adoption.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" /></head>      <body className={inter.className}>
      <div className="w-full h-48 ">
        
      <GlobalProvider>
        {children} </GlobalProvider>
      </div>
      </body>
    </html>
  );
}
