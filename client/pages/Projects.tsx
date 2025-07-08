import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/ui/navigation";
import {
  ExternalLink,
  Github,
  Play,
  Code,
  Smartphone,
  ShoppingCart,
  FileText,
  Home,
  DollarSign,
  Link as LinkIcon,
  Eye,
  Palette,
  Bot,
  Users,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Animate project cards on scroll
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Animate featured project
    gsap.fromTo(
      ".featured-project",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".featured-project",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  const projects = [
    {
      title: "Orbit",
      subtitle: "Typing for visually impaired",
      description:
        "An innovative accessibility application designed to help visually impaired users type efficiently with voice feedback, haptic responses, and adaptive UI/UX design.",
      image: "/api/placeholder/400/250",
      technologies: [
        "React.js",
        "Web Speech API",
        "Accessibility",
        "TypeScript",
        "Tailwind CSS",
      ],
      category: "accessibility",
      featured: true,
      liveUrl: "#",
      githubUrl: "#",
      icon: Eye,
      color: "accent-purple",
    },
    {
      title: "Jarvis Assistant",
      subtitle: "AI-powered personal assistant",
      description:
        "Intelligent virtual assistant with natural language processing, voice commands, task automation, and smart home integration capabilities.",
      image: "/api/placeholder/400/250",
      technologies: [
        "Python",
        "OpenAI API",
        "Speech Recognition",
        "Flask",
        "Machine Learning",
      ],
      category: "ai",
      liveUrl: "#",
      githubUrl: "#",
      icon: Bot,
      color: "accent-blue",
    },
    {
      title: "Binary Options Bot",
      subtitle: "Automated trading system",
      description:
        "Advanced trading bot with real-time market analysis, risk management algorithms, and automated decision-making for binary options trading.",
      image: "/api/placeholder/400/250",
      technologies: [
        "Python",
        "TensorFlow",
        "API Integration",
        "Data Analysis",
        "Algorithms",
      ],
      category: "fintech",
      liveUrl: "#",
      githubUrl: "#",
      icon: DollarSign,
      color: "accent-pink",
    },
    {
      title: "Facial Attendance System",
      subtitle: "Computer vision solution",
      description:
        "AI-powered attendance tracking system using facial recognition technology with OpenCV, real-time detection, and secure data management.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "OpenCV", "Face Recognition", "Flask", "SQLite"],
      category: "ai",
      liveUrl: "#",
      githubUrl: "#",
      icon: Users,
      color: "accent-orange",
    },
    {
      title: "MTI Electronics",
      subtitle: "E-commerce electronics store",
      description:
        "Modern e-commerce platform for electronics with product catalog, shopping cart, payment integration, and responsive design.",
      image: "/api/placeholder/400/250",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Stripe API",
        "Tailwind CSS",
      ],
      category: "ecommerce",
      liveUrl: "#",
      githubUrl: "#",
      icon: Smartphone,
      color: "accent-purple",
    },
    {
      title: "Epikcart",
      subtitle: "Modern shopping platform",
      description:
        "Feature-rich e-commerce solution with advanced filtering, user reviews, wishlist functionality, and seamless checkout experience.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
      category: "ecommerce",
      liveUrl: "#",
      githubUrl: "#",
      icon: ShoppingCart,
      color: "accent-blue",
    },
    {
      title: "Resume Roaster",
      subtitle: "AI resume analyzer",
      description:
        "Intelligent resume analysis tool that provides detailed feedback, ATS optimization suggestions, and improvement recommendations.",
      image: "/api/placeholder/400/250",
      technologies: [
        "React.js",
        "OpenAI API",
        "PDF Processing",
        "Node.js",
        "Express",
      ],
      category: "ai",
      liveUrl: "#",
      githubUrl: "#",
      icon: FileText,
      color: "accent-pink",
    },
    {
      title: "Real Estate Platform",
      subtitle: "Property management system",
      description:
        "Comprehensive real estate platform with property listings, search filters, virtual tours, and client management dashboard.",
      image: "/api/placeholder/400/250",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Google Maps API",
        "Chart.js",
      ],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      icon: Home,
      color: "accent-orange",
    },
    {
      title: "Consulting Finance",
      subtitle: "Financial consulting platform",
      description:
        "Professional financial consulting website with service showcase, client portal, appointment booking, and financial calculators.",
      image: "/api/placeholder/400/250",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "CMS",
      ],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      icon: DollarSign,
      color: "accent-purple",
    },
    {
      title: "devLinks",
      subtitle: "Developer link management",
      description:
        "Centralized platform for developers to manage and share their professional links, portfolios, and social media profiles.",
      image: "/api/placeholder/400/250",
      technologies: [
        "React.js",
        "Firebase",
        "Authentication",
        "Drag & Drop",
        "PWA",
      ],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      icon: LinkIcon,
      color: "accent-blue",
    },
    {
      title: "iPhone 15 Landing Page",
      subtitle: "Product showcase website",
      description:
        "Stunning iPhone 15 product page with smooth animations, 3D interactions, and responsive design showcasing Apple's latest device.",
      image: "/api/placeholder/400/250",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP", "Three.js"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      icon: Smartphone,
      color: "accent-pink",
    },
    {
      title: "Pratibimb Designs",
      subtitle: "Creative design portfolio",
      description:
        "Professional design agency portfolio showcasing creative projects, team profiles, client testimonials, and service offerings.",
      image: "/api/placeholder/400/250",
      technologies: [
        "Next.js",
        "Framer Motion",
        "Tailwind CSS",
        "TypeScript",
        "CMS",
      ],
      category: "design",
      liveUrl: "#",
      githubUrl: "#",
      icon: Palette,
      color: "accent-orange",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "ai",
      label: "AI & ML",
      count: projects.filter((p) => p.category === "ai").length,
    },
    {
      id: "web",
      label: "Web Apps",
      count: projects.filter((p) => p.category === "web").length,
    },
    {
      id: "ecommerce",
      label: "E-commerce",
      count: projects.filter((p) => p.category === "ecommerce").length,
    },
    {
      id: "accessibility",
      label: "Accessibility",
      count: projects.filter((p) => p.category === "accessibility").length,
    },
    {
      id: "fintech",
      label: "Fintech",
      count: projects.filter((p) => p.category === "fintech").length,
    },
    {
      id: "design",
      label: "Design",
      count: projects.filter((p) => p.category === "design").length,
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

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
              — Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              Things I've Built
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              From AI-powered applications to e-commerce platforms, here's a
              showcase of my best work
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setFilter(category.id)}
                variant={filter === category.id ? "default" : "outline"}
                className={`px-6 py-2 rounded-xl transition-all duration-300 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-gradient-start to-gradient-middle text-white"
                    : "border-accent-purple/30 text-foreground/70 hover:bg-accent-purple/10"
                }`}
              >
                <Filter size={16} className="mr-2" />
                {category.label} ({category.count})
              </Button>
            ))}
          </div>

          {/* Featured Project */}
          {featuredProject && filter === "all" && (
            <div className="featured-project">
              <div className="glass rounded-3xl p-8 lg:p-12 hover:scale-[1.02] transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Project Info */}
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-4 py-2 bg-accent-purple/20 text-accent-purple rounded-full text-sm font-medium">
                          ⭐ Featured Project
                        </span>
                        <div
                          className={`w-8 h-8 bg-${featuredProject.color}/20 rounded-lg flex items-center justify-center`}
                        >
                          <featuredProject.icon
                            size={20}
                            className={`text-${featuredProject.color}`}
                          />
                        </div>
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
                        {featuredProject.title}
                      </h2>
                      <p
                        className={`text-xl text-${featuredProject.color} font-medium mb-6`}
                      >
                        {featuredProject.subtitle}
                      </p>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        {featuredProject.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground/90 mb-4">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {featuredProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-surface-light/50 text-foreground/80 rounded-xl text-sm border border-accent-purple/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-gradient-to-r from-gradient-start to-gradient-middle text-white px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300">
                        <Play size={18} className="mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        className="border-accent-purple text-accent-purple hover:bg-accent-purple/10 px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300"
                      >
                        <Github size={18} className="mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 rounded-2xl overflow-hidden border border-accent-purple/30">
                      <div className="w-full h-full bg-surface-light/50 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <featuredProject.icon
                            size={48}
                            className={`text-${featuredProject.color} mx-auto`}
                          />
                          <p className="text-foreground/60">Project Preview</p>
                        </div>
                      </div>
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent-purple/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-accent-purple/30">
                      <Code size={24} className="text-accent-purple" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(filter === "all" ? regularProjects : filteredProjects).map(
              (project, index) => {
                const Icon = project.icon;
                return (
                  <div
                    key={index}
                    className="project-card glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
                  >
                    {/* Project Image */}
                    <div className="aspect-video bg-gradient-to-br from-accent-purple/10 to-accent-pink/10 relative overflow-hidden">
                      <div className="w-full h-full bg-surface-light/30 flex items-center justify-center">
                        <Icon
                          size={40}
                          className={`text-${project.color} group-hover:scale-110 transition-transform`}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-accent-purple/20 transition-colors">
                          <ExternalLink
                            size={16}
                            className="text-accent-purple"
                          />
                        </button>
                        <button className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-accent-blue/20 transition-colors">
                          <Github size={16} className="text-accent-blue" />
                        </button>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3
                          className={`text-xl font-bold text-${project.color} mb-2`}
                        >
                          {project.title}
                        </h3>
                        <p className="text-foreground/60 text-sm mb-3">
                          {project.subtitle}
                        </p>
                        <p className="text-foreground/80 text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-surface-light/50 text-foreground/70 rounded-md text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-surface-light/50 text-foreground/60 rounded-md text-xs">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center glass rounded-2xl p-12">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Want to see more?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              These are just some highlights. I'm constantly working on new
              projects and exploring cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-gradient-start to-gradient-middle text-white px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300">
                <Github size={18} className="mr-2" />
                Visit GitHub
              </Button>
              <Button
                variant="outline"
                className="border-accent-purple text-accent-purple hover:bg-accent-purple/10 px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300"
              >
                <ExternalLink size={18} className="mr-2" />
                View Live Demos
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
