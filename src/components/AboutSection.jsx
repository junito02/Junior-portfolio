import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Book } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          {/* Contenido principal */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="space-y-4 text-lg">
              <p className="text-muted-foreground">
                I'm a passionate Full Stack Developer with a love for creating
                beautiful, functional, and user-friendly web experiences.
              </p>

              <p className="text-muted-foreground">
                With{" "}
                <span className="text-primary font-semibold ">
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
        </motion.div>
      </div>
    </section>
  );
};
