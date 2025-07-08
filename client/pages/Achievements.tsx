import { Navigation } from "@/components/ui/navigation";

export default function Achievements() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="cyber-grid fixed inset-0 opacity-20" />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-neon-pink neon-glow">Achievements</span>{" "}
            <span className="text-neon-purple neon-glow">&</span>{" "}
            <span className="text-electric-blue neon-glow">Recognition</span>
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            Coming soon - Timeline style with icons and descriptions
          </p>
          <div className="bg-card/50 backdrop-blur-sm border border-neon-pink/30 rounded-lg p-8">
            <p className="text-foreground/70">
              This page will showcase my achievements including content
              creation, Pratibimb reels, social media growth, and other
              recognitions with animated timeline effects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
