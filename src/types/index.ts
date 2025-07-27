// Portfolio data types
export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  bio: string[];
  resumeUrl: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    portfolio: string;
  };
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Skills {
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
  tools: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  gpa: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: Skills;
  experience: Experience[];
  education: Education[];
  projects: Project[];
}

// Component prop types
export interface NavItem {
  label: string;
  href: string;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

// Animation types
export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
}

// Analytics types
export interface AnalyticsEvent {
  eventName: string;
  properties?: Record<string, any>;
  timestamp?: number;
} 