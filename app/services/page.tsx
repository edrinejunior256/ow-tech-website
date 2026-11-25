
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Custom Software Development",
    description:
      "We design and develop software tailored to your organisation's unique operations, challenges and goals.",
    features: [
      "Custom business systems",
      "Database-driven applications",
      "System integrations",
      "Scalable software solutions",
    ],
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "We build secure, responsive web applications that help businesses manage operations and serve customers more effectively.",
    features: [
      "Business management systems",
      "Customer portals and dashboards",
      "API development and integration",
      "Authentication and user management",
    ],
  },
  {
    number: "03",
    title: "Website Design & Development",
    description:
      "We create modern, professional websites that communicate your brand, build trust and turn visitors into customers.",
    features: [
      "Business websites",
      "Responsive website design",
      "Landing pages",
      "Website maintenance and improvements",
    ],
  },
  {
    number: "04",
    title: "Business Automation",
    description:
      "We help reduce repetitive manual work through digital workflows and automation that improve efficiency.",
    features: [
      "Workflow automation",
      "Digital record management",
      "Reporting systems",
      "Process optimisation",
    ],
  },
  {
    number: "05",
    title: "IT Consulting & Technology Solutions",
    description:
      "We help organisations make informed technology decisions and identify practical solutions to technical challenges.",
    features: [
      "Technology planning",
      "Technical assessments",
      "Software recommendations",
      "IT solutions strategy",
    ],
  },
  {
    number: "06",
    title: "Digital Transformation",
    description:
      "We support organisations in modernising their operations by introducing digital tools and more efficient ways of working.",
    features: [
      "Digital strategy",
      "Business process modernisation",
      "Technology adoption",
      "Digital system integration",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "We listen, understand your goals and identify the challenges your organisation needs to solve.",
  },
  {
    number: "02",
    title: "PLAN",
    description:
      "We develop a clear solution, define the project scope and agree on the expected outcomes.",
  },
  {
    number: "03",
    title: "BUILD",
    description:
      "We develop your solution, share progress and refine the work based on your feedback.",
  },
  {
    number: "04",
    title: "DELIVER",
    description:
      "We test, launch and hand over your solution with the necessary guidance and documentation.",
  },
];

const faqs = [
  {
    question: "How do we get started with a project?",
    answer:
      "Start by contacting us and explaining what you want to achieve. We will discuss your needs, understand the problem and explore the right solution.",
  },
  {
    question: "Can you build software specifically for our business?",
    answer:
      "Yes. We develop custom software based on your organisation's requirements, workflows and objectives.",
  },
  {
    question: "Do you work with small businesses and startups?",
    answer:
      "Yes. We work with organisations at different stages, from startups and small businesses to established organisations.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Project costs depend on the scope, complexity and requirements. We discuss these details with you before preparing a proposal.",
  },
  {
    question: "Will you provide support after delivery?",
    answer:
      "We can discuss maintenance, improvements and ongoing technical support depending on your project's needs.",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#172b45]">
      {/* HERO */}
      <section className="relative bg-[#102A4C] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <p className="mb-5 text-sm font-bold tracking-[0.25em] text-blue-300">
              WHAT WE DO
            </p>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Technology Solutions That Move Your Business Forward.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              We design, build and deliver practical digital solutions that
              help organisations solve problems, improve operations and
              embrace new opportunities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold tracking-wide text-[#102A4C] transition hover:bg-blue-100"
              >
                START A PROJECT
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-4 text-sm font-bold tracking-wide text-white transition hover:bg-white hover:text-[#102A4C]"
              >
                EXPLORE OUR PROJECTS
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full border border-blue-300/40" />

            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
              alt="Modern technology workspace"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="relative h-[380px] w-full rounded-2xl object-cover shadow-2xl sm:h-[480px]"
            />

            <div className="absolute -bottom-7 -left-5 max-w-xs rounded-xl bg-white p-6 text-[#172b45] shadow-xl sm:-left-8">
              <p className="text-sm font-bold tracking-widest text-blue-700">
                OW TECHNOLOGIES
              </p>
              <p className="mt-2 text-lg font-bold">
                Empowering Tomorrow&apos;s Innovations
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
              OUR CAPABILITIES
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              The Right Technology. Built Around Your Needs.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Every organisation has different challenges. That is why we
              focus on understanding your needs before recommending a
              solution. Our work combines technology, practical thinking and
              a commitment to delivering quality.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Whether you need a business website, a custom software system or
              a more efficient way to manage your operations, we work with you
              to turn ideas into useful digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#102A4C] p-7 text-white">
              <p className="text-3xl font-bold">01</p>
              <h3 className="mt-5 text-lg font-bold">Understand</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                We begin with your goals and challenges.
              </p>
            </div>

            <div className="mt-10 rounded-2xl bg-slate-100 p-7">
              <p className="text-3xl font-bold text-blue-700">02</p>
              <h3 className="mt-5 text-lg font-bold">Design</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We plan solutions around your needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-7">
              <p className="text-3xl font-bold text-blue-700">03</p>
              <h3 className="mt-5 text-lg font-bold">Develop</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We turn the plan into working technology.
              </p>
            </div>

            <div className="mt-10 rounded-2xl bg-[#102A4C] p-7 text-white">
              <p className="text-3xl font-bold">04</p>
              <h3 className="mt-5 text-lg font-bold">Deliver</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                We test, launch and hand over the solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold tracking-[0.22em] text-blue-700">
              OUR SERVICES
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              What We Can Do For You
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Explore our range of technology services designed to help
              businesses and organisations operate smarter and grow.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102A4C] text-sm font-bold text-white transition group-hover:bg-blue-700">
                  {service.number}
                </div>

                <h3 className="mt-7 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-7 border-t border-slate-200 pt-6">
                  <p className="mb-4 text-xs font-bold tracking-widest text-blue-700">
                    WHAT&apos;S INCLUDED
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <span className="mt-0.5 font-bold text-blue-700">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#102A4C] transition hover:text-blue-700"
                >
                  DISCUSS THIS SERVICE <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED AS STANDARD */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold tracking-[0.22em] text-blue-700">
              OUR COMMITMENT
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              More Than Just Delivering Technology.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We believe a successful project requires clear communication,
              thoughtful planning and a shared understanding of what needs
              to be achieved.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              We aim to make the entire process straightforward, transparent
              and focused on delivering real value.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "Clear Scope & Expectations",
                description:
                  "We establish what will be delivered and what the project involves.",
              },
              {
                title: "Transparent Project Discussions",
                description:
                  "We discuss requirements, timelines and pricing before work begins.",
              },
              {
                title: "Progress Demonstrations",
                description:
                  "We share progress and give you opportunities to provide feedback.",
              },
              {
                title: "Documentation & Handover",
                description:
                  "We provide relevant guidance and documentation when the work is delivered.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-xl border border-slate-200 p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-700">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#102A4C] px-6 py-24 text-white sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold tracking-[0.22em] text-blue-300">
              HOW WE WORK
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              A Clear Process From Idea to Delivery.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              We follow a structured approach that keeps your project
              organised and your goals at the centre of every decision.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="border-t border-blue-300/40 pt-7"
              >
                <p className="text-4xl font-bold text-blue-300">
                  {step.number}
                </p>

                <h3 className="mt-6 text-xl font-bold tracking-wider">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-bold tracking-[0.22em] text-blue-700">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Questions About Our Services?
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white p-6 open:border-blue-200 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
                  <span>
                    {index + 1}. {faq.question}
                  </span>

                  <span className="text-xl text-blue-700 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 border-t border-slate-100 pt-5 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-100 px-6 py-24 text-center sm:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-bold tracking-[0.22em] text-blue-700">
            LET&apos;S BUILD SOMETHING GREAT
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Have an Idea or a Challenge We Can Help Solve?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-slate-600">
            Tell us what you are trying to achieve. We will listen, ask the
            right questions and explore whether we can help.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[#102A4C] px-9 py-4 font-bold tracking-wide text-white transition hover:bg-blue-700"
          >
            START A PROJECT
          </Link>
        </div>
      </section>
    </main>
  );
}
