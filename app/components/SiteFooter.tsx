
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#10243D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.2fr] lg:gap-16">

          {/* COMPANY BRAND */}
          <div>
            <Link href="/" aria-label="OW Technologies home">
              <Image
                src="/ow-tech-brand.png"
                alt="OW Technologies logo"
                width={220}
                height={90}
                className="h-auto w-[190px] object-contain"
              />
            </Link>

            <p className="mt-3 font-serif text-sm italic text-slate-300">
              Empowering Tomorrow&apos;s Innovations
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              We create practical digital solutions through software
              development, modern technology and innovation.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-[0.15em] text-white">
              QUICK LINKS
            </h3>

            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFORMATION */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-[0.15em] text-white">
              CONTACT INFORMATION
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-lg text-slate-400">⌖</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-slate-200">
                    Kampala, Uganda
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-lg text-slate-400">☎</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Phone
                  </p>
                  <a
                    href="tel:+256746320144"
                    className="mt-1 inline-block text-sm text-slate-200 transition-colors hover:text-white"
                  >
                    +256 746 320 144
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-lg text-slate-400">✉</span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Email
                  </p>
                  <a
                    href="mailto:edrinejunior256@gmail.com"
                    className="mt-1 inline-block break-all text-sm text-slate-200 transition-colors hover:text-white"
                  >
                    edrinejunior256@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 border-t border-white/15 pt-7">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-slate-400">
              © 2026 OW Technologies. All rights reserved.
            </p>

            <p className="font-serif text-xs italic text-slate-400">
              Empowering Tomorrow&apos;s Innovations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
