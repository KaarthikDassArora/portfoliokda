import { Navigation } from "@/components/ui/navigation";

export default function Experience() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="cyber-grid fixed inset-0 opacity-20" />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-neon-pink neon-glow">Professional</span>{" "}
            <span className="text-neon-cyan neon-glow">Experience</span>
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            Coming soon - Animated cards with expanding job details
          </p>
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm border border-neon-cyan/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-neon-cyan mb-2">
                LG Electronics - Computer Operator (2025)
              </h3>
              <p className="text-foreground/70">Details coming soon...</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-neon-pink/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-neon-pink mb-2">
                Unified Mentor Pvt. Ltd - Full Stack Intern (Apr–Jul 2025)
              </h3>
              <p className="text-foreground/70">Details coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
