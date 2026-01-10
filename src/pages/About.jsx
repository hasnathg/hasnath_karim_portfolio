import React from 'react';

const About = () => {
    return (
       <section id="about" className="relative">
  <div className="flex items-center gap-3 mb-4">
    <h2 className="text-2xl font-bold">About Me</h2>
    <div className="divider m-0 flex-1" />
  </div>

  <div className="grid gap-6 md:grid-cols-3">
    {/* highlight card */}
    <div className="md:col-span-1 rounded-2xl border border-base-300 bg-base-200 p-6">
      <h3 className="text-lg font-semibold">Who I Am</h3>
      <p className="mt-3 opacity-80">
        I’m MD Hasnath Karim — a MERN developer who enjoys turning ideas into fast,
        accessible web apps. My background in operations sharpened process thinking
        and attention to detail, which I bring to engineering.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-ghost">MERN</span>
        <span className="badge badge-ghost">Accessibility</span>
        <span className="badge badge-ghost">Clean UX</span>
      </div>
    </div>

    {/* two-column story */}
    <div className="md:col-span-2 rounded-2xl border border-base-300 bg-base-200 p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold">My Journey</h4>
          <p className="mt-2 opacity-80">
            I moved into web development because I love building useful, polished apps.
            I value clear requirements, maintainable code, and steady delivery.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">What I Enjoy</h4>
          <p className="mt-2 opacity-80">
            Crafting accessible components, secure APIs, and sensible data models.
            I like transforming rough ideas into smooth user experiences.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Beyond Coding</h4>
          <p className="mt-2 opacity-80">
            Learning new tech, reading, staying active, and sharing tips that help teams move faster.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">How I Work</h4>
          <p className="mt-2 opacity-80">
            Calm, collaborative, and documentation-friendly. I care about good reviews,
            predictable releases, and user-focused outcomes.
          </p>
        </div>
      </div>
      
    </div>
  </div>
</section>
    );
};

export default About;