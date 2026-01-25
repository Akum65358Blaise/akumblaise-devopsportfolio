import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Search, 
  Tag,
  ArrowRight,
  Users,
  Eye,
  Heart,
  MessageCircle,
  Star,
  Filter,
  Grid3X3,
  List,
  Zap,
  Target,
  Award,
  Code,
  Database,
  Cloud,
  Shield
} from 'lucide-react';
import { 
  AnimatedBackground, 
  TechBadge, 
  LoadingSkeleton, 
  StatsCard, 
  InteractiveButton, 
  CategoryFilter, 
  ViewToggle, 
  EngagementMetrics,
  categoryColors
} from '../visual/VisualComponents';

interface BlogPost {
  id: number;
  title: string;
  category: keyof typeof categoryColors;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  date: string;
  featured: boolean;
  views: string;
  likes: string;
  comments: string;
  excerpt: string;
  tags: string[];
  heroImage?: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why Most DevOps Teams Fail: The Platform Problem Nobody Talks About",
    category: "DevOps",
    difficulty: "Intermediate",
    readTime: "10 min read",
    date: "2025-01-20",
    featured: true,
    views: "4.2k",
    likes: "312",
    comments: "67",
    excerpt: "Most companies don't fail because of bad engineers. They fail because engineers are forced to build on broken infrastructure. Here's how to fix platform problems before they become engineering nightmares.",
    tags: ["Platform Engineering", "DevOps", "Infrastructure", "Best Practices", "Systems Design"],
    content: `
# Why Most DevOps Teams Fail: The Platform Problem Nobody Talks About

After 6+ years designing cloud systems and watching teams struggle, I've learned one thing: most companies don't fail because of bad engineers. They fail because engineers are forced to build on broken infrastructure.

## The Real Problem

Slow deployments. Unreliable systems. Expensive cloud bills. Tool fragmentation. These aren't engineering problems—they're platform problems.

When your deployment takes 4 hours instead of 15 minutes, that's not a code issue. When your cloud costs are 35% higher than they should be, that's not a feature problem. When your system reliability sits at 85% instead of 99.2%, that's not a bug.

## The Symptoms You're Ignoring

**1. Deployment Anxiety**
Every deploy feels like a gamble. Teams hold their breath, hoping nothing breaks. This isn't normal—it's a platform problem.

**2. The 3 AM Wake-Up Calls**
If your infrastructure wakes people up at night, you've built the wrong system. Good platforms don't break. Great platforms don't wake people up.

**3. The Tool Graveyard**
You've tried Jenkins, then GitHub Actions, then GitLab CI, then something else. Each tool works, but nothing solves the underlying problem: your platform is fragmented.

**4. The Cost Creep**
Your cloud bill keeps growing, but your traffic hasn't. You're paying for infrastructure you don't need because your platform doesn't scale intelligently.

## The Platform Engineering Approach

I don't just implement tools. I design systems that teams can trust, understand, and maintain.

**Think Systems, Not Scripts**
A script fixes one problem. A system prevents problems. When you think in systems, you design for failure scenarios, observability, and long-term maintainability from day one.

**Design for Zero-Downtime**
Your deployment strategy shouldn't be "hope it works." It should be "this can't fail." That means blue-green deployments, canary releases, and automatic rollbacks.

**Build Observability In**
If you're debugging at 3 AM, your observability failed. Grafana and Sentry aren't nice-to-haves—they're requirements. I've seen MTTR drop by 80% just by implementing proper observability.

**Cost Optimization Through Intelligence**
Cutting costs isn't about turning things off. It's about intelligent scaling, right-sizing resources, and eliminating waste. I've helped teams cut cloud costs by 35% without sacrificing performance.

## What This Means for Your Team

Most teams don't need more tools. They need better systems, clearer patterns, and platforms that get out of the way so engineers can focus on building products.

The difference between a good DevOps engineer and a great platform engineer? Good engineers fix problems. Great engineers design systems that prevent problems.

## The Bottom Line

If you're building or scaling a platform team, or need someone who thinks in systems, not just scripts—the problem isn't your engineers. It's your platform.

And I fix platforms.
    `
  },
  {
    id: 2,
    title: "Debugging Kubernetes at 3 AM: What Courses Don't Teach You",
    category: "DevOps",
    difficulty: "Advanced",
    readTime: "14 min read",
    date: "2025-01-12",
    featured: false,
    views: "3.7k",
    likes: "267",
    comments: "54",
    excerpt: "The real lessons from debugging Kubernetes errors at 3 AM. What you learn from breaking production, migrating infrastructure, and the debugging techniques that actually work when everything is on fire.",
    tags: ["Kubernetes", "Debugging", "Production", "Observability", "Troubleshooting"],
    content: `
# Debugging Kubernetes at 3 AM: What Courses Don't Teach You

It's 3 AM. Your phone is ringing. Production is down. The Kubernetes cluster is in a bad state, and you're the one who has to fix it. This is what courses don't teach you.

## The Reality of Production Debugging

Courses teach you how Kubernetes works. They don't teach you how to debug it when:
- Pods are stuck in CrashLoopBackOff
- Services aren't routing traffic correctly
- Nodes are running out of memory
- The cluster API is unresponsive
- You have no idea what changed

Here's what I've learned from years of 3 AM debugging sessions.

## The Debugging Framework That Actually Works

**Step 1: Don't Panic (But Do Act Fast)**

The first rule of production debugging: panic doesn't fix anything. But speed does. You have about 5 minutes before the incident escalates.

\`\`\`bash
# Quick health check
kubectl get nodes
kubectl get pods --all-namespaces
kubectl top nodes
kubectl top pods --all-namespaces
\`\`\`

**Step 2: Check the Obvious First**

90% of Kubernetes issues are:
- Resource limits (CPU/memory)
- Image pull failures
- ConfigMap/Secret issues
- Network policies blocking traffic
- Persistent volume problems

\`\`\`bash
# Check pod events (this is gold)
kubectl describe pod <pod-name> -n <namespace>

# Check recent events
kubectl get events --sort-by='.lastTimestamp' -n <namespace>

# Check logs (last 100 lines)
kubectl logs <pod-name> -n <namespace> --tail=100
\`\`\`

**Step 3: The Logs Are Lying to You**

Here's what courses don't tell you: application logs often don't show the real problem. You need to check:

\`\`\`bash
# Container logs
kubectl logs <pod-name> -c <container-name>

# Previous container (if it crashed)
kubectl logs <pod-name> --previous

# All containers in pod
kubectl logs <pod-name> --all-containers=true

# System logs from the node
kubectl get node <node-name> -o yaml
\`\`\`

**Step 4: The Real Debugging Commands**

These are the commands that actually help:

\`\`\`bash
# See what's actually running
kubectl get pods -o wide

# Check resource usage
kubectl top pod <pod-name> --containers

# See pod status in detail
kubectl get pod <pod-name> -o yaml | grep -A 20 "status:"

# Check if pod can be scheduled
kubectl describe pod <pod-name> | grep -A 10 "Events:"

# Check service endpoints
kubectl get endpoints <service-name>

# Check ingress
kubectl describe ingress <ingress-name>
\`\`\`

## Common Issues and Real Fixes

**Issue: CrashLoopBackOff**

Courses say "check your application logs." Reality: check your resource limits first.

\`\`\`bash
# Check if it's OOMKilled
kubectl describe pod <pod-name> | grep -i "oom"

# Check resource requests vs limits
kubectl get pod <pod-name> -o jsonpath='{.spec.containers[*].resources}'
\`\`\`

**Issue: ImagePullBackOff**

This usually means:
1. Wrong image name/tag
2. Private registry authentication failed
3. Network issue pulling from registry

\`\`\`bash
# Check image pull secrets
kubectl get pod <pod-name> -o jsonpath='{.spec.imagePullSecrets}'

# Test pulling the image manually
docker pull <image-name>:<tag>
\`\`\`

**Issue: Pods Not Receiving Traffic**

Check your service selector matches your pod labels:

\`\`\`bash
# Check service selector
kubectl get service <service-name> -o yaml | grep selector

# Check pod labels
kubectl get pod <pod-name> --show-labels

# Verify endpoints
kubectl get endpoints <service-name>
\`\`\`

## The Observability Stack That Saves You

If you're debugging at 3 AM without proper observability, you're doing it wrong. Here's what you need:

**Grafana for Metrics**
- Node metrics (CPU, memory, disk)
- Pod metrics (requests, limits, usage)
- Application metrics (if instrumented)

**Sentry for Errors**
- Real-time error tracking
- Stack traces
- Error grouping

**Centralized Logging**
- All logs in one place
- Searchable
- Retained for at least 30 days

I've seen MTTR drop by 80% just by implementing proper observability. It's not optional.

## The Soft Skills That Matter

Courses don't teach you:
- How to communicate during an incident
- When to escalate vs. when to keep debugging
- How to document what you learned
- How to prevent the same issue from happening again

**During the Incident:**
1. Update the team every 15 minutes (even if it's "still debugging")
2. Document what you've tried
3. Don't be afraid to ask for help
4. If you're stuck for 30 minutes, escalate

**After the Incident:**
1. Write a post-mortem (within 24 hours)
2. Document the fix
3. Create a runbook for next time
4. Fix the root cause, not just the symptom

## The Real Lesson

The real lesson from debugging Kubernetes at 3 AM isn't about Kubernetes. It's about:
- Building systems that don't break
- Having observability before you need it
- Designing for failure scenarios
- Creating platforms that don't wake people up at night

If you're debugging at 3 AM regularly, you don't have a debugging problem. You have a platform problem.

And I fix platforms.
    `
  },
  {
    id: 3,
    title: "Monolith vs Microservices: Why Fundamentals Matter More Than Trends",
    category: "DevOps",
    difficulty: "Intermediate",
    readTime: "11 min read",
    date: "2025-01-08",
    featured: false,
    views: "4.8k",
    likes: "389",
    comments: "92",
    excerpt: "Everyone's chasing microservices, but most teams don't need them. Here's why choosing monolith over microservices isn't a failure—it's good engineering. The fundamentals that matter more than chasing the latest trend.",
    tags: ["Architecture", "Microservices", "Monolith", "Best Practices", "Fundamentals"],
    content: `
# Monolith vs Microservices: Why Fundamentals Matter More Than Trends

Everyone's chasing microservices. Every job posting wants "microservices experience." Every conference talks about "breaking the monolith." But here's the truth: most teams don't need microservices. And choosing a monolith isn't a failure—it's good engineering.

## The Microservices Hype

I've seen teams spend months breaking apart a perfectly good monolith into microservices, only to:
- Increase deployment complexity by 10x
- Add network latency between services
- Create distributed system problems they didn't have before
- Slow down development because now they need to coordinate across services
- Increase cloud costs because they're running more infrastructure

All because someone read that "Netflix uses microservices" and thought they needed to too.

## When You Actually Need Microservices

You need microservices when:
1. **Different teams own different services** - If you have 5+ teams working on the same codebase, microservices make sense
2. **Different scaling requirements** - If one part of your app needs to scale independently
3. **Different technology stacks** - If you need Python for ML but Node.js for APIs
4. **Regulatory/compliance boundaries** - If you need to isolate certain data or functionality

Notice what's not on this list: "because it's modern" or "because everyone else is doing it."

## When You Should Stay Monolithic

You should stay monolithic when:
1. **Small team** - If you have 1-3 developers, microservices add complexity without benefit
2. **Rapid iteration** - If you need to ship features fast, monoliths are faster
3. **Simple domain** - If your problem domain is straightforward, don't overcomplicate it
4. **Early stage** - If you're still figuring out your product, monoliths let you pivot faster

## The Real Cost of Microservices

**Operational Complexity**
- Now you need service discovery
- You need API gateways
- You need distributed tracing
- You need to handle network failures
- You need to coordinate deployments across services

**Development Speed**
- Changes that used to take 1 day now take 3 days
- You need to coordinate with other teams
- You need to version APIs
- You need to handle backward compatibility

**Debugging**
- A bug could be in any service
- You need distributed tracing to debug
- Network issues become application issues
- You can't just look at logs in one place

**Cost**
- More infrastructure to run
- More monitoring tools
- More CI/CD complexity
- More cloud resources

## The Monolith Advantage

**Simplicity**
- One codebase to understand
- One deployment pipeline
- One database (usually)
- One place to look for bugs

**Speed**
- Deploy everything together
- No API versioning needed
- No network calls between services
- Faster development cycles

**Cost**
- Less infrastructure
- Simpler monitoring
- Lower operational overhead

## The Migration Path That Actually Works

If you do need to migrate to microservices later, here's the path:

**Step 1: Modular Monolith**
- Keep everything in one codebase
- But organize it into clear modules
- Each module has clear boundaries
- But they can call each other directly (no network)

**Step 2: Extract When Needed**
- Only extract a module when you have a real need
- Extract because you need different scaling, not because it's "cleaner"
- Extract because a different team needs to own it

**Step 3: Extract Strategically**
- Start with the most independent module
- Make sure it can run standalone
- Then extract it to its own service
- Keep the rest as a monolith

## The Real Lesson

The real lesson isn't about monoliths vs microservices. It's about:
- **Fundamentals over trends** - Good architecture matters more than trendy architecture
- **Solve real problems** - Don't create problems you don't have
- **Start simple** - You can always add complexity later
- **Measure, don't assume** - Don't assume microservices are faster/better/cheaper

I've seen teams ship faster with monoliths. I've seen teams reduce costs with monoliths. I've seen teams be more productive with monoliths.

The best architecture is the one that solves your problem, not the one that looks good on a resume.

## What This Means for You

If you're choosing between monolith and microservices:
1. Start with a monolith
2. Make it modular
3. Extract to microservices only when you have a real need
4. Don't let trends drive your architecture decisions

Fundamentals matter more than trends. Good engineering matters more than buzzwords. And I engineer systems that solve problems, not systems that follow trends.

The best platform is the one that gets out of the way so engineers can focus on building products. Whether that's a monolith or microservices doesn't matter—what matters is that it solves the problem.
    `
  },
  {
    id: 4,
    title: "From 4 Hours to 15 Minutes: How I Reduced Deployment Time by 94%",
    category: "DevOps",
    difficulty: "Advanced",
    readTime: "12 min read",
    date: "2025-01-18",
    featured: true,
    views: "5.1k",
    likes: "428",
    comments: "89",
    excerpt: "A real-world case study on reducing deployment time from 4 hours to 15 minutes through automated CI/CD, intelligent pipeline design, and eliminating manual bottlenecks. The lessons I learned from breaking production and fixing it properly.",
    tags: ["CI/CD", "Automation", "Deployment", "GitHub Actions", "Case Study"],
    content: `
# From 4 Hours to 15 Minutes: How I Reduced Deployment Time by 94%

This is the story of how I took a deployment process from 4 hours to 15 minutes. Not through magic, but through systematic platform engineering. Here's what I learned from breaking production and fixing it properly.

## The Problem: 4-Hour Deployments

When I joined this team, deployments were a nightmare:
- Manual steps scattered across 3 different systems
- No automated testing in the pipeline
- Database migrations run manually (and often forgotten)
- Build process that took 45 minutes alone
- Deployment windows that required the entire team to be available

The result? Deployments happened once a week, on Friday afternoons, with the entire team holding their breath.

## The Breaking Point

We had a critical bug that needed to go out on a Tuesday. The deployment process took so long that by the time we finished, it was Wednesday. The customer had already churned.

That's when I realized: this isn't a deployment problem. This is a platform problem.

## The Solution: Systematic Automation

**Step 1: Analyze the Bottlenecks**

I mapped out every step in the deployment process:
- Build: 45 minutes
- Manual testing: 30 minutes
- Database migration prep: 20 minutes
- Staging deployment: 15 minutes
- Manual verification: 30 minutes
- Production deployment: 40 minutes
- Post-deployment checks: 20 minutes

Total: 4 hours, 20 minutes. And that's if nothing went wrong.

**Step 2: Automate the Build Process**

\`\`\`yaml
# GitHub Actions workflow
name: Build and Test
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test -- --coverage
      
      - name: Build Docker image
        run: docker build -t app:\${{ github.sha }} .
      
      - name: Push to ECR
        run: |
          aws ecr get-login-password | docker login --username AWS --password-stdin \$ECR_REGISTRY
          docker push app:\${{ github.sha }}
\`\`\`

This cut build time from 45 minutes to 8 minutes. But we weren't done.

**Step 3: Parallelize Everything**

Instead of sequential steps, I parallelized:
- Tests run in parallel across multiple jobs
- Database migrations run automatically before deployment
- Multiple environments deploy simultaneously (staging + production preview)

**Step 4: Implement Intelligent Caching**

\`\`\`yaml
- name: Cache dependencies
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      \${{ runner.os }}-node-
\`\`\`

Dependency installation went from 5 minutes to 30 seconds on cache hits.

**Step 5: Database Migration Automation**

The scariest part of deployments was database migrations. I automated them:

\`\`\`bash
#!/bin/bash
# Auto-migration script
set -e

echo "Running database migrations..."
npm run migrate:up

echo "Verifying migration..."
npm run migrate:verify

echo "Migrations complete!"
\`\`\`

This eliminated the 20-minute manual prep time and the human error that came with it.

**Step 6: Zero-Downtime Deployment Strategy**

Instead of taking the service down for deployment, I implemented blue-green deployments:

\`\`\`yaml
- name: Deploy to production
  run: |
    # Deploy to green environment
    kubectl set image deployment/app app=app:\${{ github.sha }} -n production-green
    
    # Wait for rollout
    kubectl rollout status deployment/app -n production-green
    
    # Switch traffic
    kubectl patch service/app -p '{"spec":{"selector":{"version":"green"}}}'
    
    # Verify health
    ./scripts/health-check.sh
    
    # Keep blue for rollback if needed
\`\`\`

## The Results

**Before:**
- Deployment time: 4 hours, 20 minutes
- Frequency: Once per week
- Team availability required: 100%
- Rollback time: 2 hours
- Success rate: ~70%

**After:**
- Deployment time: 15 minutes
- Frequency: Multiple times per day
- Team availability required: 0% (fully automated)
- Rollback time: 2 minutes
- Success rate: 99.2%

## The Lessons

1. **Automation isn't optional** - If a human is doing it, it can be automated
2. **Parallelize everything** - Sequential processes are slow processes
3. **Cache aggressively** - Don't rebuild what you don't need to
4. **Design for failure** - Zero-downtime deployments aren't nice-to-have, they're required
5. **Measure everything** - You can't improve what you don't measure

## The Real Win

The real win wasn't the time saved. It was the confidence restored. Teams stopped dreading deployments. They started shipping faster. And when things went wrong (they always do), we could roll back in 2 minutes instead of 2 hours.

That's the difference between a deployment process and a deployment platform.

## What This Means for You

If your deployments take hours, you don't need faster servers. You need a better platform. And I build platforms that don't break.

The 94% reduction wasn't magic—it was systematic platform engineering. And it's repeatable.
    `
  },
  {
    id: 5,
    title: "How Soft Skills Make or Break Your DevOps Career",
    category: "DevOps",
    difficulty: "Beginner",
    readTime: "9 min read",
    date: "2025-01-03",
    featured: false,
    views: "3.9k",
    likes: "298",
    comments: "76",
    excerpt: "Technical skills get you the interview. Soft skills get you the job—and keep you there. Here's how communication, collaboration, and empathy make the difference between a good DevOps engineer and a great platform engineer.",
    tags: ["Career", "Soft Skills", "DevOps", "Communication", "Leadership"],
    content: `
# How Soft Skills Make or Break Your DevOps Career

You know Kubernetes. You can write Terraform in your sleep. You've debugged production at 3 AM more times than you can count. But here's the thing: technical skills get you the interview. Soft skills get you the job—and keep you there.

## The Hard Truth

I've seen brilliant engineers who can't get promoted. I've seen teams with amazing infrastructure that can't ship. I've seen DevOps engineers who know everything about Kubernetes but can't explain why it matters to a non-technical stakeholder.

The difference? Soft skills.

## The Skills That Actually Matter

**1. Communication**

You can build the best platform in the world, but if you can't explain it, it doesn't matter.

**Writing Clear Documentation**
- Your runbooks should be readable by someone who's never seen your system
- Your post-mortems should tell a story, not just list facts
- Your architecture diagrams should make sense to non-engineers

**Speaking to Different Audiences**
- Executives care about cost, reliability, and risk
- Product managers care about shipping speed and developer experience
- Engineers care about how it works and why you made those choices

**During Incidents**
- Update the team every 15 minutes (even if it's "still debugging")
- Explain what you're doing and why
- Don't use jargon when plain English works

**2. Collaboration**

DevOps isn't a solo sport. You're building platforms for teams.

**Working with Developers**
- Understand their pain points
- Don't just say "no"—explain why and offer alternatives
- Make their lives easier, not harder

**Working with Other Teams**
- Security teams aren't trying to slow you down—they're trying to protect the company
- Product teams aren't trying to break your infrastructure—they're trying to ship features
- Find common ground, not conflict

**Building Consensus**
- Not everyone will agree with your approach
- Listen to concerns
- Find solutions that work for everyone

**3. Empathy**

The best platform engineers understand that behind every system, there are people.

**Understanding User Pain**
- If developers hate your deployment process, that's a problem
- If on-call engineers are burned out, that's a problem
- If teams are working around your platform, that's a problem

**Designing for Humans**
- Your platform should make people's jobs easier
- Your documentation should answer questions before they're asked
- Your systems should fail gracefully, not catastrophically

**4. Problem-Solving**

Not just technical problems—all problems.

**Root Cause Analysis**
- Don't just fix symptoms
- Ask "why" five times
- Fix the system, not just the bug

**Creative Solutions**
- Sometimes the best solution isn't the most technical one
- Sometimes you need to work within constraints
- Sometimes "good enough" is better than "perfect"

**5. Leadership**

You don't need a title to be a leader.

**Leading by Example**
- Write good documentation
- Follow best practices
- Help others learn

**Mentoring**
- Share what you've learned
- Help junior engineers grow
- Create a culture of learning

**Influence Without Authority**
- You can't force people to use your platform
- You need to convince them it's the right choice
- Build trust, not just systems

## The Soft Skills That Kill Careers

**1. Poor Communication**
- Can't explain technical concepts to non-technical people
- Writes documentation nobody can understand
- Doesn't update the team during incidents

**2. Lack of Empathy**
- Doesn't understand why developers are frustrated
- Blames users for platform problems
- Doesn't care about developer experience

**3. Inability to Collaborate**
- Works in isolation
- Doesn't listen to feedback
- Can't work with other teams

**4. No Leadership**
- Doesn't mentor others
- Doesn't share knowledge
- Doesn't take ownership

## How to Develop Soft Skills

**1. Practice Communication**
- Write blog posts (even if nobody reads them)
- Present at team meetings
- Explain technical concepts to non-technical friends

**2. Seek Feedback**
- Ask your team how you can improve
- Listen to what developers say about your platform
- Act on feedback, don't just collect it

**3. Read Widely**
- Not just technical books
- Read about communication, leadership, psychology
- Understand how people work, not just how systems work

**4. Get Out of Your Comfort Zone**
- Work with teams you don't usually work with
- Present to audiences you're not used to
- Take on projects that require collaboration

## The Real Lesson

The best platform engineers aren't just technical experts. They're:
- Great communicators who can explain complex systems simply
- Collaborative team players who build consensus
- Empathetic designers who understand user pain
- Problem solvers who fix root causes, not symptoms
- Leaders who influence without authority

Technical skills get you in the door. Soft skills keep you there—and help you grow.

## What This Means for You

If you want to advance your DevOps career:
1. **Invest in soft skills** - They matter as much as technical skills
2. **Practice communication** - Write, speak, explain
3. **Build empathy** - Understand your users' pain
4. **Collaborate** - Work with others, not just systems
5. **Lead** - Even without a title, you can be a leader

The best platforms are built by engineers who understand both systems and people. And I engineer platforms that work for both.

Your technical skills make you a good engineer. Your soft skills make you a great one.
    `
  }
];

const categories = ['All', 'DevOps', 'Cloud Infrastructure', 'Full-Stack'];

const EnhancedBlog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'date' | 'views' | 'likes'>('date');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [blogViews, setBlogViews] = useState<{[key: number]: number}>({});
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterMessage, setNewsletterMessage] = useState('');

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'views':
          return parseInt(b.views.replace('k', '000')) - parseInt(a.views.replace('k', '000'));
        case 'likes':
          return parseInt(b.likes) - parseInt(a.likes);
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    // Simulate real-time view increment
    setBlogViews(prev => ({
      ...prev,
      [post.id]: (prev[post.id] || parseInt(post.views.replace('k', '000'))) + 1
    }));
  };

  const getPostViews = (post: BlogPost) => {
    const views = blogViews[post.id] || parseInt(post.views.replace('k', '000'));
    return views > 1000 ? `${(views / 1000).toFixed(1)}k` : views.toString();
  };

  const getTotalViews = () => {
    return blogPosts.reduce((total, post) => {
      return total + (blogViews[post.id] || parseInt(post.views.replace('k', '000')));
    }, 0);
  };

  const totalViews = getTotalViews();
  const totalViewsFormatted = totalViews > 1000 ? `${(totalViews / 1000).toFixed(1)}k` : totalViews.toString();

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
            Platform Engineering Journal
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Real DevOps lessons from breaking production, migrating infrastructure, and debugging at 3 AM. What courses don't teach you.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <StatsCard
            title="Total Articles"
            value="5"
            icon={<BookOpen className="w-6 h-6" />}
            color="completed"
          />
          <StatsCard
            title="Total Views"
            value={totalViewsFormatted}
            change="Real-time tracking"
            icon={<Eye className="w-6 h-6" />}
            color="completed"
            trend="up"
          />
          <StatsCard
            title="Engagement Rate"
            value="72%"
            change="Active readership"
            icon={<Heart className="w-6 h-6" />}
            color="completed"
            trend="up"
          />
          <StatsCard
            title="Avg. Read Time"
            value="8 min"
            change="Industry average: 7 min"
            icon={<Clock className="w-6 h-6" />}
            color="completed"
            trend="up"
          />
        </motion.div>

        {/* Featured Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-green-400 flex items-center gap-2">
            <Star className="w-6 h-6" />
            Featured Articles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <motion.article
                key={post.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => handlePostClick(post)}
                className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden cursor-pointer group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <TechBadge name={post.category} category={post.category} size="sm" />
                    <span className="text-xs text-yellow-400 font-medium">⭐ Featured</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <EngagementMetrics
                      views={getPostViews(post)}
                      likes={post.likes}
                      comments={post.comments}
                      featured={post.featured}
                    />
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{post.readTime}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-800 text-green-400 text-xs rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
            />
          </div>
          
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <ViewToggle view={view} onViewChange={setView} />
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'views' | 'likes')}
            className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-400"
          >
            <option value="date">Latest</option>
            <option value="views">Most Viewed</option>
            <option value="likes">Most Liked</option>
          </select>
        </motion.div>

        {/* Blog Posts Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchTerm}-${view}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={view === 'grid' 
              ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-6'
            }
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handlePostClick(post)}
                className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden cursor-pointer group hover:border-green-400 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <TechBadge name={post.category} category={post.category} size="sm" />
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded ${
                        post.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        post.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {post.difficulty}
                      </span>
                      {post.featured && (
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <EngagementMetrics
                    views={getPostViews(post)}
                    likes={post.likes}
                    comments={post.comments}
                    featured={post.featured}
                  />
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-800 text-green-400 text-xs rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{post.readTime}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-400/30 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Join The Engineering Ladder
          </h2>
          <p className="text-green-200 mb-6 max-w-2xl mx-auto">
            Get weekly insights on DevOps, platform engineering, and career growth. Real lessons from breaking production, migrating infrastructure, and debugging at 3 AM.
          </p>
          
          <form 
            onSubmit={async (e) => {
              e.preventDefault();
              if (!newsletterEmail || !newsletterEmail.includes('@')) {
                setNewsletterStatus('error');
                setNewsletterMessage('Please enter a valid email address');
                return;
              }

              setNewsletterStatus('loading');
              setNewsletterMessage('');

              try {
                // Behiiv integration - works without API keys!
                // Method 1: If you have API credentials (optional), use direct API
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
                      source: 'portfolio-website',
                    }),
                  });

                  if (response.ok) {
                    setNewsletterStatus('success');
                    setNewsletterMessage('Successfully subscribed! Check your email to confirm.');
                    setNewsletterEmail('');
                    return;
                  }
                }

                // Method 2: Redirect to Behiiv subscription page (works without API keys)
                // This opens your Behiiv subscription page with email pre-filled
                // Users complete subscription there, and it's added to your Behiiv list
                const subscriptionUrl = `https://theengineeringladder.com/subscribe?email=${encodeURIComponent(newsletterEmail)}`;
                window.open(subscriptionUrl, '_blank');
                
                setNewsletterStatus('success');
                setNewsletterMessage('Opening subscription page... Please complete your subscription there.');
                setNewsletterEmail('');
                
              } catch (error) {
                // Fallback: Open subscription page
                window.open(`https://theengineeringladder.com/subscribe?email=${encodeURIComponent(newsletterEmail)}`, '_blank');
                setNewsletterStatus('success');
                setNewsletterMessage('Opening subscription page...');
                setNewsletterEmail('');
              }
            }}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
                required
                disabled={newsletterStatus === 'loading'}
                className={`flex-1 px-4 py-3 bg-gray-900 border ${
                  newsletterStatus === 'error' ? 'border-red-500' : 'border-gray-700'
                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 disabled:opacity-50`}
              />
              <InteractiveButton 
                variant="primary" 
                type="submit"
                disabled={newsletterStatus === 'loading'}
                loading={newsletterStatus === 'loading'}
              >
                {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </InteractiveButton>
          </div>
            
            {newsletterMessage && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-sm mt-3 ${
                  newsletterStatus === 'success' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {newsletterMessage}
              </motion.p>
            )}
          
          <p className="text-xs text-gray-400 mt-3">
              No spam, unsubscribe at any time. Join 1500+ engineers learning from real-world DevOps lessons.
          </p>
          </form>
        </motion.section>

        {/* Blog Post Modal */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPost(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 border border-gray-700 rounded-lg max-w-4xl max-h-[90vh] overflow-hidden"
              >
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <TechBadge name={selectedPost.category} category={selectedPost.category} size="sm" />
                      <span className={`px-2 py-1 text-xs rounded ${
                        selectedPost.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        selectedPost.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {selectedPost.difficulty}
                      </span>
                      {selectedPost.featured && (
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedPost.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{getPostViews(selectedPost)} views</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                  <div className="prose prose-invert prose-green max-w-none">
                    {selectedPost.content.split('\n').map((paragraph, index) => {
                      if (paragraph.startsWith('# ')) {
                        return <h1 key={index} className="text-3xl font-bold text-green-400 mb-4">{paragraph.substring(2)}</h1>;
                      } else if (paragraph.startsWith('## ')) {
                        return <h2 key={index} className="text-2xl font-bold text-green-400 mb-3 mt-6">{paragraph.substring(3)}</h2>;
                      } else if (paragraph.startsWith('### ')) {
                        return <h3 key={index} className="text-xl font-bold text-green-400 mb-2 mt-4">{paragraph.substring(4)}</h3>;
                      } else if (paragraph.startsWith('```')) {
                        const isClosing = paragraph === '```';
                        if (isClosing) {
                          return <div key={index}></div>;
                        }
                        const nextParagraph = selectedPost.content.split('\n')[index + 1];
                        return (
                          <pre key={index} className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
                            <code className="text-green-400">{nextParagraph}</code>
                          </pre>
                        );
                      } else if (paragraph.trim()) {
                        return <p key={index} className="text-gray-300 leading-relaxed mb-4">{paragraph}</p>;
                      }
                      return <br key={index} />;
                    })}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      {selectedPost.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-800 text-green-400 text-sm rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedBackground>
  );
};

export default EnhancedBlog;