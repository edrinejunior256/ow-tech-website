
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications designed to help businesses grow.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Computer Services",
    description:
      "Professional computer support, software installation and digital assistance.",
    icon: "⌘",
  },
  {
    number: "03",
    title: "Printing & Digital Support",
    description:
      "Document preparation, printing solutions and everyday digital services.",
    icon: "▤",
  },
  {
    number: "04",
    title: "Software Solutions",
    description:
      "Custom digital systems that simplify processes and improve productivity.",
    icon: "⌬",
  },
];

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071321] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071321]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

          <a href="#home" className="flex items-center">
            <Image
              src="/ow-tech-brand.png"
              alt="OW Tech - Empowering Tomorrows Innovations"
              width={380}
              height={123}
              priority
              className="h-16 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {navigation.map(([label, link]) => (
              <a
                key={label}
                href={link}
                className="text-sm text-slate-300 transition hover:text-cyan-400"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-[#071321] transition hover:bg-white md:inline-block"
          >
            Let's Talk →
          </a>

          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-lg border border-white/20 px-4 py-2 text-sm">
              Menu ☰
            </summary>

            <div className="absolute right-0 top-12 flex w-48 flex-col gap-4 rounded-xl border border-white/10 bg-[#102438] p-5 shadow-xl">
              {navigation.map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  className="text-sm hover:text-cyan-400"
                >
                  {label}
                </a>
              ))}

              <a href="#contact" className="text-sm font-bold text-cyan-400">
                Let's Talk →
              </a>
            </div>
          </details>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative">
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2 md:py-36">

          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-semibold tracking-[0.2em] text-cyan-300">
                TECHNOLOGY • CREATIVITY • INNOVATION
              </span>
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Building a
              <span className="block text-cyan-400">Smarter</span>
              Digital Future.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              We transform ideas into practical digital solutions through
              technology, creative thinking and modern software development.
            </p>

            <p className="mt-6 text-xs font-bold tracking-[0.25em] text-amber-400">
              EMPOWERING TOMORROWS INNOVATIONS
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-full bg-cyan-400 px-8 py-4 font-bold text-[#071321] transition hover:-translate-y-1 hover:bg-white"
              >
                Explore Our Services →
              </a>

              <a
                href="#about"
                className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Discover OW Tech
              </a>
            </div>
          </div>

          {/* BRAND VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-3xl bg-cyan-400/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#15344a] to-[#091827] p-8 shadow-2xl sm:p-12">

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.25em] text-cyan-300">
                  THE OW TECH VISION
                </span>
                <span className="text-amber-400">✦</span>
              </div>

              <div className="py-12 text-center">
                <Image
                  src="/ow-tech-brand.png"
                  alt="OW Tech official branding"
                  width={500}
                  height={160}
                  className="mx-auto h-auto w-full object-contain"
                />

                <div className="mx-auto mt-7 h-1 w-14 rounded-full bg-amber-400" />

                <p className="mt-6 text-sm leading-7 text-slate-300">
                  Turning innovative ideas into practical digital solutions.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {["CREATE", "INNOVATE", "GROW"].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 py-3 text-center text-[10px] font-bold tracking-widest text-cyan-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y border-white/10 bg-[#0c1d2d]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2">

          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              ABOUT OW TECH
            </p>

            <h2 className="mt-5 max-w-lg text-4xl font-black leading-tight">
              Technology that works.
              <span className="text-cyan-400">
                {" "}Innovation that matters.
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              OW Tech is an emerging technology and digital solutions
              initiative focused on helping individuals and businesses make
              better use of technology.
            </p>

            <p>
              We are passionate about practical innovation, accessible digital
              services and creating solutions that make everyday work easier.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-28">

        <div className="mb-14 text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
            WHAT WE DO
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Our Services
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
            Practical digital services designed to support people,
            organisations and growing businesses.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-2xl border border-white/10 bg-[#102438] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-[#143047]"
            >
              <div className="text-4xl text-cyan-400">
                {service.icon}
              </div>

              <p className="mt-8 text-xs font-bold text-amber-400">
                {service.number}
              </p>

              <h3 className="mt-3 text-xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {service.description}
              </p>

              <a
                href="#contact"
                className="mt-7 inline-block text-sm font-bold text-cyan-400 transition group-hover:text-white"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-y border-white/10 bg-[#0c1d2d]">
        <div className="mx-auto max-w-7xl px-6 py-28">

          <div className="mb-14">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              OUR WORK
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Featured Project
            </h2>
          </div>

          <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#102438] md:grid-cols-2">

            <div className="flex min-h-80 items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-900/30 p-10">
              <div className="text-center">
                <div className="text-6xl font-black">
                  R<span className="text-cyan-400">S</span>
                </div>

                <p className="mt-4 text-sm font-bold tracking-[0.3em] text-slate-300">
                  REPORTSPHERE
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  SCHOOL MANAGEMENT TECHNOLOGY
                </p>
              </div>
            </div>

            <div className="p-10 md:p-14">
              <span className="text-xs font-bold tracking-widest text-cyan-400">
                EDUCATION TECHNOLOGY
              </span>

              <h3 className="mt-5 text-3xl font-black">
                ReportSphere
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                A school report management platform designed to simplify
                academic reporting, manage student performance and improve
                communication between schools and parents.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Python", "FastAPI", "SQL", "Next.js"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-28">

        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#12354a] to-[#0b1b2b] px-8 py-16 text-center sm:px-16">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              LET'S BUILD SOMETHING
            </p>

            <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-black sm:text-5xl">
              Have an idea? Let's make it happen.
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-400">
              Connect with OW Tech and let's explore how technology can help
              bring your ideas to life.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/256746320144"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cyan-400 px-8 py-4 font-bold text-[#071321] transition hover:bg-white"
              >
                Chat on WhatsApp →
              </a>

              <a
                href="mailto:edrinejunior256@gmail.com"
                className="rounded-full border border-white/20 px-8 py-4 font-bold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#050e18]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">

          <div>
            <Image
              src="/ow-tech-brand.png"
              alt="OW Tech"
              width={380}
              height={123}
              className="h-16 w-auto object-contain"
            />

            <p className="mt-2 text-xs text-slate-500">
              Empowering tomorrows innovations.
            </p>
          </div>

          <p className="text-xs text-slate-500">
            © 2026 OW Tech. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
