import { Navigation } from "@/components/ui/navigation";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Target,
  Heart,
  Lightbulb,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="fixed inset-0 modern-grid opacity-10" />
      <div className="fixed inset-0 gradient-mesh opacity-50" />

      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Header */}
          <div className="text-center space-y-6">
            <p className="text-accent-purple font-medium tracking-wide uppercase text-sm">
              — About Me
            </p>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              The Story So Far
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              A passionate developer on a mission to create meaningful impact
              through technology
            </p>
          </div>

          {/* Personal Info Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-accent-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} className="text-accent-blue" />
              </div>
              <h3 className="text-xl font-semibold text-accent-blue mb-2">
                Location
              </h3>
              <p className="text-foreground/70">Ludhiana, Punjab, India</p>
              <p className="text-foreground/60 text-sm mt-2">
                🇮🇳 Open to remote work globally
              </p>
            </div>

            <div className="glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-accent-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GraduationCap size={32} className="text-accent-purple" />
              </div>
              <h3 className="text-xl font-semibold text-accent-purple mb-2">
                Education
              </h3>
              <p className="text-foreground/70">B.Tech CSE (AI & ML)</p>
              <p className="text-foreground/60 text-sm mt-2">
                Gulzar Group of Institutes (2025–2029)
              </p>
            </div>

            <div className="glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-accent-pink/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar size={32} className="text-accent-pink" />
              </div>
              <h3 className="text-xl font-semibold text-accent-pink mb-2">
                Journey
              </h3>
              <p className="text-foreground/70">2+ Years Coding</p>
              <p className="text-foreground/60 text-sm mt-2">
                Started in 2022, never looked back
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass rounded-2xl p-10 space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center">
                  <Target size={24} className="text-accent-purple" />
                </div>
                <h2 className="text-2xl font-bold text-accent-purple">
                  My Mission
                </h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                <span className="gradient-text font-semibold">
                  Empowering through AI and Accessibility
                </span>{" "}
                - I believe technology should be a bridge, not a barrier. My
                mission is to build intelligent solutions that make the digital
                world more accessible and inclusive for everyone.
              </p>
              <div className="space-y-3 text-foreground/70">
                <p>• Creating tools for the visually impaired</p>
                <p>• Building AI that amplifies human potential</p>
                <p>• Making complex technology simple and accessible</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-10 space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-xl flex items-center justify-center">
                  <Heart size={24} className="text-accent-blue" />
                </div>
                <h2 className="text-2xl font-bold text-accent-blue">
                  What Drives Me
                </h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm driven by the belief that{" "}
                <span className="gradient-text font-semibold">
                  code with purpose creates lasting impact
                </span>
                . Every project I work on aims to solve real problems and make
                someone's life a little better.
              </p>
              <div className="space-y-3 text-foreground/70">
                <p>• Real-world problem solving</p>
                <p>• Clean, maintainable code</p>
                <p>• Continuous learning and growth</p>
              </div>
            </div>
          </div>

          {/* Skills Philosophy */}
          <div className="glass rounded-2xl p-12 text-center space-y-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-gradient-start to-gradient-end rounded-2xl flex items-center justify-center">
                <Lightbulb size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold gradient-text">My Approach</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-foreground/80 leading-relaxed">
                I believe in the intersection of{" "}
                <span className="text-accent-purple font-semibold">
                  artificial intelligence
                </span>
                ,
                <span className="text-accent-blue font-semibold">
                  {" "}
                  beautiful design
                </span>
                , and
                <span className="text-accent-pink font-semibold">
                  {" "}
                  human-centered development
                </span>
                .
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-accent-purple">
                    Think AI-First
                  </h3>
                  <p className="text-foreground/70">
                    Every solution starts with how AI can make it smarter,
                    faster, and more intuitive.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-accent-blue">
                    Design with Purpose
                  </h3>
                  <p className="text-foreground/70">
                    Beautiful interfaces that prioritize accessibility and user
                    experience above all.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-accent-pink">
                    Code with Impact
                  </h3>
                  <p className="text-foreground/70">
                    Writing clean, scalable code that creates real value and
                    solves genuine problems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Teaser */}
          <div className="text-center glass rounded-2xl p-12">
            <h2 className="text-2xl font-bold gradient-text mb-6">
              Journey Timeline
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Coming soon - An interactive timeline of my coding journey,
              milestones, and achievements
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent-purple">
                  2022
                </div>
                <div className="text-sm text-foreground/60">Started Coding</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent-blue">2023</div>
                <div className="text-sm text-foreground/60">First Projects</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent-pink">2024</div>
                <div className="text-sm text-foreground/60">AI Focus</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent-orange">
                  2025
                </div>
                <div className="text-sm text-foreground/60">
                  Professional Growth
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
