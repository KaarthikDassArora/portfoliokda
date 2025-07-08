import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Target,
  Heart,
  Lightbulb,
  Clock,
  Cake,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Calculate real-time age
  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date(2007, 9, 2); // October 2, 2007 (month is 0-indexed)
      const today = new Date();

      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();

      // Adjust for negative days
      if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
      }

      // Adjust for negative months
      if (months < 0) {
        years--;
        months += 12;
      }

      setAge({ years, months, days });
    };

    calculateAge();
    const interval = setInterval(calculateAge, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(interval);
  }, []);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced hero section with spectacular entrance
      const heroTl = gsap.timeline({ delay: 0.3 });

      heroTl
        .fromTo(
          ".about-hero",
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
            rotateX: 45,
            filter: "blur(15px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.2,
          },
        )
        .fromTo(
          ".hero-subtitle",
          {
            opacity: 0,
            scale: 0.5,
            rotation: 10,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.5",
        );

      // Floating animation for cards
      gsap.to(".float-card", {
        y: -10,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });

      // Card reveal animation on scroll
      gsap.fromTo(
        ".reveal-card",
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
          rotateY: 15,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".cards-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Mission/Vision cards with cool 3D effect
      gsap.fromTo(
        ".mission-card",
        {
          opacity: 0,
          z: -100,
          rotateX: 45,
          scale: 0.8,
        },
        {
          opacity: 1,
          z: 0,
          rotateX: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".mission-container",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Philosophy section with wave animation
      gsap.fromTo(
        ".philosophy-content",
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".philosophy-container",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Timeline items with stagger effect
      gsap.fromTo(
        ".timeline-item",
        {
          opacity: 0,
          x: -50,
          scale: 0.8,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Age counter animation with spectacular effects
      gsap.fromTo(
        ".age-counter",
        {
          opacity: 0,
          scale: 0.2,
          rotation: 360,
          y: 100,
          filter: "blur(20px)",
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          y: 0,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: ".age-container",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Particle system animation
      gsap.to(".particle", {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        rotation: "random(0, 360)",
        scale: "random(0.5, 1.5)",
        duration: "random(3, 6)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
      });

      // Text shimmer effect
      gsap.to(".text-shimmer", {
        backgroundPosition: "200% center",
        duration: 2,
        ease: "none",
        repeat: -1,
      });

      // Morphing background shapes
      gsap.to(".morph-shape", {
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToCardRefs = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };
  return (
    <div className="min-h-screen bg-background overflow-hidden" ref={heroRef}>
      <Navigation />
      <div className="fixed inset-0 modern-grid opacity-10" />
      <div className="fixed inset-0 gradient-mesh opacity-50" />

      {/* Animated Particle System */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="particle absolute top-20 left-10 w-2 h-2 bg-accent-purple/30 rounded-full" />
        <div className="particle absolute top-40 right-20 w-3 h-3 bg-accent-pink/20 rounded-full" />
        <div className="particle absolute bottom-40 left-1/4 w-1 h-1 bg-accent-blue/40 rounded-full" />
        <div className="particle absolute bottom-60 right-1/3 w-4 h-4 bg-accent-orange/25 rounded-full" />
        <div className="particle absolute top-1/2 left-1/2 w-2 h-2 bg-accent-purple/35 rounded-full" />
        <div className="particle absolute top-1/3 left-1/6 w-3 h-3 bg-accent-pink/30 rounded-full" />
      </div>

      {/* Morphing Background Shapes */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="morph-shape absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-accent-purple/5 to-accent-pink/5 rounded-full blur-xl" />
        <div className="morph-shape absolute bottom-40 right-40 w-48 h-48 bg-gradient-to-r from-accent-blue/5 to-accent-orange/5 rounded-full blur-2xl" />
      </div>

      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Enhanced Header */}
          <div className="about-hero text-center space-y-6">
            <div className="hero-subtitle flex items-center justify-center space-x-2">
              <Sparkles
                size={16}
                className="text-accent-purple animate-pulse"
              />
              <p className="text-accent-purple font-medium tracking-wide uppercase text-sm">
                — About Me
              </p>
              <Sparkles
                size={16}
                className="text-accent-purple animate-pulse"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text text-shimmer relative">
              The Story So Far
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-purple/20 via-accent-pink/20 to-accent-blue/20 rounded-2xl blur-xl -z-10 animate-pulse" />
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              A passionate developer on a mission to create meaningful impact
              through technology ✨
            </p>
          </div>

          {/* Real-time Age Display */}
          <div className="age-container flex justify-center">
            <div className="age-counter glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-purple to-accent-pink rounded-xl flex items-center justify-center">
                  <Cake size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">
                  Live Age Counter
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent-purple">
                    {age.years}
                  </div>
                  <div className="text-sm text-foreground/60">Years</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent-blue">
                    {age.months}
                  </div>
                  <div className="text-sm text-foreground/60">Months</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent-pink">
                    {age.days}
                  </div>
                  <div className="text-sm text-foreground/60">Days</div>
                </div>
              </div>
              <p className="text-foreground/60 text-sm mt-4 flex items-center justify-center space-x-2">
                <Clock size={14} />
                <span>Born October 2, 2007 • Updates in real-time</span>
              </p>
            </div>
          </div>

          {/* Personal Info Cards */}
          <div className="cards-container grid md:grid-cols-3 gap-8">
            <div
              className="reveal-card float-card glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
              ref={addToCardRefs}
            >
              <div className="w-16 h-16 bg-accent-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} className="text-accent-blue" />
              </div>
              <h3 className="text-xl font-semibold text-accent-blue mb-2">
                Location
              </h3>
              <p className="text-foreground/70">Ludhiana, Punjab, India</p>
              <p className="text-foreground/60 text-sm mt-2">
                🇮🇳 Open to remote work globally
              </p>
            </div>

            <div
              className="reveal-card float-card glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
              ref={addToCardRefs}
            >
              <div className="w-16 h-16 bg-accent-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GraduationCap size={32} className="text-accent-purple" />
              </div>
              <h3 className="text-xl font-semibold text-accent-purple mb-2">
                Education
              </h3>
              <p className="text-foreground/70">B.Tech CSE (AI & ML)</p>
              <p className="text-foreground/60 text-sm mt-2">
                Gulzar Group of Institutes (2025–2029)
              </p>
            </div>

            <div
              className="reveal-card float-card glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
              ref={addToCardRefs}
            >
              <div className="w-16 h-16 bg-accent-pink/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar size={32} className="text-accent-pink" />
              </div>
              <h3 className="text-xl font-semibold text-accent-pink mb-2">
                Journey
              </h3>
              <p className="text-foreground/70">2+ Years Coding</p>
              <p className="text-foreground/60 text-sm mt-2">
                Started in 2022, never looked back
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mission-container grid lg:grid-cols-2 gap-12">
            <div className="mission-card glass rounded-2xl p-10 space-y-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center">
                  <Target size={24} className="text-accent-purple" />
                </div>
                <h2 className="text-2xl font-bold text-accent-purple">
                  My Mission
                </h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                <span className="gradient-text font-semibold">
                  Empowering through AI and Accessibility
                </span>{" "}
                - I believe technology should be a bridge, not a barrier. My
                mission is to build intelligent solutions that make the digital
                world more accessible and inclusive for everyone.
              </p>
              <div className="space-y-3 text-foreground/70">
                <p>• Creating tools for the visually impaired</p>
                <p>• Building AI that amplifies human potential</p>
                <p>• Making complex technology simple and accessible</p>
              </div>
            </div>

            <div className="mission-card glass rounded-2xl p-10 space-y-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-xl flex items-center justify-center">
                  <Heart size={24} className="text-accent-blue" />
                </div>
                <h2 className="text-2xl font-bold text-accent-blue">
                  What Drives Me
                </h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm driven by the belief that{" "}
                <span className="gradient-text font-semibold">
                  code with purpose creates lasting impact
                </span>
                . Every project I work on aims to solve real problems and make
                someone's life a little better.
              </p>
              <div className="space-y-3 text-foreground/70">
                <p>• Real-world problem solving</p>
                <p>• Clean, maintainable code</p>
                <p>• Continuous learning and growth</p>
              </div>
            </div>
          </div>

          {/* Skills Philosophy */}
          <div className="philosophy-container">
            <div className="philosophy-content glass rounded-2xl p-12 text-center space-y-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gradient-start to-gradient-end rounded-2xl flex items-center justify-center">
                  <Lightbulb size={32} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">
                  My Approach
                </h2>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl text-foreground/80 leading-relaxed">
                  I believe in the intersection of{" "}
                  <span className="text-accent-purple font-semibold">
                    artificial intelligence
                  </span>
                  ,
                  <span className="text-accent-blue font-semibold">
                    {" "}
                    beautiful design
                  </span>
                  , and
                  <span className="text-accent-pink font-semibold">
                    {" "}
                    human-centered development
                  </span>
                  .
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="space-y-4 p-6 rounded-xl bg-surface-light/30 hover:bg-surface-light/50 transition-colors">
                    <h3 className="text-lg font-semibold text-accent-purple">
                      Think AI-First
                    </h3>
                    <p className="text-foreground/70">
                      Every solution starts with how AI can make it smarter,
                      faster, and more intuitive.
                    </p>
                  </div>
                  <div className="space-y-4 p-6 rounded-xl bg-surface-light/30 hover:bg-surface-light/50 transition-colors">
                    <h3 className="text-lg font-semibold text-accent-blue">
                      Design with Purpose
                    </h3>
                    <p className="text-foreground/70">
                      Beautiful interfaces that prioritize accessibility and
                      user experience above all.
                    </p>
                  </div>
                  <div className="space-y-4 p-6 rounded-xl bg-surface-light/30 hover:bg-surface-light/50 transition-colors">
                    <h3 className="text-lg font-semibold text-accent-pink">
                      Code with Impact
                    </h3>
                    <p className="text-foreground/70">
                      Writing clean, scalable code that creates real value and
                      solves genuine problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Teaser */}
          <div className="timeline-container text-center glass rounded-2xl p-12">
            <h2 className="text-2xl font-bold gradient-text mb-6">
              Journey Timeline
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              An interactive timeline of my coding journey, milestones, and
              achievements
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="timeline-item space-y-2 p-4 rounded-xl bg-accent-purple/10 hover:bg-accent-purple/20 transition-colors">
                <div className="text-2xl font-bold text-accent-purple">
                  2022
                </div>
                <div className="text-sm text-foreground/60">Started Coding</div>
              </div>
              <div className="timeline-item space-y-2 p-4 rounded-xl bg-accent-blue/10 hover:bg-accent-blue/20 transition-colors">
                <div className="text-2xl font-bold text-accent-blue">2023</div>
                <div className="text-sm text-foreground/60">First Projects</div>
              </div>
              <div className="timeline-item space-y-2 p-4 rounded-xl bg-accent-pink/10 hover:bg-accent-pink/20 transition-colors">
                <div className="text-2xl font-bold text-accent-pink">2024</div>
                <div className="text-sm text-foreground/60">AI Focus</div>
              </div>
              <div className="timeline-item space-y-2 p-4 rounded-xl bg-accent-orange/10 hover:bg-accent-orange/20 transition-colors">
                <div className="text-2xl font-bold text-accent-orange">
                  2025
                </div>
                <div className="text-sm text-foreground/60">
                  Professional Growth
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
