
import Image from "next/image";
import Link from "next/link";

const contactDetails = [
  {
    label: "EMAIL",
    value: "edrinejunior256@gmail.com",
    href: "mailto:edrinejunior256@gmail.com",
    description: "Send us your project enquiries and questions.",
  },
  {
    label: "PHONE",
    value: "+256 746 320 144",
    href: "tel:+256746320144",
    description: "Speak with us about your next project.",
  },
  {
    label: "LOCATION",
    value: "Kampala, Uganda",
    href: "https://www.google.com/maps/search/?api=1&query=Kampala%2C+Uganda",
    description: "Proudly based in Uganda.",
  },
];

const reasons = [
  "CUSTOM SOFTWARE DEVELOPMENT",
  "WEBSITE DESIGN & DEVELOPMENT",
  "BUSINESS AUTOMATION",
  "IT CONSULTING",
  "DIGITAL TRANSFORMATION",
  "OTHER ENQUIRIES",
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white text-[#172b45]">
      {/* HERO */}
      <section className="bg-[#102A4C] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <p className="mb-5 text-sm font-bold tracking-[0.25em] text-blue-300">
              CONTACT US
            </p>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Let&apos;s Talk About What You Want to Build.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Have an idea, a challenge or a project in mind? We would love to
              hear from you. Tell us what you are trying to achieve and
              let&apos;s explore how technology can help.
            </p>

            <a
              href="mailto:edrinejunior256@gmail.com"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold tracking-wide text-[#102A4C] transition hover:bg-blue-100"
            >
              SEND US AN EMAIL
            </a>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
              alt="Business professionals collaborating during a project meeting"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-[380px] w-full rounded-2xl object-cover shadow-2xl sm:h-[480px]"
            />

            <div className="absolute -bottom-7 -left-5 rounded-xl bg-white p-6 text-[#102A4C] shadow-xl sm:-left-8">
              <p className="text-xs font-bold tracking-widest text-blue-700">
                OW TECHNOLOGIES
              </p>
              <p className="mt-2 text-lg font-bold">
                Empowering Tomorrow&apos;s Innovations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INTRODUCTION */}
      <section className="px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm font-bold tracking-[0.22em] text-blue-700">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            We&apos;re Ready to Hear From You.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
            Whether you are looking for a technology partner, need a custom
            digital solution or simply want to discuss an idea, the first step
            is starting a conversation.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS AND FORM */}
      <section className="bg-slate-50 px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* CONTACT INFORMATION */}
          <div>
            <p className="mb-4 text-sm font-bold tracking-[0.22em] text-blue-700">
              CONTACT INFORMATION
            </p>

            <h2 className="text-3xl font-bold leading-tight">
              Let&apos;s Start a Conversation.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Reach out through any of the channels below. We look forward to
              learning more about your goals and how we can help.
            </p>

            <div className="mt-10 space-y-5">
              {contactDetails.map((detail, index) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={index === 2 ? "_blank" : undefined}
                  rel={index === 2 ? "noopener noreferrer" : undefined}
                  className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102A4C] text-lg font-bold text-white transition group-hover:bg-blue-700">
                    {index === 0 ? "@" : index === 1 ? "☎" : "⌖"}
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-widest text-blue-700">
                      {detail.label}
                    </p>

                    <p className="mt-2 font-bold text-[#102A4C]">
                      {detail.value}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {detail.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-[#102A4C] p-8 text-white">
              <p className="text-sm font-bold tracking-widest text-blue-300">
                OUR COMMITMENT
              </p>

              <h3 className="mt-4 text-xl font-bold">
                Every Great Solution Begins With a Conversation.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                We take time to understand your needs, ask the right questions
                and explore practical ways to move your ideas forward.
              </p>
            </div>
          </div>

          {/* ENQUIRY FORM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <p className="text-sm font-bold tracking-[0.22em] text-blue-700">
              PROJECT ENQUIRY
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Tell Us About Your Project.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Share a few details about what you need. Your email application
              will open with your enquiry ready to send.
            </p>

            <form
              action="mailto:edrinejunior256@gmail.com"
              method="post"
              encType="text/plain"
              className="mt-9 space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-bold"
                  >
                    Full Name *
                  </label>

                  <input
                    id="fullName"
                    name="Full Name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-[#172b45] outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="Email Address"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-[#172b45] outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-bold"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="Phone Number"
                    type="tel"
                    placeholder="+256 ..."
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-[#172b45] outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-bold"
                  >
                    Service Required *
                  </label>

                  <select
                    id="service"
                    name="Service Required"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-[#172b45] outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {reasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="mb-2 block text-sm font-bold"
                >
                  Estimated Budget
                </label>

                <select
                  id="budget"
                  name="Estimated Budget"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-[#172b45] outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Select a budget range (optional)</option>
                  <option>Below UGX 500,000</option>
                  <option>UGX 500,000 – 2,000,000</option>
                  <option>UGX 2,000,000 – 5,000,000</option>
                  <option>UGX 5,000,000 – 10,000,000</option>
                  <option>Above UGX 10,000,000</option>
                  <option>Not yet decided</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold"
                >
                  Tell Us About Your Project *
                </label>

                <textarea
                  id="message"
                  name="Project Details"
                  required
                  rows={6}
                  placeholder="Describe your idea, requirements or the challenge you want to solve..."
                  className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-[#172b45] outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#102A4C] px-8 py-4 text-sm font-bold tracking-wide text-white transition hover:bg-blue-700"
              >
                SEND PROJECT ENQUIRY →
              </button>

              <p className="text-center text-xs leading-6 text-slate-500">
                Submitting opens your default email application. You will
                still need to send the email from there.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 text-center sm:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-bold tracking-[0.22em] text-blue-700">
            OW TECHNOLOGIES
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Let&apos;s Create Something That Makes a Difference.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
            We are ready to listen, collaborate and explore the possibilities
            with you.
          </p>

          <Link
            href="/services"
            className="mt-9 inline-flex items-center justify-center rounded-full border-2 border-[#102A4C] px-8 py-4 text-sm font-bold tracking-wide text-[#102A4C] transition hover:bg-[#102A4C] hover:text-white"
          >
            EXPLORE OUR SERVICES
          </Link>
        </div>
      </section>
    </main>
  );
}
