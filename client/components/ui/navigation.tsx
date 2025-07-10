import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Settings,
  Briefcase,
  FolderOpen,
  Award,
  Mail,
  Sparkles,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Code },
  { name: "Services", href: "/services", icon: Settings },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Achievements", href: "/achievements", icon: Award },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate navigation items on load
      gsap.fromTo(
        ".nav-item",
        {
          opacity: 0,
          y: -20,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          delay: 0.2,
        },
      );

      // Logo animation
      gsap.fromTo(
        ".nav-logo",
        {
          opacity: 0,
          scale: 0.5,
          rotation: -180,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        },
      );

      // Mobile menu animation
      if (isOpen) {
        gsap.fromTo(
          ".mobile-nav-item",
          {
            opacity: 0,
            x: -50,
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.1,
          },
        );
      }
    }, navRef);

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <>
      {/* Enhanced Desktop Navigation */}
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-accent-purple/30 shadow-lg shadow-accent-purple/10"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Enhanced KDA Logo */}
            <Link
              to="/"
              className="nav-logo flex items-center space-x-2 hover:scale-110 transition-all duration-500 group"
            >
              <div className="relative flex items-center">
                {/* Logo Container with Background */}
                <div className="relative bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue p-3 rounded-xl border border-accent-purple/30 shadow-lg group-hover:shadow-xl group-hover:shadow-accent-purple/25 transition-all duration-500">
                  {/* Logo Text */}
                  <span className="text-xl lg:text-2xl font-black text-white tracking-wider">
                    KDA
                  </span>

                  {/* Animated Elements */}
                  <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles size={14} className="text-white animate-pulse" />
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue rounded-xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                </div>

                {/* Logo Text Next to Icon */}
                <div className="ml-3 hidden xl:block">
                  <div className="text-sm lg:text-base font-bold gradient-text">
                    Kaarthik
                  </div>
                  <div className="text-xs lg:text-sm text-foreground/60 -mt-1">
                    Developer
                  </div>
                </div>
              </div>
            </Link>

            {/* Enhanced Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "nav-item group relative flex items-center space-x-1 px-2 lg:px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105",
                      isActive
                        ? "text-accent-purple bg-gradient-to-r from-accent-purple/20 to-accent-pink/10 border border-accent-purple/40 shadow-lg shadow-accent-purple/25"
                        : "text-foreground/80 hover:text-accent-pink hover:bg-gradient-to-r hover:from-accent-pink/10 hover:to-accent-purple/10 hover:border hover:border-accent-pink/30",
                    )}
                  >
                    <Icon
                      size={16}
                      className="group-hover:rotate-12 transition-transform"
                    />
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-purple rounded-full animate-pulse" />
                    )}
                  </Link>
                );
              })}

              {/* Quick Action Buttons */}
              <div className="flex items-center space-x-1 ml-2 pl-2 border-l border-accent-purple/20">
                <a
                  href="tel:+917529834770"
                  className="nav-item p-2.5 bg-accent-blue/10 hover:bg-accent-blue/20 text-accent-blue rounded-xl transition-all duration-300 hover:scale-110 group"
                  title="Call Now"
                >
                  <Phone
                    size={16}
                    className="group-hover:rotate-12 transition-transform"
                  />
                </a>
                <Link
                  to="/contact"
                  className="nav-item px-3 py-2 bg-gradient-to-r from-accent-purple to-accent-pink text-white rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-purple/25"
                >
                  Quote
                </Link>
              </div>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-xl text-foreground hover:text-accent-purple transition-all duration-300 hover:bg-accent-purple/10 hover:scale-110"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={cn(
            "lg:hidden transition-all duration-500 ease-in-out overflow-hidden",
            isOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible",
          )}
        >
          <div className="px-4 pt-4 pb-6 space-y-2 bg-background/95 backdrop-blur-xl border-b border-accent-purple/30 shadow-xl">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "mobile-nav-item group flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                    isActive
                      ? "text-accent-purple bg-gradient-to-r from-accent-purple/20 to-accent-pink/10 border border-accent-purple/40"
                      : "text-foreground/80 hover:text-accent-pink hover:bg-gradient-to-r hover:from-accent-pink/10 hover:to-accent-purple/10 hover:translate-x-2",
                  )}
                >
                  <Icon
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            {/* Mobile Quick Actions */}
            <div className="pt-4 mt-4 border-t border-accent-purple/20 flex space-x-3">
              <a
                href="tel:+917529834770"
                className="mobile-nav-item flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-accent-blue/10 hover:bg-accent-blue/20 text-accent-blue rounded-xl transition-all duration-300"
              >
                <Phone size={18} />
                <span className="text-sm font-medium">Call Now</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mobile-nav-item flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-accent-purple to-accent-pink text-white rounded-xl text-sm font-medium transition-all duration-300"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Dynamic Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
