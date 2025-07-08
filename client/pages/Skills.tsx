import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import {
  Code,
  Database,
  Palette,
  Smartphone,
  Globe,
  Brain,
  Settings,
  Zap,
  Star,
  TrendingUp,
  Award,
  Target,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate skill cards on scroll
    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 60, rotateY: 15 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Animate category sections
    gsap.fromTo(
      ".category-section",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".categories-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Animate progress bars
    gsap.fromTo(
      ".progress-bar",
      { width: 0 },
      {
        width: "var(--progress)",
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".progress-section",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend Development",
      icon: Globe,
      color: "accent-purple",
      description: "Building responsive, interactive user interfaces",
    },
    {
      id: "backend",
      name: "Backend Development",
      icon: Database,
      color: "accent-blue",
      description: "Server-side logic, APIs, and database management",
    },
    {
      id: "ai",
      name: "AI & Machine Learning",
      icon: Brain,
      color: "accent-pink",
      description: "Intelligent systems and automation",
    },
    {
      id: "mobile",
      name: "Mobile Development",
      icon: Smartphone,
      color: "accent-orange",
      description: "Cross-platform mobile applications",
    },
    {
      id: "design",
      name: "UI/UX Design",
      icon: Palette,
      color: "accent-purple",
      description: "User-centered design and visual aesthetics",
    },
    {
      id: "tools",
      name: "Tools & DevOps",
      icon: Settings,
      color: "accent-blue",
      description: "Development tools and deployment workflows",
    },
  ];

  const skills = {
    frontend: [
      {
        name: "React.js",
        level: 95,
        experience: "2+ years",
        projects: "12+ projects",
        icon: "⚛️",
      },
      {
        name: "Next.js",
        level: 90,
        experience: "1.5+ years",
        projects: "8+ projects",
        icon: "▲",
      },
      {
        name: "TypeScript",
        level: 88,
        experience: "1+ year",
        projects: "10+ projects",
        icon: "📘",
      },
      {
        name: "JavaScript",
        level: 95,
        experience: "2+ years",
        projects: "15+ projects",
        icon: "🟨",
      },
      {
        name: "Tailwind CSS",
        level: 92,
        experience: "1.5+ years",
        projects: "12+ projects",
        icon: "💨",
      },
      {
        name: "HTML/CSS",
        level: 98,
        experience: "2+ years",
        projects: "All projects",
        icon: "🌐",
      },
      {
        name: "GSAP",
        level: 85,
        experience: "1+ year",
        projects: "5+ projects",
        icon: "🎭",
      },
      {
        name: "Framer Motion",
        level: 80,
        experience: "1+ year",
        projects: "4+ projects",
        icon: "🎬",
      },
    ],
    backend: [
      {
        name: "Node.js",
        level: 90,
        experience: "2+ years",
        projects: "10+ projects",
        icon: "🟢",
      },
      {
        name: "Express.js",
        level: 88,
        experience: "2+ years",
        projects: "8+ projects",
        icon: "🚂",
      },
      {
        name: "Python",
        level: 92,
        experience: "2+ years",
        projects: "12+ projects",
        icon: "🐍",
      },
      {
        name: "Flask",
        level: 85,
        experience: "1+ year",
        projects: "5+ projects",
        icon: "🌶️",
      },
      {
        name: "MongoDB",
        level: 82,
        experience: "1+ year",
        projects: "6+ projects",
        icon: "🍃",
      },
      {
        name: "PostgreSQL",
        level: 78,
        experience: "1+ year",
        projects: "4+ projects",
        icon: "🐘",
      },
      {
        name: "REST APIs",
        level: 90,
        experience: "2+ years",
        projects: "10+ projects",
        icon: "🔗",
      },
      {
        name: "Authentication",
        level: 85,
        experience: "1+ year",
        projects: "7+ projects",
        icon: "🔐",
      },
    ],
    ai: [
      {
        name: "Machine Learning",
        level: 85,
        experience: "1+ year",
        projects: "6+ projects",
        icon: "🤖",
      },
      {
        name: "OpenCV",
        level: 88,
        experience: "1+ year",
        projects: "4+ projects",
        icon: "👁️",
      },
      {
        name: "TensorFlow",
        level: 75,
        experience: "6+ months",
        projects: "3+ projects",
        icon: "🧠",
      },
      {
        name: "OpenAI API",
        level: 90,
        experience: "1+ year",
        projects: "5+ projects",
        icon: "🤖",
      },
      {
        name: "Computer Vision",
        level: 82,
        experience: "1+ year",
        projects: "4+ projects",
        icon: "📷",
      },
      {
        name: "Natural Language Processing",
        level: 78,
        experience: "6+ months",
        projects: "3+ projects",
        icon: "💬",
      },
      {
        name: "Data Analysis",
        level: 85,
        experience: "1+ year",
        projects: "6+ projects",
        icon: "���",
      },
      {
        name: "Algorithm Design",
        level: 88,
        experience: "1.5+ years",
        projects: "8+ projects",
        icon: "⚡",
      },
    ],
    mobile: [
      {
        name: "React Native",
        level: 75,
        experience: "6+ months",
        projects: "2+ projects",
        icon: "📱",
      },
      {
        name: "Progressive Web Apps",
        level: 85,
        experience: "1+ year",
        projects: "4+ projects",
        icon: "📲",
      },
      {
        name: "Responsive Design",
        level: 95,
        experience: "2+ years",
        projects: "All projects",
        icon: "📐",
      },
      {
        name: "Mobile UI/UX",
        level: 88,
        experience: "1+ year",
        projects: "6+ projects",
        icon: "🎨",
      },
    ],
    design: [
      {
        name: "UI/UX Design",
        level: 90,
        experience: "2+ years",
        projects: "15+ projects",
        icon: "🎨",
      },
      {
        name: "Figma",
        level: 88,
        experience: "1.5+ years",
        projects: "10+ projects",
        icon: "🎭",
      },
      {
        name: "Adobe Creative Suite",
        level: 85,
        experience: "2+ years",
        projects: "Brand projects",
        icon: "🎨",
      },
      {
        name: "Accessibility Design",
        level: 92,
        experience: "1+ year",
        projects: "5+ projects",
        icon: "♿",
      },
      {
        name: "Brand Identity",
        level: 88,
        experience: "2+ years",
        projects: "50+ clients",
        icon: "🏷️",
      },
      {
        name: "Prototyping",
        level: 85,
        experience: "1+ year",
        projects: "8+ projects",
        icon: "🔧",
      },
    ],
    tools: [
      {
        name: "Git & GitHub",
        level: 92,
        experience: "2+ years",
        projects: "All projects",
        icon: "🔧",
      },
      {
        name: "VS Code",
        level: 95,
        experience: "2+ years",
        projects: "Daily use",
        icon: "💻",
      },
      {
        name: "Postman",
        level: 88,
        experience: "1+ year",
        projects: "API testing",
        icon: "📮",
      },
      {
        name: "Vercel",
        level: 90,
        experience: "1+ year",
        projects: "10+ deployments",
        icon: "🚀",
      },
      {
        name: "Netlify",
        level: 85,
        experience: "1+ year",
        projects: "8+ deployments",
        icon: "🌐",
      },
      {
        name: "Docker",
        level: 70,
        experience: "6+ months",
        projects: "3+ projects",
        icon: "🐳",
      },
      {
        name: "Webpack",
        level: 75,
        experience: "1+ year",
        projects: "5+ projects",
        icon: "📦",
      },
      {
        name: "ESLint/Prettier",
        level: 88,
        experience: "1+ year",
        projects: "All projects",
        icon: "✨",
      },
    ],
  };

  const currentSkills = skills[activeCategory as keyof typeof skills];
  const currentCategory = skillCategories.find(
    (cat) => cat.id === activeCategory,
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="fixed inset-0 modern-grid opacity-10" />
      <div className="fixed inset-0 gradient-mesh opacity-50" />

      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Header */}
          <div className="text-center space-y-6">
            <p className="text-accent-purple font-medium tracking-wide uppercase text-sm">
              — Technical Expertise
            </p>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              Tools of My Trade
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              A comprehensive overview of the technologies, frameworks, and
              tools I use to bring ideas to life
            </p>
          </div>

          {/* Skill Categories Navigation */}
          <div className="categories-container">
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {skillCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`category-section flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                      activeCategory === category.id
                        ? `bg-${category.color}/20 text-${category.color} border-2 border-${category.color}/40 scale-105`
                        : "bg-surface-light/50 text-foreground/70 border-2 border-transparent hover:bg-surface-light/80 hover:scale-105"
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Category Header */}
          {currentCategory && (
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div
                  className={`w-16 h-16 bg-${currentCategory.color}/20 rounded-2xl flex items-center justify-center`}
                >
                  <currentCategory.icon
                    size={32}
                    className={`text-${currentCategory.color}`}
                  />
                </div>
                <div>
                  <h2
                    className={`text-3xl font-bold text-${currentCategory.color}`}
                  >
                    {currentCategory.name}
                  </h2>
                  <p className="text-foreground/70">
                    {currentCategory.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Skills Grid */}
          <div
            className="skills-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            ref={skillsRef}
          >
            {currentSkills.map((skill, index) => (
              <div
                key={index}
                className="skill-card glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-foreground/90 group-hover:text-accent-purple transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      {skill.experience}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-foreground/70">
                      Proficiency
                    </span>
                    <span className="text-sm font-semibold text-accent-purple">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-surface-light/50 rounded-full h-2 overflow-hidden">
                    <div
                      className="progress-bar h-full bg-gradient-to-r from-accent-purple to-accent-pink rounded-full transition-all duration-300"
                      style={
                        {
                          "--progress": `${skill.level}%`,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                </div>

                {/* Projects Count */}
                <div className="flex items-center space-x-2 text-foreground/60 text-sm">
                  <Target size={14} />
                  <span>{skill.projects}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="progress-section grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold gradient-text mb-6">
                Technical Expertise Overview
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-accent-purple mb-3">
                    Primary Specializations
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    My core expertise lies in{" "}
                    <span className="text-accent-purple font-medium">
                      full-stack web development
                    </span>{" "}
                    with React/Next.js and{" "}
                    <span className="text-accent-blue font-medium">
                      AI/ML applications
                    </span>
                    . I specialize in building scalable, accessible applications
                    that solve real-world problems.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-blue mb-3">
                    Continuous Learning
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Technology evolves rapidly, and so do I. I'm constantly
                    exploring new frameworks, tools, and methodologies to stay
                    at the forefront of development practices and deliver
                    cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Achievement Stats */}
              <div className="glass rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award size={24} className="text-accent-purple" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-2">20+</h3>
                <p className="text-foreground/70 text-sm">
                  Technologies Mastered
                </p>
              </div>

              <div className="glass rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={24} className="text-accent-blue" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-2">2+</h3>
                <p className="text-foreground/70 text-sm">Years Experience</p>
              </div>

              <div className="glass rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-accent-pink/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star size={24} className="text-accent-pink" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-2">15+</h3>
                <p className="text-foreground/70 text-sm">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="glass rounded-2xl p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-gradient-start to-gradient-end rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Zap size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Always Learning, Always Growing
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Technology is my playground, and every project is an opportunity
              to learn something new. I believe in{" "}
              <span className="gradient-text font-semibold">
                continuous improvement
              </span>{" "}
              and staying curious about emerging technologies.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-accent-purple">
                  Problem-First Approach
                </h3>
                <p className="text-foreground/70">
                  I choose technologies based on the problem they solve, not
                  just because they're trendy.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-accent-blue">
                  Best Practices
                </h3>
                <p className="text-foreground/70">
                  Writing clean, maintainable code that follows industry
                  standards and accessibility guidelines.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-accent-pink">
                  Future-Ready
                </h3>
                <p className="text-foreground/70">
                  Building applications that are scalable, performant, and ready
                  for tomorrow's challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
