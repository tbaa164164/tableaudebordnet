
export interface SecurityAlert {
  id: string;
  title: string;
  description: string;
  date: string;
  severity: 'info' | 'warning' | 'critical';
  link: string;
}

export interface UpdateFeature {
  id: string;
  title: string;
  description: string;
  date: string;
  technology: string;
  link: string;
  isNew?: boolean;
}

export interface InfoSource {
  name: string;
  value: number;
  color: string;
}

export interface TechnologyData {
  name: string;
  value: number;
  color: string;
}

export interface ActivityTrend {
  month: string;
  articles: number;
  notifications: number;
  interactions: number;
}

export interface Influencer {
  id: string;
  name: string;
  role: string;
  twitter: string;
  github?: string;
  category: 'microsoft' | 'community' | 'content';
  avatar: string;
}

export interface WatchTool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
}
