
import { SecurityAlert, UpdateFeature, InfoSource, TechnologyData, ActivityTrend, Influencer, WatchTool } from './types';

export const securityAlerts: SecurityAlert[] = [
  {
    id: '1',
    title: 'Vulnérabilité critique dans ASP.NET Core',
    description: 'Faille de sécurité affectant le middleware d\'authentification dans les versions 7.0.14 et antérieures',
    date: '2024-01-15',
    severity: 'critical',
    link: 'https://github.com/dotnet/announcements/issues/277'
  },
  {
    id: '2',
    title: 'Mise à jour de sécurité pour Entity Framework Core',
    description: 'Correctif pour une vulnérabilité potentielle d\'injection SQL dans EF Core 7.0',
    date: '2024-01-10',
    severity: 'warning',
    link: 'https://github.com/dotnet/efcore/security/advisories'
  },
  {
    id: '3',
    title: 'Amélioration de la sécurité dans .NET 8.0.2',
    description: 'Mise à jour de sécurité recommandée pour toutes les applications en production',
    date: '2024-01-05',
    severity: 'info',
    link: 'https://dotnet.microsoft.com/download/dotnet/8.0'
  }
];

export const updateFeatures: UpdateFeature[] = [
  {
    id: '1',
    title: 'Preview 1 de .NET 9',
    description: 'Première preview de .NET 9 avec des améliorations significatives des performances',
    date: '2024-01-20',
    technology: '.NET 9',
    link: 'https://devblogs.microsoft.com/dotnet/',
    isNew: true
  },
  {
    id: '2',
    title: 'Nouvelles fonctionnalités Blazor WebAssembly',
    description: 'Support amélioré pour les PWA et l\'isolation du DOM',
    date: '2024-01-18',
    technology: 'Blazor WebAssembly',
    link: 'https://devblogs.microsoft.com/dotnet/category/blazor/'
  },
  {
    id: '3',
    title: 'Release 3 de Visual Studio 2022',
    description: 'Nouveaux outils d\'analyse et amélioration de l\'intellisense',
    date: '2024-01-12',
    technology: 'Visual Studio',
    link: 'https://devblogs.microsoft.com/visualstudio/'
  },
  {
    id: '4',
    title: 'Azure DevOps Server 2022.1',
    description: 'Nouvelles fonctionnalités pour les pipelines et la gestion des artefacts',
    date: '2024-01-08',
    technology: 'Azure DevOps',
    link: 'https://devblogs.microsoft.com/devops/'
  },
  {
    id: '5',
    title: 'WinUI 3.0 Release Candidate',
    description: 'Dernière version candidate avant la release finale de WinUI 3.0',
    date: '2024-01-05',
    technology: 'WinUI',
    link: 'https://github.com/microsoft/microsoft-ui-xaml'
  }
];

export const infoSources: InfoSource[] = [
  { name: 'Docs officiels', value: 40, color: '#512BD4' },
  { name: 'Blogs tech', value: 25, color: '#68217A' },
  { name: 'Réseaux sociaux', value: 20, color: '#3092C0' },
  { name: 'Forums', value: 15, color: '#44CFB8' }
];

export const technologiesData: TechnologyData[] = [
  { name: '.NET Core', value: 35, color: '#512BD4' },
  { name: 'ASP.NET', value: 25, color: '#3092C0' },
  { name: 'Blazor', value: 15, color: '#44CFB8' },
  { name: 'EF Core', value: 15, color: '#3ECF8E' },
  { name: 'MAUI', value: 10, color: '#68217A' }
];

export const activityTrends: ActivityTrend[] = [
  { month: 'Sep', articles: 42, notifications: 25, interactions: 18 },
  { month: 'Oct', articles: 48, notifications: 30, interactions: 22 },
  { month: 'Nov', articles: 45, notifications: 28, interactions: 20 },
  { month: 'Dec', articles: 55, notifications: 32, interactions: 25 },
  { month: 'Jan', articles: 60, notifications: 35, interactions: 28 }
];

export const influencers: Influencer[] = [
  {
    id: '1',
    name: 'Scott Hunter',
    role: 'Director of Program Management, .NET',
    twitter: '@coolcsh',
    github: 'scothunt',
    category: 'microsoft',
    avatar: 'https://avatars.githubusercontent.com/u/2587505?v=4'
  },
  {
    id: '2',
    name: 'Mads Torgersen',
    role: 'Lead Designer, C#',
    twitter: '@madstorgersen',
    category: 'microsoft',
    avatar: 'https://avatars.githubusercontent.com/u/54529015?v=4'
  },
  {
    id: '3',
    name: 'Damien Edwards',
    role: 'ASP.NET Core Team',
    twitter: '@DamianEdwards',
    github: 'DamianEdwards',
    category: 'microsoft',
    avatar: 'https://avatars.githubusercontent.com/u/1321544?v=4'
  },
  {
    id: '4',
    name: 'Andrew Lock',
    role: 'Auteur .NET & ASP.NET Core',
    twitter: '@andrewlocknet',
    category: 'content',
    avatar: 'https://avatars.githubusercontent.com/u/18423784?v=4'
  },
  {
    id: '5',
    name: 'Christian Nagel',
    role: 'Auteur & MVP Microsoft',
    twitter: '@ChristianNagel',
    category: 'content',
    avatar: 'https://avatars.githubusercontent.com/u/534835?v=4'
  },
  {
    id: '6',
    name: 'Jeff Fritz',
    role: 'Program Manager Microsoft, Streamer',
    twitter: '@csharpfritz',
    category: 'content',
    avatar: 'https://avatars.githubusercontent.com/u/1736114?v=4'
  },
  {
    id: '7',
    name: 'Jon Skeet',
    role: 'Contributeur C# & .NET',
    twitter: '@jonskeet',
    category: 'community',
    avatar: 'https://avatars.githubusercontent.com/u/76791?v=4'
  },
  {
    id: '8',
    name: 'Kendra Havens',
    role: 'Program Manager .NET & Visual Studio',
    twitter: '@gotheap',
    category: 'community',
    avatar: 'https://avatars.githubusercontent.com/u/15748273?v=4'
  },
  {
    id: '9',
    name: 'Nick Craver',
    role: 'Architecture Stack Overflow',
    twitter: '@Nick_Craver',
    category: 'community',
    avatar: 'https://avatars.githubusercontent.com/u/454698?v=4'
  }
];

export const watchTools: WatchTool[] = [
  {
    id: '1',
    name: 'Inoreader',
    description: 'Agrégateur RSS pour suivre les blogs .NET',
    url: 'https://www.inoreader.com',
    icon: 'rss'
  },
  {
    id: '2',
    name: '.NET Weekly',
    description: 'Newsletter hebdomadaire sur l\'écosystème .NET',
    url: 'https://www.dotnetweekly.com/',
    icon: 'mail'
  },
  {
    id: '3',
    name: 'GitHub Stars',
    description: 'Suivre les repos .NET populaires',
    url: 'https://github.com/dotnet',
    icon: 'github'
  },
  {
    id: '4',
    name: 'Reddit r/dotnet',
    description: 'Communauté Reddit dédiée à .NET',
    url: 'https://www.reddit.com/r/dotnet/',
    icon: 'message-square'
  },
  {
    id: '5',
    name: 'Stack Overflow Trends',
    description: 'Analyser les tendances des questions .NET',
    url: 'https://insights.stackoverflow.com/trends',
    icon: 'bar-chart'
  }
];

export const lastUpdateDate = '2 février 2024';
export const newNotificationsCount = 15;
export const savedArticlesCount = 124;
