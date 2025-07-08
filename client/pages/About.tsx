import { Navigation } from "@/components/ui/navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="cyber-grid fixed inset-0 opacity-20" />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-neon-cyan neon-glow">About</span>{" "}
            <span className="text-neon-pink neon-glow">Me</span>
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            Coming soon - Scroll-triggered life timeline and career mission
          </p>
          <div className="bg-card/50 backdrop-blur-sm border border-neon-cyan/30 rounded-lg p-8">
            <p className="text-foreground/70">
              This page will feature a detailed timeline of my journey, career
              mission of empowering through AI and Accessibility, with parallax
              effects and dark-mode support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
