import { ArrowUp, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 px-4 mt-24">
      {/* Background overlay para mejor contraste */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Línea decorativa */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="mx-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary/80 uppercase tracking-wider">
              Portfolio
            </span>
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Información del desarrollador */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Junior Alejandro</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Full Stack Developer passionate about creating amazing web
              experiences
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-red-500 fill-red-500" />
              <span>and modern technologies</span>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6 text-sm">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </a>
            </div>

            {/* Botón de scroll to top mejorado */}
            <motion.button
              onClick={scrollToTop}
              className="group p-3 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 hover:border-primary/40 hover:from-primary/20 hover:to-blue-500/20 transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="h-5 w-5 text-primary group-hover:text-primary transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Junior Alejandro.</p>
            <div className="flex items-center gap-4">
              <span>Built with React & Vite</span>
              <span>•</span>
              <span>Styled with Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
