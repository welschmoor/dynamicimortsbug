import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import cn from "clsx";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("relative", inter.className)}>
        <Link className="absolute left-5 top-5 text-xl" href={"/"}>
          &lt; Home
        </Link>
        {children}
      </body>
    </html>
  );
}
