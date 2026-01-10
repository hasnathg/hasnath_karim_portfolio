import React from 'react';
import { Link, useParams } from 'react-router';
import { projects } from '../data/projects';
import TopCropImage from '../components/TopCropImage';


const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="prose">
        <h2>Project not found</h2>
        <Link className="btn btn-accent" to="/projects">
          Back to Projects
        </Link>
      </section>
    );
  }

  const {
    name,
    image,
    description,
    live,
    githubClient,
    githubServer,
    stack = [],
    features = [],
    hosting,
    challenges = [],
    improvements = [],
    // credentials, // intentionally NOT used
  } = project;

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">{name}</h1>

      {/* Tidy header image */}
     <TopCropImage
  src={image}
  alt={name}
  cropBottomPct={11}               // ≈ 1/9 crop from bottom
  heightClass="h-[60vh] md:h-[65vh]"
  maxWidthClass="max-w-3xl"
/>
      <p className="opacity-90">{description}</p>

      {/* --- 3-column grid: Tech • Features • Quick Links --- */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Tech Stack */}
        <div className="bg-base-200 p-4 rounded-xl">
          <h3 className="font-semibold mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {stack.map((t) => (
              <span key={t} className="badge badge-outline">
                {t}
              </span>
            ))}
          </div>
          {hosting && <p className="mt-3 text-sm opacity-70">{hosting}</p>}
        </div>

        {/* Key Features */}
        <div className="bg-base-200 p-4 rounded-xl">
          <h3 className="font-semibold mb-2">Key Features</h3>
          <ul className="list-disc ml-5 space-y-1">
            {features.map((f, i) => (
              <li key={`f-${i}`}>{f}</li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="bg-base-200 p-4 rounded-xl">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <div className="flex flex-wrap gap-3">
            {live && (
              <a
                className="btn btn-outline"
                href={live}
                target="_blank"
                rel="noreferrer"
              >
                Live Project
              </a>
            )}
            {githubClient && (
              <a
                className="btn btn-accent"
                href={githubClient}
                target="_blank"
                rel="noreferrer"
              >
                GitHub (Client)
              </a>
            )}
            {githubServer && (
              <a
                className="btn btn-ghost"
                href={githubServer}
                target="_blank"
                rel="noreferrer"
              >
                GitHub (Server)
              </a>
            )}
          </div>
        </div>
      </div>

      {/* --- Optional: Challenges & Improvements in a 2-column grid --- */}
      {(challenges.length > 0 || improvements.length > 0) && (
        <div className="grid gap-4 md:grid-cols-2">
          {challenges.length > 0 && (
            <div className="bg-base-200 p-4 rounded-xl">
              <h3 className="font-semibold mb-2">Challenges</h3>
              <ul className="list-disc ml-5 space-y-1">
                {challenges.map((c, i) => (
                  <li key={`ch-${i}`}>{c}</li>
                ))}
              </ul>
            </div>
          )}
          {improvements.length > 0 && (
            <div className="bg-base-200 p-4 rounded-xl">
              <h3 className="font-semibold mb-2">Improvements & Future Plans</h3>
              <ul className="list-disc ml-5 space-y-1">
                {improvements.map((c, i) => (
                  <li key={`imp-${i}`}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <Link className="btn btn-ghost" to="/projects">
        ← Back to Projects
      </Link>
    </section>
  );
};

export default ProjectDetail;