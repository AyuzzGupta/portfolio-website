
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}
