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
      <div className="fixed inset-0 modern-grid opacity-20" />
      <div className="fixed inset-0 gradient-mesh" />

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl" />

      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-8">
          <h1 className="text-8xl md:text-9xl font-bold gradient-text">404</h1>
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
              <Button className="bg-gradient-to-r from-gradient-start to-gradient-middle text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                <Home size={20} className="mr-2" />
                Go Home
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="border-accent-purple text-accent-purple hover:bg-accent-purple/10 px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
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
