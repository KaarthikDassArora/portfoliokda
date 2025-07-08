import { Navigation } from "@/components/ui/navigation";
import { ExternalLink, Github, Play } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Orbit",
      subtitle: "Typing for visually impaired",
      description:
        "Accessibility-focused typing application with voice feedback and adaptive interfaces.",
      color: "accent-purple",
    },
    {
      title: "Jarvis Assistant",
      subtitle: "AI-powered personal assistant",
      description:
        "Intelligent virtual assistant with natural language processing and automation capabilities.",
      color: "accent-blue",
    },
    {
      title: "Binary Options Bot",
      subtitle: "Automated trading system",
      description:
        "Real-time trading bot with advanced algorithms and risk management features.",
      color: "accent-pink",
    },
    {
      title: "Facial Attendance System",
      subtitle: "Computer vision solution",
      description:
        "AI-powered attendance tracking using facial recognition and OpenCV technologies.",
      color: "accent-orange",
    },
    {
      title: "Telegram Bot",
      subtitle: "Automation & utilities",
      description:
        "Multi-purpose Telegram bot with custom commands and API integrations.",
      color: "accent-purple",
    },
    {
      title: "Pratibimb Designs",
      subtitle: "Creative design platform",
      description:
        "Design showcase and creative portfolio with interactive galleries.",
      color: "accent-pink",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="fixed inset-0 modern-grid opacity-20" />
      <div className="fixed inset-0 gradient-mesh" />

      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="gradient-text">Things I've Built</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Coming soon - Interactive project gallery with sliding/zooming
              cards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 bg-${project.color}/20 rounded-xl flex items-center justify-center`}
                  >
                    <div className={`w-6 h-6 bg-${project.color} rounded`} />
                  </div>

                  <div>
                    <h3
                      className={`text-xl font-semibold text-${project.color} mb-1`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-foreground/60 text-sm mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex space-x-3 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-2 bg-surface-light rounded-lg hover:bg-accent-purple/20 transition-colors cursor-pointer">
                      <Github size={16} />
                    </div>
                    <div className="p-2 bg-surface-light rounded-lg hover:bg-accent-blue/20 transition-colors cursor-pointer">
                      <ExternalLink size={16} />
                    </div>
                    <div className="p-2 bg-surface-light rounded-lg hover:bg-accent-pink/20 transition-colors cursor-pointer">
                      <Play size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-foreground/60">
              Interactive demos, GitHub links, and detailed case studies coming
              soon!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
