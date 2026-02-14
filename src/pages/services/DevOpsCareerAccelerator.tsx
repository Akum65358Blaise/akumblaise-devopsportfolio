import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TerminalHeader } from '../../components/TerminalHeader';
import { Grid3DBackground } from '../../components/Grid3D';
import {
  Rocket,
  Target,
  CheckCircle,
  ArrowRight,
  Briefcase,
  FileText,
  Users,
  Code2,
  Linkedin,
  Search,
  Award,
  Zap,
  BookOpen,
  Terminal,
} from 'lucide-react';

const DevOpsCareerAccelerator = () => {
  const strategies = [
    {
      icon: Search,
      title: 'Job Search Strategy',
      description:
        'Guidance on the most effective job boards, platforms, and networking approaches specifically for DevOps, SRE, and Platform Engineering roles.',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn Profile Optimization',
      description:
        'Restructure your LinkedIn headline, summary, experience, and skills to attract recruiters looking for DevOps and cloud talent.',
    },
    {
      icon: FileText,
      title: 'Resume Engineering',
      description:
        'Craft a results-driven resume aligned with DevOps and platform engineering roles — highlighting impact metrics, not just responsibilities.',
    },
    {
      icon: Terminal,
      title: 'Technical Interview Preparation',
      description:
        'Practice real DevOps interview scenarios — system design, troubleshooting, CI/CD architecture, and behavioral questions.',
    },
    {
      icon: Code2,
      title: 'Portfolio & Project Building',
      description:
        'Build impressive, recruiter-ready projects that showcase real-world DevOps skills — from CI/CD pipelines to Kubernetes deployments.',
    },
    {
      icon: Award,
      title: 'Personal Branding',
      description:
        'Develop a strong technical brand through content creation, open-source contributions, and community engagement that makes you stand out.',
    },
  ];

  const plans = [
    {
      name: 'Strategy Session',
      price: '60',
      period: 'Per 30 mins',
      description: 'A focused career coaching session to review your profile and create actionable next steps.',
      features: [
        'Review of your current background and career goals',
        'Assessment of your DevOps readiness level',
        'Quick-win recommendations for immediate improvement',
        'Guidance on effective job search websites and platforms',
        'Answers to key career questions',
      ],
      cta: 'Book Now',
      href: '/contact',
      highlighted: false,
    },
    {
      name: 'Job-Ready Strategy Package',
      price: '120',
      period: 'One-time',
      description: 'A comprehensive package to make you fully prepared and competitive for DevOps roles.',
      features: [
        'Everything in the Strategy Session',
        'Optimization of your LinkedIn profile for recruiter visibility',
        'Resume optimization aligned with DevOps and tech roles',
        'Practical strategies to improve interview and application success',
        'Portfolio project recommendations with implementation guides',
        'Personal branding strategy',
        '2 follow-up sessions for accountability',
      ],
      cta: 'Get Started',
      href: '/contact',
      highlighted: true,
    },
    {
      name: 'DevOps Course with Labs',
      price: '300',
      period: 'One-time',
      description: 'Full access to a structured, hands-on DevOps training course with real-world labs and projects.',
      features: [
        'Full access to a structured DevOps training course',
        'Hands-on labs covering real-world tools and workflows',
        'Practical projects designed to build job-ready skills',
        'Guided learning to support a successful career transition',
        'CI/CD, Docker, Kubernetes, Terraform, and monitoring labs',
        'Certificate of completion',
        'Lifetime access to course materials and updates',
      ],
      cta: 'Get Started',
      href: '/contact',
      highlighted: false,
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Profile Assessment',
      description: 'We review your current skills, experience, and career goals to identify gaps and opportunities.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'I create a personalized roadmap covering skills, portfolio, resume, and job search tactics.',
    },
    {
      step: '03',
      title: 'Skill Building & Projects',
      description: 'Hands-on guidance to build real projects and develop the skills recruiters are looking for.',
    },
    {
      step: '04',
      title: 'Interview & Launch',
      description: 'Interview preparation, application strategy, and support through the job search process.',
    },
  ];

  const stats = [
    { value: '1,500+', label: 'Engineers Mentored' },
    { value: '6+', label: 'Years Experience' },
    { value: '85%', label: 'Mentees Landed Roles' },
    { value: '3 Months', label: 'Average Time to Role' },
  ];

  return (
    <div className="min-h-screen bg-bg-page relative overflow-hidden">
      <Grid3DBackground />

      <TerminalHeader
        command="cat devops-career-accelerator.txt"
        description="Practical strategies, hands-on training, and career coaching to become job-ready faster"
      />

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-neutral-200">DevOps Job-Ready</span>{' '}
                <span className="bg-gradient-to-r from-primary-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Strategies
                </span>
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Practical DevOps career strategies focused on essential tools, real-world workflows,
                portfolio building, interview preparation, and industry-aligned skills to become job-ready faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-bg-surface font-mono font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow hover:shadow-card-hover"
                >
                  <Rocket className="w-5 h-5" />
                  Book a Call
                </Link>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-neutral-600 text-neutral-200 hover:border-primary-500 hover:text-primary-500 font-mono font-semibold rounded-lg transition-all duration-200"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-700 shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="DevOps Career"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-page/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-bg-surface/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-neutral-400">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What I Offer Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              What's Included
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Everything you need to accelerate your DevOps career — from skills to strategy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => {
              const IconComponent = strategy.icon;
              return (
                <motion.div
                  key={strategy.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-bg-elevated border border-neutral-700 rounded-xl p-8 hover:border-primary-500/50 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-primary-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-primary-500" />
                  </div>
                  <h3 className="font-mono text-lg font-bold text-neutral-200 mb-3">{strategy.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">{strategy.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-bg-surface/30 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              The Process
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              A proven framework to get you from where you are to where you want to be
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-mono text-5xl font-bold text-primary-500/20 mb-4">{item.step}</div>
                <h3 className="font-mono text-lg font-bold text-neutral-200 mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Pricing
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Choose the plan that matches your career stage and goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-bg-elevated border-2 border-primary-500 shadow-glow'
                    : 'bg-bg-elevated border border-neutral-700'
                } hover:border-primary-500/50 transition-all duration-300`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 text-bg-surface font-mono text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="font-mono text-xl font-bold text-neutral-200 mb-4">{plan.name}</h3>
                  <div className="flex items-start justify-center gap-1">
                    <span className="text-neutral-400 text-lg mt-2">$</span>
                    <span className="font-mono text-6xl font-bold text-primary-500">{plan.price}</span>
                  </div>
                  <div className="text-neutral-400 text-sm mt-2">{plan.period}</div>
                </div>

                <div className="border-t border-neutral-700 pt-6 mb-8">
                  <p className="text-neutral-300 text-sm mb-6">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-neutral-300">
                        <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={plan.href}
                  className={`block w-full py-3 px-6 rounded-lg font-mono font-semibold text-center transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-primary-500 text-bg-surface hover:bg-primary-700 shadow-glow hover:shadow-card-hover'
                      : 'bg-bg-surface border border-neutral-600 text-neutral-200 hover:border-primary-500 hover:text-primary-500'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentoring CTA */}
      <section className="py-24 relative z-10 bg-gradient-to-b from-transparent to-bg-elevated/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-elevated border border-primary-500/20 p-12 rounded-2xl shadow-glow"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-6">
              Your DevOps Career Starts Here
            </h2>
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              Stop guessing what to learn. Stop applying blindly. Get a proven strategy built on
              real-world experience mentoring 1,500+ engineers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary-500 text-bg-surface font-mono font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow hover:shadow-card-hover text-lg"
            >
              <Briefcase className="w-5 h-5" />
              Start Your Career Acceleration
            </Link>
              <a
                href="https://theengineeringladder.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-neutral-600 text-neutral-200 hover:border-primary-500 hover:text-primary-500 font-mono font-semibold rounded-lg transition-all duration-200"
              >
                <BookOpen className="w-5 h-5" />
                Read Free Newsletter
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsCareerAccelerator;
