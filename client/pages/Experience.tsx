import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Users,
  TrendingUp,
  Award,
  Building,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate timeline items on scroll
    gsap.fromTo(
      ".timeline-item",
      { opacity: 0, x: -50, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
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

    // Animate stats cards
    gsap.fromTo(
      ".stat-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  const experiences = [
    {
      title: "Founder & CEO",
      company: "Pratibimb Designs",
      period: "2023 - Present",
      location: "Ludhiana, India",
      type: "Entrepreneurship",
      description:
        "Founded and leading a creative design agency specializing in digital marketing, branding, and web development. Built a team of creative professionals and established partnerships with 50+ clients.",
      achievements: [
        "Built a creative design agency from ground up",
        "Managed 50+ client projects with 98% satisfaction rate",
        "Developed brand identities for startups and established businesses",
        "Created viral social media content with 1M+ combined reach",
      ],
      technologies: [
        "Adobe Creative Suite",
        "Figma",
        "Web Development",
        "Digital Marketing",
      ],
      color: "accent-purple",
    },

    {
      title: "Full Stack Developer Intern",
      company: "Unified Mentor Pvt. Ltd",
      period: "Apr 2025 - Jul 2025",
      location: "Remote",
      type: "Internship",
      description:
        "Developing full-stack web applications using modern technologies. Working on real-world projects involving React, Node.js, and database management while contributing to team goals.",
      achievements: [
        "Developed responsive web applications with React & Node.js",
        "Implemented RESTful APIs and database integration",
        "Collaborated with cross-functional teams on project delivery",
        "Gained hands-on experience with agile development methodologies",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git",
        "Agile",
      ],
      color: "accent-pink",
    },
    {
      title: "Computer Operator",
      company: "LG Electronics",
      period: "2025",
      location: "Ludhiana, India",
      type: "Part-time",
      description:
        "Supporting computer operations and technical tasks while managing data entry, system maintenance, and providing technical assistance to teams.",
      achievements: [
        "Maintained computer systems and databases",
        "Provided technical support to team members",
        "Streamlined data entry processes for efficiency",
        "Ensured system security and data integrity",
      ],
      technologies: [
        "Windows Systems",
        "MS Office",
        "Database Management",
        "Technical Support",
      ],
      color: "accent-orange",
    },
  ];

  const stats = [
    {
      icon: Briefcase,
      number: "3+",
      label: "Professional Roles",
      color: "accent-purple",
    },
    {
      icon: Users,
      number: "50+",
      label: "Clients Served",
      color: "accent-blue",
    },
    {
      icon: TrendingUp,
      number: "2+",
      label: "Years Experience",
      color: "accent-pink",
    },
    {
      icon: Award,
      number: "98%",
      label: "Client Satisfaction",
      color: "accent-orange",
    },
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
              — Professional Journey
            </p>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              Where I've Been
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              From entrepreneurship to technical leadership, building experience
              across multiple domains
            </p>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="stat-card glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 bg-${stat.color}/20 rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon size={24} className={`text-${stat.color}`} />
                  </div>
                  <h3 className={`text-2xl font-bold text-${stat.color} mb-2`}>
                    {stat.number}
                  </h3>
                  <p className="text-foreground/70 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Experience Timeline */}
          <div className="timeline-container" ref={timelineRef}>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item relative">
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Timeline Line */}
                    <div className="hidden lg:flex lg:col-span-1 justify-center">
                      <div className="relative">
                        <div
                          className={`w-4 h-4 bg-${exp.color} rounded-full border-4 border-background`}
                        />
                        {index !== experiences.length - 1 && (
                          <div className="absolute top-4 left-1/2 w-0.5 h-20 bg-gradient-to-b from-accent-purple/50 to-transparent transform -translate-x-1/2" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-11">
                      <div className="glass rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300">
                        <div className="grid lg:grid-cols-3 gap-8">
                          {/* Main Info */}
                          <div className="lg:col-span-2 space-y-6">
                            <div>
                              <div className="flex flex-wrap items-center gap-4 mb-4">
                                <span
                                  className={`px-3 py-1 bg-${exp.color}/20 text-${exp.color} rounded-full text-sm font-medium`}
                                >
                                  {exp.type}
                                </span>
                                <div className="flex items-center text-foreground/60 text-sm">
                                  <Calendar size={16} className="mr-2" />
                                  {exp.period}
                                </div>
                                <div className="flex items-center text-foreground/60 text-sm">
                                  <MapPin size={16} className="mr-2" />
                                  {exp.location}
                                </div>
                              </div>

                              <h2
                                className={`text-2xl font-bold text-${exp.color} mb-2`}
                              >
                                {exp.title}
                              </h2>
                              <div className="flex items-center space-x-2 mb-4">
                                <Building
                                  size={20}
                                  className="text-foreground/60"
                                />
                                <h3 className="text-xl text-foreground/90 font-semibold">
                                  {exp.company}
                                </h3>
                              </div>
                              <p className="text-foreground/80 leading-relaxed">
                                {exp.description}
                              </p>
                            </div>

                            {/* Key Achievements */}
                            <div>
                              <h4 className="text-lg font-semibold text-foreground/90 mb-4">
                                Key Achievements
                              </h4>
                              <ul className="space-y-2">
                                {exp.achievements.map(
                                  (achievement, achIndex) => (
                                    <li
                                      key={achIndex}
                                      className="flex items-start space-x-3"
                                    >
                                      <div
                                        className={`w-2 h-2 bg-${exp.color} rounded-full mt-2 flex-shrink-0`}
                                      />
                                      <span className="text-foreground/70">
                                        {achievement}
                                      </span>
                                    </li>
                                  ),
                                )}
                              </ul>
                            </div>
                          </div>

                          {/* Technologies */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold text-foreground/90 mb-4">
                                Technologies & Skills
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-3 py-1 bg-surface-light/50 text-foreground/70 rounded-lg text-sm border border-accent-purple/20"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Action Button */}
                            <div className="pt-4">
                              <button
                                className={`flex items-center space-x-2 px-4 py-2 bg-${exp.color}/10 text-${exp.color} rounded-lg hover:bg-${exp.color}/20 transition-colors`}
                              >
                                <ExternalLink size={16} />
                                <span className="text-sm font-medium">
                                  Learn More
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Goals */}
          <div className="glass rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              What's Next?
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              Continuing to push boundaries in AI, full-stack development, and
              entrepreneurship. Always open to new opportunities and exciting
              challenges.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-accent-purple">
                  AI Engineering
                </h3>
                <p className="text-foreground/70">
                  Diving deeper into machine learning and AI application
                  development
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-accent-blue">
                  Startup Growth
                </h3>
                <p className="text-foreground/70">
                  Scaling Pratibimb Designs and exploring new business ventures
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-accent-pink">
                  Global Impact
                </h3>
                <p className="text-foreground/70">
                  Building accessible technology solutions for worldwide reach
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
