import { useEffect, useRef } from "react";
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
} from "lucide-react";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  animateHeroText,
  animateStagger,
  addFloatingAnimation,
  addGlitchEffect,
} from "@/components/animations/gsap-utils";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero entrance animation
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate background grid
    tl.fromTo(
      ".cyber-grid",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" },
    );

    // Animate hero content
    if (nameRef.current && titleRef.current && ctaRef.current) {
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
          ctaRef.current.children,
          {
            opacity: 0,
            y: 30,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
          },
          "-=0.4",
        );
    }

    // Floating animation for scroll indicator
    if (scrollIndicatorRef.current) {
      addFloatingAnimation(scrollIndicatorRef.current);
    }

    // Glitch effect for name
    if (nameRef.current) {
      setTimeout(() => {
        addGlitchEffect(nameRef.current!);
      }, 3000);
    }

    // Social links animation
    gsap.fromTo(
      ".social-link",
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        delay: 2,
      },
    );

    // Parallax effect for background elements
    gsap.to(".bg-element", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const handleDownloadResume = () => {
    // Create a temporary link to download resume
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // You'll need to add this file to public folder
    link.download = "Kaarthik_Dass_Arora_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />

      {/* Background Grid */}
      <div className="cyber-grid fixed inset-0 opacity-20" />

      {/* Background Elements */}
      <div className="bg-element absolute top-20 left-10 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl" />
      <div className="bg-element absolute bottom-20 right-10 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl" />
      <div className="bg-element absolute top-1/2 left-1/2 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl" />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Name */}
          <h1
            ref={nameRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            <span className="text-neon-cyan neon-glow">Kaarthik</span>{" "}
            <span className="text-neon-pink neon-glow">Dass</span>{" "}
            <span className="text-neon-purple neon-glow">Arora</span>
          </h1>

          {/* Title */}
          <div ref={titleRef} className="space-y-4">
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-light">
              Aspiring{" "}
              <span className="text-electric-blue font-semibold">
                AI Engineer
              </span>{" "}
              |{" "}
              <span className="text-neon-cyan font-semibold">
                Full Stack Developer
              </span>{" "}
              |{" "}
              <span className="text-neon-pink font-semibold">
                Design Enthusiast
              </span>
            </p>
            <p className="text-lg text-foreground/70">
              From Ludhiana, India 🇮🇳 | B.Tech CSE (AI & ML) | Gulzar Group of
              Institutes
            </p>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-20 left-20 text-neon-cyan opacity-30">
            <Code size={40} className="float" />
          </div>
          <div className="absolute bottom-40 right-20 text-neon-pink opacity-30">
            <Brain
              size={40}
              className="float"
              style={{ animationDelay: "1s" }}
            />
          </div>
          <div className="absolute top-40 right-40 text-neon-purple opacity-30">
            <Palette
              size={40}
              className="float"
              style={{ animationDelay: "2s" }}
            />
          </div>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleDownloadResume}
              className="bg-neon-cyan text-background hover:bg-neon-cyan/90 px-8 py-6 text-lg font-semibold neon-border transition-all duration-300 hover:scale-105"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </Button>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-neon-pink text-neon-pink hover:bg-neon-pink/10 px-8 py-6 text-lg font-semibold neon-border transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} className="mr-2" />
                Contact Me
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/kaarthikdass"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-foreground/60 hover:text-neon-cyan transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/kaarthikdass"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-foreground/60 hover:text-electric-blue transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com/kaarthikdass"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-foreground/60 hover:text-neon-pink transition-all duration-300 hover:scale-110"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/60 cursor-pointer"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown size={24} className="animate-bounce" />
          </div>
        </div>
      </section>

      {/* Quick Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-card/50 backdrop-blur-sm border border-neon-cyan/30 rounded-lg p-8 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <Code size={48} className="mx-auto mb-4 text-neon-cyan" />
              <h3 className="text-xl font-semibold mb-2 text-neon-cyan">
                Full Stack Development
              </h3>
              <p className="text-foreground/70">
                Building end-to-end applications with modern technologies
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-neon-pink/30 rounded-lg p-8 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <Brain size={48} className="mx-auto mb-4 text-neon-pink" />
              <h3 className="text-xl font-semibold mb-2 text-neon-pink">
                AI & Machine Learning
              </h3>
              <p className="text-foreground/70">
                Exploring the frontiers of artificial intelligence
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-neon-purple/30 rounded-lg p-8 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <Palette size={48} className="mx-auto mb-4 text-neon-purple" />
              <h3 className="text-xl font-semibold mb-2 text-neon-purple">
                Design & Innovation
              </h3>
              <p className="text-foreground/70">
                Creating beautiful and user-centric experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Page Transition Overlay */}
      <div className="page-transition fixed inset-0 bg-neon-cyan z-50 origin-left scale-x-0" />
    </div>
  );
}
