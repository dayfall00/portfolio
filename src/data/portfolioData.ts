import { ProjectSpec, SkillGroup, EducationItem, LearningTrack } from '@/types';

export const PERSONAL_INFO = {
  name: 'Aditya Bhardwaj',
  role: 'Full-Stack Developer',
  tagline: 'Building Systems That Move.',
  bio: 'Computer Science & Engineering undergraduate at PSIT Kanpur building scalable full-stack platforms, real-time telemetry systems, and clean modular backend architectures. Strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and systems engineering, with active exploration in Artificial Intelligence and distributed systems.',
  heroStatement: 'Computer Science & Engineering undergraduate building full-stack platforms, real-time systems, and exploring AI.',
  location: 'Kanpur, Uttar Pradesh, India',
  email: 'Aditya.bdwj2005@gmail.com',
  phone: '+91 9341126012',
  github: 'https://github.com/motordeath',
  linkedin: 'https://linkedin.com',
  status: 'Open to Software Engineering Opportunities',
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
    institution: 'Pranveer Singh Institute of Technology (PSIT)',
    location: 'Kanpur',
    boardOrUniversity: 'AKTU, Lucknow',
    period: '2024 – 2028',
    score: '7.38 / 10',
    scoreLabel: 'Current CGPA',
  },
  {
    degree: 'Senior Secondary (Class XII - JAC)',
    institution: 'S M College',
    location: 'Poriyahat',
    boardOrUniversity: 'JAC',
    period: '2024',
    score: '77.8%',
    scoreLabel: 'Final Score',
  },
  {
    degree: 'Secondary (Class X - CBSE)',
    institution: 'The R K VidyaMandir',
    location: 'Jasidih',
    boardOrUniversity: 'CBSE',
    period: '2022',
    score: '93.0%',
    scoreLabel: 'Final Score',
  },
];

export const PROJECTS_DATA: ProjectSpec[] = [
  {
    id: 'samanvay',
    title: 'Samanvay',
    tagline: 'Unified Humanitarian Coordination Platform',
    category: 'Full-Stack Platform & Volunteer Engine',
    featured: true,
    githubUrl: 'https://github.com/motordeath/Samanvay',
    systemRole: 'Full-Stack & Backend Developer',
    techStack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma ORM',
      'Zod',
    ],
    overview:
      'A full-stack disaster response and humanitarian coordination platform designed to help NGOs, volunteer groups, and relief organizations collaboratively manage emergency response through shared resources, volunteer dispatch, and coordinated operations.',
    architectureHighlights: [
      'Engineered the Volunteer Coordination Engine covering volunteer onboarding, skill registry, certification tracking, availability scheduling, invitation workflows, assignment lifecycles, and attendance records.',
      'Designed a normalized PostgreSQL database schema using Prisma ORM across 10+ interconnected models to ensure strict data consistency and referential integrity.',
      'Structured backend services using a modular Repository-Service-Controller architecture in Node.js/Express for maintainable, testable API design.',
      'Implemented an automated volunteer matching algorithm with experience-aware scoring logic to match volunteer capabilities with disaster requirements.',
      'Created strict runtime request validation layers using Zod along with centralized error handling across all backend endpoints.',
    ],
    metricsOrFeatures: [
      {
        label: 'Database Schema',
        value: '10+ Models',
        description: 'Normalized PostgreSQL relational architecture with Prisma ORM',
      },
      {
        label: 'Matching Engine',
        value: 'Scored Logic',
        description: 'Algorithm matching skill profiles and availability to disaster needs',
      },
      {
        label: 'Architecture',
        value: 'Repo-Service',
        description: 'Clean separation between Controllers, Services, and Repositories',
      },
      {
        label: 'Validation Layer',
        value: 'Zod Strict',
        description: 'Type-safe request validation and centralized error handling',
      },
    ],
  },
  {
    id: 'svms',
    title: 'SVMS',
    tagline: 'Smart Vehicle Monitoring System',
    category: 'Real-Time Telemetry & Fleet Analytics',
    featured: true,
    githubUrl: 'https://github.com/motordeath/vms',
    systemRole: 'Full-Stack Developer',
    techStack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'Leaflet.js',
      'Recharts',
    ],
    overview:
      'A full-stack vehicle fleet monitoring and telemetry platform delivering real-time GPS tracking, driver behavior analytics, trip management, and interactive analytics dashboards with live WebSocket streaming.',
    architectureHighlights: [
      'Built a real-time fleet monitoring dashboard featuring live vehicle location tracking, digital speedometer, fuel monitoring, trip statistics, and driver performance metrics.',
      'Integrated Socket.io WebSocket channels for sub-second streaming of live vehicle coordinates, speed, fuel consumption, and driving alerts.',
      'Engineered an interactive mapping interface with Leaflet.js to visualize live vehicle movement, GPS routes, and geolocation markers.',
      'Developed responsive analytical dashboards using React and Recharts to visualize trip summaries, fuel consumption curves, and driver efficiency metrics.',
      'Designed scalable MongoDB schemas for high-frequency telemetry logs, vehicle assets, driver profiles, and trip lifecycles.',
    ],
    metricsOrFeatures: [
      {
        label: 'Live Streaming',
        value: 'WebSockets',
        description: 'Sub-second real-time telemetry streaming via Socket.io',
      },
      {
        label: 'Geospatial Map',
        value: 'Leaflet.js',
        description: 'Interactive map visualizing live GPS tracks and routes',
      },
      {
        label: 'Fleet Analytics',
        value: 'Recharts',
        description: 'Performance charts for fuel consumption and driver metrics',
      },
      {
        label: 'Data Layer',
        value: 'MongoDB',
        description: 'Optimized document schemas for rapid telemetry ingestion',
      },
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages',
    description: 'C · C++ · Java · Python · JavaScript · TypeScript · Solidity',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'Solidity'],
  },
  {
    category: 'Frontend',
    description: 'React · Next.js · TypeScript · Tailwind CSS · HTML5 · CSS3',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    description: 'Node.js · Express.js · FastAPI · REST APIs · Architecture',
    skills: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'REST APIs',
      'Repo-Service Pattern',
      'Zod Validation',
    ],
  },
  {
    category: 'Databases',
    description: 'PostgreSQL · MongoDB · Prisma ORM',
    skills: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'Schema Design'],
  },
  {
    category: 'Web3',
    description: 'Solidity · Hardhat · Ethereum Smart Contracts',
    skills: ['Solidity', 'Hardhat', 'Ethereum Smart Contracts'],
  },
  {
    category: 'Developer Tools',
    description: 'Git · GitHub · GitHub Actions · Firebase · Postman · VS Code',
    skills: ['Git', 'GitHub', 'GitHub Actions', 'Firebase', 'Postman', 'VS Code'],
  },
  {
    category: 'Core Computer Science',
    description: 'DSA · OOP · DBMS · OS · Computer Networks · Software Engineering',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering & API Design',
    ],
  },
];

export const CURRENTLY_LEARNING: LearningTrack[] = [
  {
    title: 'Machine Learning & Deep Learning',
    domain: 'AI / Neural Systems',
    focus: 'Actively studying fundamental neural architectures, tensor operations, backpropagation, and model training workflows.',
    status: 'Active Study',
  },
  {
    title: 'Cloud Infrastructure & AWS',
    domain: 'Cloud Computing',
    focus: 'Exploring scalable cloud primitives, containerization, serverless architectures, and reliable deployment practices.',
    status: 'In Progress',
  },
  {
    title: 'Large-Scale System Design',
    domain: 'System Architecture',
    focus: 'Learning distributed system patterns, caching strategies, message queues, and high-throughput backend design.',
    status: 'Continuous Exploration',
  },
];

export const CORE_STRENGTHS = [
  'Problem Solving',
  'Analytical Thinking',
  'Team Collaboration',
  'Leadership',
  'Effective Communication',
  'Quick Learner',
  'Adaptability',
  'Attention to Detail',
  'Continuous Learning',
];
