import type { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import IssuPage from './IssuPage';
import PysortPage from './PysortPage';

type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <header className="sectionHeader">
          <h2 className="sectionTitle">{title}</h2>
          {subtitle ? <p className="sectionSubtitle">{subtitle}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
};

const projects: Project[] = [
  {
    title: 'Packet Analyzer',
    description: 'command-line tool designed to capture and analyze live network traffic. It focuses on parsing Ethernet and IPv4 headers to provide detailed insights into the captured packets.',
    tags: ['C', 'CMake', 'Wireshark'],
    href: 'https://github.com/alejoeie/PacketAnalyzer',
  },
  {
    title: 'PySort',
    description: 'Intelligent file organization system for Linux that automatically sorts files into appropriate directories based on their extensions using configurable JSON rules.',
    tags: ['Python', 'Linux', 'CLI', 'File Management'],
    href: '/pysort',
  },
  {
    title: 'ISSU Major to Major',
    description: 'Zero-downtime software upgrade system for enterprise networking switches. Enables seamless transitions between major OS versions while maintaining continuous packet forwarding and network availability. The system validates compatibility across management and line modules, handles race conditions in multi-threaded C environments, and coordinates complex state transitions via REST APIs and the switchd daemon. Similar to Juniper\'s Unified ISSU and Arista\'s EOS Zero-Downtime Upgrade, this solution ensures carrier-grade reliability during critical infrastructure updates. (Code proprietary to HPE)',
    tags: ['System Architecture', 'C', 'C++', 'REST API', 'Multi-threading'],
    href: '/issu',
  },
];

const heroStats = [
  { label: 'Low-level', value: 'C / C++, Assembly (MIPS, ARM & x86)' },
  { label: 'Frontend', value: 'JavaScript, React' },
  { label: 'Scripting', value: 'Python, Bash' },
] as const;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/issu" element={<IssuPage />} />
        <Route path="/pysort" element={<PysortPage />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="page">
      <a className="skipLink" href="#main">
        Skip to content
      </a>

      <header className="header">
        <div className="container headerInner">
          <Link to="/" className="brand" aria-label="Home">
            <span className="brandMark" aria-hidden="true">
              AP
            </span>
            <span className="brandText">Alejandro Zuniga.</span>
          </Link>

          <nav className="nav" aria-label="Primary">
            <a className="navLink" href="#about">
              About
            </a>
            <a className="navLink" href="#projects">
              Projects
            </a>
            <a className="navLink" href="#contact">
              Contact
            </a>
          </nav>

          <div className="headerCtas">
            <a className="button buttonGhost" href="#projects">
              View work
            </a>
            <a className="button" href="#contact">
              Let's talk
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="container heroInner">
            <div className="heroCopy">
              <p className="badge">Available for opportunities</p>
              <h1 className="heroTitle">
                From hardware to software, I build products that solve real problems.
              </h1>
              <p className="heroSubtitle">
                Hello, Alejandro here. I am an Embedded Software Engineer with a passion for building innovative products.
                I'm currently working as an embedded software engineer at Hewlett-Packard Enterprise.
                I am also interested in web development and DevOps roadmap, as I have been studying some skills meanwhile
                my C/C++ code compiles :D.
              </p>
              <div className="heroActions">
                <a className="button" href="#projects">
                  See projects
                </a>
                <a className="button buttonGhost" href="#about">
                  About me
                </a>
              </div>
              <dl className="heroStats" aria-label="Highlights">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="stat">
                    <dt className="statLabel">{stat.label}</dt>
                    <dd className="statValue">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside className="heroCard" aria-label="Quick profile">
              <div className="heroCardInner">
                <p className="heroCardTitle">Quick intro</p>
                <p className="heroCardBody">
                  Engineer, crossfiter, hiker, traveler and adventurer. I love to discover and 
                  explore new places, try new things and meet new people. This is my way of life.
                </p>
                <div className="heroCardLinks">
                  <a className="textLink" href="mailto:alezph96@gmail.com">
                    Email
                  </a>
                  <a className="textLink" href="https://github.com/alejoeie/">
                    GitHub
                  </a>
                  <a className="textLink" href="https://www.linkedin.com/in/azunigap">
                    LinkedIn
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <Section
          id="about"
          title="About"
          subtitle="A quick snapshot of my profile."
        >
          <div className="twoCol">
            <div className="card">
              <h3 className="cardTitle">My approach</h3>
              <p className="cardBody">
                I care about clean code, healthy code reviews, good predictability and documentation
                on my work.
              </p>
            </div>
            <div className="card">
              <h3 className="cardTitle">What I’m working on</h3>
              <p className="cardBody">
                Currently focused on leveraging my low-level skills to build embedded systems, as well
                as developing my profile into acquiring DevOps/SRE skills.
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="A few highlights. Each one should show impact, stack, and what you learned."
        >
          <div className="grid">
            {projects.map((project) => (
              <article key={project.title} className="projectCard">
                <div className="projectTop">
                  <h3 className="projectTitle">{project.title}</h3>
                  {project.href ? (
                    project.href.startsWith('/') ? (
                      <Link className="textLink" to={project.href}>
                        View
                      </Link>
                    ) : (
                      <a className="textLink" href={project.href}>
                        View
                      </a>
                    )
                  ) : null}
                </div>
                <p className="projectBody">{project.description}</p>
                <ul className="tagList" aria-label={`${project.title} tags`}>
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact"
          subtitle="If you’re hiring, collaborating, or want to connect, send a message."
        >
          <div className="contactCard">
            <div>
              <p className="contactTitle">Let’s build something great.</p>
              <p className="contactBody">
                alezph96@gmail.com
              </p>
            </div>
            <div className="contactActions">
              <a className="button" href="mailto:alezph96@gmail.com">
                Email me
              </a>
              <a className="button buttonGhost" href="#top">
                Back to top
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <p className="footerText">© {new Date().getFullYear()} Alejandro Zuniga. Built with React + TypeScript.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
