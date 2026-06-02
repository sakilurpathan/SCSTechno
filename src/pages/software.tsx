import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  SiReact, SiNodedotjs, SiTailwindcss, SiPostgresql, 
  SiPython, SiNextdotjs, SiTypescript
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Layers, Zap, SearchCode, Rocket } from "lucide-react";

export default function Software() {
  useEffect(() => {
    document.title = "Software & Web Development - SCS Techno Services";
  }, []);

  const steps = [
    { icon: SearchCode, title: "Discovery", desc: "We analyze your business processes and identify requirements." },
    { icon: Layers, title: "Architecture", desc: "Designing scalable database schemas and system workflows." },
    { icon: Zap, title: "Development", desc: "Writing clean, efficient, and secure code." },
    { icon: Rocket, title: "Deployment", desc: "Launching your application and providing ongoing support." }
  ];

  const techStack = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="relative overflow-hidden bg-card/50 py-20 md:py-32">
        <div className="absolute inset-0 circuit-pattern opacity-10 pointer-events-none"></div>
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-3xl"
          >
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              Engineering Excellence
            </div>
            <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-7xl mb-6">
              Custom Software & <br className="hidden md:block" /> Web Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We build high-performance web applications, business dashboards, and custom software tailored to your operational needs.
            </p>
            <Button size="lg" className="h-14 px-8 text-lg" asChild data-testid="btn-software-consult">
              <a href="tel:9664836317">Book a Free Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-6">Solutions We Build</h2>
              <ul className="space-y-6">
                {[
                  { title: "Corporate Websites", desc: "Fast, SEO-optimized landing pages that convert visitors into clients." },
                  { title: "Inventory & CRM Systems", desc: "Internal tools to manage your stock, clients, and sales pipelines." },
                  { title: "E-Commerce Platforms", desc: "Secure online stores with seamless payment gateway integrations." },
                  { title: "Custom API Development", desc: "Connecting your disparate systems to talk to each other automatically." }
                ].map((item, idx) => (
                  <li key={idx} className="bg-card border border-border p-6 rounded-lg">
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-accent/5 border border-accent/20 rounded-2xl p-8 lg:p-12"
            >
              <h3 className="font-heading text-2xl font-bold mb-8 text-center">Development Process</h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-background text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(30,144,255,0.2)] z-10">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-card border border-border p-4 rounded-lg">
                        <h4 className="font-heading font-bold">{step.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-card/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold">Modern Technology Stack</h2>
            <p className="text-muted-foreground mt-4">We use enterprise-grade frameworks to ensure scale and security.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {techStack.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center justify-center p-4 w-28 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 mb-3" style={{ color: tech.color }} />
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
