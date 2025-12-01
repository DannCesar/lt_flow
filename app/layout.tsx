import type { Metadata } from "next";
import { Ubuntu, Goudy_Bookletter_1911 } from "next/font/google";
import "./globals.css";
import {Header} from "./pages/Header";
import Sidebar from "./components/Sidebar";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ['latin'],
  weight: ["300","400","500","700"]
});

const goudy = Goudy_Bookletter_1911({
  variable: "--font-goudy",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "LTFlow",
  description: "LTFlow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${goudy.variable} antialiased`}
      >
        <Header/>
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}
