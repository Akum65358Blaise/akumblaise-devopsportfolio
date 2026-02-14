export const HERO_CONTENT = "I engineer platforms that don't break. Systems that teams trust, understand, and maintain. Infrastructure that reduces deployment time by 94%, cuts cloud costs by 35%, and improves reliability to 99.2%. I don't just implement tools—I design outcomes that compound.";

export const ABOUT_TEXT = "I'm a Senior DevOps & Platform Engineer with 6+ years designing cloud systems that help teams ship faster, cost less, and stay reliable—without burning out engineers. I don't just implement tools. I design systems that teams can trust, understand, and maintain. Systems that don't wake people up at night. At this stage of my career, I spend less time 'setting things up' and more time designing infrastructure that won't break. That means thinking about deployment strategies, failure scenarios, observability, and long-term maintainability from day one. Beyond the day job, I mentor 1500+ engineers through my newsletter where I share real DevOps and software lessons—the kind you learn from breaking production, migrating infrastructure, and debugging at 3 AM. I write about what courses don't teach: debugging Kubernetes errors, choosing monolith over microservices, why fundamentals matter more than chasing trends, and how soft skills make or break your DevOps career. Most teams don't need more tools. They need better systems, clearer patterns, and platforms that get out of the way so engineers can focus on building products. Whether it's deployment speed, cloud costs, uptime, or developer experience—I engineer outcomes that compound.";

export const SKILLS = [
  // Cloud
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud', level: 90 },
  { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', category: 'cloud', level: 90 },
  { name: 'OCI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', category: 'cloud', level: 90 },

  // Containers
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'containers', level: 90 },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'containers', level: 90 },

  // Infrastructure
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'infrastructure', level: 90 },
  { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original-wordmark.svg', category: 'infrastructure', level: 90 },
  { name: 'AWS CloudFormation', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscloudformation.svg', category: 'infrastructure', level: 90 },

  // DevOps / Automation
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'devops', level: 90 },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg', category: 'devops', level: 90 },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops', level: 90 },
  { name: 'GitLab CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', category: 'devops', level: 90 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops', level: 90 },
  { name: 'AWS CodePipeline', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscodepipeline.svg', category: 'devops', level: 90 },
  { name: 'AWS CodeBuild', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscodebuild.svg', category: 'devops', level: 90 },
  { name: 'Bash Scripting', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'devops', level: 90 },
  { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', category: 'devops', level: 90 },
  { name: 'Sentry', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/sentry.svg', category: 'devops', level: 90 },

  // Development
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'development', level: 90 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg', category: 'development', level: 90 },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', category: 'development', level: 90 },
  { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg', category: 'development', level: 90 },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'development', level: 90 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg', category: 'development', level: 90 },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'development', level: 90 },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg', category: 'development', level: 90 },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg', category: 'development', level: 90 },

  // Databases
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database', level: 90 },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database', level: 90 },
  { name: 'Oracle SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', category: 'database', level: 90 },
];

export const PROJECTS = [
  {
    title: 'Amazon Clone — EKS & ArgoCD Deployment',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Deployed a production-grade Amazon Clone on AWS EKS with full GitOps automation via ArgoCD. Integrated CI/CD pipelines using GitHub Actions, containerized microservices with Docker, and managed configuration using Kustomize for seamless auto-sync deployments.',
    technologies: ['AWS EKS', 'Kubernetes', 'ArgoCD', 'GitHub Actions', 'Kustomize', 'Docker', 'Terraform'],
    category: 'devops',
    githubLink: 'https://github.com/Akum65358Blaise',
    websiteLink: '',
  },
  {
    title: 'React & Node.js Deployment on AWS ECS',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Deployed a React application with Node.js backend to Amazon ECS. Dockerized the full-stack application, pushed the image to Amazon ECR, and configured ECS for scalable container orchestration with automated deployments.',
    technologies: ['React', 'Node.js', 'Docker', 'AWS ECS', 'ECR', 'CI/CD'],
    category: 'devops',
    githubLink: 'https://github.com/Akum65358Blaise/deploy-react-nodejs-app-on-ecs',
    websiteLink: '',
  },
  {
    title: 'Mentoraura — Mentorship Platform',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'A comprehensive mentorship platform connecting mentees with experienced mentors across various industries. Built to power 100+ active mentorship relationships with features for scheduling, progress tracking, and knowledge sharing. Designed for scalability and reliability.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'],
    category: 'fullstack',
    githubLink: '',
    websiteLink: 'https://mentoraura.com',
  },
  {
    title: 'Infrastructure CI/CD Pipeline with Terraform & GitHub Actions',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Automated infrastructure provisioning using Terraform with GitHub Actions CI/CD pipeline. Enables DevOps teams to provision and manage cloud infrastructure through Git workflows, ensuring infrastructure changes are version-controlled, tested, and deployed automatically.',
    technologies: ['Terraform', 'GitHub Actions', 'AWS', 'IaC', 'CI/CD'],
    category: 'devops',
    githubLink: 'https://github.com/Akum65358Blaise/infra-cicd-pipeline-with-terraform-githubactions',
    websiteLink: '',
  },
  {
    title: 'Zocamhost — Cloud Hosting Platform',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'A robust cloud hosting platform powering 150+ businesses with reliable infrastructure, automated deployments, and comprehensive management tools. Built with enterprise-grade reliability and designed to scale seamlessly as businesses grow.',
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'Terraform'],
    category: 'fullstack',
    githubLink: '',
    websiteLink: 'https://zocamhost.us',
  },
  {
    title: 'Linksched — LinkedIn Scheduling Tool',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'A powerful LinkedIn scheduling platform designed for creators and LinkedIn users to streamline their content strategy. Automates post scheduling, optimizes posting times, and provides analytics to maximize engagement and reach on the platform.',
    technologies: ['React', 'Node.js', 'LinkedIn API', 'PostgreSQL', 'Redis', 'AWS'],
    category: 'fullstack',
    githubLink: '',
    websiteLink: 'https://linksched.xyz',
  },
  {
    title: 'Excel in Tech — Digital Training Platform',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'A comprehensive e-learning platform offering digital technology training, courses, resources, and career roadmaps. Features course management, payment processing, progress tracking, and a marketplace for tech education resources.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Docker'],
    category: 'fullstack',
    githubLink: '',
    websiteLink: 'https://excelintech.com',
  },
];

export const CONTACT = {
  address: 'Bondoma Gate, Buea Cameroon',
  phoneNo: '(+237) 653583000',
  email: 'akumacha@gmail.com',
  newsletter: 'https://theengineeringladder.com',
  calcom: 'https://cal.com/akum-acha-3yl6cz',
  social: {
    github: 'https://github.com/Akum65358Blaise',
    linkedin: 'https://www.linkedin.com/in/akum-blaise-acha/',
    twitter: 'https://x.com/akumblaisezo',
  }
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  development: SKILLS.filter(skill => skill.category === 'development'),
  database: SKILLS.filter(skill => skill.category === 'database'),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === 'devops'),
  fullstack: PROJECTS.filter(project => project.category === 'fullstack'),
};
