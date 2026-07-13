import React from 'react';
import './Skills.css';

const tracks = [
  {
    title: 'Frontend Development',
    stack: [
      'HTML',
      'CSS',
      'React.js',
      'Next.js',
      'TypeScript',
      'Angular',
      'Tailwind CSS',
      'JavaScript (ES6+)',
    ],
  },
  {
    title: 'Mobile Development',
    stack: ['React Native', 'Expo', 'Ionic', 'Cordova'],
  },
  {
    title: 'Backend & Integrations',
    stack: ['Node.js', 'Supabase', 'Firebase', 'REST APIs', 'WordPress API'],
  },
  {
    title: 'Tools & Technologies',
    stack: ['Git & GitHub', 'Postman', 'Figma', 'Vercel', 'Agile/Scrum'],
  },
];

const Skills = () => {
  return (
    <section id="experience" className="section-shell experience">
      <p className="eyebrow">Skills</p>

      <div className="track-grid" role="list" aria-label="Experience tracks">
        {tracks.map((track) => (
          <article
            key={track.title}
            className="track-card"
            role="listitem"
          >
            <h3>{track.title}</h3>
            <ul>
              {track.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h3 className="standalone-heading">Core Specializations</h3>
      <div className="standalone-grid">
        <article className="track-card mobile-standalone" aria-label="Frontend stack">
          <h3>Frontend</h3>
          <p className="track-desc">Modern React tooling for UI systems and responsive product work.</p>
          <div className="mobile-logo-row">
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML" loading="lazy" />
              <span>HTML</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/css/1572B6" alt="CSS" loading="lazy" />
              <span>CSS</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" loading="lazy" />
              <span>React</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/nextdotjs/111111" alt="Next.js" loading="lazy" />
              <span>Next.js</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" loading="lazy" />
              <span>TypeScript</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" loading="lazy" />
              <span>JavaScript</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind" loading="lazy" />
              <span>Tailwind</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/redux/764ABC" alt="Redux" loading="lazy" />
              <span>Redux</span>
            </div>
          </div>
        </article>

        <article className="track-card mobile-standalone" aria-label="Mobile skills">
          <h3>Mobile</h3>
          <p className="track-desc">Cross-platform delivery and native platform awareness.</p>
          <div className="mobile-logo-row">
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React Native" loading="lazy" />
              <span>React Native</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/apple/111111" alt="iOS" loading="lazy" />
              <span>iOS</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/android/3DDC84" alt="Android" loading="lazy" />
              <span>Android</span>
            </div>
          </div>
        </article>

        <article className="track-card mobile-standalone" aria-label="Backend and database stack">
          <h3>Backend & Database</h3>
          <p className="track-desc">API-driven architecture and data-focused application workflows.</p>
          <div className="mobile-logo-row">
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" loading="lazy" />
              <span>Node.js</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/express/111111" alt="Express.js" loading="lazy" />
              <span>Express.js</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/firebase/FFCA28" alt="Firebase" loading="lazy" />
              <span>Firebase</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/supabase/3ECF8E" alt="Supabase" loading="lazy" />
              <span>Supabase</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/mysql/4479A1" alt="SQL Database" loading="lazy" />
              <span>SQL Database</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/postman/FF6C37" alt="REST APIs" loading="lazy" />
              <span>REST APIs</span>
            </div>
          </div>
        </article>

        <article className="track-card mobile-standalone" aria-label="Workflow tools">
          <h3>Workflow</h3>
          <p className="track-desc">Tools that support delivery discipline and collaboration.</p>
          <div className="mobile-logo-row">
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" loading="lazy" />
              <span>Git</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" loading="lazy" />
              <span>GitHub</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/postman/FF6C37" alt="Postman" loading="lazy" />
              <span>Postman</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma" loading="lazy" />
              <span>Figma</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/vercel/000000" alt="Vercel" loading="lazy" />
              <span>Vercel</span>
            </div>
            <div className="mobile-chip">
              <img src="https://cdn.simpleicons.org/jira/0052CC" alt="Agile/Scrum" loading="lazy" />
              <span>Agile/Scrum</span>
            </div>
          </div>
        </article>
      </div>

    </section>
  );
};

export default Skills;
