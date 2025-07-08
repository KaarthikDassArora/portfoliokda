import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      <div className="cyber-grid fixed inset-0 opacity-20" />

      {/* Background Elements */}
      <div className="bg-element absolute top-20 left-10 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl" />
      <div className="bg-element absolute bottom-20 right-10 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl" />

      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-8">
          <h1 className="text-8xl md:text-9xl font-bold">
            <span className="text-neon-cyan neon-glow glitch">4</span>
            <span className="text-neon-pink neon-glow glitch">0</span>
            <span className="text-neon-purple neon-glow glitch">4</span>
          </h1>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90">
              Page Not Found
            </h2>
            <p className="text-lg text-foreground/70 max-w-md mx-auto">
              The page you're looking for doesn't exist in this dimension. Let's
              get you back to reality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button className="bg-neon-cyan text-background hover:bg-neon-cyan/90 px-8 py-3 neon-border transition-all duration-300 hover:scale-105">
                <Home size={20} className="mr-2" />
                Go Home
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="border-neon-pink text-neon-pink hover:bg-neon-pink/10 px-8 py-3 neon-border transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={20} className="mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
