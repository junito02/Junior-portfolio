import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Sparkles,
  Eye,
  Code,
  Zap,
} from "lucide-react";
import React, { useMemo } from "react";

const projectsData = [
  {
    id: 1,
    title: "Movie App",
    description:
      "A responsive movie app built with React, TailwindCSS, and TMDB API. Features include movie search, filtering, and detailed information.",
    image: "/projects/Movies.webp",
    tags: ["React", "TailwindCSS", "TMDB API"],
    demoUrl: "https://movies-app-pink-five.vercel.app/",
    githubUrl: "https://github.com/junito02/MoviesApp",
    category: "Web App",
    featured: true,
  },
  {
    id: 2,
    title: "MLB Project",
    description:
      "A responsive MLB project built with HTML, CSS, and JavaScript. Features include  team statistics, and player profiles.",
    image: "/projects/mlb.webp",
    tags: ["Html", "Css", "Javascript"],
    demoUrl: "https://mlb-project-eight.vercel.app/",
    githubUrl: "https://github.com/junito02/MLB-project",
    category: " MLB Project",
    featured: false,
  },
  {
    id: 3,
    title: "CRUD Full Stack",
    description:
      " A full-stack application for creating, reading, updating, and deleting data using React, TailwindCSS, Node.js, Express, and a MySQL database.",
    image: "/projects/users.webp",
    tags: ["React", "TailwindCSS", "My-own-API", "Node js", "Express"],
    demoUrl: "https://frontend-crud-swart.vercel.app/",
    githubUrl: "https://github.com/junito02/Frontend-Crud",
    category: "Web App-crud",
    featured: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectsSectionComponent = () => {
  // useMemo para evitar recalcular proyectos
  const projects = useMemo(() => projectsData, []);
  // Detectar si es mobile para limitar animaciones
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section id="projects" className="py-24 px-4 relative">
      {/* Background overlay para mejor contraste - REMOVIDO para mantener background consistente */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/60 pointer-events-none" /> */}

      <div className="container mx-auto max-w-7xl relative z-10">
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
              My Work
            </span>
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
            Explore the code and live demos below.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Grid de proyectos */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative"
            >
              {/* Card principal */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500">
                {/* Imagen con overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 bg-blue-100"
                    loading="lazy"
                    style={{ background: "#dbeafe" }}
                  />
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Botones de acción */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
                      whileHover={!isMobile ? { scale: 1.1 } : {}}
                      whileTap={!isMobile ? { scale: 0.95 } : {}}
                    >
                      <Eye className="h-5 w-5 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
                      whileHover={!isMobile ? { scale: 1.1 } : {}}
                      whileTap={!isMobile ? { scale: 0.95 } : {}}
                    >
                      <Github className="h-5 w-5 text-white" />
                    </motion.a>
                  </div>

                  {/* Badge de categoría */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary">
                      {project.category}
                    </span>
                  </div>

                  {/* Badge de featured */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full text-yellow-400 flex items-center gap-1">
                        <Zap className="h-3 w-3" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 border border-primary/20 rounded-full text-primary/80 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Enlaces */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Demo <ExternalLink className="h-4 w-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary flex items-center gap-1"
                      >
                        Code <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-indigo-500/10 border border-primary/20">
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-1">Want to see more?</h3>
              <p className="text-sm text-muted-foreground">
                Check out my GitHub for more projects
              </p>
            </div>
            <a
              className="cosmic-button group flex items-center gap-2"
              target="_blank"
              href="https://github.com/junito02/junito02"
            >
              View GitHub
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const ProjectsSection = React.memo(ProjectsSectionComponent);
