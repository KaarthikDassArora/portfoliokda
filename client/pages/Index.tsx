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
} from "lucide-react";
import { Navigation } from "@/components/ui/navigation";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    startHeroAnimations();
  };

  const startHeroAnimations = () => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Background elements entrance
    tl.fromTo(
      ".bg-orb",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "back.out(1.7)",
        stagger: 0.2,
      },
    );

    // Hero content entrance with stagger
    tl.fromTo(
      nameRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
      },
      "-=1.2",
    )
      .fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6",
      )
      .fromTo(
        taglineRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4",
      )
      .fromTo(
        introRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3",
      )
      .fromTo(
        ctaRef.current?.children,
        {
          opacity: 0,
          y: 40,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
        },
        "-=0.4",
      );

    // Scroll indicator animation
    if (scrollIndicatorRef.current) {
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2",
      );
    }

    // Social links entrance
    tl.fromTo(
      ".social-link",
      {
        opacity: 0,
        x: -30,
        scale: 0.8,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.1,
      },
      "-=0.3",
    );

    // Floating icons
    tl.fromTo(
      ".floating-icon",
      {
        opacity: 0,
        scale: 0,
        rotation: -45,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
      },
      "-=0.5",
    );
  };

  useEffect(() => {
    if (!isLoading) {
      // Parallax effects
      gsap.to(".bg-orb", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Floating animations
      gsap.to(".floating-icon", {
        y: -10,
        rotation: 5,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });

      // Text reveal on scroll for sections
      gsap.fromTo(
        ".reveal-section",
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".reveal-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />

      {/* Background Elements */}
      <div className="fixed inset-0 modern-grid opacity-20" />
      <div className="fixed inset-0 gradient-mesh" />

      {/* Floating Background Orbs */}
      <div className="bg-orb fixed top-20 left-10 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl" />
      <div className="bg-orb fixed bottom-20 right-10 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl" />
      <div className="bg-orb fixed top-1/2 left-1/2 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Floating Icons */}
          <div className="floating-icon absolute top-20 left-20 text-accent-purple/60">
            <Code size={40} />
          </div>
          <div className="floating-icon absolute bottom-40 right-20 text-accent-pink/60">
            <Brain size={40} />
          </div>
          <div className="floating-icon absolute top-40 right-40 text-accent-blue/60">
            <Palette size={40} />
          </div>
          <div className="floating-icon absolute bottom-20 left-40 text-accent-orange/60">
            <Sparkles size={40} />
          </div>
          <div className="floating-icon absolute top-60 left-60 text-gradient-middle/60">
            <Zap size={40} />
          </div>

          {/* Main Name */}
          <h1
            ref={nameRef}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight"
          >
            <span className="gradient-text">Kaarthik Dass Arora</span>
          </h1>

          {/* Subtitle */}
          <div ref={titleRef} className="space-y-4">
            <p className="text-2xl md:text-3xl lg:text-4xl text-foreground/90 font-light">
              Aspiring{" "}
              <span className="text-accent-blue font-semibold text-glow">
                AI Engineer
              </span>{" "}
              |{" "}
              <span className="text-accent-purple font-semibold text-glow">
                Full Stack Developer
              </span>{" "}
              |{" "}
              <span className="text-accent-pink font-semibold text-glow">
                Design Enthusiast
              </span>
            </p>
          </div>

          {/* Tagline */}
          <p
            ref={taglineRef}
            className="text-xl md:text-2xl text-foreground/80 font-light max-w-4xl mx-auto"
          >
            Crafting intelligent solutions, pixel-perfect interfaces, and
            real-world impact through code.
          </p>

          {/* Introduction */}
          <div ref={introRef} className="max-w-5xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              I'm a passionate and driven developer from{" "}
              <span className="text-accent-purple font-medium">
                Ludhiana 🇮🇳
              </span>
              , currently pursuing{" "}
              <span className="text-accent-blue font-medium">
                B.Tech in CSE (AI & ML)
              </span>
              . With a deep love for clean code, smart design, and real-world
              automation, I build projects that blend innovation and
              accessibility.
            </p>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Whether it's full-stack apps, intelligent assistants, or tools for
              the visually impaired — my mission is clear:{" "}
              <span className="gradient-text font-semibold">
                Code with purpose. Create with impact.
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col lg:flex-row gap-6 justify-center items-center pt-8"
          >
            <Link to="/projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gradient-start to-gradient-middle hover:from-gradient-middle hover:to-gradient-end text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
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
                className="border-2 border-accent-purple text-accent-purple hover:bg-accent-purple/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 group"
              >
                <Mail
                  size={20}
                  className="mr-2 group-hover:rotate-12 transition-transform"
                />
                Let's Collaborate
              </Button>
            </Link>
            <Button
              onClick={handleDownloadResume}
              variant="ghost"
              size="lg"
              className="text-foreground/70 hover:text-accent-pink px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 group"
            >
              <Download
                size={20}
                className="mr-2 group-hover:translate-y-1 transition-transform"
              />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/kaarthikdass"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-foreground/60 hover:text-accent-purple transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/kaarthikdass"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-foreground/60 hover:text-accent-blue transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://instagram.com/kaarthikdass"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-foreground/60 hover:text-accent-pink transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Instagram size={28} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/60 cursor-pointer group"
          onClick={() => {
            const nextSection = document.querySelector(".reveal-section");
            nextSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
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

      {/* Philosophy Section */}
      <section className="reveal-section py-32 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            My Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-accent-purple to-accent-pink rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Code size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-accent-purple">
                Code is my canvas
              </h3>
              <p className="text-foreground/70">
                Every line of code is a brushstroke in the masterpiece of
                innovation.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-accent-blue to-accent-purple rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Brain size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-accent-blue">
                AI is my brush
              </h3>
              <p className="text-foreground/70">
                Artificial intelligence amplifies human creativity and solves
                complex problems.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-accent-pink to-accent-orange rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Palette size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-accent-pink">
                Design is my vision
              </h3>
              <p className="text-foreground/70">
                Beautiful interfaces and intuitive experiences make technology
                accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quotes */}
      <section className="reveal-section py-32 px-4 bg-surface/30">
        <div className="max-w-4xl mx-auto space-y-16">
          {[
            "Building a smarter world, one line at a time.",
            "Designed to disrupt. Engineered to empower.",
            "Accessibility isn't a feature — it's a foundation.",
            "Innovation starts where convention ends.",
          ].map((quote, index) => (
            <div
              key={index}
              className="text-center py-8 glass rounded-2xl hover:scale-105 transition-all duration-300"
            >
              <p className="text-2xl md:text-3xl font-light gradient-text">
                "{quote}"
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
