export const ROLES = [
  "Creative Developer",
  "AI Enthusiast",
  "Sustainability Enthusiast 🌱" ,
  "Problem Solver",
];

export const MARQUEE = [
  "Python", "Computer Vision", "OCR", "SQL", "OpenCV", "Power BI","Data Analytics", "Sustainability Enthusiast",
  "AI Agents", "Pandas", "NumPy",
];

export type Project = {
  slug: string;
  title: string;
  year: string;
  tagline: string;
  description: string;
  stack: string[];
  features?: string[];
  cover: string;
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
    year: "2026 - present",
    role: "AI Intern",
    org: "Nu10 Technologies",
    location: "Remote",
    bullets: [
      "Developed OCR quality evaluation systems using blur, DPI, brightness, contrast, resolution, text quality, and semantic validation.",
      "Researched image-processing techniques to improve OCR preprocessing, document readiness checks, and validation workflows.",
      "Contributed to OCR data validation pipelines that improve extraction consistency across diverse document types and image conditions.",
    ],
  },
  {
    year: "May - Jul 2024",
    role: "Software Development Trainee",
    org: "Codeplayers Business Systems Pvt. Ltd.",
    bullets: [
      "Developed ReactJS, Bootstrap, and CSS UI components for ERP dashboards, tracking modules, and responsive interfaces.",
      "Integrated REST APIs for authentication, reporting, and workflow management across multiple ERP modules.",
      "Improved usability and data visualization for tracking and reporting systems within the platform.",
    ],
  },
];

export const SKILL_GROUPS: { label: string; items: string[]; size?: "sm" | "md" | "lg" }[] = [
  { label: "Programming", items: ["Python", "Java", "SQL","HTML","CSS"], size: "md" },
  { label: "Data & AI", items: ["Data Cleaning", "Data Validation", "ETL Basics", "OCR Systems", "Computer Vision"], size: "lg" },
  { label: "Libraries", items: ["Pandas", "NumPy", "Matplotlib", "OpenCV"], size: "lg" },
  { label: "Tools", items: ["Power BI", "Git", "GitHub", "Arduino Uno"], size: "md" },
  { label: "Core CS", items: ["DBMS", "Computer Networks", "Software Engineering", "Computer Vision"], size: "md" },
];

export const EXPLORING = ["AI Agents"];

export const STAGE = [
  { title: "Founding Lead - GDG On Campus", caption: "Led AI Study Jams, technical events and student developer activities." },
  { title: "Host - AgentCon, Microsoft Office", caption: "Hosted sessions and coordinated interactions for an agent-builder community event." },
  { title: "Women Techmakers Volunteer", caption: "Volunteered in inclusive tech initiatives focused on learning and collaboration." },
  { title: "Literature Club", caption: "Created space for poetry, writing, and expressive student community moments." },
  {
    title: "SIH Internal Hackathon 2024",
    caption:
      "Served as a Student Coordinator for the Smart India Hackathon (SIH) Internal Hackathon 2024, assisting in participant coordination, event management, and smooth execution of hackathon activities.",
  },
];

export const ACHIEVEMENTS: { title: string; note?: string; detail?: string }[] = [
  {
    title: "3rd Position - SIH Internal Hackathon",
    note: "2025",
    detail: "Built a solution for digitizing unorganized tribal governance records and paper-based workflows.",
  },
  {
    title: "Runner-Up - AWS Gen AI Hackathon",
    note: "2024",
    detail: "Built a food recommendation app using AWS PartyRock during the AWS Ideathon.",
  },
  {
    title: "Open Source - Social Summer of Code",
    note: "'24 & '25",
    detail: "Contributed to collaborative open-source initiatives through community-driven development.",
  },
  {
    title: "Merit Scholarship - Rs. 7.25 Lakhs",
    note: "academic",
    detail: "Awarded for consistent academic excellence and performance.",
  },
  { title: "Founding Lead - GDG On Campus", note: "community" },
  { title: "Host - AgentCon, Microsoft Office", note: "speaking" },
];

export const CERTIFICATIONS: { title: string; issuer: string; year: string; file?: string }[] = [
  { title: "AWS Academy Cloud Foundations Graduate", issuer: "AWS Academy", year: "2025", file: "/certs/aws-academy-cloud-foundations.pdf" },
  { title: "Exploratory Data Analysis - Gold", issuer: "NASSCOM", year: "2024", file: "/certs/nasscom-eda-gold.pdf" },
  { title: "Data Processing & Visualization - Silver", issuer: "NASSCOM", year: "2024", file: "/certs/nasscom-data-processing-visualization.pdf" },
  { title: "Industry 4.0 & Industrial IoT - Top 5%", issuer: "NPTEL", year: "2024", file: "/certs/nptel-industry-4.0-iiot.pdf" },
  { title: "Social Summer of Code - Contributor", issuer: "SSOC", year: "'24 & '25" },
];

export const EDUCATION = [
  {
    school: "ICFAI Tech University, Hyderabad",
    degree: "B.Tech, Computer Science Engineering",
    score: "CGPA 8.74 / 10",
    period: "2022 - 2026",
    notes: ["Founding Lead - GDG On Campus", "Organized AI Study Jams and technical events", "Member - Literature Club"],
  },
  {
    school: "Sri Chaitanya Educational Institutions",
    degree: "Intermediate, Class XII",
    score: "97.6%",
    period: "2020 - 2022",
    notes: [],
  },
  {
    school: "Kendriya Vidyalaya",
    degree: "Class X",
    score: "91.4%",
    period: "2020",
    notes: ["President and Vice President - School House", "Scouts & Guides participant", "Attended Rajya Puraskar Camp"],
  },
];

export const CONTACT = {
  email: "sahithikanjarla4082@gmail.com",
  linkedin: "https://www.linkedin.com/in/sahithi-kanjarla-569025289/",
  github: "https://github.com/sahithi-kanjarla",
  location: "Hyderabad, India",
};
