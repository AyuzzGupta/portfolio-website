
import { Project, Experience, Skill } from './types';

export const RESUME_DATA = {
  name: "Ayush Gupta",
  title: "Software Engineer & Designer",
  email: "workweb.ayush@gmail.com",
  phone: "+91 9971173344",
  location: "Ghaziabad, UP, India",
  linkedin: "linkedin.com/in/ayush-gupta2404",
  github: "github.com/AyuzzGupta",
  bio: "Passionate about building modern, high-performance web applications and algorithmic problem solving. Experienced in full-stack development and data modeling.",
  education: [
    {
      school: "Inderprastha Engineering College",
      degree: "B.Tech in Computer Science Engineering",
      period: "2024 – Present",
      sub: "Ghaziabad, UP"
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI Based Dropout Prediction",
    category: "Machine Learning",
    description: "Built supervised ML pipeline achieving 80% prediction accuracy on dropout classification dataset. Implemented feature engineering and model validation.",
    tags: ["Python", "ML", "Statistical Modelling", "Pandas"],
    githubUrl: "#",
    imageUrl: "https://picsum.photos/seed/ai-ml/800/600"
  },
  {
    id: "2",
    title: "Traffic Management System",
    category: "Graph Theory",
    description: "Designed routing engine reducing route decision latency by 10%. Implemented offline path computation for low-connectivity regions.",
    tags: ["Java", "Python", "Graph Routing", "Algorithms"],
    githubUrl: "#",
    imageUrl: "https://picsum.photos/seed/traffic/800/600"
  },
  {
    id: "3",
    title: "MUNify Platform",
    category: "Full Stack",
    description: "Core team member engineering structured content workflows, improving campaign execution throughput by 15%.",
    tags: ["Digital Operations", "Marketing Tech", "Web Dev"],
    githubUrl: "#",
    imageUrl: "https://picsum.photos/seed/munify/800/600"
  }
];

export const SKILLS: Skill[] = [
  { name: "Java", level: 90 },
  { name: "Python", level: 85 },
  { name: "JavaScript", level: 88 },
  { name: "C++", level: 80 },
  { name: "SQL", level: 75 },
  { name: "React", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "DSA", level: 85 }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Co-Editor / Core Team Member",
    company: "MUNify",
    period: "2024 – 2025",
    description: [
      "Engineered structured content workflows improving campaign execution throughput by 15%.",
      "Collaborated across marketing and design verticals ensuring brand consistency.",
      "Contributed to digital promotion strategies improving engagement metrics."
    ]
  },
  {
    role: "Prep-BE Competition Finalist",
    company: "National Engineering Competition",
    period: "2024",
    description: [
      "Ranked among top teams solving real-world analytical and algorithmic statements.",
      "Demonstrated strong data-driven reasoning and technical decision making."
    ]
  }
];
