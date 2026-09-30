import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Bhardwaj — AI/ML Engineer & Software Developer",
  description:
    "Portfolio of Aditya Bhardwaj — Computer Science student building projects across AI, machine learning, distributed software systems, and creative technology.",
  keywords: [
    "Aditya Bhardwaj",
    "AI/ML Engineer",
    "Software Developer",
    "Computer Science",
    "Portfolio",
    "PyTorch",
    "Next.js",
    "Systems Architecture",
    "Machine Learning",
    "OpenCV",
    "PostgreSQL",
  ],
  authors: [{ name: "Aditya Bhardwaj" }],
  creator: "Aditya Bhardwaj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adityabhardwaj.dev",
    title: "Aditya Bhardwaj — AI/ML Engineer & Software Developer",
    description:
      "Digital personal studio and interactive portfolio of Aditya Bhardwaj. Exploring machine learning, systems architecture, and creative engineering.",
    siteName: "Aditya Bhardwaj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Bhardwaj — AI/ML Engineer & Software Developer",
    description:
      "Digital personal studio and interactive portfolio of Aditya Bhardwaj.",
    creator: "@adityabhardwaj",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#090a0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-[#090a0d] text-[#f4f4f0] selection:bg-[#ccff00] selection:text-black">
        <CustomCursor />
        <Navbar />
        <main className="flex-1 w-full pt-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
