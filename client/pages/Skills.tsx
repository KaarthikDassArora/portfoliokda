import { Navigation } from "@/components/ui/navigation";

export default function Skills() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="fixed inset-0 modern-grid opacity-20" />
      <div className="fixed inset-0 gradient-mesh" />

      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Tools of My Trade</span>
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            Coming soon - Interactive tech stack grid with GSAP animations
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-accent-purple">
                Frontend Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Tailwind",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent-purple/10 text-accent-purple rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-accent-blue">
                Backend & AI
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Python",
                  "Node.js",
                  "Express",
                  "Flask",
                  "OpenCV",
                  "C",
                  "C++",
                  "Java",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent-blue/10 text-accent-blue rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-accent-pink">
                Tools & APIs
              </h2>
              <div className="flex flex-wrap gap-3">
                {["Git", "Postman", "Telethon", "Twilio"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent-pink/10 text-accent-pink rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-accent-orange">
                Coming Soon
              </h2>
              <p className="text-foreground/70">
                Interactive skill cards with flip/rotate animations, proficiency
                levels, and scroll-triggered reveals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
