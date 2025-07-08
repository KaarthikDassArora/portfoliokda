import { Navigation } from "@/components/ui/navigation";

export default function Skills() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="cyber-grid fixed inset-0 opacity-20" />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-neon-purple neon-glow">Skills</span>{" "}
            <span className="text-electric-blue neon-glow">&</span>{" "}
            <span className="text-neon-cyan neon-glow">Technologies</span>
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            Coming soon - Interactive tech stack grid with GSAP animations
          </p>
          <div className="bg-card/50 backdrop-blur-sm border border-neon-purple/30 rounded-lg p-8">
            <p className="text-foreground/70 mb-4">
              This page will showcase my skills in:
            </p>
            <p className="text-foreground/60">
              HTML, CSS, JS, Python, TypeScript, C, C++, Java, React, Next.js,
              Tailwind, Node.js, Express, Flask, OpenCV, Git, Postman, Telethon,
              Twilio
            </p>
            <p className="text-foreground/70 mt-4">
              With flip/rotate animations on hover and fade-in on scroll
              effects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
