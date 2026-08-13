import type { Metadata, Viewport } from "next";
import { Poppins, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SadanLearn — Sanjoe Sadan Convent School",
  description:
    "A digital learning space and student-support platform for the Sanjoe Sadan Convent School community in Bengaluru.",
  keywords: [
    "Sanjoe Sadan Convent School",
    "SadanLearn",
    "LMS",
    "Bengaluru school",
    "Service Learning",
    "Education",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#12324D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSerifDisplay.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF7F3] text-[#1F2328] antialiased selection:bg-[#F4C7C3] selection:text-[#12324D]">
        {children}
      </body>
    </html>
  );
}
