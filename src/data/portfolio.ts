export const ROLES = [
  "Creative Developer",
  "AI Enthusiast",
  "Sustainability Enthusiast",
  "Problem Solver",
];

export const MARQUEE = [
  "Python", "React", "Computer Vision", "OCR", "YOLOv8", "Supabase",
  "Django", "PostgreSQL", "OpenCV", "Power BI", "Framer Motion",
  "AI Agents", "Three.js", "GSAP", "Pandas", "NumPy",
];

export type Project = {
  slug: string;
  title: string;
  year: string;
  tagline: string;
  description: string;
  stack: string[];
  features?: string[];
  cover: string; // imported url
  accent?: string;
};

export type Experience = {
  year: string;
  role: string;
  org: string;
  location?: string;
  bullets: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    year: "2025 — now",
    role: "AI Intern",
    org: "Nu10 Technologies",
    location: "Remote",
    bullets: [
      "Built OCR quality evaluation systems — blur, brightness, DPI, contrast, resolution.",
      "Improved OCR readiness pipelines and validation flows.",
      "Contributed to LiveKit telephony integration.",
    ],
  },
  {
    year: "May–Jul 2024",
    role: "Software Development Trainee",
    org: "Codeplayers Business Systems",
    bullets: [
      "Shipped UI in ReactJS, Bootstrap & CSS.",
      "Integrated REST APIs across auth, tracking & reporting.",
    ],
  },
];

export const SKILL_GROUPS: { label: string; items: string[]; size?: "sm" | "md" | "lg" }[] = [
  { label: "Programming", items: ["Python", "Java", "SQL"], size: "md" },
  { label: "Data & AI", items: ["Data Cleaning", "Data Validation", "ETL Basics", "OCR Systems", "Computer Vision"], size: "lg" },
  { label: "Libraries", items: ["Pandas", "NumPy", "Matplotlib", "OpenCV", "YOLOv8", "React.js", "Django", "Chart.js"], size: "lg" },
  { label: "Tools", items: ["Power BI", "Git", "GitHub", "Supabase", "PostgreSQL", "Arduino Uno"], size: "md" },
  { label: "Core CS", items: ["Data Structures", "DBMS", "Networks", "Software Engg", "Computer Vision"], size: "md" },
];

export const EXPLORING = ["Framer Motion", "GSAP", "Three.js", "AI Agents"];

export const STAGE = [
  { title: "Founding Lead — GDG On Campus", caption: "Built the chapter from zero, ran AI study jams." },
  { title: "Host — AgentCon, Microsoft Office", caption: "Hosted the agent-builder community day." },
  { title: "Speaker — VS Code Dev Days", caption: "Talked AI agents to a packed room." },
  { title: "Women Techmakers Volunteer", caption: "Programs & community for women in tech." },
  { title: "Literature Club", caption: "Words, off the keyboard." },
];

export const ACHIEVEMENTS = [
  "AWS Academy Cloud Foundations Graduate (2025)",
  "NASSCOM — Exploratory Data Analysis (Gold)",
  "NASSCOM — Data Processing & Visualization (Silver)",
  "Top 5% Nationwide — NPTEL",
  "3rd Position — SIH Internal Hackathon 2025",
  "Runner-Up — AWS Gen AI Hackathon 2024",
  "Open Source — Social Summer of Code '24 & '25",
  "Merit Scholarship — ₹7.25 Lakhs",
];

export const EDUCATION = [
  {
    school: "ICFAI Tech University, Hyderabad",
    degree: "B.Tech, Computer Science Engineering",
    score: "CGPA 8.74 / 10",
    period: "2022 — 2026",
    notes: ["Founding Lead, GDG On Campus", "AI Study Jams organiser", "Literature Club"],
  },
  {
    school: "Sri Chaitanya Educational Institutions",
    degree: "Intermediate, Class XII",
    score: "97.6%",
    period: "2020 — 2022",
    notes: ["VP — School House", "Scouts & Guides, Rajya Puraskar Camp"],
  },
  {
    school: "Kendriya Vidyalaya",
    degree: "Class X",
    score: "91.4%",
    period: "2020",
    notes: [],
  },
];

export const CONTACT = {
  email: "sahithikanjarla4082@gmail.com",
  linkedin: "https://linkedin.com/in/sahithi-kanjarla",
  github: "https://github.com/sahithi-kanjarla",
  location: "Hyderabad, India",
};
