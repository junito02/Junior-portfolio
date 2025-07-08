import { useEffect, useState, useMemo, useCallback } from "react";

export const StarBackground = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1920,
    height: typeof window !== "undefined" ? window.innerHeight : 1080,
  });

  // Memoize stars generation to avoid recalculation on every render
  const stars = useMemo(() => {
    const numberOfStars = Math.floor(
      (windowSize.width * windowSize.height) / 15000
    ); // Reduced density
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1, // Reduced max size
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.3 + 0.3, // Reduced opacity range
        animationDuration: Math.random() * 3 + 3, // Reduced animation duration
      });
    }

    return newStars;
  }, [windowSize.width, windowSize.height]);

  // Memoize meteors generation
  const meteors = useMemo(() => {
    if (!isDarkMode) return [];

    const numberOfMeteors = 3; // Reduced number
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1.5 + 0.5, // Reduced size
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 10, // Reduced delay
        animationDuration: Math.random() * 2 + 4, // Reduced duration
      });
    }

    return newMeteors;
  }, [isDarkMode]);

  const checkTheme = useCallback(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    let timeoutId;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 100);
    };
  }, []);

  useEffect(() => {
    checkTheme();

    const debouncedResize = handleResize();
    const handleThemeChange = () => {
      checkTheme();
    };

    window.addEventListener("resize", debouncedResize);
    window.addEventListener("storage", handleThemeChange);

    // Check for theme changes in the same window
    const observer = new MutationObserver(() => {
      checkTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("storage", handleThemeChange);
      observer.disconnect();
    };
  }, [checkTheme, handleResize]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dark mode gradient background */}
      {isDarkMode && (
        <div
          className="absolute inset-0 opacity-100 transition-opacity duration-1000"
          style={{
            background: "#000000",
          }}
        />
      )}

      {/* Indigo Cosmos Background with Top Glow */}
      {isDarkMode && (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
          }}
        />
      )}

      {/* Optimized stars rendering */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            willChange: "opacity", // Optimize for animation
          }}
        />
      ))}

      {/* Optimized meteors rendering */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 40 + "px", // Reduced size multiplier
            height: meteor.size * 1.5 + "px", // Reduced height
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            willChange: "transform", // Optimize for animation
          }}
        />
      ))}
    </div>
  );
};
