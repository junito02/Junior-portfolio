import { ArrowDown } from "lucide-react";
import image from "../../public/one.webp";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Fondo glow detrás del avatar */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 z-0 w-[480px] h-[480px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle 240px at 50% 40%, rgba(99,102,241,0.25), transparent 80%)",
          filter: "blur(8px)",
        }}
      />

      <div className="container max-w-3xl mx-auto text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-block rounded-full bg-gradient-to-br from-primary/30 to-indigo-500/20 p-2 shadow-xl shadow-primary/10 mb-6"
        >
          <img
            className="w-[160px] h-[160px] object-cover rounded-full border-4 border-primary/60 shadow-lg shadow-primary/20 mx-auto"
            src={image}
            alt="Portfolio Website Banner"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border border-border/50 rounded-2xl px-6 py-8 mx-auto shadow-lg shadow-primary/10"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="block text-white/80">Hi, I'm</span>
            <span className="block text-transparent bg-gradient-to-r from-primary to-indigo-500 bg-clip-text animate-fade-in-delay-1">
              Junior Alejandro
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-2">
            Passionate about learning and growing in the world of technology.
            Specializing in React, I love creating interactive and efficient
            interfaces. I'm always seeking new challenges and opportunities to
            improve my skills and apply my knowledge to real-world projects.
          </p>

          <div className="pt-4 animate-fade-in-delay-3">
            <a href="#projects" className="cosmic-button text-lg px-8 py-3">
              View My Work
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll down animado */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className="text-sm text-muted-foreground mb-2 tracking-wide animate-pulse-subtle">
          Scroll
        </span>
        <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
      </motion.div>
    </section>
  );
};
