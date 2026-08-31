import React, { useState } from 'react';
import { createPortal } from 'react-dom';
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
    stack: ['React Native', 'Expo', 'TypeScript', 'Socket.io', 'PropTech Features', 'Meme Sharing'],
    appStore: 'https://apps.apple.com/ng/app/nobzo/id6499149704',
    playStore: 'https://play.google.com/store/apps/details?id=com.nobzo.mobile',
    screenshots: [
      '/nobzo-1.jpeg',
      '/nobzo-2.jpeg',
      '/nobzo-3.jpeg',
      '/nobzo-4.png',
    ],
  },
  {
    title: 'Nobzo Admin & Operations Hub',
    year: '2026',
    type: 'Web Application',
    summary:
      'A modular, feature-rich back-office administration platform designed for rental management (units & tenants), featuring real-time chat, legal case tracking, compliance management, and interactive data visualization.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Recharts'],
    thumbnail: '/nobzo-dashboard.png',
  },
  {
    title: 'eMigr8 Visa Companion',
    year: '2026',
    type: 'Mobile Application',
    summary:
      'A mobile companion application designed to streamline global tech talent visa planning (UK, US, Canada, France) with personalized roadmaps, task tracking, and expert coaching integration.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
    appStore: 'https://apps.apple.com/ng/app/emigr8-visa-companion/id6791632754',
    playStore: 'https://play.google.com/store/apps/details?id=com.eMigr8.companion',
    screenshots: [
      '/emigr8-1.jpeg',
      '/emigr8-2.jpeg',
      '/emigr8-3.jpeg',
    ],
  },
  {
    title: 'eMigr8 AI Product Tools',
    year: '2026',
    type: 'Backend & Integration',
    summary:
      'A suite of AI-powered tools designed to support startup ideation, career development, visa business planning, interview preparation, and personalized recommendations. Contributed to API integration, Cloud Function integration, eMigr8 Gateway authentication, brand system implementation, testing, and deployment.',
    stack: ['React', 'Gemini API', 'Google Cloud Functions', 'Firebase', 'eMigr8 Gateway'],
    subProducts: [
      'Startup Idea Generator',
      'Aspirational CV Generator',
      'UK Innovator Founder Visa Business Plan Generator',
      'Innovator Founder Endorsement Interview Prep',
      'Recommendation Engine',
    ],
    screenshots: [
      '/Regen.png',
      '/visa1.png',
      '/visagen.png',
      '/IdeaGen.jpeg',
      '/cvgen.png',
      '/Innogen.png',
      '/gateway.png',
    ],
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
      'Socket.io',
      'Paystack',
    ],
    demo: 'https://www.sabiguy.com/',
    inDevelopment: true,
    screenshots: [
      '/sabi-1.jpeg',
      '/sabi-2.jpeg',
      '/sabi-3.jpeg',
      '/sabi-4.jpeg',
      '/sabi-5.jpeg',
      '/sabi-6.jpeg',
    ],
  },
  {
    title: 'Auvra',
    year: '2026',
    type: 'Mobile Application',
    summary:
      'A mobile platform designed to help individuals, families, and communities securely preserve, own, and pass down their cultural heritage, featuring Lens AI transcription, verified record badges, a private vault, and integrated wallet payments.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Redux'],
    inDevelopment: true,
    screenshots: [
      '/A-1.jpeg',
      '/A-2.jpeg',
      '/A-3.jpeg',
      '/A-4.jpeg',
      '/A-5.jpeg',
      '/A-6.jpeg',
    ],
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
    screenshots: [
      'https://raw.githubusercontent.com/MisturaDev/wallet-app-react-native/main/screenshots/Dashboard.jpg',
      '/AddMoney.jpeg',
      '/SendMoney.jpeg',
      '/Airtime.jpg',
      '/PayBills.jpg',
      '/TransactionHistory.jpg',
    ],
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
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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
        {filtered.map((project) => {
          const isMobileApp = project.type === 'Mobile Application';
          return (
            <article
              key={project.title}
              className="project-card"
              role="listitem"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }}
            >
              {project.screenshots && project.screenshots.length > 0 ? (
                <button
                  type="button"
                  className={`project-thumb-link project-thumb-btn ${isMobileApp ? 'mobile-mockup-card' : ''}`}
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveImageIndex(0);
                  }}
                  aria-label={`View screenshots for ${project.title}`}
                >
                  {isMobileApp && <div className="mockup-notch"></div>}
                  <img
                    className="project-thumb"
                    src={project.thumbnail || project.screenshots[0]}
                    alt={`${project.title} preview`}
                    loading="lazy"
                  />
                </button>
              ) : (
                <>
                  {(project.demo || project.appStore) && (
                    <a
                      className={`project-thumb-link ${isMobileApp ? 'mobile-mockup-card' : ''}`}
                      href={project.demo || project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit live project: ${project.title}`}
                    >
                      {isMobileApp && <div className="mockup-notch"></div>}
                      <img
                        className="project-thumb"
                        src={getPrimaryThumbnail(project)}
                        alt={`${project.title} preview`}
                        loading="lazy"
                      />
                    </a>
                  )}
                  {!(project.demo || project.appStore) && project.thumbnail && (
                    <div className={`project-thumb-link ${isMobileApp ? 'mobile-mockup-card' : ''}`}>
                      {isMobileApp && <div className="mockup-notch"></div>}
                      <img
                        className="project-thumb"
                        src={project.thumbnail}
                        alt={`${project.title} preview`}
                        loading="lazy"
                      />
                    </div>
                  )}
                </>
              )}
              <div className="project-meta">
                <p className="live-pill">{project.type}</p>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              {project.subProducts && (
                <ul className="sub-products-list">
                  {project.subProducts.map((sub) => (
                    <li key={sub}>{sub}</li>
                  ))}
                </ul>
              )}
              <div className="stack-row">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-links">
                {project.inDevelopment ? (
                  <span className="in-development">In Development</span>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {selectedProject && createPortal(
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            
            <div className="modal-slider">
              <button
                type="button"
                className="modal-arrow prev"
                onClick={() => setActiveImageIndex((prev) => (prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1))}
              >
                &#10094;
              </button>
              
              <div className="modal-image-container">
                <img
                  src={selectedProject.screenshots[activeImageIndex]}
                  alt={`${selectedProject.title} screenshot ${activeImageIndex + 1}`}
                  className="modal-image"
                />
              </div>
              
              <button
                type="button"
                className="modal-arrow next"
                onClick={() => setActiveImageIndex((prev) => (prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1))}
              >
                &#10095;
              </button>
            </div>
            
            <div className="modal-info">
              <h3>{selectedProject.title} Preview</h3>
              <p className="modal-counter">
                Screenshot {activeImageIndex + 1} of {selectedProject.screenshots.length}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Projects;
