import React, { useState } from 'react';
import './Projects.css';

const getLiveThumbnail = (url) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1200`;

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
  return getFallbackThumb(project.title);
};

const projects = [
  {
    title: 'Nobzo',
    year: '2026',
    type: 'Mobile Application',
    summary:
      'A modern PropTech (Property Technology) mobile ecosystem designed to seamlessly connect people, properties, opportunities, and engaging lifestyle experiences.',
    stack: ['React Native', 'Expo', 'TypeScript', 'PropTech Features', 'Meme Sharing'],
    demo: 'https://nobzoent.com/',
    appStore: 'https://apps.apple.com/ng/app/nobzo/id6499149704',
    playStore: 'https://play.google.com/store/apps/details?id=com.nobzo.mobile',
  },
  {
    title: 'SabiGuy',
    year: '2026',
    type: 'Mobile Application',
    summary:
      'A mobile service marketplace connecting customers with local service providers, featuring interactive booking flows, real-time chat, and integrated secure wallet payments.',
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Zustand',
      'API Integration',
    ],
    demo: 'https://www.sabiguy.com/',
  },
  {
    title: 'EduLive Analytics Dashboard',
    year: '2026',
    type: 'Web Application',
    summary:
      'An analytics dashboard for tracking educational insights, performance metrics, and engagement trends in one interface.',
    stack: ['React', 'Dashboard UI', 'Data Visualization'],
    demo: 'https://edulive-analytics-dashboard.vercel.app/',
  },
  {
    title: 'AI Safe Alert App',
    year: '2026',
    type: 'Web Application',
    summary:
      'A safety-focused web application that helps users trigger emergency alerts quickly, with AI-assisted safety guidance and faster access to help.',
    stack: ['React', 'Alerts', 'Firebase'],
    demo: 'https://ai-safe-alert-app.vercel.app/',
  },
  {
    title: 'JobTracker App',
    year: '2026',
    type: 'Web Application',
    summary:
      'A workflow tool for organizing job applications with progress visibility and status-based tracking.',
    stack: ['React', 'Filtering', 'CRUD flows'],
    demo: 'https://job-tracker-wine-seven.vercel.app/',
  },
  {
    title: 'StyleHub Marketplace',
    year: '2025',
    type: 'Web Application',
    summary:
      'A fashion marketplace where users can register, browse listings, and publish products in a seller flow.',
    stack: ['React', 'Routing', 'Product UI', 'Supabase'],
    demo: 'https://stylehub-app-react.vercel.app/',
  },
  {
    title: 'Home Saver App',
    year: '2025',
    type: 'Web Application',
    summary:
      'A home energy dashboard that visualizes usage, supports limit controls, and sends proactive savings alerts.',
    stack: ['React', 'Charts', 'State Management'],
    demo: 'https://bright-home-saver.vercel.app/',
  },
  {
    title: 'Wallet App',
    year: '2025',
    type: 'Mobile Application',
    summary:
      'A cross-platform wallet experience built with React Native and Expo, with Firebase sync for user data.',
    stack: ['React Native', 'Expo', 'Firebase'],
    thumbnail: 'https://raw.githubusercontent.com/MisturaDev/wallet-app-react-native/main/screenshots/Dashboard.jpg',
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
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) =>
        filter === 'Mobile'
          ? p.type === 'Mobile Application'
          : p.type !== 'Mobile Application'
      );

  return (
    <section id="projects" className="section-shell projects">
      <p className="eyebrow">Projects</p>

      <div className="project-filters" role="tablist" aria-label="Filter projects">
        {['All', 'Web', 'Mobile'].map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={filter === tab}
            className={`filter-tab ${filter === tab ? 'active' : ''}`}
            onClick={() => setFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="projects-grid" role="list" aria-label="Project list">
        {filtered.map((project) => (
          <article key={project.title} className="project-card" role="listitem">
            {(project.demo || project.appStore) && (
              <a
                className="project-thumb-link"
                href={project.demo || project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live project: ${project.title}`}
              >
                <img
                  className="project-thumb"
                  src={getPrimaryThumbnail(project)}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
              </a>
            )}
            {!(project.demo || project.appStore) && project.thumbnail && (
              <div className="project-thumb-link">
                <img
                  className="project-thumb"
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
              </div>
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
              {project.demo && !project.appStore && !project.playStore && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  {project.type === 'Mobile Application' 
                    ? 'Visit App' 
                    : project.type === 'Course' 
                      ? 'Visit Course' 
                      : 'Visit Project'}
                </a>
              )}
              {project.appStore && (
                <a href={project.appStore} target="_blank" rel="noopener noreferrer">
                  App Store
                </a>
              )}
              {project.playStore && (
                <a href={project.playStore} target="_blank" rel="noopener noreferrer">
                  Play Store
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
