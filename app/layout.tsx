import type { Metadata } from "next";
import { IBM_Plex_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "400", "500", "600", "700"], // or any weight(s) you need
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"], // or any weight(s) you need
});

export const metadata: Metadata = {
  title: "Libracore",
  description:
    "LibraCore is a comprehensive university library management system designed to streamline book borrowing, tracking, and inventory management. Built for efficiency and scalability, it empowers libraries to deliver a seamless experience for students, faculty, and administrators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
