import { Navigation } from "@/components/ui/navigation";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="cyber-grid fixed inset-0 opacity-20" />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-electric-blue neon-glow">Featured</span>{" "}
            <span className="text-neon-purple neon-glow">Projects</span>
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            Coming soon - Interactive project gallery with sliding/zooming cards
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Orbit (Typing for visually impaired)",
              "Jarvis Assistant",
              "Binary Options Bot",
              "Facial Attendance System",
              "Telegram Bot",
              "Pratibimb Designs",
            ].map((project, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-neon-cyan/30 rounded-lg p-6 hover:bg-card/70 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-neon-cyan mb-2">
                  {project}
                </h3>
                <p className="text-foreground/70 text-sm">
                  Project details and demo coming soon...
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
