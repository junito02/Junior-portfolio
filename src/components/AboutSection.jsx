import { Book, Code, Database, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Animaciones simplificadas para mejor performance
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header simplificado */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary/80 uppercase tracking-wider">
              About Me
            </span>
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Passionate{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Developer
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold leading-tight">
                A devoted learner who{" "}
                <span className="text-primary">loves what he does</span>
              </h3>

              <div className="space-y-4 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  With{" "}
                  <span className="text-primary font-semibold">
                    1 year of experience
                  </span>{" "}
                  in web development, I specialize in creating responsive,
                  accessible, and performant web applications using modern
                  technologies.
                </p>

                <p className="text-muted-foreground">
                  I'm passionate about creating elegant solutions to complex
                  problems, and I'm constantly learning new technologies and
                  techniques to stay at the forefront of the ever-evolving web
                  landscape.
                </p>
              </div>
            </div>

            {/* Stats simplificados */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="cosmic-button group flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                target="_blank"
                href="/CV%20Junior%20Alejandro.pdf"
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Download CV
                <Book className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Cards optimizadas */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            {/* Card 1 */}
            <motion.div
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    Web Development
                  </h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks and cutting-edge technologies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    User Experience
                  </h4>
                  <p className="text-muted-foreground">
                    Designing intuitive and user-friendly interfaces for web
                    applications and databases with focus on accessibility.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    Continuous Learning
                  </h4>
                  <p className="text-muted-foreground">
                    Always expanding knowledge and skills in the ever-evolving
                    tech landscape to deliver cutting-edge solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
