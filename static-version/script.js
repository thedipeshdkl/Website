/* ===== Dipesh Dhakal — Portfolio (Plain HTML/CSS/JS version) ===== */
'use strict';

/* ============================= DATA ============================= */
const DATA = {
  name: 'Dipesh Dhakal',
  email: 'dipeshrajdhakal@gmail.com',
  phone: '+977 9851495988',
  location: 'Kathmandu, 22 Kthamandu, Nepal',
  github: 'https://github.com/dipeshdhakal1522',
  linkedin: 'https://www.linkedin.com/in/dipeshdhakal1522',
  instagram: 'https://www.instagram.com/dipeshdhakal1522',
  facebook: 'https://www.facebook.com/share/1BT9YVq5tp/',
  whatsapp: 'https://wa.me/dipeshdhakal1522',
  twitter: 'https://x.com/DipeshRajDhakal',
  youtube: 'https://youtube.com/@dipeshdhakal1522',
  roles: ['Cybersecurity Specialist', 'Web Developer', 'UI/UX Designer', 'Data Analyst'],
  bio: 'Dipesh Dhakal is a cybersecurity researcher and software developer based in Kathmandu, Nepal. His work focuses on identifying and addressing security weaknesses in digital systems and building web applications that are functional, performant, and resilient.',
  aboutParagraphs: [
    'Currently pursuing a BSc (Hons) in Ethical Hacking & Cyber Security from Coventry University. Practical experience spans offensive security research, penetration testing, and full-stack web development, including SaanjhCyber and stock analytics tools for the Nepal Stock Exchange.',
    'Additional background in media production (Radio Palung FM) and web design provides a broader perspective on communication, project management, and user experience.'
  ],
  stats: [
    { label: 'Years Experience', value: '3+', icon: '\u{1F6E1}\uFE0F' },
    { label: 'Projects Built', value: '10+', icon: '\u{1F4C1}' },
    { label: 'Certifications', value: '15+', icon: '\u{1F3C6}' },
    { label: 'Organizations', value: '4+', icon: '\u{1F465}' }
  ],
  capabilities: [
    { title: 'Penetration Testing', desc: 'Web application security audits, vulnerability scans, network reconnaissance, and security assessments.', icon: '\u26A0\uFE0F' },
    { title: 'Web Development', desc: 'Developing React, TypeScript, and Python web applications with modern APIs.', icon: '\u{1F4BB}' },
    { title: 'UI/UX Design', desc: 'Designing dashboards and user interfaces with a focus on clarity and usability.', icon: '\u{1F5BC}\uFE0F' },
    { title: 'Data Analysis', desc: 'Writing web crawlers, log analysis scripts, and structured data extraction tooling.', icon: '\u{1F4CA}' }
  ],
  skills: [
    {
      title: 'Cybersecurity & Offensive Security',
      description: 'Vulnerability analysis, web application security, and threat assessment.',
      image: 'images/skill-cybersecurity.jpg',
      skills: [
        ['Penetration Testing', 'Advanced'], ['Vulnerability Assessment', 'Advanced'],
        ['Web Application Security', 'Advanced'], ['Network Security', 'Intermediate'],
        ['OSINT (Open Source Intelligence)', 'Advanced'], ['Social Engineering', 'Intermediate'],
        ['Security Auditing', 'Intermediate'], ['Digital Forensics', 'Intermediate']
      ]
    },
    {
      title: 'Software Engineering & Web',
      description: 'Programming languages, frameworks, and database fundamentals.',
      image: 'images/skill-development.jpg',
      skills: [
        ['Python', 'Advanced'], ['Bash Scripting', 'Intermediate'], ['SQL', 'Intermediate'],
        ['React', 'Advanced'], ['TypeScript', 'Advanced'], ['HTML5 & CSS3', 'Expert'],
        ['JavaScript (ES6+)', 'Advanced'], ['REST APIs', 'Intermediate']
      ]
    },
    {
      title: 'Security Tooling & Dev Environment',
      description: 'Standard security tools and development environments.',
      image: 'images/skill-tools.jpg',
      skills: [
        ['Kali Linux', 'Advanced'], ['Burp Suite', 'Advanced'], ['Nmap', 'Advanced'],
        ['Wireshark', 'Intermediate'], ['Metasploit', 'Intermediate'], ['Docker', 'Intermediate'],
        ['Git & GitHub', 'Advanced']
      ]
    },
    {
      title: 'Design & Professional Skills',
      description: 'User experience design, project coordination, and technical communication.',
      image: 'images/skill-other.jpg',
      skills: [
        ['UI/UX Design', 'Advanced'], ['Data Scraping & Analysis', 'Intermediate'],
        ['Technical Research', 'Advanced'], ['Radio Broadcasting & Media', 'Advanced']
      ]
    }
  ],
  projects: [
    {
      id: 'saanjhcyber', title: 'SaanjhCyber', subtitle: 'Cybercrime Reporting Platform',
      category: 'Cybersecurity', desc: 'Cybercrime reporting & awareness platform with case tracking, evidence upload & privacy controls.',
      detail: 'SaanjhCyber is a final year capstone project developed in collaboration with Coventry University (May 2025). It provides a structured process for reporting cybercrime incidents, supports secure evidence uploads, tracks case progress via unique Case IDs, and maintains a searchable database of suspicious online entities.',
      tags: ['React', 'TypeScript', 'Vite', 'API'],
      github: 'https://github.com/dipeshdhakal1522/SaanjhCyber', live: null,
      image: 'images/saanjhcyber-dashboard.jpg',
      highlights: [
        'Guided Multi-Step Incident Reporting Flow',
        'Unique Case Tracking System with Privacy Options',
        'Searchable Entity Database (Bank/Wallet Fraud Verifications)',
        'Nepal Map Threat Heatmap & Admin Dashboard'
      ]
    },
    {
      id: 'noirlink', title: 'NoirLink Trading', subtitle: 'NEPSE Analysis Platform',
      category: 'Finance', desc: 'NEPSE analysis platform with stock insights, technical analysis, portfolio tracking & calculators.',
      detail: 'NoirLink Trading provides technical indicator charts, fundamental stock screening, portfolio tracking, and index sentiment metrics for individual investors trading in the Nepal Stock Exchange.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Python'],
      github: 'https://github.com/dipeshdhakal1522/-NoirLink-Traderchang', live: null,
      image: 'images/noirlink-banner.jpg',
      highlights: [
        'NEPSE Market Sentiment & Index Charts',
        'Stock Fundamental Screening & Indicator Analytics',
        'Custom Portfolio Management & Calculator Tools'
      ]
    },
    {
      id: 'file-integrity', title: 'File Integrity System', subtitle: 'Cybersecurity Tool',
      category: 'Cybersecurity', desc: 'File integrity & authenticity verification system to detect tampering and protect data integrity.',
      detail: 'This cryptographic security utility monitors designated filesystem directories and computes SHA-256/SHA-512 hashes to detect file modification, corruption, or unauthorized tampering, generating audit logs for review.',
      tags: ['Python', 'Hashing', 'Tkinter', 'Security'],
      github: 'https://github.com/dipeshdhakal1522/File-Integrity-Authenticity-Verification-System', live: null,
      image: 'images/file-integrity-banner.jpg',
      highlights: [
        'Continuous SHA-256 & SHA-512 Hash Monitoring',
        'Automated File Tamper Detection & Alerts',
        'Exportable System Audit & Log Reports'
      ]
    },
    {
      id: 'news-crawler', title: 'News Crawler', subtitle: 'Web Scraping & Data Extraction',
      category: 'Automation', desc: 'Automated news crawling & data extraction system for collecting and processing online news.',
      detail: 'News Crawler extracts news articles, headlines, publication dates, and body text from online news sources. It cleans raw HTML, removes duplicates, and exports structured datasets.',
      tags: ['Python', 'Scrapy', 'BeautifulSoup', 'CSV'],
      github: 'https://github.com/dipeshdhakal1522/news_crawler', live: null,
      image: 'images/news-crawler-banner.jpg',
      highlights: [
        'Multi-Threaded Asynchronous Web Scraping Engine',
        'HTML Parsing & Content De-duplication',
        'JSON / CSV Data Export Pipeline'
      ]
    }
  ],
  education: [
    {
      degree: 'BSc (Hons) Ethical Hacking and Cyber Security', institution: 'Coventry University',
      duration: '2022 \u2013 May 2025', location: 'Kathmandu, Nepal / UK', badge: 'Undergraduate Degree',
      image: 'images/coventry-university.jpg', url: 'https://www.coventry.ac.uk/',
      details: [
        'Specialized in Penetration Testing, Web Application Security, Digital Forensics, Cryptography, and System Hardening.',
        'Developed SaanjhCyber (Cybercrime Reporting & Intelligence Platform for Nepal) as a Final Year Capstone Project.'
      ]
    },
    {
      degree: '+2 Science (Computer Science Focus)', institution: 'Gyankunj SS & College',
      duration: 'Higher Secondary', location: 'Kathmandu, Nepal', badge: 'High School',
      image: 'images/gyankunj-college.jpg', url: 'https://gyankunjschool.edu.np/',
      details: ['Foundation in Mathematics, Physics, Chemistry, and Computer Science fundamentals.']
    },
    {
      degree: 'UI/UX Design & Digital Marketing Strategy', institution: 'Nitte Meenakshi Institute of Technology',
      duration: 'Specialized Training', location: 'Bengaluru, India', badge: 'Specialization',
      image: 'images/nitte-nmit.jpg', url: 'https://nitte.edu.in/nmit/',
      details: ['Specialized training in UI/UX design and digital marketing strategy.']
    }
  ],
  experiences: [
    {
      title: 'Social Engineering & Security Analyst', org: 'GANGA Offensive Ops Pvt. Ltd.',
      duration: 'Security Research Focus', focus: 'Social Engineering & Vulnerability Assessment',
      points: [
        'Conducted simulated phishing campaigns and social engineering awareness assessments.',
        'Assisted in evaluating human-factor threat vectors and drafting remediation reports.',
        'Researched attack surfaces and OSINT techniques for organizational risk reduction.'
      ]
    },
    {
      title: 'IT & Network Intern', org: 'Nepal Telecom',
      duration: 'Internship', focus: 'IT & Telecom Infrastructure',
      points: [
        'Assisted network engineers with telecommunications infrastructure monitoring and diagnostics.',
        'Worked with routing, enterprise networking protocols, and log analysis.',
        'Supported internal IT operations and equipment troubleshooting.'
      ]
    },
    {
      title: 'Web Designer', org: 'Decorum Technology and Research Center',
      duration: 'Design & Development', focus: 'Web Design & Frontend Development',
      points: [
        'Designed and developed responsive websites and user interfaces for clients.',
        'Translated design concepts into functional frontend builds.',
        'Collaborated with teams on layout, usability, and visual consistency.'
      ]
    },
    {
      title: 'Radio Program Producer & Presenter', org: 'Radio Palung FM',
      duration: 'Media & Broadcasting', focus: 'Audio Production & Public Communication',
      points: [
        'Produced and hosted radio shows covering technology trends and community topics.',
        'Managed digital audio editing, sound mixing, and broadcast schedules.',
        'Developed public speaking, clear communication, and audience engagement skills.'
      ]
    }
  ],
  certificates: [
    { title: 'Ethical Hacking & Web Application Security', org: 'Coventry University', date: '2024' },
    { title: 'Vulnerability Assessment & OSINT Research', org: 'Security Training', date: '2024' },
    { title: 'Modern Frontend & UI/UX Design', org: 'Self-Directed / Projects', date: '2024' },
    { title: 'Enterprise Networking & System Administration', org: 'Nepal Telecom Training', date: '2023' }
  ],
  repos: [
    { name: 'SaanjhCyber', desc: 'Cybercrime reporting & awareness platform with case tracking, evidence upload, and privacy controls.', url: 'https://github.com/dipeshdhakal1522/SaanjhCyber' },
    { name: 'NoirLink-Traderchang', desc: 'NEPSE analysis platform with technical charts, screening, portfolio tracking & calculators.', url: 'https://github.com/dipeshdhakal1522/-NoirLink-Traderchang' },
    { name: 'File-Integrity-Authenticity-Verification-System', desc: 'SHA-256/SHA-512 based file tamper detection and audit logging tool.', url: 'https://github.com/dipeshdhakal1522/File-Integrity-Authenticity-Verification-System' },
    { name: 'news_crawler', desc: 'Automated multi-threaded web scraping engine with JSON/CSV export.', url: 'https://github.com/dipeshdhakal1522/news_crawler' }
  ],
  socials: [
    { name: 'GitHub', handle: '@dipeshdhakal1522', url: 'https://github.com/dipeshdhakal1522' },
    { name: 'LinkedIn', handle: 'in/dipeshdhakal1522', url: 'https://www.linkedin.com/in/dipeshdhakal1522' },
    { name: 'Instagram', handle: '@dipeshdhakal1522', url: 'https://www.instagram.com/dipeshdhakal1522' },
    { name: 'Facebook', handle: 'dipeshdhakal1522', url: 'https://www.facebook.com/share/1BT9YVq5tp/' },
    { name: 'WhatsApp', handle: '+977 9851495988', url: 'https://wa.me/dipeshdhakal1522' },
    { name: 'X (Twitter)', handle: '@DipeshRajDhakal', url: 'https://x.com/DipeshRajDhakal' },
    { name: 'YouTube', handle: '@dipeshdhakal1522', url: 'https://youtube.com/@dipeshdhakal1522', full: true }
  ]
};

/* ============================= HELPERS ============================= */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const yOffset = window.innerWidth >= 1024 ? -80 : -16;
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

/* ============================= BACKGROUND CANVAS ============================= */
(function canvasBg() {
  const canvas = $('#bg-canvas');
  const ctx = canvas.getContext('2d');
  const colors = ['#10b981', '#a3e635', '#f59e0b', '#10b981'];
  let w, h, particles = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.min(70, Math.floor((w * h) / 22000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 0.5, c: colors[Math.floor(Math.random() * colors.length)]
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = p.c;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', resize);
})();

/* ============================= ROTATING ROLE ============================= */
(function rotatingRole() {
  const el = $('#rotating-role');
  let index = 0, deleting = false, text = '';
  const current = () => DATA.roles[index % DATA.roles.length];

  setInterval(() => {
    const target = current();
    if (!deleting && text === target) {
      deleting = true;
      setTimeout(() => {}, 0);
      return;
    }
    if (deleting && text === '') {
      deleting = false;
      index++;
      return;
    }
    text = deleting ? target.slice(0, text.length - 1) : target.slice(0, text.length + 1);
    el.textContent = text;
  }, deleting ? 40 : 90);
})();

/* ============================= RENDER SECTIONS ============================= */
function renderStats() {
  $('#stats').innerHTML = DATA.stats.map((s) =>
    '<div class="stat"><div class="stat-icon">' + s.icon + '</div>' +
    '<div><span class="stat-value">' + s.value + '</span><span class="stat-label"> ' + s.label + '</span></div></div>'
  ).join('');
}

function renderAbout() {
  $('#about-bio').textContent = DATA.bio;
  $('#about-paragraphs').innerHTML = DATA.aboutParagraphs.map((p) => '<p>' + p + '</p>').join('');
  $('#caps').innerHTML = DATA.capabilities.map((c) =>
    '<div class="cap"><div class="cap-icon">' + c.icon + '</div>' +
    '<div><h4>' + c.title + '</h4><p>' + c.desc + '</p></div></div>'
  ).join('');
}

function renderSkills() {
  $('#skills-grid').innerHTML = DATA.skills.map((cat) =>
    '<div class="skill-card"><img src="' + cat.image + '" alt="' + cat.title + '" />' +
    '<div class="skill-card-body"><h3>' + cat.title + '</h3><p>' + cat.description + '</p>' +
    cat.skills.map(([name, level]) =>
      '<div class="skill-item"><span class="skill-name">' + name + '</span>' +
      '<span class="level ' + level + '">' + level + '</span></div>'
    ).join('') + '</div></div>'
  ).join('');
}

function renderProjects() {
  $('#projects-grid').innerHTML = DATA.projects.map((p, i) =>
    '<button class="project-card" data-project="' + i + '">' +
    '<img src="' + p.image + '" alt="' + p.title + '" />' +
    '<div class="project-body"><span class="project-cat">' + p.category + '</span>' +
    '<h3>' + p.title + '</h3><p class="project-sub">' + p.subtitle + '</p>' +
    '<p class="project-desc">' + p.desc + '</p>' +
    '<div class="tags">' + p.tags.map((t) => '<span class="tag">' + t + '</span>').join('') + '</div>' +
    '</div></button>'
  ).join('');
}

function renderEducation() {
  $('#edu-grid').innerHTML = DATA.education.map((e) =>
    '<div class="edu-card"><img src="' + e.image + '" alt="' + e.institution + '" />' +
    '<div class="edu-body"><span class="edu-badge">' + e.badge + '</span>' +
    '<h3>' + e.degree + '</h3>' +
    '<p class="edu-inst">' + e.institution + ' \u2022 ' + e.duration + '</p>' +
    '<ul>' + e.details.map((d) => '<li>' + d + '</li>').join('') + '</ul>' +
    (e.url ? '<a class="edu-link" href="' + e.url + '" target="_blank" rel="noopener">Visit Institution \u2192</a>' : '') +
    '</div></div>'
  ).join('');
}

function renderExperience() {
  $('#timeline').innerHTML = DATA.experiences.map((x) =>
    '<div class="exp-item"><div class="exp-dot">\u2022</div>' +
    '<div class="exp-card"><h3>' + x.title + '</h3>' +
    '<p class="exp-org">' + x.org + ' \u2022 ' + x.location + ' \u2022 ' + x.duration + '</p>' +
    '<p class="exp-focus">' + x.focus + '</p>' +
    '<ul>' + x.points.map((p) => '<li>' + p + '</li>').join('') + '</ul>' +
    '<div class="tags">' + x.tags.map((t) => '<span class="tag">' + t + '</span>').join('') + '</div>' +
    '</div></div>'
  ).join('');
}

function renderCertificates() {
  $('#cert-grid').innerHTML = DATA.certificates.map((c) =>
    '<div class="cert-card"><div><h3>' + c.title + '</h3><p class="cert-org">' + c.org + '</p></div>' +
    '<div class="cert-meta"><span class="cert-date">' + c.date + '</span></div></div>'
  ).join('');
}

function renderGithub() {
  $('#gh-repos').innerHTML = DATA.repos.map((r) =>
    '<a class="repo-card" href="' + r.url + '" target="_blank" rel="noopener">' +
    '<h4>' + r.name + '</h4><p>' + r.desc + '</p>' +
    '<div class="tags"><span class="tag">GitHub</span></div></a>'
  ).join('');
}

function renderSocials() {
  const chipHtml = DATA.socials.map((s) =>
    '<a class="social-chip" href="' + s.url + '" target="_blank" rel="noopener">' + s.name + '</a>'
  ).join('');
  $('#sidebar-socials').innerHTML = chipHtml;

  const cardHtml = DATA.socials.map((s) =>
    '<a class="social-card' + (s.full ? ' full' : '') + '" href="' + s.url + '" target="_blank" rel="noopener">' +
    '<span>' + s.name + '</span><span class="handle">' + s.handle + '</span></a>'
  ).join('');
  $('#social-grid').innerHTML = cardHtml;
}

renderStats();
renderAbout();
renderSkills();
renderProjects();
renderEducation();
renderExperience();
renderCertificates();
renderGithub();
renderSocials();

/* ============================= NAV / SCROLL SPY ============================= */
$$('.nav-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToId(link.getAttribute('href').slice(1));
  });
});

$('#view-projects').addEventListener('click', () => scrollToId('projects'));
$('#get-in-touch').addEventListener('click', () => scrollToId('contact'));

const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'certificates', 'github', 'contact'];

window.addEventListener('scroll', () => {
  let current = 'home';
  const probe = window.scrollY + (window.innerWidth >= 1024 ? 120 : 40);
  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= probe) current = id;
  });
  $$('.nav-link').forEach((l) => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
});

/* ============================= PROJECT MODAL ============================= */
function openProject(idx) {
  const p = DATA.projects[idx];
  $('#project-modal-body').innerHTML =
    '<img class="pm-img" src="' + p.image + '" alt="' + p.title + '" />' +
    '<span class="pm-cat">' + p.category + '</span>' +
    '<h3 class="pm-title">' + p.title + ' <span class="grad">' + p.subtitle + '</span></h3>' +
    '<p class="pm-desc">' + p.detail + '</p>' +
    '<ul class="pm-highlights">' + p.highlights.map((h) => '<li>' + h + '</li>').join('') + '</ul>' +
    '<div class="tags">' + p.tags.map((t) => '<span class="tag">' + t + '</span>').join('') + '</div>' +
    '<div class="pm-links"><a class="gh" href="' + p.github + '" target="_blank" rel="noopener">View on GitHub \u2192</a>' +
    (p.live ? '<a class="live" href="' + p.live + '" target="_blank" rel="noopener">Live Demo</a>' : '') + '</div>';
  $('#project-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

$('#projects-grid').addEventListener('click', (e) => {
  const card = e.target.closest('[data-project]');
  if (card) openProject(Number(card.dataset.project));
});

$('#close-project').addEventListener('click', () => {
  $('#project-modal').classList.remove('open');
  document.body.style.overflow = '';
});

/* ============================= TERMINAL ============================= */
const terminalBody = $('#terminal-body');
const terminalInput = $('#terminal-input');
const bootLines = [
  ['dipesh@portfolio: initializing secure session', 'ok'],
  ['\u2713 Session established. Type "help" for available commands.', 'ok']
];

function termPrint(text, cls) {
  const line = document.createElement('div');
  line.textContent = text;
  if (cls) line.className = cls;
  terminalBody.appendChild(line);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function termCommand(cmd) {
  const t = cmd.trim().toLowerCase();
  switch (t) {
    case 'help':
      termPrint('Available commands:', 'ok');
      ['help       \u2014 Show this help', 'whoami     \u2014 About me', 'skills     \u2014 Technical skills',
       'projects   \u2014 Featured projects', 'saanjh     \u2014 SaanjhCyber details', 'contact    \u2014 Contact info',
       'github     \u2014 GitHub profile', 'update     \u2014 Profile status', 'hi         \u2014 Say hello',
       'clear      \u2014 Clear the terminal', 'exit       \u2014 Close the terminal'
      ].forEach((l) => termPrint(l));
      break;
    case 'whoami':
      termPrint('Dipesh Dhakal \u2014 Cybersecurity Specialist | Web Developer | UI/UX Designer | Data Analyst');
      termPrint('Based in Kathmandu, Nepal. BSc (Hons) Ethical Hacking & Cyber Security, Coventry University.');
      break;
    case 'skills':
      DATA.skills.forEach((cat) => {
        termPrint(cat.title, 'warn');
        cat.skills.forEach(([n, l]) => termPrint('  \u2022 ' + n + ' [' + l + ']'));
      });
      break;
    case 'projects':
      DATA.projects.forEach((p) => termPrint(p.title + ' \u2014 ' + p.subtitle + ' (' + p.category + ')'));
      break;
    case 'saanjh':
    case 'saanjhcyber':
      termPrint('SaanjhCyber \u2014 Cybercrime Reporting Platform');
      termPrint('Capstone project with Coventry University (May 2025).');
      termPrint('Case tracking, evidence upload, privacy controls, and a searchable entity database.');
      termPrint('https://github.com/dipeshdhakal1522/SaanjhCyber', 'ok');
      break;
    case 'contact':
      termPrint('Email:    ' + DATA.email);
      termPrint('Phone:    ' + DATA.phone);
      termPrint('GitHub:   ' + DATA.github);
      termPrint('LinkedIn: ' + DATA.linkedin);
      break;
    case 'github':
      termPrint('GitHub: ' + DATA.github, 'ok');
      DATA.repos.forEach((r) => termPrint('  \u2022 ' + r.name));
      break;
    case 'update':
    case 'full update':
      termPrint('Profile status: UP TO DATE', 'ok');
      termPrint('Latest: BSc (Hons) completed May 2025 \u2022 SaanjhCyber capstone shipped \u2022 New tools in development');
      break;
    case 'hi':
    case 'hello':
    case 'hi dipesh':
    case 'hello dipesh':
      termPrint('Hello! Welcome to my portfolio. Type "help" to explore.', 'ok');
      break;
    case 'clear':
      terminalBody.innerHTML = '';
      break;
    case 'exit':
      $('#terminal-modal').classList.remove('open');
      document.body.style.overflow = '';
      break;
    case '':
      break;
    default:
      termPrint('command not found: ' + cmd + ' (type "help")', 'err');
  }
}

function openTerminal() {
  $('#terminal-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  terminalBody.innerHTML = '';
  bootLines.forEach(([l, c]) => termPrint(l, c));
  terminalInput.value = '';
  setTimeout(() => terminalInput.focus(), 50);
}

$('#open-terminal').addEventListener('click', openTerminal);
$('#terminal-btn-top').addEventListener('click', openTerminal);
$('#close-terminal').addEventListener('click', () => {
  $('#terminal-modal').classList.remove('open');
  document.body.style.overflow = '';
});

terminalInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    termPrint('guest@dipesh-dhakal:~$ ' + terminalInput.value, 'ok');
    termCommand(terminalInput.value);
    terminalInput.value = '';
  }
});

document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    openTerminal();
  }
  if (e.key === 'Escape') {
    $$('.modal-backdrop.open').forEach((m) => m.classList.remove('open'));
    document.body.style.overflow = '';
  }
});

/* ============================= RESUME MODAL ============================= */
function openResume() {
  const sec = (title, body) => '<div class="rm-sec"><h3>' + title + '</h3>' + body + '</div>';
  const edu = DATA.education.map((e) =>
    '<div class="rm-item"><h4>' + e.degree + '</h4><div class="meta">' + e.institution + ' \u2022 ' + e.duration + '</div></div>'
  ).join('');
  const exp = DATA.experiences.map((x) =>
    '<div class="rm-item"><h4>' + x.title + ' \u2014 ' + x.org + '</h4>' +
    '<div class="meta">' + x.duration + '</div><ul>' + x.points.map((p) => '<li>' + p + '</li>').join('') + '</ul></div>'
  ).join('');
  const skills = DATA.skills.flatMap((cat) => cat.skills.map(([n, l]) => n + ' [' + l + ']')).join(' \u2022 ');
  const contact =
    '<div class="rm-contact"><span>Email: <a href="mailto:' + DATA.email + '">' + DATA.email + '</a></span>' +
    '<span>Phone: ' + DATA.phone + '</span><span>Location: ' + DATA.location + '</span>' +
    '<span>GitHub: <a href="' + DATA.github + '">' + DATA.github + '</a></span>' +
    '<span>LinkedIn: <a href="' + DATA.linkedin + '">' + DATA.linkedin + '</a></span></div>';
  $('#resume-body').innerHTML =
    '<h2 class="pm-title">' + DATA.name + '</h2>' +
    sec('Contact', contact) + sec('Education', edu) + sec('Experience', exp) +
    sec('Skills', '<div class="rm-item"><p>' + skills + '</p></div>');
  $('#resume-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

$('#open-resume').addEventListener('click', openResume);
$('#close-resume').addEventListener('click', () => {
  $('#resume-modal').classList.remove('open');
  document.body.style.overflow = '';
});

/* ============================= CONTACT FORM ============================= */
$('#copy-email').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(DATA.email);
    const btn = $('#copy-email');
    btn.textContent = 'Copied!';
    setTimeout(() => (btn.textContent = 'Copy'), 2000);
  } catch {
    window.prompt('Copy email:', DATA.email);
  }
});

$('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $('#name').value.trim();
  const email = $('#email').value.trim();
  const subject = $('#subject').value.trim();
  const message = $('#message').value.trim();
  const errs = {};

  if (!name) errs.name = 'Name is required';
  if (!email) errs.email = 'Email is required';
  else if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = 'Invalid email address';
  if (!subject) errs.subject = 'Subject is required';
  if (!message) errs.message = 'Message content is required';

  Object.keys(errs).forEach((k) => {
    $('#err-' + k).textContent = errs[k] || '';
  });
  if (Object.keys(errs).length > 0) return;

  $('#form-note').textContent = 'Message Sent \u2713 (front-end preview \u2014 connect an email service for delivery)';
  $('#form-note').style.color = 'var(--emerald)';
  $('#contact-form').reset();
});

/* ============================= MODAL BACKDROP CLOSE ============================= */
$$('.modal-backdrop').forEach((m) => {
  m.addEventListener('click', (e) => {
    if (e.target === m) {
      m.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});

/* ============================= AI CHAT BOT ============================= */
const chatBody = $('#chat-body');
const chatInput = $('#chat-input');
const CHAT_KNOWLEDGE = [
  {
    keywords: ['hi', 'hello', 'hey', 'namaste', 'namaskar', 'hola'],
    reply: 'Hello! I am Enigma, the AI assistant for this portfolio. Ask me about Dipesh\'s skills, projects, education, experience, or contact details.'
  },
  {
    keywords: ['about dipesh', 'tell me about', 'about him', 'about dipesh dhakal', 'who is dipesh', 'who is dipesh dhakal', 'dipesh dhakal'],
    reply: DATA.bio + ' ' + DATA.aboutParagraphs[0]
  },
  {
    keywords: ['who are you', 'your name', 'about you', 'what are you'],
    reply: 'I am Enigma \u2014 a portfolio assistant that knows everything about Dipesh Dhakal: skills, projects, education, and how to reach him. Try asking "What are his skills?" or "Top projects?".'
  },
  {
    keywords: ['full skills', 'all skills', 'complete skills'],
    reply: DATA.skills.map((c) => c.title + '\n' + c.skills.map(([n, l]) => '  \u2022 ' + n + ' [' + l + ']').join('\n')).join('\n\n')
  },
  {
    keywords: ['skill', 'tech', 'tools', 'competenc', 'stack', 'languages'],
    reply: 'Dipesh works across four areas:\n' +
      DATA.skills.map((c) => '\u2022 ' + c.title + ': ' + c.skills.slice(0, 3).map((s) => s[0]).join(', ') + '...').join('\n') +
      '\nAsk "full skills" for the complete list.'
  },
  {
    keywords: ['project', 'portfolio', 'built', 'code', 'work'],
    reply: DATA.projects.map((p) => '\u2022 ' + p.title + ' \u2014 ' + p.subtitle + ' (' + p.category + ')\n  ' + p.github).join('\n') +
      '\n\nAsk about any project by name (e.g. "SaanjhCyber") for details.'
  },
  {
    keywords: ['saanjh', 'saanjhcyber'],
    reply: DATA.projects[0].detail + '\n\nGitHub: https://github.com/dipeshdhakal1522/SaanjhCyber'
  },
  {
    keywords: ['noir', 'noirlink', 'nepse', 'stock', 'trading'],
    reply: DATA.projects[1].detail + '\n\nGitHub: https://github.com/dipeshdhakal1522/-NoirLink-Traderchang'
  },
  {
    keywords: ['file integrity', 'integrity'],
    reply: DATA.projects[2].detail + '\n\nGitHub: https://github.com/dipeshdhakal1522/File-Integrity-Authenticity-Verification-System'
  },
  {
    keywords: ['news crawler', 'crawler', 'scraping', 'scraper'],
    reply: DATA.projects[3].detail + '\n\nGitHub: https://github.com/dipeshdhakal1522/news_crawler'
  },
  {
    keywords: ['education', 'study', 'university', 'degree', 'college', 'academic'],
    reply: DATA.education.map((e) => '\u2022 ' + e.degree + '\n  ' + e.institution + ' \u2014 ' + e.duration + (e.url ? '\n  ' + e.url : '')).join('\n')
  },
  {
    keywords: ['coventry', 'bsc', 'hons', 'ethical hacking'],
    reply: 'Dipesh completed a BSc (Hons) in Ethical Hacking and Cyber Security at Coventry University (2022 \u2013 May 2025), specializing in penetration testing, web application security, digital forensics, cryptography, and system hardening.'
  },
  {
    keywords: ['experience', 'job', 'work history', 'career', 'intern', 'worked'],
    reply: DATA.experiences.map((x) => '\u2022 ' + x.title + ' \u2014 ' + x.org + ' (' + x.duration + ')').join('\n') +
      '\n\nAsk about any role for more detail.'
  },
  {
    keywords: ['certificate', 'certification', 'award', 'credential'],
    reply: DATA.certificates.map((c) => '\u2022 ' + c.title + ' \u2014 ' + c.org + ' (' + c.date + ')').join('\n') +
      '\n\nIn total: 15+ certifications.'
  },
  {
    keywords: ['facebook', 'facbook', 'facebok', 'fb page', 'facebook page'],
    reply: 'Facebook page: https://www.facebook.com/share/1BT9YVq5tp/'
  },
  {
    keywords: ['social', 'socials', 'social media', 'instagram', 'twitter', 'youtube', 'linkedin', 'follow', 'handles'],
    reply: 'Connect with Dipesh across platforms:\n' +
      '\u2022 LinkedIn: ' + DATA.linkedin + '\n' +
      '\u2022 Instagram: ' + DATA.instagram + '\n' +
      '\u2022 Facebook: ' + DATA.facebook + '\n' +
      '\u2022 WhatsApp: ' + DATA.whatsapp + '\n' +
      '\u2022 X (Twitter): ' + DATA.twitter + '\n' +
      '\u2022 YouTube: ' + DATA.youtube + '\n' +
      '\u2022 GitHub: ' + DATA.github
  },
  {
    keywords: ['whatsapp', 'whatsap', 'wa.me', 'direct chat'],
    reply: 'You can message Dipesh directly on WhatsApp: https://wa.me/dipeshdhakal1522'
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'message'],
    reply: 'You can reach Dipesh at:\n\u2022 Email: ' + DATA.email + '\n\u2022 Phone: ' + DATA.phone + '\n\u2022 LinkedIn: ' + DATA.linkedin + '\n\u2022 GitHub: ' + DATA.github + '\n\u2022 WhatsApp: ' + DATA.whatsapp + '\n\nOr use the contact form on this page.'
  },
  {
    keywords: ['location', 'where', 'based', 'kathmandu', 'nepal'],
    reply: 'Dipesh is based in ' + DATA.location + '.'
  },
  {
    keywords: ['github', 'open source', 'repos', 'repository', 'repositories'],
    reply: 'GitHub: ' + DATA.github + '\n\nRepositories:\n' +
      DATA.projects.map((p) => '\u2022 ' + p.title + ': ' + p.github).join('\n')
  },
  {
    keywords: ['stats', 'statistics', 'numbers', 'metrics'],
    reply: DATA.stats.map((s) => '\u2022 ' + s.value + ' ' + s.label).join('\n')
  },
  {
    keywords: ['website', 'portfolio site', 'this site', 'live site', 'url'],
    reply: 'This portfolio is live at https://dipeshdhakal1522.com.np \u2014 explore the projects, skills, and contact sections, or use the Terminal CLI (\u2318K).'
  },
  {
    keywords: ['availability', 'hire', 'freelance', 'available', 'work with'],
    reply: 'Dipesh is available for security audits, penetration testing, and web development projects. Send a message via the contact form or email dipeshrajdhakal@gmail.com.'
  },
  {
    keywords: ['terminal', 'cli', 'command'],
    reply: 'You can explore this portfolio interactively using the Terminal CLI button (\u2318K) in the top bar \u2014 try commands like "skills", "projects", or "contact".'
  },
  {
    keywords: ['resume', 'cv', 'curriculum'],
    reply: 'Use the "Download CV" button in the sidebar to view the full resume with education, experience, and skills.'
  },
  {
    keywords: ['whatsapp', 'whatsap', 'wa.me', 'direct chat'],
    reply: 'You can message Dipesh directly on WhatsApp: https://wa.me/dipeshdhakal1522'
  },
  {
    keywords: ['thanks', 'thank you', 'thx', 'dhan', 'dhanyabad', 'appreciate'],
    reply: 'You are welcome! Feel free to ask anything else about Dipesh\u2019s work. \uD83D\uDE42'
  },
  {
    keywords: ['bye', 'goodbye', 'exit', 'see you'],
    reply: 'Goodbye! Dipesh looks forward to hearing from you. \uD83D\uDC4B'
  }
];
const CHAT_SUGGESTIONS = ['Who is Dipesh Dhakal?', 'What are his skills?', 'Top projects', 'Education', 'How to contact?'];

function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  if (!m) return n;
  if (!n) return m;
  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return dp[m][n];
}

function fuzzyMatch(q, keyword) {
  if (keyword.length <= 4) {
    if (new RegExp('\\b' + keyword + '\\b').test(q)) return true;
  } else if (q.includes(keyword)) {
    return true;
  }
  if (keyword.includes(' ')) {
    return levenshtein(q, keyword) <= 2;
  }
  const words = q.split(/\s+/).filter((w) => w.length >= 4);
  return words.some((w) => levenshtein(w, keyword) <= (w.length >= 6 ? 2 : 1));
}

function chatAnswer(input) {
  const q = String(input).toLowerCase().trim();
  for (const item of CHAT_KNOWLEDGE) {
    if (item.keywords.some((k) => fuzzyMatch(q, k))) return { text: item.reply, matched: true };
  }
  return {
    text: 'I am not sure about that one. Try asking about skills, projects, education, experience, or contact details \u2014 or send it directly to Dipesh on WhatsApp.',
    matched: false
  };
}

const WA_LINK = 'https://wa.me/dipeshdhakal1522';

function chatAdd(text, role, waText) {
  const div = document.createElement('div');
  div.className = 'msg ' + role;
  div.textContent = text;
  if (waText) {
    const link = document.createElement('a');
    link.className = 'chat-wa';
    link.href = WA_LINK + '?text=' + encodeURIComponent('Hi Dipesh, regarding: ' + waText);
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'Chat on WhatsApp \u2192';
    div.appendChild(link);
  }
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function chatSend(text) {
  const clean = String(text).trim();
  if (!clean) return;
  chatAdd(clean, 'user');
  chatInput.value = '';
  const dots = document.createElement('div');
  dots.className = 'typing-dots';
  dots.innerHTML = '<span></span><span></span><span></span>';
  chatBody.appendChild(dots);
  chatBody.scrollTop = chatBody.scrollHeight;
  setTimeout(() => {
    dots.remove();
    const { text: reply, matched } = chatAnswer(clean);
    chatAdd(reply, 'bot', matched ? null : clean);
  }, 700);
}

$('#chat-toggle').addEventListener('click', () => {
  const panel = $('#chat-panel');
  const wasOpen = panel.classList.contains('open');
  panel.classList.toggle('open');
  $('#chat-toggle').textContent = wasOpen ? '\u{1F916}' : '\u00D7';
  if (!wasOpen && chatBody.children.length === 0) {
    chatAdd('Hi! I am Enigma \u{1F916} \u2014 ask me anything about Dipesh Dhakal\'s portfolio.', 'bot');
  }
  if (!wasOpen) setTimeout(() => chatInput.focus(), 50);
});

$('#chat-close').addEventListener('click', () => {
  $('#chat-panel').classList.remove('open');
  $('#chat-toggle').textContent = '\u{1F916}';
});

$('#chat-send').addEventListener('click', () => chatSend(chatInput.value));

chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') chatSend(chatInput.value);
});

$('#chat-chips').innerHTML = CHAT_SUGGESTIONS.map((s) =>
  '<button class="chip">' + s + '</button>'
).join('');

$$('#chat-chips .chip').forEach((chip) => {
  chip.addEventListener('click', () => chatSend(chip.textContent));
});