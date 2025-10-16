import { Project } from "@/components/project-card";

export enum ProjectCategory {
  AI = "ai",
  BLOCKCHAIN = "blockchain",
  DATA = "data",
  WEB = "web",
  MOBILE = "mobile",
  ENTERPRISE = "enterprise"
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: 95, category: "languages" },
  { name: "JavaScript/TypeScript", level: 90, category: "languages" },
  { name: "Java", level: 85, category: "languages" },
  { name: "Solidity", level: 88, category: "languages" },
  { name: "Rust", level: 80, category: "languages" },
  { name: "Go", level: 75, category: "languages" },
  
  // AI/ML
  { name: "TensorFlow", level: 92, category: "ai" },
  { name: "PyTorch", level: 90, category: "ai" },
  { name: "Scikit-learn", level: 88, category: "ai" },
  { name: "Computer Vision", level: 85, category: "ai" },
  { name: "NLP", level: 87, category: "ai" },
  
  // Blockchain
  { name: "Ethereum", level: 90, category: "blockchain" },
  { name: "Smart Contracts", level: 92, category: "blockchain" },
  { name: "Web3.js", level: 85, category: "blockchain" },
  { name: "Hyperledger", level: 80, category: "blockchain" },
  
  // Web Development
  { name: "React", level: 93, category: "web" },
  { name: "Node.js", level: 90, category: "web" },
  { name: "Django", level: 88, category: "web" },
  { name: "Next.js", level: 85, category: "web" },
  
  // Data & Analytics
  { name: "SQL", level: 90, category: "data" },
  { name: "MongoDB", level: 85, category: "data" },
  { name: "PostgreSQL", level: 88, category: "data" },
  { name: "Data Visualization", level: 87, category: "data" },
  
  // Cloud & DevOps
  { name: "AWS", level: 85, category: "cloud" },
  { name: "Docker", level: 88, category: "cloud" },
  { name: "Kubernetes", level: 80, category: "cloud" },
  { name: "CI/CD", level: 85, category: "cloud" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Healthcare Diagnostics",
    description: "Deep learning system for medical image analysis with 98% accuracy in detecting anomalies. Deployed across 50+ healthcare facilities.",
    image: "/images/projects/healthcare-ai.jpg",
    category: ProjectCategory.AI,
    technologies: ["Python", "TensorFlow", "Computer Vision", "AWS"],
    githubUrl: "https://github.com/codegx-technology",
    liveUrl: "https://demo.codegx.com/healthcare"
  },
  {
    id: 2,
    title: "Enterprise Blockchain Platform",
    description: "Scalable blockchain solution for supply chain management, processing 10,000+ transactions per second with zero downtime.",
    image: "/images/projects/blockchain-platform.jpg",
    category: ProjectCategory.BLOCKCHAIN,
    technologies: ["Solidity", "Ethereum", "Web3.js", "Node.js"],
    githubUrl: "https://github.com/codegx-technology",
    liveUrl: "https://demo.codegx.com/blockchain"
  },
  {
    id: 3,
    title: "Real-Time Analytics Dashboard",
    description: "Big data analytics platform processing 1M+ events per minute with real-time visualization and predictive insights.",
    image: "/images/projects/analytics-dashboard.jpg",
    category: ProjectCategory.DATA,
    technologies: ["Python", "Apache Kafka", "React", "PostgreSQL"],
    githubUrl: "https://github.com/codegx-technology",
    liveUrl: "https://demo.codegx.com/analytics"
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with AI-powered recommendations, serving 100K+ daily active users.",
    image: "/images/projects/ecommerce.jpg",
    category: ProjectCategory.WEB,
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    githubUrl: "https://github.com/codegx-technology",
    liveUrl: "https://demo.codegx.com/ecommerce"
  },
  {
    id: 5,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and real-time transaction processing.",
    image: "/images/projects/mobile-banking.jpg",
    category: ProjectCategory.MOBILE,
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    githubUrl: "https://github.com/codegx-technology",
    liveUrl: "https://demo.codegx.com/mobile-banking"
  },
  {
    id: 6,
    title: "NLP Chatbot Platform",
    description: "Advanced conversational AI platform with multi-language support and sentiment analysis capabilities.",
    image: "/images/projects/chatbot.jpg",
    category: ProjectCategory.AI,
    technologies: ["Python", "PyTorch", "NLP", "FastAPI"],
    githubUrl: "https://github.com/codegx-technology",
    liveUrl: "https://demo.codegx.com/chatbot"
  },
  {
    id: 7,
    title: "DeFi Trading Platform",
    description: "Decentralized finance platform for automated trading with smart contract integration and liquidity pools.",
    image: "/images/projects/defi.jpg",
    category: ProjectCategory.BLOCKCHAIN,
    technologies: ["Solidity", "React", "Web3.js", "Hardhat"],
    githubUrl: "https://github.com/codegx-technology",
    liveUrl: "https://demo.codegx.com/defi"
  },
  {
    id: 8,
    title: "IoT Monitoring System",
    description: "Enterprise IoT platform monitoring 10,000+ devices with predictive maintenance and anomaly detection.",
    image: "/images/projects/iot.jpg",
    category: ProjectCategory.ENTERPRISE,
    technologies: ["Python", "MQTT", "InfluxDB", "Grafana"],
    githubUrl: "https://github.com/codegx-technology",
    liveUrl: "https://demo.codegx.com/iot"
  }
];
