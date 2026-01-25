import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Target, 
  Users, 
  Code, 
  Database, 
  Cloud,
  Shield,
  Zap,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  BarChart3,
  Settings,
  GitBranch,
  Container,
  Globe,
  Server,
  Lock,
  Cpu,
  Network,
  Monitor
} from 'lucide-react';
import { 
  AnimatedBackground, 
  TechBadge, 
  StatsCard, 
  ProgressBar, 
  TimelineItem, 
  InteractiveButton,
  categoryColors,
  statusColors,
  difficultyColors
} from '../visual/VisualComponents';

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  category: keyof typeof categoryColors;
  featured: boolean;
  timeline: {
    start: string;
    end: string;
    duration: string;
  };
  challenge: string;
  solution: string[];
  impact: string[];
  technologies: string[];
  impactMetrics: {
    deploymentTime?: { before: string; after: string; improvement: string };
    cost?: { before: string; after: string; reduction: string };
    performance?: { improvement: string };
    availability?: { uptime: string; improvement: string };
    scalability?: { capacity: string; improvement: string };
  };
  architecture?: {
    components: string[];
    pattern: string;
  };
}

const caseStudies: CaseStudy[] = [
  // DevOps Case Studies
  {
    id: 1,
    title: "Infrastructure CI/CD Pipeline with Terraform & GitHub Actions",
    subtitle: "Automated Multi-Cloud Infrastructure Deployment",
    category: "DevOps",
    featured: true,
    timeline: {
      start: "Jan 2024",
      end: "Mar 2024",
      duration: "3 months"
    },
    challenge: "A growing startup needed to provision and manage cloud infrastructure across multiple environments (dev, staging, production) with consistent security, compliance, and rapid deployment capabilities. Manual infrastructure provisioning was taking 4+ hours per environment and prone to human error.",
    solution: [
      "Designed comprehensive Terraform modules for reusable infrastructure components",
      "Implemented GitHub Actions CI/CD pipeline for automated infrastructure provisioning",
      "Created environment-specific configurations with Terraform workspaces",
      "Established automated security scanning and compliance checks in the pipeline",
      "Built disaster recovery automation with automated backup and restore capabilities"
    ],
    impact: [
      "Reduced infrastructure provisioning time from 4 hours to 15 minutes (94% reduction)",
      "Eliminated human error in infrastructure deployments through automation",
      "Achieved consistent infrastructure across all environments",
      "Decreased infrastructure costs by 35% through intelligent resource management",
      "Improved deployment frequency from weekly to multiple times per day"
    ],
    technologies: ["Terraform", "GitHub Actions", "AWS", "GCP", "Docker", "Ansible"],
    impactMetrics: {
      deploymentTime: { before: "4 hours", after: "15 min", improvement: "94%" },
      cost: { before: "$3,500/mo", after: "$2,275/mo", reduction: "35%" },
      availability: { uptime: "99.2%", improvement: "2.2%" },
      scalability: { capacity: "10x", improvement: "1000%" }
    },
    architecture: {
      components: ["Terraform Modules", "GitHub Actions Pipeline", "Cloud Providers (AWS/GCP)", "State Management", "Security Scanning"],
      pattern: "Infrastructure as Code with GitOps"
    }
  },
  {
    id: 2,
    title: "React & Node.js Deployment on AWS ECS",
    subtitle: "Containerized Application with Zero-Downtime Deployments",
    category: "DevOps",
    featured: true,
    timeline: {
      start: "Feb 2024",
      end: "Apr 2024",
      duration: "2 months"
    },
    challenge: "A full-stack application needed to be containerized and deployed to production with zero-downtime, automated scaling, and efficient resource utilization. The previous deployment process required manual intervention and caused service interruptions during updates.",
    solution: [
      "Containerized React frontend and Node.js backend using multi-stage Docker builds",
      "Deployed to Amazon ECS with Fargate for serverless container orchestration",
      "Implemented blue-green deployment strategy for zero-downtime updates",
      "Configured Application Load Balancer with health checks and auto-scaling",
      "Set up automated CI/CD pipeline with GitHub Actions and Amazon ECR"
    ],
    impact: [
      "Achieved zero-downtime deployments with blue-green strategy",
      "Reduced deployment time from 2 hours to 20 minutes",
      "Improved application reliability from 85% to 99.2% uptime",
      "Automated scaling reduced infrastructure costs by 28%",
      "Enabled continuous deployment with multiple daily releases"
    ],
    technologies: ["AWS ECS", "Docker", "ECR", "GitHub Actions", "React", "Node.js", "Terraform"],
    impactMetrics: {
      deploymentTime: { before: "2 hours", after: "20 min", improvement: "83%" },
      cost: { before: "$1,800/mo", after: "$1,296/mo", reduction: "28%" },
      availability: { uptime: "99.2%", improvement: "14.2%" },
      performance: { improvement: "65%" }
    },
    architecture: {
      components: ["Docker Containers", "ECS Fargate", "Application Load Balancer", "ECR", "CloudWatch", "Auto Scaling"],
      pattern: "Containerized Microservices on ECS"
    }
  },
  {
    id: 3,
    title: "Multi-Cloud Observability with Grafana & Sentry",
    subtitle: "Reducing MTTR by 80% Through Comprehensive Monitoring",
    category: "DevOps",
    featured: false,
    timeline: {
      start: "May 2024",
      end: "Jul 2024",
      duration: "3 months"
    },
    challenge: "A distributed system across AWS and GCP lacked proper observability, making it difficult to diagnose issues quickly. Mean Time To Recovery (MTTR) was over 4 hours, and teams were often debugging blind without proper metrics, logs, or error tracking.",
    solution: [
      "Implemented Grafana for unified metrics visualization across both cloud providers",
      "Integrated Sentry for real-time error tracking and alerting",
      "Set up centralized logging with CloudWatch and Stackdriver",
      "Created custom dashboards for application and infrastructure metrics",
      "Established alerting rules with PagerDuty integration for on-call teams"
    ],
    impact: [
      "Reduced MTTR from 4 hours to 48 minutes (80% reduction)",
      "Improved system reliability from 85% to 99.2% uptime",
      "Enabled proactive issue detection before customer impact",
      "Reduced on-call incidents by 60% through better observability",
      "Enhanced team productivity with faster debugging capabilities"
    ],
    technologies: ["Grafana", "Sentry", "AWS CloudWatch", "GCP Stackdriver", "Prometheus", "PagerDuty"],
    impactMetrics: {
      performance: { improvement: "80%" },
      availability: { uptime: "99.2%", improvement: "14.2%" },
      scalability: { capacity: "3x", improvement: "300%" }
    },
    architecture: {
      components: ["Grafana Dashboards", "Sentry Error Tracking", "CloudWatch Logs", "Prometheus Metrics", "Alerting System"],
      pattern: "Unified Observability Stack"
    }
  },
  {
    id: 4,
    title: "Kubernetes Cluster Optimization & Cost Reduction",
    subtitle: "35% Cost Reduction Through Intelligent Resource Management",
    category: "DevOps",
    featured: false,
    timeline: {
      start: "Jun 2024",
      end: "Aug 2024",
      duration: "3 months"
    },
    challenge: "A Kubernetes cluster running 25+ microservices was experiencing high cloud costs due to over-provisioned resources, inefficient pod scheduling, and lack of resource optimization. Monthly costs exceeded budget by 40%.",
    solution: [
      "Implemented Horizontal Pod Autoscaling (HPA) based on CPU and memory metrics",
      "Optimized resource requests and limits through comprehensive analysis",
      "Configured cluster autoscaling to scale nodes based on demand",
      "Implemented pod disruption budgets for better resource utilization",
      "Set up cost monitoring and alerting with Kubecost"
    ],
    impact: [
      "Reduced cloud costs by 35% through intelligent resource management",
      "Improved resource utilization from 45% to 78%",
      "Maintained 99.2% uptime while reducing infrastructure footprint",
      "Enabled automatic scaling during peak loads without manual intervention",
      "Achieved better cost predictability with resource optimization"
    ],
    technologies: ["Kubernetes", "Docker", "HPA", "Cluster Autoscaler", "Kubecost", "Prometheus"],
    impactMetrics: {
      cost: { before: "$4,200/mo", after: "$2,730/mo", reduction: "35%" },
      performance: { improvement: "45%" },
      availability: { uptime: "99.2%", improvement: "1.2%" },
      scalability: { capacity: "4x", improvement: "400%" }
    },
    architecture: {
      components: ["Kubernetes Cluster", "HPA", "Cluster Autoscaler", "Resource Quotas", "Monitoring Stack"],
      pattern: "Optimized Kubernetes with Auto-scaling"
    }
  },
  {
    id: 5,
    title: "GitOps Implementation with ArgoCD",
    subtitle: "Automated Multi-Environment Deployment Pipeline",
    category: "DevOps",
    featured: false,
    timeline: {
      start: "Sep 2024",
      end: "Nov 2024",
      duration: "3 months"
    },
    challenge: "A development team needed to deploy applications across multiple Kubernetes environments (dev, staging, production) with consistency, audit trails, and the ability to rollback quickly. Manual deployments were error-prone and lacked proper version control.",
    solution: [
      "Implemented ArgoCD for GitOps-based continuous deployment",
      "Created Git repository structure with environment-specific configurations",
      "Set up automated sync policies for different environments",
      "Implemented health checks and automated rollback on failures",
      "Established RBAC policies for secure multi-team access"
    ],
    impact: [
      "Reduced deployment time from 45 minutes to 8 minutes",
      "Achieved 100% deployment consistency across environments",
      "Enabled instant rollback capabilities reducing recovery time by 90%",
      "Improved audit trail with Git-based deployment history",
      "Eliminated configuration drift between environments"
    ],
    technologies: ["ArgoCD", "Kubernetes", "Git", "Helm", "Kustomize", "GitHub"],
    impactMetrics: {
      deploymentTime: { before: "45 min", after: "8 min", improvement: "82%" },
      availability: { uptime: "99.5%", improvement: "2.5%" },
      performance: { improvement: "70%" }
    },
    architecture: {
      components: ["ArgoCD", "Git Repository", "Kubernetes Clusters", "Helm Charts", "Application Manifests"],
      pattern: "GitOps with ArgoCD"
    }
  },
  // Full-Stack Case Studies
  {
    id: 6,
    title: "Salezoft — Inventory & POS Management System",
    subtitle: "Complete Business Management Solution for SMEs",
    category: "Full-Stack",
    featured: true,
    timeline: {
      start: "Mar 2023",
      end: "Aug 2023",
      duration: "6 months"
    },
    challenge: "Small and medium enterprises (SMEs) in retail struggled with manual inventory management, leading to stockouts, overstocking, inaccurate sales tracking, and inefficient point-of-sale operations. Business owners needed a comprehensive solution to manage their entire operation from inventory to sales.",
    solution: [
      "Built comprehensive inventory management system with real-time stock tracking",
      "Developed point-of-sale (POS) system with barcode scanning and receipt printing",
      "Implemented sales analytics and reporting dashboard for business insights",
      "Created multi-user access control with role-based permissions",
      "Designed offline-capable system for unreliable internet connectivity"
    ],
    impact: [
      "Reduced inventory management time by 70% through automation",
      "Eliminated stockouts and overstocking with real-time inventory tracking",
      "Improved sales accuracy by 95% with automated POS system",
      "Increased business efficiency with comprehensive reporting and analytics",
      "Enabled 200+ SMEs to streamline their operations"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Barcode Scanner API", "Printer Integration", "AWS"],
    impactMetrics: {
      performance: { improvement: "85%" },
      scalability: { capacity: "200+ businesses", improvement: "1000%" },
      availability: { uptime: "99.5%", improvement: "15.5%" }
    },
    architecture: {
      components: ["React Frontend", "Node.js Backend", "MongoDB Database", "POS Hardware Integration", "Analytics Engine", "Reporting System"],
      pattern: "Full-Stack Business Management Platform"
    }
  },
  {
    id: 7,
    title: "Infinite School — University Management System",
    subtitle: "Comprehensive Academic & Administrative Platform",
    category: "Full-Stack",
    featured: true,
    timeline: {
      start: "Jan 2023",
      end: "Jun 2023",
      duration: "6 months"
    },
    challenge: "Universities and higher education institutions needed a unified platform to manage students, courses, faculty, examinations, fees, and administrative tasks. Existing solutions were fragmented, expensive, and didn't meet the specific needs of African universities.",
    solution: [
      "Developed comprehensive student information system (SIS) with enrollment and academic records",
      "Built course management system with scheduling and resource allocation",
      "Implemented examination management with automated grading and result processing",
      "Created fee management system with payment tracking and financial reporting",
      "Designed faculty portal for course management and student interaction"
    ],
    impact: [
      "Streamlined administrative processes reducing paperwork by 80%",
      "Improved student experience with self-service portal for registrations and results",
      "Enhanced academic tracking with real-time grade management",
      "Reduced administrative costs by 45% through automation",
      "Enabled 15+ universities to modernize their operations"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "File Upload System", "PDF Generation", "Email Integration"],
    impactMetrics: {
      performance: { improvement: "90%" },
      scalability: { capacity: "15+ universities", improvement: "500%" },
      availability: { uptime: "99.3%", improvement: "13.3%" }
    },
    architecture: {
      components: ["Student Portal", "Faculty Portal", "Admin Dashboard", "Database Layer", "File Management", "Notification System"],
      pattern: "Multi-Tenant University Management Platform"
    }
  },
  {
    id: 8,
    title: "Hotel Management System",
    subtitle: "Complete Hospitality Operations Platform",
    category: "Full-Stack",
    featured: false,
    timeline: {
      start: "Sep 2023",
      end: "Feb 2024",
      duration: "6 months"
    },
    challenge: "Hotels struggled with manual booking management, room availability tracking, guest check-in/check-out processes, and financial reporting. The lack of integrated systems led to double bookings, revenue loss, and poor guest experience.",
    solution: [
      "Built comprehensive reservation system with real-time room availability",
      "Developed front desk management for check-in/check-out operations",
      "Implemented housekeeping management with room status tracking",
      "Created billing and invoicing system with payment processing",
      "Designed reporting dashboard for occupancy rates and revenue analytics"
    ],
    impact: [
      "Eliminated double bookings with real-time availability tracking",
      "Reduced check-in time from 15 minutes to 3 minutes",
      "Improved revenue management with automated billing and reporting",
      "Enhanced guest experience with streamlined booking and check-in process",
      "Enabled 30+ hotels to optimize their operations"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Payment Gateway", "SMS Integration", "Email Notifications"],
    impactMetrics: {
      performance: { improvement: "75%" },
      scalability: { capacity: "30+ hotels", improvement: "600%" },
      availability: { uptime: "99.4%", improvement: "14.4%" }
    },
    architecture: {
      components: ["Reservation System", "Front Desk Module", "Housekeeping Module", "Billing System", "Reporting Dashboard", "Notification Service"],
      pattern: "Integrated Hotel Management Platform"
    }
  },
  {
    id: 9,
    title: "Zocamhost — Cloud Hosting Platform",
    subtitle: "Infrastructure Platform Powering 150+ Businesses",
    category: "Full-Stack",
    featured: false,
    timeline: {
      start: "2022",
      end: "Present",
      duration: "Ongoing"
    },
    challenge: "Businesses needed reliable, affordable cloud hosting with automated deployments, SSL management, and comprehensive control panels. Existing solutions were either too expensive or lacked the features needed for modern applications.",
    solution: [
      "Built scalable cloud hosting infrastructure with automated provisioning",
      "Developed user-friendly control panel for server and application management",
      "Implemented automated SSL certificate management and renewal",
      "Created one-click deployment system for popular frameworks",
      "Designed monitoring and alerting system for infrastructure health"
    ],
    impact: [
      "Enabled 150+ businesses to deploy and manage their applications",
      "Reduced deployment time from hours to minutes with one-click deployment",
      "Achieved 99.2% uptime with reliable infrastructure",
      "Reduced hosting costs by 40% compared to traditional providers",
      "Improved developer experience with intuitive control panel"
    ],
    technologies: ["React", "Node.js", "Docker", "Kubernetes", "Terraform", "AWS", "Let's Encrypt"],
    impactMetrics: {
      performance: { improvement: "120%" },
      scalability: { capacity: "150+ businesses", improvement: "1500%" },
      availability: { uptime: "99.2%", improvement: "12.2%" },
      cost: { before: "$200/mo", after: "$120/mo", reduction: "40%" }
    },
    architecture: {
      components: ["Control Panel", "Hosting Infrastructure", "Deployment Pipeline", "SSL Management", "Monitoring System", "Billing System"],
      pattern: "Platform-as-a-Service (PaaS)"
    }
  },
  {
    id: 10,
    title: "Mentoraura — Mentorship Platform",
    subtitle: "Connecting 100+ Mentees with Industry Experts",
    category: "Full-Stack",
    featured: false,
    timeline: {
      start: "2023",
      end: "Present",
      duration: "Ongoing"
    },
    challenge: "Aspiring professionals and students needed a platform to connect with experienced mentors for career guidance, skill development, and industry insights. Existing solutions lacked features for scheduling, progress tracking, and structured mentorship programs.",
    solution: [
      "Built mentor-mentee matching system with profile-based recommendations",
      "Developed scheduling system for mentorship sessions with calendar integration",
      "Implemented progress tracking and goal management for mentees",
      "Created communication platform with messaging and video call integration",
      "Designed analytics dashboard for tracking mentorship outcomes"
    ],
    impact: [
      "Connected 100+ mentees with experienced mentors across various industries",
      "Improved mentorship engagement with structured programs and progress tracking",
      "Enhanced mentor-mentee communication with integrated messaging and scheduling",
      "Increased mentee career advancement through guided mentorship",
      "Created scalable platform for expanding mentorship network"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "WebRTC", "Calendar API", "AWS"],
    impactMetrics: {
      performance: { improvement: "95%" },
      scalability: { capacity: "100+ mentees", improvement: "1000%" },
      availability: { uptime: "99.1%", improvement: "11.1%" }
    },
    architecture: {
      components: ["Matching Engine", "Scheduling System", "Communication Platform", "Progress Tracking", "Analytics Dashboard", "Video Conferencing"],
      pattern: "Social Platform with Real-time Communication"
    }
  }
];

const EnhancedCaseStudies: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<number | null>(caseStudies[0]?.id || null);
  const [activeTab, setActiveTab] = useState<'overview' | 'solution' | 'results'>('overview');

  const selectedStudyData = caseStudies.find(study => study.id === selectedStudy);

  const categories = ['All', 'DevOps', 'Cloud Infrastructure', 'Full-Stack'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredStudies = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const getIconForMetric = (metric: string) => {
    switch (metric) {
      case 'deploymentTime': return <Zap className="w-5 h-5" />;
      case 'cost': return <TrendingUp className="w-5 h-5" />;
      case 'performance': return <BarChart3 className="w-5 h-5" />;
      case 'availability': return <Target className="w-5 h-5" />;
      case 'scalability': return <TrendingUp className="w-5 h-5" />;
      default: return <BarChart3 className="w-5 h-5" />;
    }
  };

  return (
    <AnimatedBackground>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
            Engineering Excellence in Practice
          </h1>
          <p className="text-green-200 text-lg max-w-3xl mx-auto">
            Deep-dive case studies demonstrating how strategic platform engineering transforms business outcomes. From reducing deployment times by 94% to cutting cloud costs by 35%, these projects showcase the measurable impact of systems thinking over tool implementation.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          <StatsCard
            title="Projects Completed"
            value="10"
            icon={<FileText className="w-6 h-6" />}
            color="completed"
          />
          <StatsCard
            title="Cost Savings"
            value="35%"
            change="Average across projects"
            icon={<TrendingUp className="w-6 h-6" />}
            color="completed"
            trend="up"
          />
          <StatsCard
            title="Uptime Achieved"
            value="99.5%"
            change="Production reliability"
            icon={<Target className="w-6 h-6" />}
            color="completed"
            trend="up"
          />
        </motion.div>

        {/* Study Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-400 text-black'
                    : 'bg-gray-800 text-green-400 border border-gray-600 hover:border-green-400'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedStudy(study.id)}
                className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 ${
                  selectedStudy === study.id
                    ? 'bg-green-400/10 border-green-400'
                    : 'bg-gray-900/50 border-gray-700 hover:border-green-400/50'
                } ${study.featured ? 'ring-2 ring-yellow-400/50' : ''}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <TechBadge name={study.category} category={study.category} size="sm" />
                  {study.featured && (
                    <span className="text-xs text-yellow-400 font-medium">⭐ Featured</span>
                  )}
                </div>
                
                <h3 className="text-white font-bold mb-1 text-sm line-clamp-2">
                  {study.title}
                </h3>
                
                <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                  {study.subtitle}
                </p>
                
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>{study.timeline.duration}</span>
                  <span>•</span>
                  <span>{study.timeline.start} - {study.timeline.end}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Selected Study Details */}
        <AnimatePresence mode="wait">
          {selectedStudyData && (
            <motion.div
              key={selectedStudyData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden"
            >
              {/* Study Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <TechBadge name={selectedStudyData.category} category={selectedStudyData.category} />
                      {selectedStudyData.featured && (
                        <span className="text-xs text-yellow-400 font-medium">⭐ Featured Project</span>
                      )}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {selectedStudyData.title}
                    </h2>
                    <p className="text-green-400 text-lg">
                      {selectedStudyData.subtitle}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="text-center">
                      <Calendar className="w-5 h-5 mx-auto mb-1 text-green-400" />
                      <p className="font-medium">{selectedStudyData.timeline.start}</p>
                      <p className="text-xs">Start Date</p>
                    </div>
                    <div className="text-center">
                      <Clock className="w-5 h-5 mx-auto mb-1 text-green-400" />
                      <p className="font-medium">{selectedStudyData.timeline.duration}</p>
                      <p className="text-xs">Duration</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="w-5 h-5 mx-auto mb-1 text-green-400" />
                      <p className="font-medium">{selectedStudyData.timeline.end}</p>
                      <p className="text-xs">Completion</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-700">
                {[
                  { id: 'overview', label: 'Overview', icon: <FileText className="w-4 h-4" /> },
                  { id: 'solution', label: 'Solution', icon: <Code className="w-4 h-4" /> },
                  { id: 'results', label: 'Results', icon: <BarChart3 className="w-4 h-4" /> }
                ].map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ y: -2 }}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'text-green-400 border-b-2 border-green-400'
                        : 'text-gray-400 hover:text-green-400'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </motion.button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === 'overview' && (
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            Challenge
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {selectedStudyData.challenge}
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                              <Settings className="w-5 h-5" />
                              Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedStudyData.technologies.map((tech) => (
                                <TechBadge key={tech} name={tech} category={selectedStudyData.category} size="sm" />
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                              <GitBranch className="w-5 h-5" />
                              Architecture Pattern
                            </h3>
                            <p className="text-gray-300 mb-2 font-medium">
                              {selectedStudyData.architecture?.pattern}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {selectedStudyData.architecture?.components.map((component) => (
                                <span key={component} className="px-2 py-1 bg-gray-800 text-green-400 text-xs rounded">
                                  {component}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'solution' && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                          <Code className="w-5 h-5" />
                          Solution Approach
                        </h3>
                        <div className="space-y-4">
                          {selectedStudyData.solution.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex gap-4 p-4 bg-gray-800/50 rounded-lg"
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-green-400 text-black rounded-full flex items-center justify-center font-bold text-sm">
                                {index + 1}
                              </div>
                              <p className="text-gray-300 leading-relaxed flex-1">
                                {item}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'results' && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5" />
                          Impact & Results
                        </h3>

                        {/* Impact Metrics */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                          {Object.entries(selectedStudyData.impactMetrics).map(([key, metrics]) => (
                            <div key={key} className="bg-gray-800/50 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-3">
                                {getIconForMetric(key)}
                                <h4 className="font-bold text-white capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </h4>
                              </div>
                              
                              {key === 'deploymentTime' && metrics && (metrics as any).before && (metrics as any).after && (metrics as any).improvement && (
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Before</span>
                                    <span className="text-red-400">{(metrics as any).before}</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">After</span>
                                    <span className="text-green-400">{(metrics as any).after}</span>
                                  </div>
                                  <div className="flex justify-between text-sm font-bold">
                                    <span className="text-gray-400">Improvement</span>
                                    <span className="text-green-400">-{(metrics as any).improvement}</span>
                                  </div>
                                </div>
                              )}

                              {key === 'cost' && metrics && (metrics as any).before && (metrics as any).after && (metrics as any).reduction && (
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Before</span>
                                    <span className="text-red-400">{(metrics as any).before}</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">After</span>
                                    <span className="text-green-400">{(metrics as any).after}</span>
                                  </div>
                                  <div className="flex justify-between text-sm font-bold">
                                    <span className="text-gray-400">Reduction</span>
                                    <span className="text-green-400">-{(metrics as any).reduction}</span>
                                  </div>
                                </div>
                              )}

                              {key === 'availability' && metrics && 'uptime' in metrics && (
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Uptime</span>
                                    <span className="text-green-400">{(metrics as any).uptime}</span>
                                  </div>
                                  <div className="flex justify-between text-sm font-bold">
                                    <span className="text-gray-400">Improvement</span>
                                    <span className="text-green-400">+{(metrics as any).improvement}</span>
                                  </div>
                                </div>
                              )}

                              {key === 'scalability' && metrics && 'capacity' in metrics && (
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Capacity</span>
                                    <span className="text-green-400">{(metrics as any).capacity}</span>
                                  </div>
                                  <div className="flex justify-between text-sm font-bold">
                                    <span className="text-gray-400">Improvement</span>
                                    <span className="text-green-400">+{(metrics as any).improvement}</span>
                                  </div>
                                </div>
                              )}

                              {key === 'performance' && metrics && 'improvement' in metrics && (
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm font-bold">
                                    <span className="text-gray-400">Performance Gain</span>
                                    <span className="text-green-400">+{(metrics as any).improvement}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Impact List */}
                        <div className="space-y-3">
                          {selectedStudyData.impact.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg"
                            >
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                              <p className="text-gray-300 leading-relaxed">{item}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-400/30 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Ready to Transform Your Platform?
          </h2>
          <p className="text-green-200 mb-6 max-w-2xl mx-auto">
            These results aren't unique—they're the outcome of systematic platform engineering. Let's discuss how we can design infrastructure that delivers similar measurable impact for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-300 transition-all duration-200 shadow-glow hover:shadow-card-hover"
            >
              <ArrowRight className="w-4 h-4" />
              Start Your Project
            </Link>
            
            <InteractiveButton variant="outline" icon={<FileText className="w-4 h-4" />}>
              Download Case Study PDF
            </InteractiveButton>
          </div>
        </motion.section>
      </div>
    </AnimatedBackground>
  );
};

export default EnhancedCaseStudies;