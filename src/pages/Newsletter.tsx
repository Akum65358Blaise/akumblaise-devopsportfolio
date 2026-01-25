import { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import { 
  Mail, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  BookOpen, 
  TrendingUp,
  Target,
  Zap,
  ExternalLink,
  Calendar,
  Clock,
  Star
} from 'lucide-react';
import { Grid3DBackground } from '../components/Grid3D';

export const Newsletter = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterMessage, setNewsletterMessage] = useState('');

  const featuredArticles = [
    {
      title: "The 5 Career Mistakes I See Junior DevOps Engineers Make",
      excerpt: "Real patterns from our community — and how to avoid them early. Most people don't struggle because they're not smart. They struggle because they repeat the same mistakes — quietly, consistently.",
      link: "https://www.theengineeringladder.com/p/the-5-career-mistakes-i-see-junior-devops-engineers-make",
      date: "Jan 18, 2026",
      readTime: "5 min read",
      keyPoints: [
        "Chasing tools instead of fundamentals",
        "Building labs, not real systems",
        "Not documenting their work",
        "Waiting to feel 'ready'",
        "Avoiding communication"
      ]
    },
    {
      title: "The One Skill That Instantly Makes You a Better DevOps Engineer",
      excerpt: "Why clear thinking matters more than knowing more tools. DevOps isn't about knowing Kubernetes, Docker, Terraform, or CI/CD. Those are just tools. The real skill is clarity of thought.",
      link: "https://www.theengineeringladder.com/p/the-one-skill-that-instantly-makes-you-a-better-devops-engineer",
      date: "Dec 14, 2025",
      readTime: "6 min read",
      keyPoints: [
        "What changed? (Start here — it narrows your search by 80%)",
        "What evidence do I have? (Logs, metrics, alerts)",
        "What's the smallest next step? (Methodical troubleshooting)"
      ]
    },
    {
      title: "How to Ask Smart Questions in DevOps Interviews",
      excerpt: "Curiosity makes you stand out — if you know how to use it. The questions you ask reveal how you think, what you value, and whether you're the right fit for the team.",
      link: "https://www.theengineeringladder.com/p/how-to-ask-smart-questions-in-devops-interviews",
      date: "Nov 2, 2025",
      readTime: "7 min read",
      keyPoints: [
        "Ask about systems, not just tools",
        "Show genuine curiosity about their challenges",
        "Demonstrate strategic thinking through questions"
      ]
    },
    {
      title: "How to Survive (and Succeed) in Your First 90 Days as a DevOps Engineer",
      excerpt: "The first 90 days set the tone for your entire role. Here's how to navigate them with confidence, build trust quickly, and establish yourself as a valuable team member.",
      link: "https://www.theengineeringladder.com/p/how-to-survive-and-succeed-in-your-first-90-days-as-a-devops-engineer",
      date: "Oct 2025",
      readTime: "8 min read",
      keyPoints: [
        "Understand the infrastructure before changing it",
        "Build relationships with key stakeholders",
        "Document everything you learn",
        "Start with small wins"
      ]
    }
  ];

  const valuePropositions = [
    {
      icon: CheckCircle,
      text: "One practical lesson every Sunday"
    },
    {
      icon: CheckCircle,
      text: "Real DevOps lessons from breaking production"
    },
    {
      icon: CheckCircle,
      text: "What courses don't teach you"
    },
    {
      icon: CheckCircle,
      text: "Career growth strategies that actually work"
    }
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('error');
      setNewsletterMessage('Please enter a valid email address');
      return;
    }

    setNewsletterStatus('loading');
    setNewsletterMessage('');

    try {
      const apiKey = import.meta.env.VITE_BEHIIV_API_KEY;
      const publicationId = import.meta.env.VITE_BEHIIV_PUBLICATION_ID;
      
      if (apiKey && publicationId) {
        const response = await fetch(`https://api.behiiv.com/v1/publications/${publicationId}/subscriptions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            email: newsletterEmail,
            source: 'portfolio-newsletter-page',
          }),
        });

        if (response.ok) {
          setNewsletterStatus('success');
          setNewsletterMessage('Successfully subscribed! Check your email to confirm.');
          setNewsletterEmail('');
          return;
        }
      }

      // Fallback: Redirect to Behiiv subscription page
      const subscriptionUrl = `https://theengineeringladder.com/subscribe?email=${encodeURIComponent(newsletterEmail)}`;
      window.open(subscriptionUrl, '_blank');
      
      setNewsletterStatus('success');
      setNewsletterMessage('Opening subscription page... Please complete your subscription there.');
      setNewsletterEmail('');
      
    } catch (error) {
      window.open(`https://theengineeringladder.com/subscribe?email=${encodeURIComponent(newsletterEmail)}`, '_blank');
      setNewsletterStatus('success');
      setNewsletterMessage('Opening subscription page...');
      setNewsletterEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-bg-page relative overflow-hidden">
      {/* 3D Grid Background */}
      <Grid3DBackground />
      
      {/* Terminal Header */}
      <TerminalHeader
        command="cat newsletter.txt"
        description="Accessing The Engineering Ladder — weekly DevOps insights and career growth"
      />

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="font-mono text-sm text-accent-500 mb-2">
                  <span>$</span>
                  <span className="text-primary-500 ml-2">echo "Join The Engineering Ladder"</span>
                </div>
                <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight">
                  Improve Your{' '}
                  <span className="bg-gradient-to-r from-primary-500 to-green-400 bg-clip-text text-transparent">
                    DevOps & Platform Engineering
                  </span>{' '}
                  Skills
                </h1>
                <p className="text-xl md:text-2xl text-neutral-200 font-semibold">
                  JOIN <span className="text-primary-500">1,500+</span> ENGINEERS BECOMING GREAT PLATFORM ENGINEERS EVERY WEEK
                </p>
              </div>

              {/* Subscription Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-bg-surface border border-primary-500/30 rounded-xl p-6 shadow-glow"
              >
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      disabled={newsletterStatus === 'loading'}
                      className={`flex-1 px-4 py-3 bg-bg-elevated border ${
                        newsletterStatus === 'error' ? 'border-red-500' : 'border-neutral-700'
                      } rounded-lg text-neutral-200 placeholder-neutral-500 font-mono focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:opacity-50`}
                    />
                    <button
                      type="submit"
                      disabled={newsletterStatus === 'loading'}
                      className="px-8 py-3 bg-primary-500 text-bg-surface font-mono font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow hover:shadow-card-hover disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {newsletterStatus === 'loading' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-bg-surface border-t-transparent rounded-full animate-spin" />
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-4 h-4" />
                          <span>Subscribe</span>
                        </>
                      )}
                    </button>
                  </div>
                  
                  {newsletterMessage && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-sm font-mono ${
                        newsletterStatus === 'success' ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {newsletterMessage}
                    </motion.p>
                  )}
                  
                  <p className="text-xs text-neutral-400 font-mono">
                    By subscribing, you agree to receive weekly newsletters. No spam, unsubscribe at any time.
                  </p>
                </form>
              </motion.div>

              {/* Value Propositions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-3"
              >
                {valuePropositions.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 text-neutral-200">
                      <IconComponent className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="font-mono">{item.text}</span>
                    </div>
                  );
                })}
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center gap-4 pt-4"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-green-400 border-2 border-bg-page"
                    />
                  ))}
                </div>
                <p className="text-neutral-400 font-mono text-sm">
                  Join <span className="text-primary-500 font-semibold">1,500+</span> engineers learning from real-world DevOps lessons
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:sticky lg:top-24"
            >
              <div className="bg-bg-surface border border-neutral-700 rounded-xl p-8 shadow-card">
                <h3 className="font-mono text-xl font-bold text-primary-500 mb-6 text-center">
                  BECOMING A GREAT PLATFORM ENGINEER
                </h3>
                
                {/* Flowchart Diagram */}
                <div className="space-y-6">
                  {/* Start */}
                  <div className="text-center">
                    <div className="inline-block bg-primary-500/20 border-2 border-primary-500 rounded-lg px-6 py-3">
                      <span className="font-mono text-primary-500 font-semibold">You</span>
                    </div>
                  </div>

                  {/* Arrows Down */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-primary-500 to-transparent" />
                  </div>

                  {/* Three Pillars */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center space-y-2">
                      <div className="bg-orange-500/20 border-2 border-orange-500 rounded-lg px-4 py-3">
                        <span className="font-mono text-orange-400 text-sm font-semibold">Systems Thinking</span>
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="bg-orange-500/20 border-2 border-orange-500 rounded-lg px-4 py-3">
                        <span className="font-mono text-orange-400 text-sm font-semibold">Reliability Focus</span>
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="bg-orange-500/20 border-2 border-orange-500 rounded-lg px-4 py-3">
                        <span className="font-mono text-orange-400 text-sm font-semibold">Clear Communication</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrows Converge */}
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-xs">
                      <div className="absolute left-1/4 w-0.5 h-8 bg-gradient-to-b from-orange-500 to-green-500" style={{ transform: 'rotate(-20deg)' }} />
                      <div className="absolute left-1/2 w-0.5 h-8 bg-gradient-to-b from-orange-500 to-green-500 transform -translate-x-1/2" />
                      <div className="absolute right-1/4 w-0.5 h-8 bg-gradient-to-b from-orange-500 to-green-500" style={{ transform: 'rotate(20deg)' }} />
                    </div>
                  </div>

                  {/* Result */}
                  <div className="text-center">
                    <div className="inline-block bg-green-500/20 border-2 border-green-500 rounded-lg px-6 py-4">
                      <span className="font-mono text-green-400 font-bold text-lg">Great Platform Engineer</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-8 pt-6 border-t border-neutral-700 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="font-mono text-2xl font-bold text-primary-500">1,500+</div>
                    <div className="text-xs text-neutral-400 mt-1">Subscribers</div>
                  </div>
                  <div className="text-center">
                    <div className="font-mono text-2xl font-bold text-primary-500">60+</div>
                    <div className="text-xs text-neutral-400 mt-1">Issues Published</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
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
              Featured Articles
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Real DevOps lessons from breaking production, migrating infrastructure, and debugging at 3 AM
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-bg-elevated border border-neutral-700 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 shadow-card hover:shadow-card-hover group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-xs text-yellow-400 font-mono">Featured</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-mono text-xl font-bold text-primary-500 mb-3 group-hover:text-primary-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-neutral-300 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="mb-4 space-y-2">
                  <p className="text-xs text-neutral-400 font-mono font-semibold">Key Takeaways:</p>
                  <ul className="space-y-1">
                    {article.keyPoints.slice(0, 3).map((point, i) => (
                      <li key={i} className="text-sm text-neutral-400 flex items-start gap-2">
                        <span className="text-primary-500 mt-1">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 font-mono font-semibold group/link"
                >
                  <span>Read Full Article</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-bg-elevated to-bg-surface border border-primary-500/20 rounded-2xl p-12 shadow-glow text-center"
          >
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-4">
                <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500">
                  Ready to Level Up Your DevOps Career?
                </h2>
                <p className="text-xl text-neutral-200 leading-relaxed">
                  Join 1,500+ engineers getting weekly insights on DevOps, platform engineering, and career growth. 
                  Real lessons from breaking production, migrating infrastructure, and debugging at 3 AM.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://theengineeringladder.com/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-bg-surface font-mono font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow hover:shadow-card-hover"
                >
                  <Users className="w-5 h-5" />
                  <span>Join 1,500+ Engineers</span>
                </a>
                
                <a
                  href="https://excelintech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-neutral-600 text-neutral-200 hover:border-primary-500 hover:text-primary-500 font-mono font-semibold rounded-lg transition-all duration-200"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Take a Course</span>
                </a>
              </div>

              <div className="pt-8 border-t border-neutral-700">
                <p className="text-neutral-400 font-mono text-sm">
                  Every Sunday, I break down career-changing lessons in DevOps and Software Engineering to help you level up fast.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Engineers Are Saying
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "This has been helpful for me to understand some backend concepts aside from writing codes. The real-world lessons are exactly what I needed.",
                author: "DevOps Engineer"
              },
              {
                quote: "Very insightful and helpful. The lessons on system design and debugging have transformed how I approach problems.",
                author: "Platform Engineer"
              },
              {
                quote: "I receive all your newsletters and enjoy every issue. The practical strategies help me grow faster in my DevOps career.",
                author: "Infrastructure Engineer"
              }
            ].map((testimonial, index) => (
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
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-300 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm text-neutral-400 font-mono">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
