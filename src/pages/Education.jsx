import React from 'react';

const items = [
  { title: 'MSc Advanced Computer Science', org: 'University of Hertfordshire, UK' },
  { title: 'BSc (Hons) Applied Computing', org: 'Glyndwr University, UK' },
  { title: 'MBA', org: 'Leading University, Bangladesh' },
  { title: 'MSc Genetic Engineering & Biotechnology', org: 'Shah Jalal University of Science & Technology, Bangladesh' }
]

const Education = () => {
    return (
       <section>
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((e) => (
          <div key={e.id} className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title">{e.title}</h3>
              <p className="opacity-80">{e.org}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
};

export default Education;