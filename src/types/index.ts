export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  subdomains: string[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  details?: string[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  badge?: string;
}

export interface ActorItem {
  id: string;
  title: string;
  subtitle?: string;
}

export interface ApproachItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export type ModalType = 'legal' | 'privacy' | null;
