import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { ContactFormRequest, ContactFormResponse } from "@shared/api";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  MessageCircle,
  Calendar,
  User,
  FileText,
  CheckCircle,
  AlertCircle,
  Loader2,
  ExternalLink,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const formRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate contact sections on scroll
    gsap.fromTo(
      ".contact-section",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".contact-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Animate form fields
    gsap.fromTo(
      ".form-field",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Animate contact info cards
    gsap.fromTo(
      ".contact-card",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Animate field on focus
    gsap.to(e.target, {
      scale: 1.02,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleInputBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    gsap.to(e.target, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const contactData: ContactFormRequest = {
        name: formData.name,
        email: formData.email,
        message: `Subject: ${formData.subject}\n\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nMessage:\n${formData.message}`,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const result: ContactFormResponse = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for your message! I'll get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          budget: "",
          timeline: "",
        });

        // Success animation
        gsap.to(".form-container", {
          scale: 0.98,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.message ||
            "Something went wrong. Please try again or contact me directly.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kaarthikdass@gmail.com",
      link: "mailto:kaarthikdass@gmail.com",
      color: "accent-purple",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 (XXX) XXX-XXXX",
      link: "tel:+91xxxxxxxxxx",
      color: "accent-blue",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ludhiana, Punjab, India",
      link: "#",
      color: "accent-pink",
    },
    {
      icon: Calendar,
      label: "Availability",
      value: "Available for projects",
      link: "#",
      color: "accent-orange",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/kaarthikdass",
      color: "accent-purple",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/kaarthikdass",
      color: "accent-blue",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com/kaarthikdass",
      color: "accent-pink",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com/kaarthikdass",
      color: "accent-orange",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="fixed inset-0 modern-grid opacity-10" />
      <div className="fixed inset-0 gradient-mesh opacity-50" />

      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto space-y-20 contact-container">
          {/* Header */}
          <div className="contact-section text-center space-y-6">
            <p className="text-accent-purple font-medium tracking-wide uppercase text-sm">
              — Let's Connect
            </p>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              Let's Talk Code
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Have a project in mind? Want to collaborate? Or just want to say
              hi? I'd love to hear from you. Let's build something amazing
              together.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="contact-section" ref={contactInfoRef}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="contact-card glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 bg-${info.color}/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-${info.color}/30 transition-colors`}
                    >
                      <Icon size={24} className={`text-${info.color}`} />
                    </div>
                    <h3
                      className={`text-lg font-semibold text-${info.color} mb-2`}
                    >
                      {info.label}
                    </h3>
                    <p className="text-foreground/70 text-sm">{info.value}</p>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Main Contact Section */}
          <div className="contact-section grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="form-container" ref={formRef}>
              <div className="glass rounded-2xl p-8 lg:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold gradient-text mb-4">
                    Start a Project
                  </h2>
                  <p className="text-foreground/70 leading-relaxed">
                    Fill out the form below and I'll get back to you within 24
                    hours. Let's discuss your project requirements and how we
                    can bring your ideas to life.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-field space-y-2">
                      <label className="text-sm font-medium text-foreground/80 flex items-center space-x-2">
                        <User size={16} />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        required
                        className="w-full px-4 py-3 bg-surface-light/50 border border-accent-purple/20 rounded-xl focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20 focus:outline-none transition-all duration-300 text-foreground"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="form-field space-y-2">
                      <label className="text-sm font-medium text-foreground/80 flex items-center space-x-2">
                        <Mail size={16} />
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        required
                        className="w-full px-4 py-3 bg-surface-light/50 border border-accent-purple/20 rounded-xl focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20 focus:outline-none transition-all duration-300 text-foreground"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="form-field space-y-2">
                    <label className="text-sm font-medium text-foreground/80 flex items-center space-x-2">
                      <MessageCircle size={16} />
                      <span>Subject *</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      required
                      className="w-full px-4 py-3 bg-surface-light/50 border border-accent-purple/20 rounded-xl focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20 focus:outline-none transition-all duration-300 text-foreground"
                      placeholder="Project subject or inquiry type"
                    />
                  </div>

                  {/* Budget and Timeline Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-field space-y-2">
                      <label className="text-sm font-medium text-foreground/80">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        className="w-full px-4 py-3 bg-surface-light/50 border border-accent-purple/20 rounded-xl focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20 focus:outline-none transition-all duration-300 text-foreground"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-1k">Under $1,000</option>
                        <option value="1k-5k">$1,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-plus">$10,000+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>

                    <div className="form-field space-y-2">
                      <label className="text-sm font-medium text-foreground/80">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        className="w-full px-4 py-3 bg-surface-light/50 border border-accent-purple/20 rounded-xl focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20 focus:outline-none transition-all duration-300 text-foreground"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2-weeks">1-2 weeks</option>
                        <option value="1-month">1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-field space-y-2">
                    <label className="text-sm font-medium text-foreground/80 flex items-center space-x-2">
                      <FileText size={16} />
                      <span>Project Details *</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-surface-light/50 border border-accent-purple/20 rounded-xl focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20 focus:outline-none transition-all duration-300 text-foreground resize-none"
                      placeholder="Tell me about your project, goals, and requirements..."
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus.type && (
                    <div
                      className={`form-field flex items-center space-x-3 p-4 rounded-xl ${
                        submitStatus.type === "success"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle size={20} />
                      ) : (
                        <AlertCircle size={20} />
                      )}
                      <span className="text-sm">{submitStatus.message}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="form-field">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-gradient-start to-gradient-middle hover:from-gradient-middle hover:to-gradient-end text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="mr-2 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info & Profile */}
            <div className="space-y-8">
              {/* Profile Card */}
              <div className="glass rounded-2xl p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gradient-to-r from-gradient-start to-gradient-end">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F01d7d241c1954334a3f0d0e345e8ae28%2F2358ed438af1495ab12823ffe0eb3114?format=webp&width=800"
                    alt="Kaarthik Dass Arora"
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-2">
                  Kaarthik Dass Arora
                </h3>
                <p className="text-foreground/70 mb-6">
                  AI Engineer & Full Stack Developer
                </p>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Ready to bring your ideas to life with cutting-edge technology
                  and creative solutions. Let's build something amazing
                  together!
                </p>
              </div>

              {/* Social Links */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold gradient-text mb-6">
                  Connect with me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 p-4 bg-${social.color}/10 border border-${social.color}/20 rounded-xl hover:bg-${social.color}/20 hover:scale-105 transition-all duration-300 group`}
                      >
                        <Icon
                          size={20}
                          className={`text-${social.color} group-hover:scale-110 transition-transform`}
                        />
                        <span className="text-foreground/80 text-sm font-medium">
                          {social.label}
                        </span>
                        <ExternalLink
                          size={14}
                          className="text-foreground/40 ml-auto"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="glass rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-accent-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={32} className="text-accent-blue" />
                </div>
                <h3 className="text-lg font-semibold text-accent-blue mb-3">
                  Quick Response Guarantee
                </h3>
                <p className="text-foreground/70 text-sm">
                  I typically respond to all inquiries within 24 hours. For
                  urgent projects, I'm available for immediate consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
