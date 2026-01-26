import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload  } from "react-icons/fi"
import { Link } from 'react-router';
import { skillsIconMap } from "../data/skills-icons";
import SkillTile from "../components/SkillTile";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { certifications } from "../data/certifications";


const Home = () => {

     // Contact details 
  const email = "hasnath.karim@gmail.com";
  const phone = "07593207299";
  const whatsappIntl = "447593207299";

  // Education & Experience 
  const education = [
    { id: "msc-uh", title: "MSc Advanced Computer Science", org: "University of Hertfordshire, UK" },
    { id: "bsc-glyndwr", title: "BSc (Hons) Applied Computing", org: "Wrexham University, UK" },
    { id: "mba-leading", title: "MBA", org: "Leading University, Bangladesh" },
  ];

  const roles = [
  {
      id: "Full-Stack-Developer",
      title: "Junior Full Stack Developer",
      company: "Infinity Flame Soft",
      location: "Remote",
      dates: "Oct 2025 – Present",
      bullets: [
        "Developing and maintaining web applications using modern frontend and backend technologies.",
        "Implementing web prototypes and translating client requirements into functional, user-focused solutions.",
        "Collaborating remotely with team members to analyze client needs and deliver features on time.",
        "Maintaining existing systems, resolving issues, and ensuring reliable application performance.",
        "Debugging issues, supporting live applications, and contributing to continuous improvement",
      ],
    },
     
     {
      id: "Full-Stack-Developer-Volunteer",
      title: "Full-Stack Developer (Volunteer)",
      company: "MNessa Limited",
      location: "London",
      dates: "July 2025 – Present",
      bullets: [
        "Contributing to a full-stack web application using React and Node.js, delivering user-facing features from requirements to deployment.",
        "Collaborating with designers/stakeholders to translate Figma/briefs into responsive UI components and API integrations.",
        "Supporting QA and bug-fixing, improving reliability and usability across key pages and flows.",
      ],
    },
  {
    id: "jss-admin",
    title: "Data Entry & Admin Assistant",
    company: "JSS & Co. Accountants",
    location: "London, UK",
    dates: "Oct 2023 – June 2024",
    bullets: ["Accurate data entry (Dext, Sage)", "Updated company website with new business information to improve client communication"],
  },
];

    return (
   
    <div className="space-y-16">
      {/* 2–4: Banner / Hero */}
      {/* 2–4: Banner / Hero */}
<section id="hero" className="relative overflow-hidden rounded-3xl border border-base-300 bg-gradient-to-br from-base-200/80 to-base-100 px-5 py-10 sm:p-10">
  {/* soft blobs for depth */}
  <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />

  <div className="relative mx-auto flex flex-col-reverse items-center gap-8 md:flex-row md:gap-12">
    {/* left: text */}
    <div className="flex-1 text-center md:text-left">
      <h1
        className="text-3xl md:text-5xl font-extrabold tracking-tight"
        style={{ animationDelay: "80ms" }}
      >
        Software Developer
      </h1>

      <p
        className="mt-4 max-w-2xl opacity-90 md:opacity-80 md:pr-6"
        style={{ animationDelay: "160ms" }}
      >
        I design and develop responsive, accessible web applications across frontend and backend,
using modern JavaScript and Python frameworks.
<p className='mt-4 font-bold'>React • Angular • Node.js • Express • MongoDB • Python • Django • Tailwind CSS • MySql </p>
      </p>

      {/* actions */}
      <div
        className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start"
        style={{ animationDelay: "240ms" }}
      >
        <a className="btn btn-accent" href="/Hasnath_Karim_resume.pdf" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
               viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
               d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"/></svg>
          View / Download Resume
        </a>
        <Link className="btn btn-outline" to="/projects">See Projects</Link>
      </div>

      {/* socials */}
      <div
        className="mt-5 flex items-center justify-center gap-4 text-xl md:justify-start"
        style={{ animationDelay: "320ms" }}
      >
        <a aria-label="GitHub" href="https://github.com/hasnathg" target="_blank" rel="noreferrer" className="hover:text-primary transition">
          {/* GitHub icon (kept from your version) */}
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.78-1.35-1.78-1.1-.76.09-.74.09-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.84 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.9 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .5z"/></svg>
        </a>
        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/md-hasnath-karim/" target="_blank" rel="noreferrer" className="hover:text-primary transition">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2C20.4 8 24 10.5 24 16.1V24h-4v-7c0-1.67-.03-3.83-2.33-3.83-2.33 0-2.69 1.82-2.69 3.7V24h-4V8z"/></svg>
        </a>
        <a aria-label="Email" href="mailto:hasnath.karim@gmail.com" className="hover:text-primary transition">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M12 13.065L.454 4.5h23.092L12 13.065zM0 19.5V5.935L12 15l12-9.065V19.5H0z"/></svg>
        </a>
      </div>
    </div>

    {/* right: photo */}
    <div className="flex-1 flex items-center justify-center">
      <div className="relative">
        {/* decorative ring */}
        <div className="absolute inset-0 -z-10 rounded-[2rem] blur-2xl bg-primary/10" />
        <img
          src="/profile.jpg"
          alt="MD Hasnath Karim"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl object-cover ring-2 ring-base-300 shadow-xl"
        />
      </div>
    </div>
  </div>
</section>

     {/* 5: About Me */}
<section id="about" className="relative">
  <div className="flex items-center gap-3 mb-4">
    <h2 className="text-2xl font-bold">About Me</h2>
    <div className="divider m-0 flex-1" />
  </div>

  <div className="grid gap-6 md:grid-cols-3">
    {/* highlight card */}
    <div className="md:col-span-1 rounded-2xl border border-base-300 bg-base-200 p-6">
      <h3 className="text-lg font-semibold">Building Software with Purpose</h3>

      <p className="mt-3 opacity-80">
         I’m MD Hasnath Karim — a software developer who enjoys turning ideas into clean,
        accessible, and reliable web applications. With a background in operations and administration, I bring structured thinking, reliability, and attention to detail into software engineering.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-ghost">Full-Stack Development</span>
        <span className="badge badge-ghost">Accessibility & Performance</span>
        <span className="badge badge-ghost">Clean, Maintainable UX</span>
      </div>
    </div>

    {/* two-column story */}
    <div className="md:col-span-2 rounded-2xl border border-base-300 bg-base-200 p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold">My Journey</h4>
          <p className="mt-2 opacity-80">
            I moved into software development because I enjoy building useful products that feel smooth to use.
            I value clear requirements, maintainable code, and steady progress from idea to release.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">What I Enjoy</h4>
          <p className="mt-2 opacity-80">
            Crafting accessible UI, building secure APIs, and working with data models that scale.
            I like turning rough requirements into polished features.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Beyond Coding</h4>
          <p className="mt-2 opacity-80">
            Continuous learning, reading, staying active, and sharing tips that help teams move faster.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">How I Work</h4>
          <p className="mt-2 opacity-80">
            Calm, collaborative, and documentation-friendly. I care about code quality, constructive reviews,
            and delivering outcomes that users actually value.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <Link to="/about" className="btn btn-sm btn-outline">
          Read more
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* 6: Skills (icon grid) */}
      <section id="skills" className="space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="divider m-0 flex-1" />
        </div>

        {Object.entries(skillsIconMap).map(([category, items]) => (
  <div key={category} className="space-y-3">
    <div className="flex items-center gap-3">
      <h3 className="text-lg font-semibold">{category}</h3>
      <div className="divider m-0 flex-1" />
    </div>

    <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(170px,1fr))]">
      {items.map(({ name, Icon }, i) => (
        <SkillTile key={name} name={name} Icon={Icon} delayMs={60 * i} />
      ))}
    </div>
  </div>
))}
        <div className="pt-2">
          <Link to="/skills" className="btn btn-sm btn-outline">All skills</Link>
        </div>
      </section>

      {/* 7: Education */}
      <section id="education" className="space-y-4">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="divider m-0 flex-1" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((e, i) => (
            <div key={e.id} className="card bg-base-200 animate-fade-up" style={{animationDelay:`${80*i}ms`}}>
              <div className="card-body">
                <h3 className="card-title">{e.title}</h3>
                <p className="opacity-80">{e.org}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/education" className="btn btn-sm btn-outline">See all education</Link>
      </section>

      {/* Certifications */}
<section id="certifications" className="space-y-4">
  <div className="flex items-center gap-3">
    <h2 className="text-2xl font-bold">Certifications</h2>
    <div className="divider m-0 flex-1" />
  </div>

  <div className="grid gap-4 md:grid-cols-3">
    {certifications.map((c, i) => (
      <div
        key={c.id}
        className="rounded-2xl border border-base-300 bg-base-200 p-5 animate-fade-up"
        style={{ animationDelay: `${80 * i}ms` }}
      >
        <h3 className="font-semibold">{c.title}</h3>
        <p className="mt-1 opacity-80">
          {c.issuer}{c.year ? ` • ${c.year}` : ""}
        </p>
        {c.focus && <p className="mt-2 text-sm opacity-75">{c.focus}</p>}
      </div>
    ))}
  </div>

  
</section>

      {/* 8: Experience */}
      <section id="experience" className="space-y-4">
  <div className="flex items-center gap-3">
    <h2 className="text-2xl font-bold">Experience</h2>
    <div className="divider m-0 flex-1" />
  </div>

  <div className="space-y-4">
    {roles.map((r, i) => (
      <div
        key={r.id}
        className="bg-base-200 rounded-xl p-5 animate-fade-up"
        style={{ animationDelay: `${80 * i}ms` }}
      >
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
          <div className="font-semibold">
            {r.title} — <span className="opacity-80">{r.company}{r.location ? `, ${r.location}` : ""}</span>
          </div>
          <div className="badge">{r.dates}</div>
        </div>
        <ul className="list-disc ml-5 mt-2 opacity-90">
          {r.bullets.map((b, j) => (
            <li key={`${r.id}-b${j}`}>{b}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>

  <Link to="/experience" className="btn btn-sm btn-outline">More experience</Link>
</section>

      {/* 9: Projects (3 cards min) */}
      <section id="projects" className="space-y-4">
  <div className="flex items-center gap-3">
    <h2 className="text-2xl font-bold">Projects</h2>
    <div className="divider m-0 flex-1" />
  </div>

  <motion.div
    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
      },
    }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.15 }}
  >
    {projects.slice(0, 3).map((p) => (
      <motion.div
        key={p.slug}
        className="h-full"
        variants={{
          hidden: { opacity: 0, y: 14 },
          show:   { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 16 } },
        }}
      >
        <ProjectCard project={p} />
      </motion.div>
    ))}
  </motion.div>

  <Link to="/projects" className="btn btn-sm btn-outline">See all projects</Link>
</section>

      {/* 10: Contact */}
      <section id="contact" className="space-y-4">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="divider m-0 flex-1" />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <a href={`mailto:${email}`} className="card bg-base-200 hover:bg-base-300 transition animate-fade-up">
            <div className="card-body flex-row items-center gap-3">
              <FiMail className="text-xl"/><div><b>Email</b><div className="opacity-80">{email}</div></div>
            </div>
          </a>
          <a href={`tel:${phone}`} className="card bg-base-200 hover:bg-base-300 transition animate-fade-up" style={{animationDelay:'80ms'}}>
            <div className="card-body flex-row items-center gap-3">
              <span className="text-xl">📞</span><div><b>Phone</b><div className="opacity-80">{phone}</div></div>
            </div>
          </a>
          <a href={`https://wa.me/${whatsappIntl}`} target="_blank" rel="noreferrer" className="card bg-base-200 hover:bg-base-300 transition animate-fade-up" style={{animationDelay:'160ms'}}>
            <div className="card-body flex-row items-center gap-3">
              <span className="text-xl">💬</span><div><b>WhatsApp</b><div className="opacity-80">Chat on WhatsApp</div></div>
            </div>
          </a>
        </div>
      </section>

      {/* 11: (Footer is already in Layout) */}
      {/* 12: Responsiveness is handled by Tailwind grid/classes */}
    </div>
    );
};

export default Home;