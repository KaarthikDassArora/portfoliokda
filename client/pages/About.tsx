import { Navigation } from "@/components/ui/navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="fixed inset-0 modern-grid opacity-20" />
      <div className="fixed inset-0 gradient-mesh" />

      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">The Story So Far</span>
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            Coming soon - Scroll-triggered life timeline and career mission
          </p>
          <div className="glass rounded-2xl p-12 space-y-8">
            <h2 className="text-2xl font-semibold text-accent-purple mb-6">
              Career Mission
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Empowering through AI and Accessibility - building technology that
              makes the world more inclusive and intelligent.
            </p>
            <div className="space-y-4 text-foreground/60">
              <p>• Detailed timeline of my journey</p>
              <p>• Parallax effects and smooth animations</p>
              <p>• Interactive career milestones</p>
              <p>• Personal philosophy and values</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
