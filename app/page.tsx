
import type { ReactNode } from "react";

const services = [
  ["01", "Custom Software Development", "Systems built around how your organisation actually runs, for processes no off-the-shelf package fits."],
  ["02", "Web Application Development", "Portals, dashboards and internal tools that staff and customers can rely on every working day."],
  ["03", "Website Design and Development", "Fast, credible websites that make your business easy to understand, trust and contact."],
  ["04", "Business Automation", "Removing manual steps in payments, records, reporting and approvals that cost hours every week."],
  ["05", "IT Consulting and Technology Solutions", "Independent guidance on what to build, what to buy and what to improve."],
  ["06", "Digital Transformation", "Moving paper-based and spreadsheet-bound operations onto systems your organisation can use."],
];

const reasons = [
  ["01", "Innovative Thinking", "We start from your problem and find the most practical way to solve it."],
  ["02", "Modern Technologies", "We use current, well-supported technologies to build maintainable solutions."],
  ["03", "Client-Focused Solutions", "Every system is shaped around how your organisation and team actually work."],
  ["04", "Reliable Development", "Clear milestones, tested releases and documentation make progress visible."],
  ["05", "Scalable Digital Products", "Our solutions accommodate more users, records and operations as you grow."],
  ["06", "Commitment to Quality", "We focus on dependable work and the support needed after launch."],
];

const projects = [
  {
    number: "01",
    name: "ReportSphere",
    category: "EDUCATION TECHNOLOGY",
    description: "A school report management system that transforms term marks into organised, verified report cards and simplifies academic reporting.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    tags: ["Education", "Report Management"],
  },
  {
    number: "02",
    name: "Offline Ordering Platform",
    category: "BUSINESS AUTOMATION",
    description: "A proposed ordering solution for distribution teams that synchronises orders when an internet connection returns.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
    tags: ["Distribution", "Automation"],
  },
  {
    number: "03",
    name: "Client Management Portal",
    category: "CUSTOM SOFTWARE",
    description: "A proposed platform for managing client engagements, documents and approvals while reducing repetitive administrative work.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    tags: ["Professional Services", "Custom Software"],
  },
];

const industries = [
  ["01", "Education", "Records, reporting, fees and timetables for schools that have outgrown paper registers and shared spreadsheets."],
  ["02", "Business and Enterprise", "Operations, approvals and reporting for organisations that need capable digital tools."],
  ["03", "Retail and Commerce", "Stock, ordering and sales solutions across shops, warehouses and field teams."],
  ["04", "Professional Services", "Client portals and internal systems for dependable document and workflow management."],
  ["05", "Startups and Entrepreneurs", "Digital products that help new ideas become practical, scalable businesses."],
];

const process = [
  ["01", "Discover", "We listen, ask questions and understand your organisation, challenges and goals."],
  ["02", "Plan", "We define the scope, technical direction, timeline and deliverables."],
  ["03", "Build", "We develop, test and demonstrate the solution while keeping you informed."],
  ["04", "Deliver", "We launch the solution, provide documentation and hand over the tools your team needs."],
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#64748B]">
      {children}
    </p>
  );
}


const primaryButton =
  "inline-flex items-center justify-center rounded-full bg-[#2563EB] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#1746B5] hover:shadow-lg";

const secondaryButton =
  "inline-flex items-center justify-center rounded-full border-2 border-[#102A4C] bg-white px-7 py-3.5 text-sm font-bold text-[#102A4C] transition-all hover:bg-[#102A4C] hover:text-white";


export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-[#263548]">

      {/* HERO */}
      <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-[#F3F6F9]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=85)",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/65" />

        <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <SectionLabel>KAMPALA, UGANDA · WORKING WORLDWIDE</SectionLabel>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.04] tracking-tight text-[#102A4C] sm:text-6xl lg:text-7xl">
              Building the{" "}
              <span className="text-[#64748B]">Digital Future.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#586779]">
              We transform ideas into powerful digital solutions through
              innovative software development, intelligent technology and
              modern digital experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#services" className={primaryButton}>
                Explore Our Services →
              </a>
              <a href="#contact" className={secondaryButton}>
                Start a Project
              </a>
            </div>

            <p className="mt-10 text-xs font-bold tracking-[0.2em] text-[#718096]">
              INNOVATION · TECHNOLOGY · TRANSFORMATION
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-3xl border border-white bg-white/90 p-8 shadow-xl backdrop-blur">
              <p className="text-xs font-bold tracking-[0.2em] text-[#64748B]">
                OW TECHNOLOGIES
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#102A4C]">
                Turning innovative ideas into practical digital solutions.
              </h2>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "Understand the challenge",
                  "Engineer the solution",
                  "Deliver with quality",
                  "Grow with confidence",
                ].map((item, index) => (
                  <div key={item} className="rounded-2xl border border-[#E2E8F0] bg-[#F7F9FB] p-5">
                    <p className="text-2xl font-bold text-[#64748B]">
                      0{index + 1}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#526174]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <SectionLabel>WHO WE ARE</SectionLabel>
            <h2 className="max-w-xl text-4xl font-bold leading-tight text-[#102A4C] sm:text-5xl">
              Technology That Moves Businesses Forward.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#647184]">
              OW Technologies is a forward-thinking technology company helping
              businesses and organisations solve real problems through
              technology. We combine innovation, creative thinking and
              practical decisions to deliver solutions that remain useful
              long after launch.
            </p>
            <a href="/about" className={`${secondaryButton} mt-8`}>
              Get to Know Us →
            </a>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-[#E8EDF2] shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102A4C]/75 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs font-bold tracking-[0.2em] text-white/80">
                TECHNOLOGY WITH PURPOSE
              </p>
              <h3 className="mt-2 max-w-sm text-3xl font-bold text-white">
                Practical innovation, designed around people.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#F3F6F9] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel>OUR SERVICES</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className="max-w-2xl text-4xl font-bold leading-tight text-[#102A4C] sm:text-5xl">
              What We Build, and What It Fixes.
            </h2>
            <p className="max-w-xl leading-8 text-[#647184]">
              We bring practical technology capabilities to the processes and
              challenges that matter to your organisation.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([number, title, description]) => (
              <article key={number} className="rounded-2xl border border-[#E0E6ED] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm font-bold text-[#718096]">{number}</p>
                <h3 className="mt-6 text-2xl font-bold text-[#102A4C]">{title}</h3>
                <p className="mt-4 leading-7 text-[#687789]">{description}</p>
                <a href="/services" className="mt-7 inline-flex text-sm font-bold text-[#294D73] hover:text-[#64748B]">
                  DISCUSS THIS SERVICE →
                </a>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <a href="/services" className={primaryButton}>View All Services →</a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel>WHY OW TECHNOLOGIES</SectionLabel>
          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-[#102A4C] sm:text-5xl">
            Why Organisations Choose to Build With Us.
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-[#647184]">
            We focus on the principles that make technology projects useful,
            reliable and sustainable.
          </p>

          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map(([number, title, description]) => (
              <article key={number} className="border-t border-[#D8E0E8] pt-6">
                <p className="text-sm font-bold text-[#718096]">{number}</p>
                <h3 className="mt-4 text-2xl font-bold text-[#102A4C]">{title}</h3>
                <p className="mt-3 leading-7 text-[#687789]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-[#F3F6F9] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel>SELECTED WORK</SectionLabel>
          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-[#102A4C] sm:text-5xl">
            Digital Solutions Built Around Real Challenges.
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-[#647184]">
            Explore our work and solution concepts, each focused on solving
            practical operational challenges.
          </p>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.number} className="overflow-hidden rounded-2xl border border-[#E0E6ED] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-52 overflow-hidden bg-[#DCE4EC]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-500 hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                </div>
                <div className="p-7">
                  <p className="text-xs font-bold tracking-[0.16em] text-[#718096]">{project.category}</p>
                  <h3 className="mt-4 text-2xl font-bold text-[#102A4C]">{project.name}</h3>
                  <p className="mt-4 leading-7 text-[#687789]">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-[#DCE3EA] bg-[#F7F9FB] px-3 py-1.5 text-xs text-[#526174]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <a href="/projects" className={primaryButton}>Explore Projects →</a>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel>INDUSTRIES WE SERVE</SectionLabel>
          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-[#102A4C] sm:text-5xl">
            Built for the Way Your Sector Actually Works.
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-[#647184]">
            Every industry has its own records, processes and reporting
            requirements. We build around those differences.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map(([number, title, description]) => (
              <article key={number} className="rounded-2xl border border-[#E0E6ED] bg-white p-8 shadow-sm">
                <p className="text-sm font-bold text-[#718096]">{number}</p>
                <h3 className="mt-6 text-2xl font-bold text-[#102A4C]">{title}</h3>
                <p className="mt-4 leading-7 text-[#687789]">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-9">
            <a href="/industries" className={secondaryButton}>Explore Industries →</a>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section id="approach" className="bg-[#F3F6F9] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel>OUR APPROACH</SectionLabel>
          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-[#102A4C] sm:text-5xl">
            A Repeatable Way of Working, From First Conversation to Launch.
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-[#647184]">
            Every engagement follows four stages, so you know what is
            happening, what comes next and what we need from your team.
          </p>

          <div className="mt-14 grid gap-9 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, description]) => (
              <article key={number} className="border-t-2 border-[#9AAABD] pt-6">
                <p className="text-3xl font-bold text-[#64748B]">{number}</p>
                <h3 className="mt-5 text-2xl font-bold text-[#102A4C]">{title}</h3>
                <p className="mt-3 leading-7 text-[#687789]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <SectionLabel>START A CONVERSATION</SectionLabel>
            <h2 className="max-w-xl text-4xl font-bold leading-tight text-[#102A4C] sm:text-5xl">
              Have an Idea? Let&apos;s Build Something Great.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#647184]">
              Partner with OW Technologies to turn your vision into a
              practical digital solution. Send us a short brief and we will
              discuss the scope and next steps.
            </p>

            <ul className="mt-8 space-y-3 text-[#526174]">
              <li>✓ A reply within one business day.</li>
              <li>✓ A 30-minute call, with no obligation.</li>
              <li>✓ NDA signed on request.</li>
            </ul>

            <div className="mt-10 space-y-5 border-t border-[#E0E6ED] pt-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#718096]">Email</p>
                <a href="mailto:edrinejunior256@gmail.com" className="mt-1 inline-block text-lg text-[#102A4C] hover:underline">
                  edrinejunior256@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#718096]">Phone</p>
                <a href="tel:+256746320144" className="mt-1 inline-block text-lg text-[#102A4C] hover:underline">
                  +256 746 320 144
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#718096]">Location</p>
                <p className="mt-1 text-lg text-[#526174]">Kampala, Uganda</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#E0E6ED] bg-[#F5F7FA] p-7 shadow-sm sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#718096]">
              TELL US ABOUT YOUR PROJECT
            </p>
            <h3 className="mt-4 text-3xl font-bold text-[#102A4C]">
              Let&apos;s Start With a Conversation.
            </h3>

            <form
              action="mailto:edrinejunior256@gmail.com"
              method="post"
              encType="text/plain"
              className="mt-8 space-y-5"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#526174]">Your Name</label>
                <input id="name" name="Name" type="text" required placeholder="Enter your name" className="w-full rounded-xl border border-[#D8E0E8] bg-white px-4 py-3.5 text-[#263548] outline-none placeholder:text-[#9AA5B1] focus:border-[#526B89]" />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#526174]">Work Email</label>
                <input id="email" name="Email" type="email" required placeholder="you@company.com" className="w-full rounded-xl border border-[#D8E0E8] bg-white px-4 py-3.5 text-[#263548] outline-none placeholder:text-[#9AA5B1] focus:border-[#526B89]" />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-[#526174]">What Is It About?</label>
                <select id="subject" name="Project Type" required defaultValue="" className="w-full rounded-xl border border-[#D8E0E8] bg-white px-4 py-3.5 text-[#263548] outline-none focus:border-[#526B89]">
                  <option value="" disabled>Select a service</option>
                  <option>Custom software development</option>
                  <option>Web application development</option>
                  <option>Website design and development</option>
                  <option>Business automation</option>
                  <option>IT consulting</option>
                  <option>Digital transformation</option>
                  <option>Other enquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#526174]">What Are You Trying to Fix?</label>
                <textarea id="message" name="Message" rows={5} required placeholder="Tell us a little about your project..." className="w-full resize-y rounded-xl border border-[#D8E0E8] bg-white px-4 py-3.5 text-[#263548] outline-none placeholder:text-[#9AA5B1] focus:border-[#526B89]" />
              </div>

              <button type="submit" className={`${primaryButton} w-full`}>
                Send Inquiry →
              </button>
              <p className="text-center text-xs leading-5 text-[#8793A1]">
                This enquiry form opens your email application to send your message.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
