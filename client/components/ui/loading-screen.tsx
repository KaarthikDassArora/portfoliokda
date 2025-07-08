import { useEffect, useState } from "react";
import { gsap } from "gsap";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("Initializing...");

  const loadingTexts = [
    "Initializing...",
    "Loading portfolio data...",
    "Preparing animations...",
    "Almost ready...",
    "Welcome to Kaarthik's Portfolio!",
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial entrance animation
    tl.fromTo(
      ".loading-logo",
      { scale: 0, opacity: 0, rotation: -180 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" },
    )
      .fromTo(
        ".loading-text",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3",
      )
      .fromTo(
        ".progress-container",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5 },
        "-=0.2",
      );

    // Progress simulation
    let currentProgress = 0;
    let textIndex = 0;

    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 15 + 5;

      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        setCurrentText(loadingTexts[loadingTexts.length - 1]);
        clearInterval(progressInterval);

        // Exit animation
        setTimeout(() => {
          const exitTl = gsap.timeline({
            onComplete: () => onComplete(),
          });

          exitTl
            .to(".loading-content", {
              opacity: 0,
              scale: 0.8,
              duration: 0.5,
              ease: "power2.in",
            })
            .to(
              ".loading-screen",
              {
                opacity: 0,
                duration: 0.3,
              },
              "-=0.2",
            );
        }, 800);
      } else {
        setProgress(currentProgress);

        // Update text based on progress
        const newTextIndex = Math.floor(
          (currentProgress / 100) * (loadingTexts.length - 1),
        );
        if (
          newTextIndex !== textIndex &&
          newTextIndex < loadingTexts.length - 1
        ) {
          textIndex = newTextIndex;
          setCurrentText(loadingTexts[textIndex]);

          // Text change animation
          gsap.fromTo(
            ".loading-text",
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.3 },
          );
        }
      }
    }, 150);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className="loading-screen fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 modern-grid opacity-30" />
      <div className="absolute inset-0 gradient-mesh" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-purple/20 rounded-full blur-xl float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent-pink/20 rounded-full blur-xl float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-3/4 left-3/4 w-24 h-24 bg-accent-blue/20 rounded-full blur-xl float"
        style={{ animationDelay: "4s" }}
      />

      <div className="loading-content relative text-center space-y-8 max-w-md">
        {/* Logo/Icon */}
        <div className="loading-logo">
          <div className="w-20 h-20 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end rounded-2xl pulse-glow" />
            <div className="absolute inset-1 bg-background rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold gradient-text">KDA</span>
            </div>
          </div>
        </div>

        {/* Welcome text */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold gradient-text">
            Kaarthik's Portfolio
          </h1>
          <p className="loading-text text-foreground/70 text-lg">
            {currentText}
          </p>
        </div>

        {/* Progress bar */}
        <div className="progress-container space-y-3">
          <div className="w-full bg-surface-light rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-sm text-foreground/60 font-mono">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Rotating loader */}
        <div className="flex justify-center">
          <div className="w-8 h-8 border-2 border-accent-purple/30 border-t-accent-purple rounded-full spin-slow" />
        </div>
      </div>
    </div>
  );
}
