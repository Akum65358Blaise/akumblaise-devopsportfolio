import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TerminalHeader } from '../../components/TerminalHeader';
import { Grid3DBackground } from '../../components/Grid3D';
import {
  Target,
  Users,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Compass,
  Map,
  Lightbulb,
  MessageSquare,
  FileText,
  Award,
  TrendingUp,
} from 'lucide-react';

const TransitionIntoDevOps = () => {
  const whoIsThisFor = [
    {
      icon: Compass,
      title: 'Career Changers',
      description:
        'Software developers, sysadmins, IT professionals, or anyone looking to transition into DevOps and Platform Engineering.',
    },
    {
      icon: BookOpen,
      title: 'Self-Taught Engineers',
      description:
        'You\'ve been learning on your own but need structured guidance on what to focus on and how to position yourself.',
    },
    {
      icon: Target,
      title: 'Bootcamp Graduates',
      description:
        'You completed a bootcamp or course but aren\'t sure how to land your first DevOps role or build real-world experience.',
    },
    {
      icon: TrendingUp,
      title: 'Junior Engineers Looking to Level Up',
      description:
        'You\'re already working in tech but want to specialize in DevOps, cloud infrastructure, or platform engineering.',
    },
  ];

  const whatYouGet = [
    'Honest assessment of your current skill level and readiness',
    'Personalized learning roadmap tailored to your background',
    'Guidance on which tools and technologies to prioritize',
    'Portfolio and project-building strategies that stand out',
    'Resume and LinkedIn optimization for DevOps roles',
    'Interview preparation tips from real hiring experience',
    'Ongoing access to resources, templates, and checklists',
  ];

  const plans = [
    {
      name: 'General Inquiry Call',
      price: '60',
      period: 'Per 30 mins',
      description: 'A focused session to understand your background and provide actionable career advice.',
      features: [
        'Review of your current background and career goals',
        'Assessment of your readiness to transition into DevOps',
        'Guidance on suitable roles and learning paths',
        'Answers to key questions and next-step recommendations',
        'Written summary of action items',
      ],
      cta: 'Book Now',
      href: '/contact',
      highlighted: false,
    },
    {
      name: 'Career Transition Package',
      price: '150',
      period: 'One-time',
      description: 'A comprehensive package to fast-track your transition into DevOps with structured guidance.',
      features: [
        'Everything in the General Inquiry Call',
        'Personalized 90-day learning roadmap',
        'Resume review and optimization',
        'LinkedIn profile optimization for DevOps recruiters',
        'Portfolio project recommendations with templates',
        '2 follow-up coaching sessions (30 min each)',
        'Access to curated resources and study materials',
      ],
      cta: 'Get Started',
      href: '/contact',
      highlighted: true,
    },
  ];

  const testimonials = [
    {
      quote:
        'The roadmap Blaise gave me was exactly what I needed. Within 3 months, I went from system admin to landing a junior DevOps role.',
      role: 'Former System Administrator',
    },
    {
      quote:
        'I was overwhelmed by how much there was to learn. The coaching session helped me focus on what actually matters for getting hired.',
      role: 'Bootcamp Graduate',
    },
    {
      quote:
        'The resume and LinkedIn tips were game-changing. I started getting recruiter messages within weeks of making the changes.',
      role: 'Career Changer',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page relative overflow-hidden">
      <Grid3DBackground />

      <TerminalHeader
        command="cat transition-into-devops.txt"
        description="Personalized guidance for engineers transitioning into DevOps and Platform Engineering"
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
                <span className="text-neutral-200">Transition Into</span>{' '}
                <span className="bg-gradient-to-r from-primary-500 to-green-400 bg-clip-text text-transparent">
                  DevOps
                </span>
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Personalized guidance for engineers and professionals transitioning into DevOps careers.
                Whether you're switching from development, IT, or another field — I'll help you build a
                clear path, develop the right skills, and land your first (or next) DevOps role.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-bg-surface font-mono font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow hover:shadow-card-hover"
                >
                  <MessageSquare className="w-5 h-5" />
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Engineers collaborating"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-page/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
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
              Who Is This For?
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              If any of these describe you, this service was built for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whoIsThisFor.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-bg-elevated border border-neutral-700 rounded-xl p-8 hover:border-primary-500/50 transition-all duration-300 group flex gap-6"
                >
                  <div className="w-14 h-14 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-bold text-neutral-200 mb-2">{item.title}</h3>
                    <p className="text-neutral-400 leading-relaxed text-sm">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-6">
                What You'll Get
              </h2>
              <p className="text-neutral-300 mb-8 leading-relaxed">
                This isn't generic advice you can find on YouTube. It's personalized coaching based on 6+
                years of real-world DevOps experience and mentoring 1,500+ engineers.
              </p>
              <ul className="space-y-4">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-200">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-bg-elevated border border-neutral-700 rounded-2xl p-8"
            >
              <h3 className="font-mono text-xl font-bold text-primary-500 mb-6 text-center">
                Your Transition Roadmap
              </h3>
              <div className="space-y-6">
                {[
                  { phase: 'Week 1–2', title: 'Foundation Assessment', desc: 'Evaluate skills, define goals, create personalized plan' },
                  { phase: 'Week 3–6', title: 'Core Skills Development', desc: 'Linux, networking, Git, scripting, and cloud fundamentals' },
                  { phase: 'Week 7–10', title: 'Hands-On Projects', desc: 'Build CI/CD pipelines, containerize apps, deploy to cloud' },
                  { phase: 'Week 11–12', title: 'Job-Ready Prep', desc: 'Portfolio polish, resume optimization, interview practice' },
                ].map((phase, index) => (
                  <div key={phase.phase} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary-500/20 border-2 border-primary-500 flex items-center justify-center font-mono text-sm text-primary-500 font-bold">
                        {index + 1}
                      </div>
                      {index < 3 && <div className="w-0.5 h-full bg-gradient-to-b from-primary-500/50 to-transparent mt-2" />}
                    </div>
                    <div className="pb-6">
                      <div className="font-mono text-xs text-accent-500 mb-1">{phase.phase}</div>
                      <h4 className="font-mono text-neutral-200 font-semibold mb-1">{phase.title}</h4>
                      <p className="text-neutral-400 text-sm">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-bg-surface/30 relative z-10">
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
              Invest in your career transition with personalized, expert guidance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                    Best Value
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

      {/* Testimonials */}
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
              Success Stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-bg-elevated border border-neutral-700 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-4 h-4 text-yellow-400">★</div>
                  ))}
                </div>
                <p className="text-neutral-300 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm text-neutral-400 font-mono">— {testimonial.role}</p>
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
              Ready to Start Your DevOps Journey?
            </h2>
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              Don't navigate the transition alone. Let's build a roadmap that gets you from where you are
              to where you want to be.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary-500 text-bg-surface font-mono font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow hover:shadow-card-hover text-lg"
            >
              <Users className="w-5 h-5" />
              Book Your Call
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TransitionIntoDevOps;
