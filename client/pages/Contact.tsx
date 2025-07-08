import { Navigation } from "@/components/ui/navigation";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="cyber-grid fixed inset-0 opacity-20" />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-neon-cyan neon-glow">Get</span>{" "}
            <span className="text-neon-pink neon-glow">In</span>{" "}
            <span className="text-electric-blue neon-glow">Touch</span>
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            Coming soon - Stylish contact form with GSAP animations
          </p>
          <div className="bg-card/50 backdrop-blur-sm border border-neon-cyan/30 rounded-lg p-8">
            <p className="text-foreground/70 mb-4">This page will feature:</p>
            <ul className="text-foreground/60 space-y-2">
              <li>• Interactive contact form (Name, Email, Message)</li>
              <li>• Integration with Express.js + Nodemailer backend</li>
              <li>
                • GSAP field animations (floating labels, pop-in on focus)
              </li>
              <li>• Success/error message handling</li>
              <li>• Social media links</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
