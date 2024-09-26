import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Technical Interview",
  description: "Nelumbo Technical Interview by Andres Castellanos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
