import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Github,
  Heart,
  Code,
  ArrowUp,
  Star,
  ExternalLink,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate footer sections on scroll
      gsap.fromTo(
        ".footer-section",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Floating animation for social icons
      gsap.to(".social-icon", {
        y: -5,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
      });

      // Pulse effect for heart icon
      gsap.to(".heart-pulse", {
        scale: 1.2,
        duration: 1,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Services", href: "/services" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Full Stack Development", href: "/services#fullstack" },
    { name: "AI & Machine Learning", href: "/services#ai-ml" },
    { name: "UI/UX Design", href: "/services#uiux" },
    { name: "Accessibility Solutions", href: "/services#accessibility" },
    { name: "Digital Marketing", href: "/services#marketing" },
    { name: "Brand Identity", href: "/services#branding" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "kartikdassarora@gmail.com",
      href: "mailto:kartikdassarora@gmail.com",
    },
    {
      icon: Phone,
      text: "+91 7529834770",
      href: "tel:+917529834770",
    },
    {
      icon: MapPin,
      text: "Ludhiana, Punjab, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/kaarthikarora/",
      color: "hover:text-accent-pink",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kaarthikdassarora/",
      color: "hover:text-accent-blue",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-accent-purple",
      note: "In Progress",
    },
  ];

  return (
    <footer
      className="relative bg-surface/50 border-t border-accent-purple/20 overflow-hidden"
      ref={footerRef}
    >
      <div className="absolute inset-0 modern-grid opacity-5" />
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      {/* Enhanced Floating Background Elements */}
      <div className="absolute top-10 left-4 lg:left-10 w-16 lg:w-20 h-16 lg:h-20 bg-accent-purple/10 rounded-full blur-xl animate-float" />
      <div
        className="absolute top-20 right-4 lg:right-20 w-12 lg:w-16 h-12 lg:h-16 bg-accent-blue/10 rounded-full blur-lg animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-20 left-1/4 lg:left-1/3 w-10 lg:w-12 h-10 lg:h-12 bg-accent-pink/10 rounded-full blur-md animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-32 right-1/4 w-8 lg:w-14 h-8 lg:h-14 bg-accent-orange/10 rounded-full blur-lg animate-float"
        style={{ animationDelay: "0.5s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand & Description */}
            <div className="footer-section md:col-span-2 lg:col-span-1 space-y-6">
              <div>
                <Link
                  to="/"
                  className="text-2xl lg:text-3xl font-bold gradient-text hover:scale-110 transition-all duration-300 inline-block"
                >
                  Kaarthik Dass Arora
                </Link>
                <p className="text-foreground/70 mt-4 leading-relaxed text-sm lg:text-base">
                  Crafting intelligent solutions, pixel-perfect interfaces, and
                  real-world impact through code. Building the future with AI
                  and accessibility in mind.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-accent-purple bg-accent-purple/10 px-3 lg:px-4 py-2 rounded-lg border border-accent-purple/20">
                <Code size={16} />
                <span className="text-xs lg:text-sm font-medium">
                  Code with purpose. Create with impact.
                </span>
                <Sparkles
                  size={14}
                  className="text-accent-pink animate-pulse"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section space-y-4 lg:space-y-6">
              <div className="flex items-center space-x-2">
                <h3 className="text-base lg:text-lg font-semibold text-accent-purple">
                  Quick Links
                </h3>
                <Zap size={16} className="text-accent-purple animate-pulse" />
              </div>
              <ul className="space-y-2 lg:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-foreground/70 hover:text-accent-pink transition-all duration-300 flex items-center space-x-2 group hover:translate-x-2 text-sm lg:text-base"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-accent-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section space-y-4 lg:space-y-6">
              <div className="flex items-center space-x-2">
                <h3 className="text-base lg:text-lg font-semibold text-accent-blue">
                  Services
                </h3>
                <Star
                  size={16}
                  className="text-accent-blue animate-spin"
                  style={{ animationDuration: "3s" }}
                />
              </div>
              <ul className="space-y-2 lg:space-y-3">
                {services.slice(0, 5).map((service, index) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-foreground/70 flex items-center space-x-2 hover:text-accent-blue transition-all duration-300 group text-sm lg:text-base hover:translate-x-1"
                    >
                      <Star
                        size={12}
                        className="text-accent-orange group-hover:text-accent-blue transition-colors"
                      />
                      <span className="group-hover:font-medium transition-all">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
                <li className="text-xs lg:text-sm text-foreground/50 italic">
                  <Link
                    to="/services"
                    className="hover:text-accent-blue transition-colors"
                  >
                    + More services available
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section md:col-span-2 lg:col-span-1 space-y-4 lg:space-y-6">
              <div className="flex items-center space-x-2">
                <h3 className="text-base lg:text-lg font-semibold text-accent-pink">
                  Get In Touch
                </h3>
                <Heart size={16} className="text-accent-pink heart-pulse" />
              </div>
              <ul className="space-y-3 lg:space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <li key={index}>
                      <a
                        href={info.href}
                        className="flex items-center space-x-3 text-foreground/70 hover:text-accent-pink transition-all duration-300 group hover:translate-x-2"
                      >
                        <div className="w-7 lg:w-8 h-7 lg:h-8 bg-accent-pink/20 rounded-lg flex items-center justify-center group-hover:bg-accent-pink/30 group-hover:scale-110 transition-all flex-shrink-0">
                          <Icon size={16} className="text-accent-pink" />
                        </div>
                        <span className="text-xs lg:text-sm group-hover:font-medium transition-all break-all">
                          {info.text}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Social Links */}
              <div className="pt-4">
                <div className="flex items-center space-x-2 mb-4">
                  <h4 className="text-sm lg:text-base font-medium text-foreground/80">
                    Follow Me
                  </h4>
                  <Sparkles
                    size={14}
                    className="text-accent-orange animate-pulse"
                  />
                </div>
                <div className="flex space-x-3 lg:space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <div key={index} className="relative">
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`social-icon w-9 lg:w-10 h-9 lg:h-10 bg-surface-light/50 rounded-xl border border-accent-purple/20 flex items-center justify-center text-foreground/70 ${social.color} hover:scale-110 hover:rotate-12 transition-all duration-300 group`}
                          title={social.label}
                        >
                          <Icon size={18} />
                          {social.href === "#" && (
                            <ExternalLink
                              size={8}
                              className="absolute -top-1 -right-1 opacity-60"
                            />
                          )}
                        </a>
                        {social.note && (
                          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-foreground/50 whitespace-nowrap bg-surface/80 px-2 py-1 rounded hidden lg:block">
                            {social.note}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs text-foreground/60 mt-6 lg:mt-8 p-2 bg-surface-light/30 rounded-lg border border-accent-purple/10">
                  🚧 Twitter: Not active • GitHub: Work in progress
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-accent-purple/20 px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-2 text-foreground/60 text-xs lg:text-sm text-center sm:text-left">
              <span>© {currentYear} Kaarthik Dass Arora. Made with</span>
              <Heart size={14} className="text-accent-pink animate-pulse" />
              <span>in India 🇮🇳</span>
            </div>

            <div className="flex items-center space-x-3 lg:space-x-6">
              <a
                href="tel:+917529834770"
                className="text-xs lg:text-sm px-3 lg:px-4 py-2 bg-accent-blue/10 hover:bg-accent-blue/20 text-accent-blue rounded-lg transition-all duration-300 hover:scale-105"
              >
                📞 Quick Call
              </a>
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-accent-purple/30 text-foreground/70 hover:bg-accent-purple/10 hover:text-accent-purple hover:scale-105 transition-all duration-300 text-xs lg:text-sm px-3 lg:px-4 py-2"
              >
                <ArrowUp size={16} className="mr-1 lg:mr-2" />
                Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
