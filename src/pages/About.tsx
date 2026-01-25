import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import { Calendar, MapPin, Code, Zap, ExternalLink, Download, Briefcase, GraduationCap } from 'lucide-react';

export const About = () => {
  const timeline = [
    {
      year: 'Feb 2024 - Present',
      title: 'DevOps Platform Engineer',
      company: 'Gozem Cameroon',
      description:
        'Leading infrastructure automation across multi-cloud environments for Africa\'s largest super-app serving 5M+ users. Containerized 25+ microservices, improved deployment speed by 70%, reduced MTTR by 80%, and cut operational costs by 40%.',
      icon: Code,
    },
    {
      year: 'Feb 2019 - Present',
      title: 'Lead Cloud Infrastructure Engineer',
      company: 'Zocamhost',
      description:
        'Founded and built Zocamhost, a cloud hosting platform powering 150+ businesses with reliable infrastructure, automated deployments, and comprehensive management tools. Designed scalable cloud infrastructure, implemented one-click deployment systems, automated SSL certificate management, and built intuitive control panels. Achieved 99.2% uptime, reduced hosting costs by 40% compared to traditional providers, and enabled businesses to deploy applications in minutes instead of hours.',
      icon: Code,
    },
    {
      year: 'Jan 2023 - Dec 2023',
      title: 'DevOps Engineer',
      company: 'WaziEats PLC',
      description: 'Designed and managed containerized environments on GCP, built automated CI/CD pipelines with GitLab, implemented observability with Prometheus and Grafana, and strengthened platform security for food-delivery operations.',
      icon: Briefcase,
    },
    {
      year: 'Sept 2021 - Jan 2023',
      title: 'DevOps & Platform Engineer',
      company: 'Hero Technologies',
      description: 'Built containerized platforms with Docker and Kubernetes, led multi-cloud infrastructure projects across AWS, Azure, and DigitalOcean, developed automated CI/CD pipelines, and reduced incident resolution time by 40%.',
      icon: Briefcase,
    },
    {
      year: 'Oct 2021 - Aug 2023',
      title: 'Master of Engineering',
      company: 'University of Buea',
      description: 'Telecommunications and Network Engineering. Relevant courses: Cloud Computing, Data Visualization, Natural Language Processing, Machine Learning Techniques.',
      icon: GraduationCap,
    },
    {
      year: 'Nov 2017 - Aug 2021',
      title: 'Bachelor in Computer Engineering',
      company: 'University of Buea',
      description: 'Software Engineering Principles, Distributed Systems. Foundation in computer engineering principles and distributed systems architecture.',
      icon: GraduationCap,
    },
  ];

  const philosophyPoints = [
    {
      icon: Zap,
      title: 'Systems Over Scripts',
      description: 'I think in systems, not just scripts. Design infrastructure that won\'t break, not just tools that work today.',
    },
    {
      icon: Code,
      title: 'Trust & Maintainability',
      description: 'Build systems that teams can trust, understand, and maintain. Systems that don\'t wake people up at night.',
    },
    {
      icon: MapPin,
      title: 'Outcomes That Compound',
      description: 'Whether it\'s deployment speed, cloud costs, uptime, or developer experience—I engineer outcomes that compound.',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="cat about.txt"
        description="Displaying professional background and technical philosophy"
      />

      {/* Bio Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="bg-bg-surface border border-neutral-700 rounded-xl p-8 shadow-card">
                <div className="font-mono text-lg mb-6">
                  <span className="text-accent-500">$</span>
                  <span className="text-primary-500"> cat</span>
                  <span className="text-neutral-400"> bio.txt</span>
                </div>
                <div className="space-y-4 text-neutral-200 leading-relaxed">
                  <Typewriter
                    text="I am Akum Blaise Acha."
                    delay={30}
                    className="text-primary-500 font-semibold block mb-4"
                  />
                  <p>
                    Most companies don't fail because of bad engineers. They fail because engineers are forced to build on broken infrastructure.
                  </p>
                  <p>
                    Slow deployments. Unreliable systems. Expensive cloud bills. Tool fragmentation.
                  </p>
                  <p>
                    These aren't engineering problems—they're platform problems. And I fix them.
                  </p>
                  <p>
                    I'm a Senior DevOps & Platform Engineer with 6+ years designing cloud systems that help teams ship faster, cost less, and stay reliable—without burning out engineers.
                  </p>
                  <p>
                    I don't just implement tools. I design systems that teams can trust, understand, and maintain. Systems that don't wake people up at night.
                  </p>
                  <p>
                    At this stage of my career, I spend less time "setting things up" and more time designing infrastructure that won't break. That means thinking about deployment strategies, failure scenarios, observability, and long-term maintainability from day one.
                  </p>
                  <p className="text-primary-500 font-medium">
                    Most teams don't need more tools. They need better systems, clearer patterns, and platforms that get out of the way so engineers can focus on building products.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Experience</span>
                    <span className="text-primary-500 font-mono">6+ years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Cloud Platforms</span>
                    <span className="text-primary-500 font-mono">AWS, GCP</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Reliability</span>
                    <span className="text-primary-500 font-mono">99.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Cost Reduction</span>
                    <span className="text-primary-500 font-mono">35%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Deployment Time</span>
                    <span className="text-primary-500 font-mono">4h → 15min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">MTTR Reduction</span>
                    <span className="text-primary-500 font-mono">80%</span>
                  </div>
                </div>
              </div>

              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Platform Engineering', 'Infrastructure Design', 'CI/CD Automation', 'Cost Optimization', 'Observability', 'Zero-Downtime Deployments'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-neutral-800 text-neutral-200 text-sm rounded-md border border-neutral-700 hover:border-primary-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-bg-elevated border border-primary-500/30 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300"
              >
                <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
                  Download Resume
                </h3>
                <p className="text-neutral-400 text-sm mb-4">
                  Get a detailed overview of my experience, skills, and achievements.
                </p>
                <a
                  href="/Akum_Blaise_Acha_CV.pdf"
                  download="Akum_Blaise_Acha_CV.pdf"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-500 text-bg-surface font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow hover:shadow-card-hover group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download Resume (PDF)
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              What That Looks Like in Numbers
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Measurable outcomes from designing better platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🚀', label: 'Deployment Time', value: '4h → 15min', description: 'Reduced through automated CI/CD' },
              { icon: '💰', label: 'Cloud Costs', value: '35%', description: 'Cut using intelligent scaling' },
              { icon: '✅', label: 'Reliability', value: '85% → 99.2%', description: 'Improved with zero-downtime deployments' },
              { icon: '📉', label: 'MTTR Reduction', value: '80%', description: 'After implementing Grafana + Sentry' },
              { icon: '🏗️', label: 'Zocamhost', value: '150+', description: 'Businesses powered by the platform' },
              { icon: '🏗️', label: 'Mentoraura', value: '100+', description: 'Mentees on the mentorship platform' },
              { icon: '🔄', label: 'Microservices', value: '25+', description: 'Containerized and optimized' },
              { icon: '📦', label: 'CI/CD Pipelines', value: 'Multi-cloud', description: 'Designed with Terraform & GitHub Actions' },
            ].map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-bg-elevated border border-neutral-700 rounded-xl p-6 text-center hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <div className="font-mono text-2xl font-bold text-primary-500 mb-2">
                  {achievement.value}
                </div>
                <div className="font-semibold text-neutral-200 mb-2">
                  {achievement.label}
                </div>
                <div className="text-sm text-neutral-400">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Career Timeline
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              My journey in platform engineering and DevOps
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-700 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center border-4 border-bg-page shadow-glow z-10">
                      <IconComponent size={16} className="text-bg-surface" />
                    </div>

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-bg-elevated border border-neutral-700 rounded-lg p-6 hover:border-primary-500/50 transition-colors shadow-card">
                        <div className="font-mono text-accent-500 text-sm mb-2">{item.year}</div>
                        <h3 className="font-semibold text-xl text-neutral-200 mb-1">{item.title}</h3>
                        <div className="text-primary-500 font-medium mb-3">{item.company}</div>
                        <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Tech Philosophy
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Core principles that guide my approach to platform engineering
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophyPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-bg-elevated border border-neutral-700 rounded-xl p-8 text-center hover:border-primary-500/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors">
                    <IconComponent size={32} className="text-primary-500" />
                  </div>
                  <h3 className="font-semibold text-xl text-neutral-200 mb-4">{point.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter & Mentoring Section */}
      <section className="py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Beyond the Day Job
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Sharing knowledge and mentoring the next generation of engineers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-elevated border border-primary-500/20 rounded-2xl p-12 shadow-glow max-w-4xl mx-auto"
          >
            <div className="space-y-6 text-neutral-200 leading-relaxed">
              <p>
                I mentor <span className="text-primary-500 font-semibold">1500+ engineers</span> through my newsletter where I share real DevOps and software lessons—the kind you learn from breaking production, migrating infrastructure, and debugging at 3 AM.
              </p>
              <p>
                I write about what courses don't teach: debugging Kubernetes errors, choosing monolith over microservices, why fundamentals matter more than chasing trends, and how soft skills make or break your DevOps career.
              </p>
              <p>
                I enjoy mentoring engineers, reviewing infrastructure designs, and helping developers bridge the gap between code and production.
              </p>
              <div className="pt-6 border-t border-neutral-700">
                <a
                  href="https://theengineeringladder.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-500 hover:text-primary-400 font-mono font-semibold group"
                >
                  <span className="mr-2">Read the newsletter →</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
