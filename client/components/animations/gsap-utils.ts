import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Hero text animation
export const animateHeroText = (selector: string) => {
  const tl = gsap.timeline();

  tl.fromTo(
    selector,
    {
      opacity: 0,
      y: 100,
      scale: 0.8,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
    },
  );

  return tl;
};

// Stagger animation for elements
export const animateStagger = (selector: string, delay: number = 0) => {
  return gsap.fromTo(
    selector,
    {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      delay,
    },
  );
};

// Scroll-triggered fade in
export const animateOnScroll = (selector: string, trigger?: string) => {
  return gsap.fromTo(
    selector,
    {
      opacity: 0,
      y: 80,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trigger || selector,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    },
  );
};

// Hover glow effect
export const addHoverGlow = (selector: string) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
        boxShadow: "0 0 20px currentColor, 0 0 40px currentColor",
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        boxShadow: "0 0 5px currentColor, 0 0 10px currentColor",
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
};

// Floating animation
export const addFloatingAnimation = (selector: string) => {
  return gsap.to(selector, {
    y: -10,
    duration: 2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
  });
};

// Page transition animation
export const pageTransition = () => {
  const tl = gsap.timeline();

  tl.to(".page-transition", {
    scaleX: 1,
    duration: 0.5,
    ease: "power2.inOut",
    transformOrigin: "left",
  }).to(".page-transition", {
    scaleX: 0,
    duration: 0.5,
    ease: "power2.inOut",
    transformOrigin: "right",
    delay: 0.2,
  });

  return tl;
};

// Glitch effect
export const addGlitchEffect = (selector: string) => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

  tl.to(selector, {
    x: -2,
    duration: 0.1,
  })
    .to(selector, {
      x: 2,
      duration: 0.1,
    })
    .to(selector, {
      x: -1,
      duration: 0.1,
    })
    .to(selector, {
      x: 1,
      duration: 0.1,
    })
    .to(selector, {
      x: 0,
      duration: 0.1,
    });

  return tl;
};

// Parallax effect
export const addParallax = (selector: string, speed: number = 0.5) => {
  return gsap.to(selector, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: selector,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

// Text reveal animation
export const animateTextReveal = (selector: string) => {
  const tl = gsap.timeline();

  // Split text into characters for animation
  const text = document.querySelector(selector);
  if (text) {
    const chars = text.textContent?.split("") || [];
    text.innerHTML = chars
      .map((char) => `<span class="char">${char}</span>`)
      .join("");

    tl.fromTo(
      ".char",
      {
        opacity: 0,
        rotationX: 90,
        transformOrigin: "50% 50%",
      },
      {
        opacity: 1,
        rotationX: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05,
      },
    );
  }

  return tl;
};
