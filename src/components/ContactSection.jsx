import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitch,
  Twitter,
  Github,
  Send,
  Sparkles,
  MessageCircle,
  Phone,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import React from "react";
import emailjs from "@emailjs/browser";

const ContactSectionComponent = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      // Debug: ver qué datos se están enviando
      const formData = new FormData(formRef.current);
      const formDataObj = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };
      console.log("Datos del formulario:", formDataObj);

      // Enviar auto-reply al usuario
      const autoReplyPromise = emailjs.sendForm(
        "service_28rm9re", // Service ID
        "template_q20oe5v", // Template ID (auto-reply)
        formRef.current,
        "AwswkJUDi57i6pMpL" // Public Key
      );

      // Enviar notificación interna para ti
      const internalNotificationPromise = emailjs.send(
        "service_28rm9re", // Service ID
        "template_rzrylbq", // Template ID (notificación interna)
        {
          from_name: formDataObj.name,
          from_email: formDataObj.email,
          message: formDataObj.message,
          to_email: "junioralejandrotiburcio@gmail.com", // Tu email
        },
        "AwswkJUDi57i6pMpL" // Public Key
      );

      // Esperar a que ambos emails se envíen
      Promise.all([autoReplyPromise, internalNotificationPromise]).then(
        (results) => {
          console.log("Ambos emails enviados exitosamente:", results);
          toast({
            title: "Message sent!",
            description:
              "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
          formRef.current.reset();
        },
        (error) => {
          console.log("Error enviando emails:", error);
          toast({
            title: "Error",
            description:
              "There was a problem sending your message. Please try again.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
    },
    [toast]
  );

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Detectar si es mobile para limitar animaciones
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section id="contact" className="py-24 px-4 relative">
      {/* Background overlay para mejor contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80 pointer-events-none" />

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
              Let's Connect
            </span>
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities and exciting
            projects.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Información de contacto */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-primary" />
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                Ready to start a conversation? Here's how you can reach me.
              </p>
            </div>

            {/* Métodos de contacto */}
            <div className="space-y-6">
              {/* Email */}
              <motion.a
                href="mailto:Junioralejandrotiburcio@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50"
                whileHover={!isMobile ? { scale: 1.03 } : {}}
                whileTap={!isMobile ? { scale: 0.97 } : {}}
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-sm text-muted-foreground">
                    Click to send me an email
                  </p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50"
                whileHover={!isMobile ? { scale: 1.03 } : {}}
                whileTap={!isMobile ? { scale: 0.97 } : {}}
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    Dominican Republic (DR)
                  </p>
                </div>
              </motion.div>

              {/* Availability */}
              <motion.div
                className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50"
                whileHover={!isMobile ? { scale: 1.03 } : {}}
                whileTap={!isMobile ? { scale: 0.97 } : {}}
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Availability</h4>
                  <p className="text-sm text-muted-foreground">
                    Open to new opportunities
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Redes sociales */}
            <div className="pt-8">
              <h4 className="font-semibold mb-6 flex items-center gap-2">
                <span>Connect With Me</span>
              </h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/junior-alejandro-836684344/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                  whileHover={!isMobile ? { scale: 1.1, y: -2 } : {}}
                  whileTap={!isMobile ? { scale: 0.95 } : {}}
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                  whileHover={!isMobile ? { scale: 1.1, y: -2 } : {}}
                  whileTap={!isMobile ? { scale: 0.95 } : {}}
                >
                  <Twitter className="h-5 w-5 text-primary" />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                  whileHover={!isMobile ? { scale: 1.1, y: -2 } : {}}
                  whileTap={!isMobile ? { scale: 0.95 } : {}}
                >
                  <Instagram className="h-5 w-5 text-primary" />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                  whileHover={!isMobile ? { scale: 1.1, y: -2 } : {}}
                  whileTap={!isMobile ? { scale: 0.95 } : {}}
                >
                  <Twitch className="h-5 w-5 text-primary" />
                </motion.a>
                <motion.a
                  href="https://github.com/junito02/junito02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                  whileHover={!isMobile ? { scale: 1.1, y: -2 } : {}}
                  whileTap={!isMobile ? { scale: 0.95 } : {}}
                >
                  <Github className="h-5 w-5 text-primary" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-8 shadow-lg shadow-primary/10 relative"
            variants={itemVariants}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-3"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-3"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-3"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2 group cursor-pointer"
                whileHover={!isMobile ? { scale: 1.02 } : {}}
                whileTap={!isMobile ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
            {/* Efecto de glow en hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const ContactSection = React.memo(ContactSectionComponent);
