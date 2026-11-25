
import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    number: "01",
    title: "EDUCATION",
    subtitle: "Smarter Learning & School Management",
    description:
      "We develop digital solutions that help educational institutions simplify administration, manage academic records and improve access to information.",
    solutions: [
      "School management systems",
      "Digital report cards",
      "Student information management",
      "Academic performance reporting",
    ],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    alt: "Students learning in a modern classroom",
  },
  {
    number: "02",
    title: "HEALTHCARE",
    subtitle: "Supporting Better Digital Operations",
    description:
      "We explore practical technology solutions that help healthcare organisations organise information, improve administrative workflows and manage operations.",
    solutions: [
      "Digital record management",
      "Administrative systems",
      "Reporting dashboards",
      "Workflow automation",
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    alt: "Healthcare professional working with digital technology",
  },
  {
    number: "03",
    title: "FINANCE & BUSINESS",
    subtitle: "Better Business Intelligence",
    description:
      "We help businesses use software and data-driven tools to improve operational visibility, organise information and support informed decisions.",
    solutions: [
      "Business management software",
      "Financial reporting tools",
      "Data analysis dashboards",
      "Process automation",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    alt: "Business analytics and financial dashboard",
  },
  {
    number: "04",
    title: "RETAIL & E-COMMERCE",
    subtitle: "Connecting Businesses With Customers",
    description:
      "We create digital experiences and business systems that help retailers establish an online presence, manage operations and serve customers.",
    solutions: [
      "E-commerce websites",
      "Inventory management systems",
      "Online customer experiences",
      "Business reporting tools",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    alt: "Retail customer making a digital payment",
  },
  {
    number: "05",
    title: "PROFESSIONAL SERVICES",
    subtitle: "Digital Tools for Modern Organisations",
    description:
      "We support service-based organisations with professional websites, custom applications and digital workflows that improve how they operate.",
    solutions: [
      "Business websites",
      "Client management systems",
      "Appointment and booking solutions",
      "Workflow automation",
    ],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    alt: "Professional office workspace",
  },
  {
    number: "06",
    title: "LOGISTICS & OPERATIONS",
    subtitle: "Making Operations More Efficient",
    description:
      "We explore technology solutions that help organisations coordinate activities, manage operational information and improve visibility across their processes.",
    solutions: [
      "Operations management systems",
      "Digital tracking solutions",
      "Reporting dashboards",
      "Process management tools",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    alt: "Modern logistics and warehouse operations",
  },
];

const benefits = [
  {
    title: "INDUSTRY UNDERSTANDING",
    description:
      "We take time to understand your organisation, its environment and the challenges it faces.",
  },
  {
    title: "PRACTICAL SOLUTIONS",
    description:
      "We focus on technology that addresses real operational needs rather than unnecessary complexity.",
  },
  {
    title: "SCALABLE APPROACH",
    description:
      "We consider your future needs so solutions can evolve as your organisation grows.",
  },
  {
    title: "COLLABORATIVE DELIVERY",
    description:
      "We work with you throughout the project, encouraging communication and feedback.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#172b45]">
      {/* HERO */}
      <section className="bg-[#102A4C] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <p className="mb-5 text-sm font-bold tracking-[0.25em] text-blue-300">
              INDUSTRIES WE SERVE
            </p>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Technology That Works Across Industries.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Every industry has unique challenges. We help organisations
              explore practical digital solutions that improve operations,
              simplify processes and create new opportunities.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold tracking-wide text-[#102A4C] transition hover:bg-blue-100"
            >
              DISCUSS YOUR NEEDS
            </Link>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
              alt="Professionals collaborating across different disciplines"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-[380px] w-full rounded-2xl object-cover shadow-2xl sm:h-[480px]"
            />

            <div className="absolute -bottom-7 -left-5 rounded-xl bg-white p-6 text-[#102A4C] shadow-xl sm:-left-8">
              <p className="text-xs font-bold tracking-widest text-blue-700">
                OUR MISSION
              </p>
              <p className="mt-2 text-lg font-bold">
                Technology With Real-World Impact.
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
              OUR INDUSTRY FOCUS
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Different Industries. Shared Digital Opportunities.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-slate-600">
              From education and healthcare to retail and professional
              services, organisations increasingly depend on technology to
              manage information, connect with customers and deliver better
              services.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              At OW Technologies, we believe effective solutions begin with
              understanding the people and processes behind every
              organisation. We then explore how the right technology can make
              a meaningful difference.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-slate-50 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold tracking-[0.22em] text-blue-700">
              SECTORS WE SUPPORT
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Exploring Opportunities Across Sectors.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We apply our technology capabilities to different industries,
              tailoring our approach to each organisation&apos;s requirements.
            </p>
          </div>

          <div className="space-y-10">
            {industries.map((industry, index) => (
              <article
                key={industry.number}
                className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg lg:grid-cols-2"
              >
                <div
                  className={`relative min-h-[300px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={industry.image}
                    alt={industry.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <p className="text-sm font-bold tracking-[0.18em] text-blue-700">
                    {industry.number} / {industry.title}
                  </p>

                  <h3 className="mt-5 text-2xl font-bold sm:text-3xl">
                    {industry.subtitle}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {industry.description}
                  </p>

                  <div className="mt-7">
                    <p className="mb-4 text-xs font-bold tracking-widest text-[#102A4C]">
                      POTENTIAL SOLUTIONS
                    </p>

                    <ul className="grid gap-3 sm:grid-cols-2">
                      {industry.solutions.map((solution) => (
                        <li
                          key={solution}
                          className="flex items-start gap-3 text-sm text-slate-600"
                        >
                          <span className="font-bold text-blue-700">✓</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#102A4C] px-7 py-3.5 text-xs font-bold tracking-wider text-white transition hover:bg-blue-700"
                  >
                    DISCUSS YOUR PROJECT <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OW TECHNOLOGIES */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold tracking-[0.22em] text-blue-700">
              WHY WORK WITH US
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              A Thoughtful Approach to Every Industry.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We combine technical capability with a practical understanding
              of business needs to develop solutions that serve a clear
              purpose.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102A4C] text-lg font-bold text-white">
                  0{index + 1}
                </div>

                <h3 className="mt-7 text-lg font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {benefit.description}
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
            LET&apos;S EXPLORE WHAT&apos;S POSSIBLE
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Your Industry Has Unique Needs. Let&apos;s Find the Right Solution.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-slate-300">
            Tell us about your organisation and what you want to improve. We
            will listen, understand your requirements and explore how
            technology can help.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-9 py-4 text-sm font-bold tracking-wide text-[#102A4C] transition hover:bg-blue-100"
          >
            START A CONVERSATION
          </Link>
        </div>
      </section>
    </main>
  );
}
