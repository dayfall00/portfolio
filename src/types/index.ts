export interface ProjectSpec {
  id: string;
  title: string;
  tagline: string;
  category: string;
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  techStack: string[];
  overview: string;
  architectureHighlights: string[];
  metricsOrFeatures: {
    label: string;
    value: string;
    description: string;
  }[];
  systemRole: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  boardOrUniversity: string;
  period: string;
  score: string;
  scoreLabel: string;
}

export interface LearningTrack {
  title: string;
  domain: string;
  focus: string;
  status: string;
}
