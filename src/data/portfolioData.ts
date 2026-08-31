export interface Project {
  id: string;
  title: string;
  category: 'Cybersecurity' | 'Web Development' | 'Data' | 'Finance' | 'Automation';
  categoryLabel: string;
  isPrimaryFeatured?: boolean;
  subtitle?: string;
  description: string;
  detailedDescription?: string;
  techTags: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  highlights: string[];
  imagePlaceholderText: string;
  imagePath: string;
  gradientClass: string;
  iconName: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Intermediate';
    icon?: string;
    tag?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  duration: string;
  focusArea: string;
  isCurrent?: boolean;
  responsibilities: string[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  imagePath: string;
  details: string[];
  badge?: string;
  url?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  category: 'Cybersecurity' | 'Development' | 'UI/UX' | 'Networking' | 'Other';
  credentialId?: string;
  verificationUrl?: string;
  isPlaceholder?: boolean;
}

export const PERSONAL_INFO = {
  name: "Dipesh Dhakal",
  headline: "Cybersecurity Specialist | Web Developer | UI/UX Designer | Data Analyst",
  tagline: "Security • Development • Design • Data",
  roles: [
    "Cybersecurity Specialist",
    "Web Developer",
    "UI/UX Designer",
    "Data Analyst"
  ],
  heroBadge: "Cybersecurity & Technology",
  profilePicture: "/dipesh-dhakal.jpg",
  location: "Kathmandu, 22 Kthamandu, Nepal",
  email: "dipeshrajdhakal@gmail.com",

  github: "https://github.com/thedipeshdkl",
  linkedin: "https://www.linkedin.com/in/dipeshdhakal1522",
  instagram: "https://www.instagram.com/dipeshdhakal1522",
  facebook: "https://www.facebook.com/share/1BT9YVq5tp/",
  whatsapp: "https://wa.me/dipeshdhakal1522",
  twitter: "https://x.com/DipeshRajDhakal",
  youtube: "https://youtube.com/@thedipeshdkl",
  availabilityStatus: "Available for Security Audits & Web Projects",
  heroBio: `Develops secure web applications, custom Python security tools, and vulnerability assessments. Currently completing a BSc (Hons) in Ethical Hacking & Cyber Security at Coventry University.`,
  bio: `Dipesh Dhakal is a cybersecurity researcher and software developer based in Kathmandu, Nepal. His work focuses on identifying and addressing security weaknesses in digital systems and building web applications that are functional, performant, and resilient.`,
  aboutParagraphs: [
    `Currently pursuing a BSc (Hons) in Ethical Hacking & Cyber Security from Coventry University. Practical experience spans offensive security research, penetration testing, and full-stack web development, including SaanjhCyber and stock analytics tools for the Nepal Stock Exchange.`,
    `Additional background in media production (Radio Palung FM) and web design provides a broader perspective on communication, project management, and user experience.`
  ],
  stats: [
    { label: "Years Experience", value: "3+", icon: "Shield" },
    { label: "Projects Built", value: "10+", icon: "Folder" },
    { label: "Certifications", value: "15+", icon: "Trophy" },
    { label: "Organizations", value: "4+", icon: "Users" }
  ],
  capabilities: [
    {
      title: "Penetration Testing",
      desc: "Web application security audits, vulnerability scans, network reconnaissance, and security assessments.",
      icon: "ShieldAlert",
      color: "red"
    },
    {
      title: "Web Development",
      desc: "Developing React, TypeScript, and Python web applications with modern APIs.",
      icon: "Code2",
      color: "amber"
    },
    {
      title: "UI/UX Design",
      desc: "Designing dashboards and user interfaces with a focus on clarity and usability.",
      icon: "Layout",
      color: "amber"
    },
    {
      title: "Data Analysis",
      desc: "Writing web crawlers, log analysis scripts, and structured data extraction tooling.",
      icon: "Database",
      color: "emerald"
    }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "cybersecurity",
    title: "Cybersecurity & Offensive Security",
    description: "Vulnerability analysis, web application security, and threat assessment.",
    imagePath: "/skill-cybersecurity.jpg",
    skills: [
      { name: "Penetration Testing", level: "Advanced" },
      { name: "Vulnerability Assessment", level: "Advanced" },
      { name: "Web Application Security", level: "Advanced" },
      { name: "Network Security", level: "Intermediate" },
      { name: "OSINT (Open Source Intelligence)", level: "Advanced" },
      { name: "Social Engineering", level: "Intermediate" },
      { name: "Security Auditing", level: "Intermediate" },
      { name: "Digital Forensics", level: "Intermediate" }
    ]
  },
  {
    id: "development",
    title: "Software Engineering & Web",
    description: "Programming languages, frameworks, and database fundamentals.",
    imagePath: "/skill-development.jpg",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "Bash Scripting", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "HTML5 & CSS3", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "REST APIs", level: "Intermediate" }
    ]
  },
  {
    id: "tools",
    title: "Security Tooling & Dev Environment",
    description: "Standard security tools and development environments.",
    imagePath: "/skill-tools.jpg",
    skills: [
      { name: "Kali Linux", level: "Advanced" },
      { name: "Burp Suite", level: "Advanced" },
      { name: "Nmap", level: "Advanced" },
      { name: "Wireshark", level: "Intermediate" },
      { name: "Metasploit", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "Git & GitHub", level: "Advanced" }
    ]
  },
  {
    id: "other",
    title: "Design & Professional Skills",
    description: "User experience design, project coordination, and technical communication.",
    imagePath: "/skill-other.jpg",
    skills: [
      { name: "UI/UX Design", level: "Advanced" },
      { name: "Data Scraping & Analysis", level: "Intermediate" },
      { name: "Technical Research", level: "Advanced" },
      { name: "Radio Broadcasting & Media", level: "Advanced" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "saanjhcyber",
    title: "SaanjhCyber",
    subtitle: "Cybercrime Reporting Platform",
    category: "Cybersecurity",
    categoryLabel: "Cybersecurity Platform",
    isPrimaryFeatured: true,
    description: "Cybercrime reporting & awareness platform with case tracking, evidence upload & privacy controls.",
    detailedDescription: "SaanjhCyber is a final year capstone project developed in collaboration with Coventry University (May 2025). It provides a structured process for reporting cybercrime incidents, supports secure evidence uploads, tracks case progress via unique Case IDs, and maintains a searchable database of suspicious online entities.",
    techTags: ["React", "TypeScript", "Vite", "API"],
    githubUrl: "https://github.com/thedipeshdkl/SaanjhCyber",
    highlights: [
      "Guided Multi-Step Incident Reporting Flow",
      "Unique Case Tracking System with Privacy Options",
      "Searchable Entity Database (Bank/Wallet Fraud Verifications)",
      "Nepal Map Threat Heatmap & Admin Dashboard"
    ],
    imagePlaceholderText: "SaanjhCyber Dashboard",
    imagePath: "/saanjhcyber-dashboard.jpg",
    gradientClass: "from-[#0a1128] to-[#121c3b]",
    iconName: "Shield"
  },
  {
    id: "noirlink-trading",
    title: "NoirLink Trading",
    subtitle: "NEPSE Analysis Platform",
    category: "Finance",
    categoryLabel: "NEPSE Market Platform",
    description: "NEPSE analysis platform with stock insights, technical analysis, portfolio tracking & calculators.",
    detailedDescription: "NoirLink Trading provides technical indicator charts, fundamental stock screening, portfolio tracking, and index sentiment metrics for individual investors trading in the Nepal Stock Exchange.",
    techTags: ["React", "TypeScript", "Tailwind", "Python"],
    githubUrl: "https://github.com/thedipeshdkl/-NoirLink-Traderchang",
    highlights: [
      "NEPSE Market Sentiment & Index Charts",
      "Stock Fundamental Screening & Indicator Analytics",
      "Custom Portfolio Management & Calculator Tools"
    ],
    imagePlaceholderText: "NoirLink Trading Screen",
    imagePath: "/noirlink-banner.jpg",
    gradientClass: "from-[#091b18] to-[#0f2d27]",
    iconName: "TrendingUp"
  },
  {
    id: "file-integrity-system",
    title: "File Integrity System",
    subtitle: "Cybersecurity Tool",
    category: "Cybersecurity",
    categoryLabel: "Security Utility",
    description: "File integrity & authenticity verification system to detect tampering and protect data integrity.",
    detailedDescription: "This cryptographic security utility monitors designated filesystem directories and computes SHA-256/SHA-512 hashes to detect file modification, corruption, or unauthorized tampering, generating audit logs for review.",
    techTags: ["Python", "Hashing", "Tkinter", "Security"],
    githubUrl: "https://github.com/thedipeshdkl/File-Integrity-Authenticity-Verification-System",
    highlights: [
      "Continuous SHA-256 & SHA-512 Hash Monitoring",
      "Automated File Tamper Detection & Alerts",
      "Exportable System Audit & Log Reports"
    ],
    imagePlaceholderText: "File Integrity Tool",
    imagePath: "/file-integrity-banner.jpg",
    gradientClass: "from-[#1a0c2e] to-[#0e071c]",
    iconName: "Lock"
  },
  {
    id: "news-crawler",
    title: "News Crawler",
    subtitle: "Web Scraping & Data Extraction",
    category: "Automation",
    categoryLabel: "Web Crawler & Data Engine",
    description: "Automated news crawling & data extraction system for collecting and processing online news.",
    detailedDescription: "News Crawler extracts news articles, headlines, publication dates, and body text from online news sources. It cleans raw HTML, removes duplicates, and exports structured datasets.",
    techTags: ["Python", "Scrapy", "BeautifulSoup", "CSV"],
    githubUrl: "https://github.com/thedipeshdkl/news_crawler",
    highlights: [
      "Multi-Threaded Asynchronous Web Scraping Engine",
      "HTML Parsing & Content De-duplication",
      "JSON / CSV Data Export Pipeline"
    ],
    imagePlaceholderText: "News Crawler Engine",
    imagePath: "/news-crawler-banner.jpg",
    gradientClass: "from-[#08172e] to-[#040e1f]",
    iconName: "Globe"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "ganga-offensive",
    title: "Social Engineering & Security Analyst",
    organization: "GANGA Offensive Ops Pvt. Ltd.",
    location: "Nepal",
    duration: "Security Research Focus",
    focusArea: "Social Engineering & Vulnerability Assessment",
    responsibilities: [
      "Conducted simulated phishing campaigns and social engineering awareness assessments.",
      "Assisted in evaluating human-factor threat vectors and drafting remediation reports.",
      "Researched attack surfaces and OSINT techniques for organizational risk reduction."
    ],
    tags: ["Social Engineering", "Phishing Simulation", "Cybersecurity", "OSINT"]
  },
  {
    id: "nepal-telecom",
    title: "IT & Network Intern",
    organization: "Nepal Telecom",
    location: "Kathmandu, Nepal",
    duration: "Internship",
    focusArea: "IT & Telecom Infrastructure",
    responsibilities: [
      "Assisted network engineers with telecommunications infrastructure monitoring and diagnostics.",
      "Worked with routing, enterprise networking protocols, and log analysis.",
      "Supported internal IT operations and equipment troubleshooting."
    ],
    tags: ["Networking", "Network Security", "Telecom IT", "Log Analysis"]
  },
  {
    id: "decorum-tech",
    title: "Web Designer",
    organization: "Decorum Technology and Research Center",
    location: "Nepal",
    duration: "Design & Development",
    focusArea: "Web Design & Frontend Development",
    responsibilities: [
      "Designed and developed responsive websites and user interfaces for clients.",
      "Translated design concepts into functional frontend builds.",
      "Collaborated with teams on layout, usability, and visual consistency."
    ],
    tags: ["Web Design", "Frontend", "UI/UX"]
  },
  {
    id: "radio-palung",
    title: "Radio Program Producer & Presenter",
    organization: "Radio Palung FM",
    location: "Palung, Nepal",
    duration: "Media & Broadcasting",
    focusArea: "Audio Production & Public Communication",
    responsibilities: [
      "Produced and hosted radio shows covering technology trends and community topics.",
      "Managed digital audio editing, sound mixing, and broadcast schedules.",
      "Developed public speaking, clear communication, and audience engagement skills."
    ],
    tags: ["Radio Broadcasting", "Audio Editing", "Public Communication"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "coventry-bsc",
    degree: "BSc (Hons) Ethical Hacking and Cyber Security",
    institution: "Coventry University",
    duration: "2022 – May 2025",
    location: "Kathmandu, Nepal / UK",
    badge: "Undergraduate Degree",
    imagePath: "/coventry-university.jpg",
    url: "https://www.coventry.ac.uk/",
    details: [
      "Specialized in Penetration Testing, Web Application Security, Digital Forensics, Cryptography, and System Hardening.",
      "Developed SaanjhCyber (Cybercrime Reporting & Intelligence Platform for Nepal) as a Final Year Capstone Project."
    ]
  },
  {
    id: "gyankunj-plus-two",
    degree: "+2 Science (Computer Science Focus)",
    institution: "Gyankunj SS & College",
    duration: "Higher Secondary",
    location: "Kathmandu, Nepal",
    badge: "High School",
    imagePath: "/gyankunj-college.png",
    url: "https://gyankunjschool.edu.np/",
    details: [
      "Foundation in Mathematics, Physics, Chemistry, and Computer Science fundamentals."
    ]
  },
  {
    id: "nitte-nmit",
    degree: "UI/UX Design & Digital Marketing Strategy",
    institution: "Nitte Meenakshi Institute of Technology",
    duration: "Specialized Training",
    location: "Bengaluru, India",
    badge: "Specialization",
    imagePath: "/nitte-nmit.jpg",
    url: "https://nitte.edu.in/nmit/",
    details: [
      "Specialized training in UI/UX design and digital marketing strategy."
    ]
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-cybersecurity",
    title: "Ethical Hacking & Web Application Security",
    organization: "Coventry University",
    issueDate: "2024",
    category: "Cybersecurity",
    verificationUrl: "https://github.com/thedipeshdkl"
  },
  {
    id: "cert-web-sec",
    title: "Vulnerability Assessment & OSINT Research",
    organization: "Security Training",
    issueDate: "2024",
    category: "Cybersecurity",
    verificationUrl: "https://github.com/thedipeshdkl"
  },
  {
    id: "cert-uiux",
    title: "Modern Frontend & UI/UX Design",
    organization: "Self-Directed / Projects",
    issueDate: "2024",
    category: "UI/UX",
    verificationUrl: "https://github.com/thedipeshdkl"
  },
  {
    id: "cert-network",
    title: "Enterprise Networking & System Administration",
    organization: "Nepal Telecom Training",
    issueDate: "2023",
    category: "Networking",
    verificationUrl: "https://github.com/thedipeshdkl"
  }
];
