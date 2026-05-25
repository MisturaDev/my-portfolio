import React from 'react';
import './Projects.css';

const getLiveThumbnail = (url) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1200`;

const getSecondaryThumbnail = (url) =>
  `https://image.thum.io/get/width/1200/crop/800/noanimate/${url}`;

const getRepoThumbnail = (repoUrl) => {
  if (!repoUrl || !repoUrl.includes('github.com/')) return null;
  const clean = repoUrl
    .replace('https://github.com/', '')
    .replace('.git', '')
    .replace(/\/$/, '');
  return `https://opengraph.githubassets.com/1/${clean}`;
};

const getFallbackThumb = (title) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#eef3fb"/>
          <stop offset="100%" stop-color="#dbe8ff"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#g)"/>
      <text x="60" y="420" fill="#0f172a" font-family="Arial, sans-serif" font-size="52" font-weight="700">
        ${title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}
      </text>
      <text x="60" y="485" fill="#334155" font-family="Arial, sans-serif" font-size="30">
        Live project preview
      </text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const getPrimaryThumbnail = (project) => {
  if (project.thumbnail) return project.thumbnail;
  if (project.demo) return getLiveThumbnail(project.demo);
  if (project.repo) return getRepoThumbnail(project.repo);
  return getFallbackThumb(project.title);
};

const projects = [
  {
    title: 'Nobzo',
    year: '2026',
    type: 'Mobile Application',
    summary:
      'A humor-first social platform focused on meme discovery, sharing, and community engagement with a smooth, mobile-first experience.',
    stack: ['React Native', 'Expo', 'Community Features'],
    demo: 'https://nobzoent.com/',
  },
  {
    title: 'SabiGuy - Service Marketplace App',
    year: '2026',
    type: 'Mobile Application',
    summary:
      'Collaborative volunteer development on a mobile marketplace connecting customers with trusted service providers, including React Native features for service discovery, booking flows, real-time chat, and secure wallet payments. Focused on clean implementation, cross-team delivery, and reliable mobile user experience across customer and provider journeys.',
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Zustand',
      'API Integration',
      'Product Collaboration',
    ],
  },
  {
    title: 'EduLive Analytics Dashboard',
    year: '2026',
    type: 'Web Application',
    summary:
      'An analytics dashboard for tracking educational insights, performance metrics, and engagement trends in one interface.',
    stack: ['React', 'Dashboard UI', 'Data Visualization'],
    repo: 'https://github.com/MisturaDev/edulive-analytics-dashboard.git',
    demo: 'https://edulive-analytics-dashboard.vercel.app/',
  },
  {
    title: 'AI Safe Alert App',
    year: '2026',
    type: 'Web Application',
    summary:
      'A collaborative safety-focused web application that helps users trigger emergency alerts quickly, with AI-assisted safety guidance and faster access to help.',
    stack: ['React', 'Alerts', 'Firebase'],
    repo: 'https://github.com/MisturaDev/ai-safe-alert-app.git',
    demo: 'https://ai-safe-alert-app.vercel.app/',
  },
  {
    title: 'React Native & Expo Course',
    year: '2026',
    type: 'Course',
    summary:
      'A beginner-friendly public course on building a mobile app with React Native and Expo.',
    stack: ['React Native', 'Expo', 'Teaching'],
    demo: 'https://distinction.app/public-course/build-a-beginner-friendly-mobile-app-with-react-native-and-expo',
  },
  {
    title: 'JobTracker App',
    year: '2026',
    type: 'Web Application',
    summary:
      'A workflow tool for organizing job applications with progress visibility and status-based tracking.',
    stack: ['React', 'Filtering', 'CRUD flows'],
    repo: 'https://github.com/MisturaDev/Job-Tracker.git',
    demo: 'https://job-tracker-wine-seven.vercel.app/',
  },
  {
    title: 'Home Saver App',
    year: '2025',
    type: 'Web Application',
    summary:
      'A home energy dashboard that visualizes usage, supports limit controls, and sends proactive savings alerts.',
    stack: ['React', 'Charts', 'State Management'],
    repo: 'https://github.com/MisturaDev/bright-home-saver.git',
    demo: 'https://bright-home-saver.vercel.app/',
  },
  {
    title: 'StyleHub Marketplace',
    year: '2025',
    type: 'Web Application',
    summary:
      'A fashion marketplace where users can register, browse listings, and publish products in a seller flow.',
    stack: ['React', 'Routing', 'Product UI', 'Supabase'],
    repo: 'https://github.com/MisturaDev/stylehub-app-react.git',
    demo: 'https://stylehub-app-react.vercel.app/',
  },
  {
    title: 'Wallet App',
    year: '2025',
    type: 'Mobile Application',
    summary:
      'A cross-platform wallet experience built with React Native and Expo, with Firebase sync for user data.',
    stack: ['React Native', 'Expo', 'Firebase'],
    repo: 'https://github.com/MisturaDev/wallet-app-react-native.git',
    thumbnail: 'https://raw.githubusercontent.com/MisturaDev/wallet-app-react-native/main/screenshots/Dashboard.jpg',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-shell projects">
      <p className="eyebrow">Projects</p>
      <p className="section-lead">A focused selection of web and mobile applications demonstrating real-world problem-solving, API-driven architecture, and production-ready execution.</p>

      <div className="projects-grid" role="list" aria-label="Project list">
        {projects.map((project) => (
          <article key={project.title} className="project-card" role="listitem">
            {(project.demo || project.repo) && (
              <a
                className="project-thumb-link"
                href={project.demo || project.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live project: ${project.title}`}
              >
                <img
                  className="project-thumb"
                  src={getPrimaryThumbnail(project)}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  data-demo={project.demo}
                  data-repo={project.repo}
                  onError={(event) => {
                    const img = event.currentTarget;
                    const demoUrl = img.dataset.demo;
                    const repoUrl = img.dataset.repo;

                    if (demoUrl && !img.dataset.fallbackStep) {
                      img.dataset.fallbackStep = 'secondary';
                      img.src = getSecondaryThumbnail(demoUrl);
                      return;
                    }

                    if (!demoUrl && repoUrl && !img.dataset.fallbackStep) {
                      img.dataset.fallbackStep = 'fallback';
                      img.src = getFallbackThumb(project.title);
                      return;
                    }

                    img.onerror = null;
                    img.src = getFallbackThumb(project.title);
                  }}
                />
              </a>
            )}
            <div className="project-meta">
              <p className="live-pill">{project.type}</p>
              <span>{project.year}</span>
            </div>
            <h3>{project.title}</h3>
            <p className="project-summary">{project.summary}</p>
            <div className="stack-row">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="project-links">
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  {project.repo.includes('github.com') ? 'GitHub' : 'Project Link'}
                </a>
              )}
              {!project.repo && project.type === 'Course' && project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Visit Course
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
