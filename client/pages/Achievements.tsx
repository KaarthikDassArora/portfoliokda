import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import {
  Trophy,
  Users,
  TrendingUp,
  Star,
  Award,
  Target,
  Zap,
  Heart,
  Lightbulb,
  Video,
  Camera,
  Share2,
  BarChart3,
  Crown,
  Flame,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate achievement cards on scroll
    gsap.fromTo(
      ".achievement-card",
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".achievements-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Animate timeline items
    gsap.fromTo(
      ".timeline-achievement",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Animate stats
    gsap.fromTo(
      ".stat-item",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  const majorAchievements = [
    {
      title: "Founded Pratibimb Designs",
      description:
        "Successfully launched and built a creative design agency from scratch, establishing a strong brand presence in the digital marketing space.",
      icon: Crown,
      year: "2023",
      category: "Entrepreneurship",
      impact: "50+ Clients Served",
      color: "accent-purple",
    },

    {
      title: "Built Accessibility-First Applications",
      description:
        "Developed multiple projects focusing on accessibility, including tools for visually impaired users, promoting inclusive technology.",
      icon: Heart,
      year: "2024",
      category: "Social Impact",
      impact: "Accessibility Advocate",
      color: "accent-pink",
    },
    {
      title: "AI-Powered Project Portfolio",
      description:
        "Created innovative AI applications including trading bots, facial recognition systems, and intelligent assistants.",
      icon: Lightbulb,
      year: "2024",
      category: "Innovation",
      impact: "15+ AI Projects",
      color: "accent-orange",
    },

    {
      title: "Full-Stack Development Mastery",
      description:
        "Mastered modern full-stack technologies and frameworks, building scalable applications across multiple domains.",
      icon: Zap,
      year: "2023-2024",
      category: "Technical",
      impact: "Multiple Tech Stacks",
      color: "accent-blue",
    },
  ];

  const milestones = [
    {
      year: "2022",
      title: "Coding Journey Begins",
      description: "Started learning programming and web development",
      icon: Target,
      color: "accent-purple",
    },
    {
      year: "2023",
      title: "First Business Launch",
      description: "Founded Pratibimb Designs and started client work",
      icon: Trophy,
      color: "accent-blue",
    },

    {
      year: "2024",
      title: "AI Specialization",
      description: "Focused on AI and machine learning applications",
      icon: Lightbulb,
      color: "accent-orange",
    },

    {
      year: "2025",
      title: "Professional Growth",
      description:
        "Secured internship at Unified Mentor and LG Electronics role",
      icon: Star,
      color: "accent-blue",
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "15+", icon: Trophy },
    { label: "Clients Served", value: "50+", icon: Users },
    { label: "Client Satisfaction", value: "98%", icon: TrendingUp },
    { label: "Years Experience", value: "2+", icon: Award },
    { label: "Technologies Mastered", value: "20+", icon: Zap },
    { label: "Business Ventures", value: "1", icon: Crown },
  ];

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
              — Achievements & Recognition
            </p>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              Milestones & Impact
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              A journey of continuous growth, innovation, and meaningful
              contributions to the tech and creative industries
            </p>
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="stat-item glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} className="text-accent-purple" />
                    </div>
                    <h3 className="text-2xl font-bold gradient-text mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-foreground/70 text-sm">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Major Achievements */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Major Achievements
              </h2>
              <p className="text-lg text-foreground/70">
                Key milestones that define my entrepreneurial and technical
                journey
              </p>
            </div>

            <div className="achievements-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {majorAchievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="achievement-card glass rounded-2xl p-8 hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div
                        className={`w-12 h-12 bg-${achievement.color}/20 rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon
                          size={24}
                          className={`text-${achievement.color}`}
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <span
                            className={`px-3 py-1 bg-${achievement.color}/20 text-${achievement.color} rounded-full text-xs font-medium`}
                          >
                            {achievement.category}
                          </span>
                          <span className="text-foreground/60 text-sm">
                            {achievement.year}
                          </span>
                        </div>
                        <h3
                          className={`text-xl font-bold text-${achievement.color}`}
                        >
                          {achievement.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {achievement.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div
                        className={`px-4 py-2 bg-${achievement.color}/10 text-${achievement.color} rounded-lg text-sm font-medium`}
                      >
                        {achievement.impact}
                      </div>
                      <div className="flex items-center space-x-2 text-foreground/60">
                        <BarChart3 size={16} />
                        <span className="text-sm">Impact</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="timeline-container" ref={timelineRef}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Journey Timeline
              </h2>
              <p className="text-lg text-foreground/70">
                Key moments that shaped my path in technology and
                entrepreneurship
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple via-accent-blue to-accent-pink transform md:-translate-x-1/2" />

              <div className="space-y-16">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <div
                      key={index}
                      className={`timeline-achievement relative flex items-center ${
                        isEven
                          ? "md:flex-row-reverse md:text-right"
                          : "md:flex-row md:text-left"
                      }`}
                    >
                      {/* Timeline Node */}
                      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-background border-4 border-accent-purple rounded-full transform md:-translate-x-1/2 z-10" />

                      {/* Content */}
                      <div
                        className={`ml-20 md:ml-0 md:w-5/12 ${
                          isEven ? "md:pr-16" : "md:pl-16"
                        }`}
                      >
                        <div className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                          <div
                            className={`flex items-start space-x-4 mb-4 ${
                              isEven
                                ? "md:flex-row-reverse md:space-x-reverse"
                                : ""
                            }`}
                          >
                            <div
                              className={`w-12 h-12 bg-${milestone.color}/20 rounded-xl flex items-center justify-center flex-shrink-0`}
                            >
                              <Icon
                                size={24}
                                className={`text-${milestone.color}`}
                              />
                            </div>
                            <div>
                              <div
                                className={`text-2xl font-bold text-${milestone.color} mb-2`}
                              >
                                {milestone.year}
                              </div>
                              <h3 className="text-xl font-bold text-foreground/90 mb-2">
                                {milestone.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-foreground/70 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Recognition Section */}
          <div className="glass rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              What's Next?
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              These achievements are just the beginning. I'm constantly pushing
              boundaries, learning new technologies, and creating meaningful
              impact through code and creativity.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent-purple/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Target size={32} className="text-accent-purple" />
                </div>
                <h3 className="text-lg font-semibold text-accent-purple">
                  Future Goals
                </h3>
                <p className="text-foreground/70">
                  Building AI-powered solutions that create global impact and
                  accessibility
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent-blue/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Trophy size={32} className="text-accent-blue" />
                </div>
                <h3 className="text-lg font-semibold text-accent-blue">
                  Continuous Growth
                </h3>
                <p className="text-foreground/70">
                  Always learning, always improving, always pushing the
                  boundaries of what's possible
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent-pink/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Heart size={32} className="text-accent-pink" />
                </div>
                <h3 className="text-lg font-semibold text-accent-pink">
                  Making Impact
                </h3>
                <p className="text-foreground/70">
                  Creating technology that empowers people and makes the world
                  more inclusive
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
