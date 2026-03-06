import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveNav(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Exploratory Data Analysis with MySQL",
      desc: "Performed exploratory data analysis on structured datasets using SQL queries. Extracted insights and identified trends through data summarisation and aggregation.",
      tags: ["MySQL", "Data Analysis", "SQL Optimization"],
      github: "https://github.com/keerthu274"
    },
    {
      title: "Data Cleaning in MySQL",
      desc: "Transformed raw datasets into clean, structured formats. Applied techniques to handle missing data, remove duplicates, and standardise entries.",
      tags: ["MySQL", "Data Cleaning", "Data Quality"],
      github: "https://github.com/keerthu274"
    },
    {
      title: "Power BI Job Simulation (PwC Forage)",
      desc: "Completed a business data analysis simulation focusing on customer retention and call centre trends. Designed Power BI dashboards to communicate key findings.",
      tags: ["Power BI", "Data Visualization", "Business Insights"],
      github: "https://github.com/keerthu274"
    },
    {
      title: "Tech Career Roadmap",
      desc: "Developed a full-stack web application for student career path exploration. Designed front-end with HTML, CSS, and JS with PHP/MySQL backend.",
      tags: ["Full Stack", "React", "PHP", "MySQL"],
      github: "https://github.com/keerthu274"
    },
    {
      title: "Veterinary Management System",
      desc: "Created a database-driven management system focused on data validation, database integration, and responsive UI design.",
      tags: ["PHP", "MySQL", "UI/UX"],
      github: "https://github.com/keerthu274"
    }
  ];

  const certifications = [
    {
      title: "Agile Project Management",
      issuer: "LinkedIn Learning",
      date: "Oct 2025",
      link: "https://www.linkedin.com/in/keerthanap27/details/certifications/"
    },
    {
      title: "Power BI Job Simulation",
      issuer: "PwC Switzerland / Forage",
      date: "Mar 2025",
      link: "https://www.theforage.com/simulations/pwc-ch/power-bi-job-simulation-pwc"
    },
    {
      title: "DBMS & SQL: Complete Pack",
      issuer: "Udemy",
      date: "Oct 2024",
      link: "https://www.udemy.com/certificate/UC-DBMS-SQL/"
    },
    {
      title: "Mega Microsoft Office Course",
      issuer: "Udemy",
      date: "Apr 2024",
      link: "https://www.udemy.com/certificate/UC-OFFICE/"
    }
  ];

  const experience = [
    {
      role: "Crew Member",
      company: "SPAR International, Wrexham",
      period: "Oct 2025 – Present",
      bullets: ["Managed customer transactions accurately.", "Maintained store presentation standards.", "Applied attention to detail and time management."]
    },
    {
      role: "Assistant Manager",
      company: "The Newsrack (Eastbourne) Ltd, Brighton",
      period: "Nov 2024 – Sep 2025",
      bullets: ["Supervised daily store operations including staff coordination.", "Developed leadership and problem-solving skills.", "Supported stock management and sales reporting."]
    },
    {
      role: "Sales Assistant",
      company: "The Newsrack (Eastbourne) Ltd, Brighton",
      period: "Nov 2022 – Oct 2024",
      bullets: ["Assisted customers with purchases and transactions.", "Strengthened teamwork and customer service skills.", "Maintained organised inventory."]
    },
    {
      role: "Crew Member",
      company: "Burger King, Hailsham",
      period: "May 2024 – Oct 2024",
      bullets: ["Delivered efficient customer service in high-volume setting.", "Improved time management and multitasking."]
    }
  ];

  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#home" className="logo">KP.</a>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={menuOpen ? 'bar open' : 'bar'}></span>
            <span className={menuOpen ? 'bar open' : 'bar'}></span>
            <span className={menuOpen ? 'bar open' : 'bar'}></span>
          </button>

          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            <li><a href="#home" className={activeNav === 'home' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className={activeNav === 'about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" className={activeNav === 'skills' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" className={activeNav === 'projects' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#experience" className={activeNav === 'experience' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="#contact" className={activeNav === 'contact' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-text">
            <h5>Hello, I'm</h5>
            <h1>KEERTHANA POOBALASINGAM</h1>
            <h3>Junior Data Analyst</h3>
            <p>Computing student passionate about turning data into meaningful insights using SQL, Power BI, and Excel.</p>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary">Hire Me</a>
              <a href="https://github.com/keerthu274" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              I am a detail-oriented Computing student at Wrexham University, expected to graduate in 2026.
              I am dedicated to transforming data into actionable insights and eager to apply my analytical
              thinking and problem-solving skills to real-world challenges. As a Junior Data Analyst intern,
              I aim to contribute significant value through clean, visualized, and well-reported data.
            </p>
            <div className="education">
              <h3>Education</h3>
              <div className="edu-item">
                <div className="edu-header">
                  <h4>BSc (Hons) in Computing</h4>
                  <span>2026</span>
                </div>
                <p>Wrexham University, Wales</p>
                <small>Modules: Distributed Data, Data Analytics, Databases, IT Project Management</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Certs Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h4>Data Analysis & Viz</h4>
              <ul>
                <li>Power BI</li>
                <li>Excel (Pivot Tables, Charts)</li>
                <li>Tableau (Learning)</li>
                <li>Dashboards</li>
              </ul>
            </div>
            <div className="skill-card">
              <h4>Database Management</h4>
              <ul>
                <li>MySQL</li>
                <li>Microsoft Access</li>
                <li>Google Sheets</li>
                <li>Data Cleaning</li>
              </ul>
            </div>
            <div className="skill-card">
              <h4>Programming & Tools</h4>
              <ul>
                <li>Basic Python</li>
                <li>Git / GitHub</li>
                <li>Analytical Thinking</li>
                <li>Team Collaboration</li>
              </ul>
            </div>
          </div>

          <h3 className="sub-section-title mt-2">Certifications</h3>
          <div className="certs-grid mt-1">
            {certifications.map((cert, i) => (
              <a key={i} href={cert.link} target="_blank" rel="noreferrer" className="cert-card">
                <div>
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer} • {cert.date}</p>
                </div>
                <span className="cert-icon">📜</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Key Projects</h2>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tags mb-1">
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>
                <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                  View on GitHub <span className="icon">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            {experience.map((exp, i) => (
              <div key={i} className="exp-item">
                <div className="exp-dot"></div>
                <div className="exp-content">
                  <div className="exp-header">
                    <h4>{exp.role}</h4>
                    <span>{exp.period}</span>
                  </div>
                  <p className="company">{exp.company}</p>
                  <ul>
                    {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>I'm currently looking for new opportunities as a Junior Data Analyst intern.</p>
              <div className="contact-links">
                <a href="mailto:p.keerthu27@gmail.com" className="contact-link">
                  <span className="icon">📧</span> p.keerthu27@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/keerthanap27" target="_blank" rel="noreferrer" className="contact-link">
                  <span className="icon">🔗</span> LinkedIn
                </a>
                <a href="https://github.com/keerthu274" target="_blank" rel="noreferrer" className="contact-link">
                  <span className="icon">💻</span> GitHub
                </a>
                <a href="tel:07417400391" className="contact-link">
                  <span className="icon">📞</span> 07417400391
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <p>&copy; 2026 KEERTHANA POOBALASINGAM. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
