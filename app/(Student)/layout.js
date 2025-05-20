import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ToasterClient from "./ToasterClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-learning",
  description: "E-learning platform for students and teachers to learn and teach online ",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ToasterClient />
      </body>
    </html>
  );
}