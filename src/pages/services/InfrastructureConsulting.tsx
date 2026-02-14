import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TerminalHeader } from '../../components/TerminalHeader';
import { Grid3DBackground } from '../../components/Grid3D';
import {
  Cloud,
  Server,
  Shield,
  TrendingDown,
  CheckCircle,
  ArrowRight,
  Zap,
  Lock,
  BarChart3,
  GitBranch,
  Container,
  Globe,
} from 'lucide-react';

const InfrastructureConsulting = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Architecture Design',
      description:
        'Custom multi-cloud architecture tailored to your workloads — optimized for performance, cost, and reliability across AWS, GCP, and DigitalOcean.',
    },
    {
      icon: Container,
      title: 'Containerization & Orchestration',
      description:
        'Migrate monolithic applications to containerized microservices with Docker and Kubernetes. Achieve scalable, portable, and resilient deployments.',
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipeline Engineering',
      description:
        'End-to-end automated pipelines using GitHub Actions, GitLab CI, or Jenkins — from code commit to production in minutes, not hours.',
    },
    {
      icon: Shield,
      title: 'Infrastructure Security & Compliance',
      description:
        'Harden your cloud environments with zero-trust networking, secret management, IAM best practices, and automated compliance scanning.',
    },
    {
      icon: BarChart3,
      title: 'Observability & Monitoring',
      description:
        'Full-stack observability with Prometheus, Grafana, Sentry, and ELK Stack. Know exactly what\'s happening in your systems before your users do.',
    },
    {
      icon: TrendingDown,
      title: 'Cloud Cost Optimization',
      description:
        'Audit your cloud spend, right-size resources, implement auto-scaling, and eliminate waste. Average clients save 30–40% on monthly cloud bills.',
    },
  ];

  const plans = [
    {
      name: 'Discovery Call',
      price: '75',
      period: 'Per 30 mins',
      description: 'An initial consultation to assess your infrastructure needs and identify quick wins.',
      features: [
        'Assessment of current infrastructure state',
        'Identification of bottlenecks and risks',
        'High-level recommendations',
        'Answers to your key infrastructure questions',
        'Written summary of next steps',
      ],
      cta: 'Book a Call',
      href: '/contact',
      highlighted: false,
    },
    {
      name: 'Architecture Review',
      price: '500',
      period: 'One-time',
      description: 'A comprehensive review of your existing infrastructure with a detailed improvement roadmap.',
      features: [
        'Deep-dive into cloud architecture',
        'Security and compliance audit',
        'Cost optimization analysis',
        'Performance bottleneck identification',
        'CI/CD pipeline assessment',
        'Detailed written report with priorities',
        '60-min walkthrough session',
      ],
      cta: 'Get Started',
      href: '/contact',
      highlighted: true,
    },
    {
      name: 'Full Infrastructure Engagement',
      price: '2,500',
      period: 'Starting from',
      description: 'End-to-end infrastructure design, implementation, and migration support for your team.',
      features: [
        'Everything in Architecture Review',
        'Hands-on infrastructure implementation',
        'Multi-cloud environment setup',
        'CI/CD pipeline construction',
        'Monitoring & alerting configuration',
        'Team training & documentation',
        'Ongoing support (30 days post-delivery)',
      ],
      cta: 'Get Started',
      href: '/contact',
      highlighted: false,
    },
  ];

  const results = [
    { metric: '35%', label: 'Average Cloud Cost Reduction' },
    { metric: '70%', label: 'Faster Deployment Speed' },
    { metric: '99.2%', label: 'Platform Reliability' },
    { metric: '80%', label: 'Reduced Incident Resolution Time' },
  ];

  return (
    <div className="min-h-screen bg-bg-page relative overflow-hidden">
      <Grid3DBackground />

      <TerminalHeader
        command="cat infrastructure-services.txt"
        description="Scalable cloud infrastructure designed for performance, reliability, and cost efficiency"
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
                <span className="text-neutral-200">Infrastructure &</span>{' '}
                <span className="bg-gradient-to-r from-primary-500 to-green-400 bg-clip-text text-transparent">
                  Cloud Services
                </span>
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Your infrastructure should accelerate your team, not slow it down. I design and build cloud
                systems that scale with your business — reliable, secure, and cost-efficient from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-bg-surface font-mono font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow hover:shadow-card-hover"
                >
                  <Zap className="w-5 h-5" />
                  Book a Discovery Call
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
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Cloud Infrastructure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-page/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-bg-surface/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {results.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                  {item.metric}
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
              What I Deliver
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              End-to-end infrastructure services designed to make your platform fast, reliable, and affordable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-bg-elevated border border-neutral-700 rounded-xl p-8 hover:border-primary-500/50 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-primary-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-primary-500" />
                  </div>
                  <h3 className="font-mono text-lg font-bold text-neutral-200 mb-3">{service.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              How It Works
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              A structured approach to transforming your infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We discuss your current infrastructure, challenges, and goals.' },
              { step: '02', title: 'Assessment', description: 'I audit your existing systems and identify critical improvements.' },
              { step: '03', title: 'Implementation', description: 'Hands-on execution — building, migrating, and optimizing.' },
              { step: '04', title: 'Handoff & Support', description: 'Documentation, training, and ongoing support for your team.' },
            ].map((item, index) => (
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
              Transparent pricing — choose the engagement level that fits your needs
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

      {/* CTA */}
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
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              Let's discuss how I can help your team ship faster, reduce costs, and build systems that scale.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary-500 text-bg-surface font-mono font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow hover:shadow-card-hover text-lg"
            >
              <Globe className="w-5 h-5" />
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InfrastructureConsulting;
