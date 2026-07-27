export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  bio: string[];
}

export interface Stats {
  projects: number;
  githubContributions: number;
  leetcodeProblems: number;
  technologies: number;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  challenges: string;
  github: string;
  demo: string;
  category: string;
  featured: boolean;
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack: string[];
  type: 'internship' | 'hackathon' | 'opensource' | 'freelance';
  logo?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  startDate: string;
  endDate: string;
  cgpa?: string;
  courses: string[];
  logo?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'leetcode' | 'hackathon' | 'certificate' | 'contest' | 'github';
  icon?: string;
  link?: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export type AnimationVariant = {
  hidden: object;
  visible: object;
};
