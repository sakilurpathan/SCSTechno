import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
  useEffect(() => {
    document.title = "About Us - SCS Techno Services";
  }, []);

  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Clients Served", value: "2,500+" },
    { label: "Issues Resolved", value: "15,000+" },
    { label: "Success Rate", value: "99%" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="bg-card/50 py-16 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl mb-4"
          >
            About SCS Techno Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Ahmedabad's most trusted IT partner. Delivering precise, reliable, and professional technology solutions.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  SCS Techno Services was founded with a singular mission: to provide businesses and individuals in Ahmedabad with IT support that actually works. We were tired of seeing companies struggle with unreliable tech support, slow response times, and opaque pricing.
                </p>
                <p>
                  Located in the heart of Ahmedabad at Sumel Business Park 10, Saraspur, we've built a control room of technology experts. Whether it's a critical server failure, a fleet of laptops needing repair, or a custom software solution required from scratch, we handle it with precision.
                </p>
                <p>
                  We are a no-nonsense operation. When you call us, you get straight answers and fast results. That's why we are the first call our clients make when technology fails.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-card border border-border p-6 rounded-xl text-center shadow-lg">
                  <div className="text-3xl font-bold text-primary font-heading mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-card/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold">Our Core Values</h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-primary rounded"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Shield, title: "Uncompromising Reliability", desc: "When we say it will be fixed, it gets fixed. We stand behind our work 100%." },
              { icon: Target, title: "Precision & Speed", desc: "In business, downtime is money lost. We diagnose accurately and resolve quickly." },
              { icon: Users, title: "Long-Term Partnership", desc: "We don't just look for one-time fixes; we aim to be your ongoing technology partner." }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-background border border-border p-8 rounded-xl"
                >
                  <Icon className="h-10 w-10 text-accent mb-6" />
                  <h3 className="font-heading text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/10 border border-primary/20 rounded-2xl p-12 max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Ready to upgrade your IT support?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Speak directly with an expert today. No call centers, just solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="h-14 px-8 text-lg" asChild data-testid="btn-about-call">
                <a href="tel:9664836317">Call 9664836317</a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white" asChild data-testid="btn-about-whatsapp">
                <a href="https://wa.me/919664836317" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="mr-2 h-6 w-6" /> Message on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
