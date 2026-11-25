
import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: "OW Technologies | Digital Solutions & Innovation",
  description:
    "OW Technologies builds practical digital solutions through custom software, web applications, business automation and digital transformation.",
  verification: {
    google: "uHaPl6gcnOouSWjcE2cEaoC02BolSiRph9OQCJYh4us",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
