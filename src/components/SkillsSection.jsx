import { useState, useMemo, useCallback } from "react";
import { cn } from "@/lib/utils";
import {
  FileCode2,
  Braces,
  Atom,
  Palette,
  Server,
  Database,
  GitBranch,
  Terminal,
  Code2,
  Sparkles,
  Zap,
  Layers,
  Cpu,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const skillIcons = {
  "HTML/CSS": <FileCode2 className="w-6 h-6 text-orange-500" />,
  JavaScript: <Braces className="w-6 h-6 text-yellow-500" />,
  React: <Atom className="w-6 h-6 text-sky-500" />,
  TypeScript: <Code2 className="w-6 h-6 text-blue-600" />,
  "Tailwind CSS": <Palette className="w-6 h-6 text-teal-400" />,
  "Node.js": <Server className="w-6 h-6 text-green-600" />,
  Express: <Server className="w-6 h-6 text-gray-500" />,
  MongoDB: <Database className="w-6 h-6 text-green-700" />,
  PostgreSQL: <Database className="w-6 h-6 text-blue-700" />,
  "Git/GitHub": <GitBranch className="w-6 h-6 text-orange-500" />,
  "VS Code": <Terminal className="w-6 h-6 text-indigo-500" />,
};

const skills = [
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Git/GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
];

const categories = [
  { id: "all", name: "All Skills", icon: <Layers className="w-4 h-4" /> },
  { id: "frontend", name: "Frontend", icon: <Palette className="w-4 h-4" /> },
  { id: "backend", name: "Backend", icon: <Server className="w-4 h-4" /> },
  { id: "tools", name: "Tools", icon: <Settings className="w-4 h-4" /> },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const SkillsSectionComponent = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // useMemo para evitar recalcular skills filtrados
  const filteredSkills = useMemo(
    () =>
      skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
      ),
    [activeCategory]
  );

  // useCallback para estabilizar el handler
  const handleCategory = useCallback((id) => setActiveCategory(id), []);

  // Detectar si es mobile para limitar animaciones
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section id="skills" className="py-24 px-4 relative ">
      {/* Background overlay para mejor contraste - REMOVIDO para mantener background consistente */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/60 pointer-events-none" /> */}

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header mejorado */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary/80 uppercase tracking-wider">
              My Expertise
            </span>
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-blue-500 bg-clip-text ">
              Skills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with. I'm constantly
            learning and expanding my skill set to stay up-to-date with the
            latest industry trends and best practices.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Filtros de categorías mejorados */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategory(category.id)}
              className={cn(
                "group flex cursor-pointer items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 capitalize font-medium",
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg shadow-primary/25"
                  : "bg-card/50 border border-border/50 text-muted-foreground hover:bg-card hover:border-primary/30 hover:text-primary"
              )}
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={!isMobile ? { scale: 0.95 } : {}}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de skills */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="group relative"
            >
              {/* Card principal */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 p-6">
                {/* Header de la skill */}
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {skillIcons[skill.name] || (
                      <Code2 className="w-6 h-6 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors mb-2">
                      {skill.name}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 border border-primary/20 rounded-full text-primary/80 capitalize">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Efecto de glow en hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats adicionales */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">11+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">+1</div>
            <div className="text-sm text-muted-foreground">
              Year of experience
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">Always</div>
            <div className="text-sm text-muted-foreground">Learning</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const SkillsSection = React.memo(SkillsSectionComponent);
