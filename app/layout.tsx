
import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://ow-tech-website.vercel.app"),

  title: {
    default: "OW Technologies | Software Development Company in Uganda",
    template: "%s | OW Technologies",
  },

  description:
    "OW Technologies is a Kampala, Uganda-based technology company offering custom software development, web applications, professional website design, business automation and IT consulting.",

  applicationName: "OW Technologies",

  keywords: [
    "OW Technologies",
    "software development company in Uganda",
    "software developers in Kampala",
    "custom software development Uganda",
    "website design Uganda",
    "web application development Uganda",
    "business automation Uganda",
    "IT consulting Kampala",
  ],

  alternates: {
    canonical: "/",
  },

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
