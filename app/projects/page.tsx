
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Projects & Software Portfolio | OW Technologies",
  description:
    "Explore OW Technologies projects and digital innovations, including ReportSphere, OW Bet Intelligence and business web solutions. Discover practical software solutions developed in Uganda.",
  keywords: [
    "OW Technologies projects",
    "OW Tech portfolio",
    "software development portfolio Uganda",
    "ReportSphere",
    "OW Bet Intelligence",
    "business web solutions",
    "software projects",
    "digital innovation Uganda",
  ],
  openGraph: {
    title: "Our Projects & Software Portfolio | OW Technologies",
    description:
      "Discover software projects, business applications and digital solutions being developed by OW Technologies.",
    url: "https://ow-tech-website.vercel.app/projects",
    siteName: "OW Technologies",
    type: "website",
  },
};

const projects = [
  {
    number: "01",
    category: "EDUCATION TECHNOLOGY",
    title: "ReportSphere",
    description:
      "A digital school report management system designed to simplify academic reporting, manage student performance and improve communication between schools and parents.",
    technologies: ["FastAPI", "Next.js", "TypeScript", "SQL"],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    imageAlt: "Students learning in a modern classroom",
    status: "IN DEVELOPMENT",
  },
  {
    number: "02",
    category: "BUSINESS INTELLIGENCE",
    title: "OW Bet Intelligence",
    description:
      "A data-driven platform designed to analyse bookmaker odds, identify potential arbitrage opportunities and present useful betting market insights.",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "Data Analysis"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    imageAlt: "Business analytics displayed on a computer screen",
    status: "IN DEVELOPMENT",
  },
  {
    number: "03",
    category: "DIGITAL EXPERIENCES",
    title: "Business Web Solutions",
    description:
      "Modern web experiences that help organisations establish their digital presence, communicate their services and connect with their customers.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    imageAlt: "Developer working on a web application",
    status: "ONGOING",
  },
];

const approach = [
  {
    number: "01",
    title: "UNDERSTAND",
    description:
      "We identify the problem, understand the people involved and define the project's objectives.",
  },
  {
    number: "02",
    title: "DESIGN",
    description:
      "We plan the experience, technical structure and features needed to achieve the desired outcome.",
  },
  {
    number: "03",
    title: "DEVELOP",
    description:
      "We turn the concept into a working solution through careful development and testing.",
  },
  {
    number: "04",
    title: "IMPROVE",
    description:
      "We evaluate performance, gather feedback and identify opportunities for further improvement.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#172b45]">
      {/* HERO */}
      <section className="bg-[#102A4C] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <p className="mb-5 text-sm font-bold tracking-[0.25em] text-blue-300">
              OUR PROJECTS
            </p>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Turning Ideas Into Practical Digital Solutions.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Explore what we are building at OW Technologies. Our projects
              reflect our commitment to solving real-world problems through
              thoughtful design and technology.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold tracking-wide text-[#102A4C] transition hover:bg-blue-100"
            >
              DISCUSS A PROJECT
            </Link>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Technology professionals collaborating on a project"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-[380px] w-full rounded-2xl object-cover shadow-2xl sm:h-[480px]"
            />

            <div className="absolute -bottom-7 -left-5 rounded-xl bg-white p-6 text-[#102A4C] shadow-xl sm:-left-8">
              <p className="text-xs font-bold tracking-widest text-blue-700">
                OUR PHILOSOPHY
              </p>
              <p className="mt-2 text-lg font-bold">
                Innovation With Purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold tracking-[0.22em] text-blue-700">
              WHAT WE ARE BUILDING
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Technology Designed Around Real Problems.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-slate-600">
              We believe technology should do more than look impressive. It
              should solve meaningful problems, make work easier and create
              opportunities for growth.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our projects explore practical applications of software
              development, automation and digital innovation. We continuously
              learn, build and improve as we turn ideas into useful products.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section className="bg-slate-50 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-4 text-sm font-bold tracking-[0.22em] text-blue-700">
              SELECTED WORK
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Projects & Innovations
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              A look at selected platforms and digital solutions being
              developed under OW Technologies.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <article
                key={project.number}
                className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl lg:grid-cols-2"
              >
                <div
                  className={`relative min-h-[300px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold tracking-[0.16em] text-blue-700">
                      {project.category}
                    </span>

                    <span className="rounded-full bg-blue-50 px-4 py-2 text-[10px] font-bold tracking-wider text-blue-800">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-7 text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-7">
                    <p className="mb-4 text-xs font-bold tracking-widest text-[#102A4C]">
                      TECHNOLOGIES
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-[#102A4C] px-7 py-3.5 text-xs font-bold tracking-wider text-white transition hover:bg-blue-700"
                  >
                    ENQUIRE ABOUT THIS PROJECT
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold tracking-[0.22em] text-blue-700">
              OUR APPROACH
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              How We Bring Ideas to Life.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Every project follows a thoughtful process that keeps the
              problem, the people and the desired outcome at the centre.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step) => (
              <div
                key={step.number}
                className="border-t-2 border-blue-700 pt-7"
              >
                <p className="text-4xl font-bold text-blue-700">
                  {step.number}
                </p>

                <h3 className="mt-6 text-lg font-bold tracking-wider">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#102A4C] px-6 py-24 text-center text-white sm:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-bold tracking-[0.22em] text-blue-300">
            HAVE AN IDEA?
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Your Next Big Idea Could Be Our Next Project.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-slate-300">
            Tell us about your goals, challenges or ideas. Let us explore how
            technology can help you move forward.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-9 py-4 text-sm font-bold tracking-wide text-[#102A4C] transition hover:bg-blue-100"
          >
            START A PROJECT
          </Link>
        </div>
      </section>
    </main>
  );
}
