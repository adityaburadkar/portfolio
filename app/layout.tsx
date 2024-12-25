import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";
import { cn } from "@/lib/utils";
import GrainEffect from "@/components/visualEffects/grain-effect";
import Cursor from "@/components/cursor/cursor"; // Adjust the path as per your project structure

const MainFont = Bricolage_Grotesque({ subsets: ["latin"]});
const OswaldFont = Oswald({ subsets: ["latin"], variable:"--font-oswald"});
const SGFont = localFont({
  src:"../public/assets/fonts/SpaceGroteskRegular.otf",
  variable:"--font-SGFont",
})

//Metadata
export const metadata: Metadata = {
  title: "ADITYA BURADKAR",
  description: "ADITYABURADKAR OFFICIAL PORTFOLIO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          MainFont.className,
          OswaldFont.variable,
           SGFont.variable
           )}>
            
            <GrainEffect />
            <Cursor color="#fff" />
            {children}
      </body>
    </html>
  );
}
