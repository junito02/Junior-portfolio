import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StarBackground } from "@/components/StarBackground";

const mainText = "Junior Alejandro";
const subText = "Portfolio";

export const Loader = ({ onFinish }) => {
  const [show, setShow] = useState(true);
  const [typedCount, setTypedCount] = useState(0);
  const [showSub, setShowSub] = useState(false);

  // Typing effect optimizado
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedCount((prev) => prev + 1);
      i++;
      if (i >= mainText.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  // Mostrar subtexto después del typing
  useEffect(() => {
    if (typedCount === mainText.length) {
      setTimeout(() => setShowSub(true), 200);
      const timer = setTimeout(() => {
        setShow(false);
        if (onFinish) onFinish();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [typedCount, onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/95"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          {/* Fondo de estrellas */}
          <div className="absolute inset-0">
            <StarBackground />
          </div>
          {/* Texto animado principal */}
          <motion.h1
            className="relative text-4xl md:text-6xl font-extrabold text-center text-white bg-gradient-to-r from-primary via-blue-400 to-fuchsia-500 bg-clip-text drop-shadow-lg animate-glow"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="glow-text inline-flex items-baseline">
              {mainText.split("").map((char, idx) => (
                <span
                  key={idx}
                  className={
                    idx < typedCount
                      ? "opacity-100 transition-all duration-75 will-change-transform will-change-opacity"
                      : "opacity-0 transition-all duration-75 will-change-transform will-change-opacity"
                  }
                  aria-hidden={idx >= typedCount}
                  style={{ willChange: "opacity, transform" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              {/* Cursor */}
              <span
                className="inline-block align-baseline bg-primary animate-blink ml-1"
                style={{
                  width: "0.5em",
                  height: "1em",
                  visibility:
                    typedCount === mainText.length ? "hidden" : "visible",
                  willChange: "opacity, transform",
                }}
              ></span>
            </span>
          </motion.h1>
          {/* Subtexto Portfolio */}
          <motion.div
            className="mt-6 text-lg md:text-2xl font-semibold text-primary/90"
            initial={{ opacity: 0, y: 10 }}
            animate={showSub ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {showSub && subText}
          </motion.div>
          {/* Spinner */}
          <motion.div
            className="absolute bottom-24 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
          </motion.div>
          <style>{`
            .glow-text {
              text-shadow: 0 0 16px #818cf8, 0 0 32px #a21caf, 0 0 48px #38bdf8;
            }
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }
            .animate-blink {
              animation: blink 1s steps(1) infinite;
            }
            .animate-glow {
              animation: glow 2s ease-in-out infinite alternate;
            }
            @keyframes glow {
              0% { filter: drop-shadow(0 0 8px #818cf8) drop-shadow(0 0 16px #a21caf); }
              100% { filter: drop-shadow(0 0 24px #38bdf8) drop-shadow(0 0 32px #a21caf); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
