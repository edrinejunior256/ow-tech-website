
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PROJECTS", href: "/projects" },
  { name: "INDUSTRIES", href: "/industries" },
  { name: "CONTACT", href: "/contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 w-full px-4 pt-3">
      <div className="mx-auto max-w-[1450px] overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/10">
        <div className="flex min-h-[82px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-9">

          {/* COMPANY LOGO */}
          <Link
            href="/"
            aria-label="OW Technologies Home"
            className="shrink-0"
          >
            <Image
              src="/ow-tech-brand.png"
              alt="OW Technologies"
              width={230}
              height={90}
              priority
              className="h-[62px] w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden flex-1 items-center justify-center gap-4 lg:flex xl:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-sm font-bold tracking-wide text-[#102A4C] transition-colors duration-200 hover:text-[#2563EB]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* DESKTOP PROJECT BUTTON */}
          <Link
            href="/contact"
            className="hidden shrink-0 items-center justify-center rounded-full bg-[#102A4C] px-7 py-3.5 text-xs font-bold tracking-wider text-white shadow-md transition-all duration-200 hover:bg-[#2563EB] lg:inline-flex"
          >
            START A PROJECT
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 items-center justify-center rounded-full border-2 border-[#102A4C] bg-white px-5 text-sm font-bold tracking-wide text-[#102A4C] transition-all duration-200 hover:bg-[#102A4C] hover:text-white lg:hidden"
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <nav className="border-t border-slate-200 bg-white px-5 py-6 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-5 py-4 text-sm font-bold tracking-wide text-[#102A4C] transition-colors hover:bg-blue-50 hover:text-[#2563EB]"
                >
                  {item.name}
                </Link>
              ))}

              {/* MOBILE PROJECT BUTTON */}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-flex w-fit items-center justify-center rounded-full bg-[#102A4C] px-7 py-4 text-xs font-bold tracking-wider text-white shadow-md transition-colors hover:bg-[#2563EB]"
              >
                START A PROJECT
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
