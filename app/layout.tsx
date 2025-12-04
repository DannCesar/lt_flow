import type { Metadata } from "next";
import { Goudy_Bookletter_1911, Ubuntu } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Providers } from "./providers";
import { Toaster } from "sonner";


const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const goudy = Goudy_Bookletter_1911({
  variable: "--font-goudy",
  subsets: ["latin"],
  weight: "400",
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
      <body className={`${ubuntu.variable} ${goudy.variable} antialiased`}>
        <Providers>
          <Header />

          {children}
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
