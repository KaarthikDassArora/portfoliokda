import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import {
  Code,
  Palette,
  Brain,
  Smartphone,
  TrendingUp,
  Star,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Crown,
  Rocket,
  Heart,
  MessageCircle,
  IndianRupee,
  Globe,
  Target,
  Award,
  Clock,
  Users,
  Lightbulb,
  Shield,
  Layers,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section with spectacular entrance
      const heroTl = gsap.timeline({ delay: 0.5 });

      heroTl
        .fromTo(
          ".hero-title",
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
            rotateX: 90,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 1.2,
            ease: "power3.out",
          },
        )
        .fromTo(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 50,
            filter: "blur(20px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .fromTo(
          ".hero-description",
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
            ease: "back.out(1.7)",
          },
          "-=0.3",
        );

      // Floating particles animation
      gsap.to(".floating-particle", {
        y: -20,
        x: 10,
        rotation: 360,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });

      // Service cards with spectacular 3D entrance
      gsap.fromTo(
        ".service-card",
        {
          opacity: 0,
          y: 100,
          scale: 0.5,
          rotateY: 45,
          z: -200,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          z: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Pricing cards with magnetic hover effect
      gsap.fromTo(
        ".pricing-card",
        {
          opacity: 0,
          scale: 0.3,
          rotation: 180,
          y: 200,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          y: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.8)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Process steps with morphing animation
      gsap.fromTo(
        ".process-step",
        {
          opacity: 0,
          scale: 0,
          borderRadius: "50%",
          backgroundColor: "transparent",
        },
        {
          opacity: 1,
          scale: 1,
          borderRadius: "16px",
          duration: 0.8,
          ease: "back.out(2)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".process-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // CTA section with pulsating glow
      gsap.fromTo(
        ".cta-container",
        {
          opacity: 0,
          scale: 0.8,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Continuous glow animation
      gsap.to(".glow-element", {
        boxShadow:
          "0 0 30px rgba(124, 59, 237, 0.8), 0 0 60px rgba(238, 129, 238, 0.6)",
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Number counter animation
      gsap.fromTo(
        ".counter-number",
        { innerText: 0 },
        {
          innerText: (i, el) => el.dataset.count,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: ".stats-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "Complete web applications with modern technologies, responsive design, and seamless user experience",
      features: [
        "React, Next.js, Node.js",
        "Database Design & Integration",
        "API Development",
        "Responsive Design",
        "Performance Optimization",
        "Deployment & Maintenance",
      ],
      startingPrice: "₹10,000",
      color: "accent-purple",
      delay: 0,
    },
    {
      icon: Palette,
      title: "Brand Identity Design",
      description:
        "Stunning visual identities that capture your brand essence and resonate with your audience",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Color Palette",
        "Typography Selection",
        "Business Card Design",
        "Brand Assets",
      ],
      startingPrice: "₹1,000",
      color: "accent-pink",
      delay: 0.2,
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions powered by cutting-edge AI technology to automate and optimize your business",
      features: [
        "Custom AI Models",
        "Data Analysis",
        "Computer Vision",
        "Natural Language Processing",
        "Automation Systems",
        "AI Integration",
      ],
      startingPrice: "₹15,000",
      color: "accent-blue",
      delay: 0.4,
    },
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that prioritize user experience and accessibility",
      features: [
        "User Research",
        "Wireframing",
        "Interactive Prototypes",
        "Visual Design",
        "Usability Testing",
        "Design Systems",
      ],
      startingPrice: "₹25,000",
      color: "accent-orange",
      delay: 0.6,
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Strategic digital marketing campaigns that drive growth and maximize your online presence",
      features: [
        "Social Media Strategy",
        "Content Creation",
        "SEO Optimization",
        "Paid Advertising",
        "Analytics & Reporting",
        "Brand Building",
      ],
      startingPrice: "₹5,000",
      color: "accent-green",
      delay: 0.8,
    },
  ];

  const processSteps = [
    {
      icon: MessageCircle,
      title: "Discovery Call",
      description: "We discuss your project requirements, goals, and vision",
    },
    {
      icon: Lightbulb,
      title: "Strategy & Planning",
      description: "Create a detailed roadmap and technical specifications",
    },
    {
      icon: Rocket,
      title: "Development & Design",
      description: "Build your solution with regular updates and feedback",
    },
    {
      icon: Award,
      title: "Launch & Support",
      description: "Deploy your project and provide ongoing maintenance",
    },
  ];

  const stats = [
    { number: 50, label: "Projects Completed", suffix: "+" },
    { number: 100, label: "Client Satisfaction", suffix: "%" },
    { number: 24, label: "Support Hours", suffix: "/7" },
    { number: 3, label: "Years Experience", suffix: "+" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden" ref={heroRef}>
      <Navigation />

      {/* Animated Background */}
      <div className="fixed inset-0 modern-grid opacity-10" />
      <div className="fixed inset-0 gradient-mesh opacity-50" />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-particle absolute top-20 left-10 w-4 h-4 bg-accent-purple/30 rounded-full blur-sm" />
        <div className="floating-particle absolute top-40 right-20 w-6 h-6 bg-accent-pink/20 rounded-full blur-sm" />
        <div className="floating-particle absolute bottom-40 left-1/4 w-3 h-3 bg-accent-blue/40 rounded-full blur-sm" />
        <div className="floating-particle absolute bottom-60 right-1/3 w-5 h-5 bg-accent-orange/25 rounded-full blur-sm" />
      </div>

      {/* Hero Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="hero-title">
            <p className="text-accent-purple font-medium tracking-wide uppercase text-sm mb-4 flex items-center justify-center space-x-2">
              <Crown size={16} />
              <span>— Premium Services</span>
              <Crown size={16} />
            </p>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
              Exceptional
              <br />
              <span className="relative">
                Digital Solutions
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 rounded-2xl blur-xl -z-10" />
              </span>
            </h1>
          </div>

          <div className="hero-subtitle">
            <p className="text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge technology, stunning
              design, and intelligent solutions
            </p>
          </div>

          <div className="hero-description flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-gradient-start to-gradient-middle hover:from-gradient-middle hover:to-gradient-end text-white px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300 glow-element">
                <Rocket size={20} className="mr-2" />
                Start Your Project
              </Button>
            </Link>
            <a href="tel:+917529834770">
              <Button
                variant="outline"
                className="border-2 border-accent-purple text-accent-purple hover:bg-accent-purple/10 px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle size={20} className="mr-2" />
                Schedule a Call
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4" ref={servicesRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              What I Do Best
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              From concept to completion, I deliver solutions that exceed
              expectations
            </p>
          </div>

          <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="service-card glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 group relative overflow-hidden"
                  onMouseEnter={() => setActiveService(index)}
                >
                  {/* Animated Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-${service.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-${service.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                    >
                      <Icon size={32} className={`text-${service.color}`} />
                    </div>

                    <h3
                      className={`text-2xl font-bold text-${service.color} mb-4 group-hover:scale-105 transition-transform`}
                    >
                      {service.title}
                    </h3>

                    <p className="text-foreground/70 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-sm text-foreground/60"
                        >
                          <Check
                            size={14}
                            className={`text-${service.color}`}
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                      <div className="text-sm text-foreground/50">
                        +{service.features.length - 3} more features
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-foreground/60">
                          Starting from
                        </div>
                        <div
                          className={`text-2xl font-bold text-${service.color} flex items-center`}
                        >
                          {service.startingPrice}
                          <span className="text-sm text-foreground/60 ml-1">
                            INR
                          </span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className={`bg-${service.color}/20 text-${service.color} hover:bg-${service.color}/30 border-none`}
                      >
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="stats-container grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center glass rounded-2xl p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  <span className="counter-number" data-count={stat.number}>
                    0
                  </span>
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              How We Work Together
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              A proven process that ensures your project success from start to
              finish
            </p>
          </div>

          <div className="process-container grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="process-step text-center p-8 rounded-2xl border border-accent-purple/20 hover:border-accent-purple/40 transition-all duration-300"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent-purple to-accent-pink rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground/90 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20 px-4" ref={ctaRef}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="cta-container glass rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-accent-pink/10 to-accent-blue/10" />

            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Sparkles
                  size={24}
                  className="text-accent-purple animate-pulse"
                />
                <h2 className="text-4xl font-bold gradient-text">
                  Ready to Get Started?
                </h2>
                <Sparkles
                  size={24}
                  className="text-accent-pink animate-pulse"
                />
              </div>

              <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing
                together. Contact me for a personalized quote and timeline.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-gradient-start to-gradient-middle hover:from-gradient-middle hover:to-gradient-end text-white px-10 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300 glow-element">
                    <MessageCircle size={20} className="mr-2" />
                    Get Custom Quote
                  </Button>
                </Link>
                <a href="tel:+917529834770">
                  <Button
                    variant="outline"
                    className="border-2 border-accent-purple text-accent-purple hover:bg-accent-purple/10 px-10 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    Call to Discuss
                  </Button>
                </a>
              </div>

              <div className="mt-8 p-6 bg-surface-light/30 rounded-xl border border-accent-purple/20">
                <p className="text-foreground/60 text-sm">
                  💡 <strong>Free Consultation:</strong> All projects start with
                  a complimentary consultation to understand your needs and
                  provide accurate pricing.
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
