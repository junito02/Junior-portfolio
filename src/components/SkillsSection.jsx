import { useState } from "react";
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
} from "lucide-react";
import { motion } from "framer-motion";

const skillIcons = {
  "HTML/CSS": <FileCode2 className="w-6 h-6 text-primary" />,
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

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30 cursor-pointer"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary cursor-pointer"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.1,
                boxShadow:
                  "0 8px 20px rgba(59, 130, 246, 0.5), 0 0 15px rgba(59, 130, 246, 0.4)",
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className="bg-card p-6 rounded-lg shadow-md flex items-center gap-4 cursor-pointer select-none"
            >
              {skillIcons[skill.name] || (
                <Code2 className="w-6 h-6 text-muted-foreground" />
              )}
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
