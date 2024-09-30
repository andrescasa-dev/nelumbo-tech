import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Technical Interview",
  description: "Nelumbo Technical Interview by Andres Castellanos",
};

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        <div className="min-h-svh space-y-8 bg-background md:space-y-12">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
