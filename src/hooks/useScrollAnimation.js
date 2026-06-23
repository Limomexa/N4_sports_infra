import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!options.repeat) observer.disconnect();
        } else if (options.repeat) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.12,
        rootMargin: options.rootMargin || "0px 0px -60px 0px",
      },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Pre-built animation class combos
export const animateFrom = {
  left: (visible) =>
    `transition-all duration-700 ease-out ${
      visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
    }`,
  right: (visible) =>
    `transition-all duration-700 ease-out ${
      visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
    }`,
  bottom: (visible) =>
    `transition-all duration-700 ease-out ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    }`,
  top: (visible) =>
    `transition-all duration-700 ease-out ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
    }`,
  fade: (visible) =>
    `transition-all duration-700 ease-out ${
      visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`,
  zoomIn: (visible) =>
    `transition-all duration-700 ease-out ${
      visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
    }`,
};
