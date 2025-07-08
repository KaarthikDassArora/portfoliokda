import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Instagram,
  ChevronDown,
  Code,
  Brain,
  Palette,
  ArrowRight,
  Sparkles,
  Zap,
  MapPin,
  Calendar,
  User,
  Briefcase,
} from "lucide-react";
import { Navigation } from "@/components/ui/navigation";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    startAnimations();
  };

  const startAnimations = () => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Hero animations
    tl.fromTo(
      ".hero-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.2 },
    );

    // Scroll-triggered animations
    gsap.fromTo(
      ".card-reveal",
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".card-reveal",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Services cards animation
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 40, rotateY: 15 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".service-card",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  };

  useEffect(() => {
    if (!isLoading) {
      startAnimations();
    }
  }, [isLoading]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Kaarthik_Dass_Arora_Resume.pdf";
    link.click();
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="fixed inset-0 modern-grid opacity-10" />
        <div className="fixed inset-0 gradient-mesh opacity-50" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="hero-content space-y-6">
              <div className="space-y-2">
                <p className="text-accent-purple font-medium tracking-wide uppercase text-sm">
                  — Hello, I'm
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-text">Kaarthik</span>
                  <br />
                  <span className="gradient-text">Dass Arora</span>
                </h1>
              </div>

              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-foreground/90 font-light">
                  Aspiring{" "}
                  <span className="text-accent-blue font-semibold">
                    AI Engineer
                  </span>{" "}
                  &{" "}
                  <span className="text-accent-purple font-semibold">
                    Full Stack Developer
                  </span>
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                  Crafting intelligent solutions, pixel-perfect interfaces, and
                  real-world impact through code. Building the future with AI
                  and accessibility in mind.
                </p>
              </div>

              {/* Quick Info Cards */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-surface-light/50 backdrop-blur-sm px-4 py-2 rounded-full border border-accent-purple/20">
                  <MapPin size={16} className="text-accent-purple" />
                  <span className="text-sm text-foreground/80">
                    Ludhiana, India
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-surface-light/50 backdrop-blur-sm px-4 py-2 rounded-full border border-accent-blue/20">
                  <Calendar size={16} className="text-accent-blue" />
                  <span className="text-sm text-foreground/80">
                    B.Tech CSE (AI & ML)
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-gradient-start to-gradient-middle hover:from-gradient-middle hover:to-gradient-end text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <ArrowRight
                      size={20}
                      className="mr-2 group-hover:translate-x-1 transition-transform"
                    />
                    Explore My Work
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-accent-purple text-accent-purple hover:bg-accent-purple/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Mail size={20} className="mr-2" />
                    Let's Collaborate
                  </Button>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/kaarthikdass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface-light/50 backdrop-blur-sm rounded-xl border border-accent-purple/20 hover:border-accent-purple/40 hover:bg-accent-purple/10 transition-all duration-300 hover:scale-110"
                >
                  <Github
                    size={20}
                    className="text-foreground/70 hover:text-accent-purple"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/kaarthikdass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface-light/50 backdrop-blur-sm rounded-xl border border-accent-blue/20 hover:border-accent-blue/40 hover:bg-accent-blue/10 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin
                    size={20}
                    className="text-foreground/70 hover:text-accent-blue"
                  />
                </a>
                <a
                  href="https://instagram.com/kaarthikdass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface-light/50 backdrop-blur-sm rounded-xl border border-accent-pink/20 hover:border-accent-pink/40 hover:bg-accent-pink/10 transition-all duration-300 hover:scale-110"
                >
                  <Instagram
                    size={20}
                    className="text-foreground/70 hover:text-accent-pink"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="hero-content flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-gradient-to-r from-gradient-start to-gradient-end shadow-2xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F01d7d241c1954334a3f0d0e345e8ae28%2F2358ed438af1495ab12823ffe0eb3114?format=webp&width=800"
                  alt="Kaarthik Dass Arora"
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                />
              </div>
              {/* Floating elements around image */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent-purple/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-accent-purple/30">
                <Code size={24} className="text-accent-purple" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent-blue/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-accent-blue/30">
                <Brain size={24} className="text-accent-blue" />
              </div>
              <div className="absolute top-1/2 -right-8 w-10 h-10 bg-accent-pink/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-accent-pink/30">
                <Palette size={20} className="text-accent-pink" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/60 cursor-pointer group">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm group-hover:text-accent-purple transition-colors">
              Scroll to explore
            </span>
            <ChevronDown
              size={24}
              className="animate-bounce group-hover:text-accent-purple transition-colors"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* About Content */}
            <div className="card-reveal space-y-8">
              <div>
                <p className="text-accent-purple font-medium tracking-wide uppercase text-sm mb-4">
                  — About Me
                </p>
                <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                  The Story So Far
                </h2>
              </div>

              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  I'm a passionate and driven developer from{" "}
                  <span className="text-accent-purple font-medium">
                    Ludhiana, India
                  </span>
                  , currently pursuing{" "}
                  <span className="text-accent-blue font-medium">
                    B.Tech in CSE (AI & ML)
                  </span>{" "}
                  at Gulzar Group of Institutes.
                </p>
                <p>
                  With a deep love for clean code, smart design, and real-world
                  automation, I build projects that blend innovation and
                  accessibility. Whether it's full-stack apps, intelligent
                  assistants, or tools for the visually impaired — my mission is
                  clear:{" "}
                  <span className="gradient-text font-semibold">
                    Code with purpose. Create with impact.
                  </span>
                </p>
                <p>
                  I believe in building technology that empowers people and
                  creates meaningful change in the world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleDownloadResume}
                  className="bg-gradient-to-r from-gradient-start to-gradient-middle text-white px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <Download size={18} className="mr-2" />
                  Download Resume
                </Button>
                <Link to="/about">
                  <Button
                    variant="outline"
                    className="border-accent-purple text-accent-purple hover:bg-accent-purple/10 px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    <User size={18} className="mr-2" />
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="card-reveal grid grid-cols-2 gap-6">
              <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code size={24} className="text-accent-purple" />
                </div>
                <h3 className="text-2xl font-bold text-accent-purple mb-2">
                  15+
                </h3>
                <p className="text-foreground/70 text-sm">Projects Built</p>
              </div>

              <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain size={24} className="text-accent-blue" />
                </div>
                <h3 className="text-2xl font-bold text-accent-blue mb-2">AI</h3>
                <p className="text-foreground/70 text-sm">Focus Area</p>
              </div>

              <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-accent-pink/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase size={24} className="text-accent-pink" />
                </div>
                <h3 className="text-2xl font-bold text-accent-pink mb-2">2+</h3>
                <p className="text-foreground/70 text-sm">Years Experience</p>
              </div>

              <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-accent-orange/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles size={24} className="text-accent-orange" />
                </div>
                <h3 className="text-2xl font-bold text-accent-orange mb-2">
                  ∞
                </h3>
                <p className="text-foreground/70 text-sm">Ideas & Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-32 px-4 bg-surface/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <p className="text-accent-purple font-medium tracking-wide uppercase text-sm mb-4">
              — My Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              What I Do Best
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              I specialize in creating intelligent, accessible, and beautiful
              digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-purple to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                <Code size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-accent-purple mb-4">
                Full Stack Development
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Building end-to-end applications with modern technologies like
                React, Next.js, Node.js, and Python. From concept to deployment.
              </p>
            </div>

            <div className="service-card glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-pink rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                <Brain size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-accent-blue mb-4">
                AI & Machine Learning
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Developing intelligent systems, computer vision applications,
                and automation tools that solve real-world problems.
              </p>
            </div>

            <div className="service-card glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-pink to-accent-orange rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                <Palette size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-accent-pink mb-4">
                UI/UX Design
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Creating beautiful, intuitive, and accessible interfaces that
                prioritize user experience and inclusive design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div>
            <p className="text-accent-purple font-medium tracking-wide uppercase text-sm mb-4">
              — My Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              Core Beliefs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Code is my canvas. AI is my brush.",
                description:
                  "Every line of code is a brushstroke in creating intelligent solutions.",
              },
              {
                quote: "Building a smarter world, one line at a time.",
                description:
                  "Technology should empower and enhance human capabilities.",
              },
              {
                quote: "Accessibility isn't a feature — it's a foundation.",
                description:
                  "Inclusive design makes technology available to everyone.",
              },
              {
                quote: "Innovation starts where convention ends.",
                description: "Breaking boundaries to create meaningful change.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card-reveal glass rounded-2xl p-8 hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold gradient-text mb-4">
                  "{item.quote}"
                </h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
