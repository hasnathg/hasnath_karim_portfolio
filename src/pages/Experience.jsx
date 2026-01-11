import React from 'react';
const roles = [
    {
      id: "exam-invigilator-tkc",
      title: "Exam Invigilator",
      company: "Thomas Knyvett College",
      location: "Ashford, UK",
      dates: "Feb 2025 – Present",
      bullets: [
        "Supervise and monitor students during examinations to ensure compliance with exam regulations",
        "Distribute and collect exam materials securely",
        "Provide assistance to students with queries during exams within permitted guidelines",
        "Ensure a calm and organized environment in the exam hall",
      ],
    },
    {
      id: "mcd-shift",
      title: "Shift Manager",
      company: "McDonald’s",
      location: "London, UK",
      dates: "Oct 2014 – January 2026",
      bullets: [
        "Manage daily operations, scheduling, and inventory control",
        "Resolve customer concerns and maintain high service standards",
        "Oversee IT systems for reporting and troubleshooting",
      ],
    },
    {
      id: "jss-admin",
      title: "Data Entry & Admin Assistant",
      company: "JSS & Co. Accountants",
      location: "London, UK",
      dates: "Oct 2023 – June 2024",
      bullets: [
        "Perform accurate data entry into Dext and Sage",
        "Maintain client records while ensuring confidentiality",
        "Updated and maintained company website with new business information to improve client communication",
      ],
    },
    {
      id: "silco-prod",
      title: "Production Officer",
      company: "Silco Pharmaceuticals Ltd.",
      location: "Sylhet, Bangladesh",
      dates: "Nov 2012 – Feb 2014",
      bullets: [
        "Ensured production met GMP compliance standards",
        "Collaborated with QC department for quality checks",
      ],
    },
  ];
const Experience = () => {
    return (
       <section className="space-y-6">
      <h2 className="text-2xl font-bold">Experience</h2>

      <div className="grid gap-5 md:grid-cols-2">
        {roles.map((r) => (
          <div
            key={r.id}
            className="bg-base-200 p-5 rounded-xl border border-base-300 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col gap-1 mb-2">
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="text-sm opacity-80">
                {r.company} — {r.location}
              </p>
              <div className="badge badge-accent w-fit">{r.dates}</div>
            </div>

            <ul className="list-disc ml-5 space-y-1 opacity-90">
              {r.bullets.map((b, i) => (
                <li key={`${r.id}-b${i}`}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    );
};

export default Experience;