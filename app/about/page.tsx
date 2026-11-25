
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About OW Technologies | Our Company and Approach",
  description:
    "Learn about OW Technologies, a Uganda-based technology company delivering practical software development, web applications and digital solutions for organisations in Uganda and worldwide.",
  openGraph: {
    title: "About OW Technologies | Our Company and Approach",
    description:
      "Discover our mission, vision, values and approach to building practical digital solutions.",
    url: "https://ow-tech-website.vercel.app/about",
    siteName: "OW Technologies",
    type: "website",
  },
};

const principles = [
  {
    number: "01",
    title: "We Listen First",
    description:
      "We take time to understand your organisation, your challenges and your goals before recommending a solution. Good technology starts with listening.",
  },
  {
    number: "02",
    title: "We Value Transparency",
    description:
      "We believe in clear communication, visible progress and honest feedback. You stay involved throughout the development process.",
  },
  {
    number: "03",
    title: "We Build for Ownership",
    description:
      "Your project should empower your organisation. We value maintainable solutions, useful documentation and long-term independence.",
  },
];

const stages = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your organisation, your people and the challenges you want technology to solve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We assess your requirements and develop a practical approach, scope and delivery plan.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design, develop and test a solution that responds to your needs and priorities.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We present the finished solution, support its implementation and help you move forward.",
  },
];

const values = [
  "INNOVATION",
  "INTEGRITY",
  "QUALITY",
  "COLLABORATION",
  "ACCOUNTABILITY",
  "CONTINUOUS IMPROVEMENT",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#102A4C]">
      {/* HERO */}
      <section className="relative bg-[#102A4C]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
            alt="Modern professional workspace"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#07182D] via-[#102A4C]/95 to-[#102A4C]/65" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-28 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:py-36">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-[#A9C7ED]">
              ABOUT OW TECHNOLOGIES
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              Technology That Moves Your Ideas Forward.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
              We are a technology company focused on creating practical
              digital solutions that help organisations work smarter,
              solve problems and embrace new opportunities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold tracking-wide text-[#102A4C] shadow-lg transition hover:bg-[#DCE8F5]"
              >
                START A CONVERSATION
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-4 text-sm font-bold tracking-wide text-white transition hover:bg-white hover:text-[#102A4C]"
              >
                EXPLORE OUR SERVICES
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative ml-auto h-[480px] max-w-md overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
                alt="Professionals collaborating on a project"
                fill
                sizes="(min-width: 1024px) 448px, 100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07182D]/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B9D5F6]">
                  OUR APPROACH
                </p>

                <p className="mt-3 text-3xl font-bold text-white">
                  Think. Create. Transform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#2563EB]">
              WHO WE ARE
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              We Believe Technology Should Make a Difference.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              OW Technologies is driven by the belief that technology
              should be useful, accessible and meaningful. We focus on
              understanding real challenges before creating solutions.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              From software development and web applications to business
              automation and digital transformation, our goal is to help
              organisations turn ideas into practical results.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              We combine thoughtful planning, modern technologies and
              continuous improvement to create solutions designed around
              the people who use them.
            </p>

            <Link
              href="/services"
              className="mt-9 inline-flex items-center gap-3 border-b-2 border-[#2563EB] pb-2 text-sm font-bold tracking-wide text-[#102A4C] transition hover:text-[#2563EB]"
            >
              DISCOVER WHAT WE DO
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -left-5 -top-5 h-36 w-36 rounded-tl-3xl border-l-4 border-t-4 border-[#2563EB]" />

            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team members working together"
              width={1200}
              height={800}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="relative h-[420px] w-full rounded-2xl object-cover shadow-xl sm:h-[500px]"
            />

            <div className="absolute -bottom-7 right-5 max-w-xs rounded-xl bg-[#102A4C] p-6 text-white shadow-xl sm:right-0">
              <p className="text-xl font-bold">
                Built Around Real Needs.
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Practical thinking. Purposeful technology. Meaningful outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-[#F3F6FA] py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#2563EB]">
              OUR PURPOSE
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              What Guides Our Work
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Our purpose is reflected in the solutions we create and
              the relationships we build.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-2xl bg-[#102A4C] p-9 text-white shadow-lg sm:p-12">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-2xl">
                <span aria-hidden="true">&#9673;</span>
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A9C7ED]">
                OUR MISSION
              </p>

              <h3 className="mt-5 text-3xl font-bold">
                Creating Technology with Purpose.
              </h3>

              <p className="mt-6 leading-8 text-slate-300">
                To develop dependable and innovative digital solutions
                that help businesses and organisations improve operations,
                overcome challenges and achieve their goals.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-9 shadow-lg sm:p-12">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E8EFF8] text-2xl text-[#102A4C]">
                <span aria-hidden="true">&#9672;</span>
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB]">
                OUR VISION
              </p>

              <h3 className="mt-5 text-3xl font-bold">
                A Future Empowered by Innovation.
              </h3>

              <p className="mt-6 leading-8 text-slate-600">
                To become a trusted technology partner recognised for
                meaningful innovation, quality solutions and positive
                contributions to digital growth.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#2563EB]">
                OUR CORE VALUES
              </p>

              <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                The Values Behind Everything We Do.
              </h2>

              <p className="mt-7 leading-8 text-slate-600">
                Our values shape how we approach challenges, work with
                clients and deliver technology solutions. They influence
                every decision, from the first conversation to final delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {values.map((value, index) => (
                <div
                  key={value}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#2563EB]/50 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8EFF8] text-sm font-bold text-[#2563EB]">
                    0{index + 1}
                  </span>

                  <span className="text-sm font-bold tracking-wide text-[#102A4C]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#102A4C] py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#A9C7ED]">
              HOW WE WORK
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              The Principles Behind Every Project.
            </h2>

            <p className="mt-7 leading-8 text-slate-300">
              Great technology is about more than writing code. It is
              about understanding people, communicating clearly and
              delivering solutions that work.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="rounded-2xl border border-white/15 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-[#A9C7ED]/70 hover:bg-white/10"
              >
                <p className="text-sm font-bold tracking-widest text-[#A9C7ED]">
                  {principle.number}
                </p>

                <h3 className="mt-8 text-2xl font-bold">
                  {principle.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#2563EB]">
              OUR PROCESS
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              From Your Idea to a Practical Solution.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We follow a thoughtful process that keeps your goals at
              the centre of every stage.
            </p>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage) => (
              <article
                key={stage.number}
                className="border-t-2 border-[#2563EB] pt-7"
              >
                <p className="text-sm font-bold tracking-widest text-[#2563EB]">
                  STEP {stage.number}
                </p>

                <h3 className="mt-5 text-3xl font-bold">
                  {stage.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F3F6FA] px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#102A4C] px-7 py-16 text-center text-white shadow-xl sm:px-14 sm:py-20">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#A9C7ED]">
            LET&apos;S BUILD SOMETHING MEANINGFUL
          </p>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Have an Idea? Let&apos;s Make It Happen.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-slate-300">
            Tell us about your organisation, your goals and the challenges
            you want to solve. Let&apos;s explore what we can create together.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-9 py-4 text-sm font-bold tracking-wide text-[#102A4C] transition hover:bg-[#DCE8F5]"
          >
            START A PROJECT
          </Link>
        </div>
      </section>
    </main>
  );
}
