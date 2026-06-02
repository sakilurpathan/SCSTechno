import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Monitor, Laptop, Printer, Settings, Power, 
  Network, Wrench, Globe, Code, ShieldCheck, Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

const allServices = [
  { 
    icon: Monitor, 
    title: "Computer Repair", 
    desc: "Complete diagnostic and repair for all desktop PCs. Motherboard repair, SMPS repair, RAM upgrades, and deep cleaning.",
    features: ["Hardware diagnostics", "Component replacement", "Performance tuning"]
  },
  { 
    icon: Laptop, 
    title: "Laptop Repair", 
    desc: "Expert repairs for all major laptop brands. We fix broken screens, failing batteries, keyboard issues, and overheating.",
    features: ["Screen replacement", "Battery replacement", "Keyboard repair"]
  },
  { 
    icon: Printer, 
    title: "Printer Repair", 
    desc: "Professional repair for laser, inkjet, and dot matrix printers. Fixing paper jams, ink smudges, and mechanical faults.",
    features: ["Toner issues", "Paper jam clearing", "Mechanical repairs"]
  },
  { 
    icon: Settings, 
    title: "Printer Setup", 
    desc: "Hassle-free installation of new printers, including wireless network configuration for multi-user office environments.",
    features: ["Driver installation", "Network sharing", "Mobile printing setup"]
  },
  { 
    icon: Power, 
    title: "Windows Installation", 
    desc: "Clean OS installations, formatting, data backup, driver updates, and essential software setup for a fresh start.",
    features: ["OS formatting", "Data backup/recovery", "Antivirus setup"]
  },
  { 
    icon: Network, 
    title: "Networking Support", 
    desc: "End-to-end network solutions. Router configuration, Wi-Fi dead-zone elimination, and secure LAN setups for offices.",
    features: ["Router configuration", "LAN cabling", "Wi-Fi optimization"]
  },
  { 
    icon: Wrench, 
    title: "AMC Maintenance", 
    desc: "Annual Maintenance Contracts to keep your business running smoothly. Regular checkups prevent major breakdowns.",
    features: ["Preventive maintenance", "Priority support", "Cost-effective"]
  },
  { 
    icon: ShieldCheck, 
    title: "IT Support Services", 
    desc: "On-call and remote IT support for businesses. We act as your outsourced IT department to solve daily technical hurdles.",
    features: ["Remote troubleshooting", "Helpdesk support", "System updates"]
  },
  { 
    icon: Globe, 
    title: "Website Development", 
    desc: "Modern, fast, and responsive websites designed to grow your business online. E-commerce, corporate, and portfolios.",
    features: ["Responsive design", "SEO optimized", "Fast loading"]
  },
  { 
    icon: Code, 
    title: "Custom Software", 
    desc: "Bespoke software development tailored to your specific business processes. CRMs, ERPs, and inventory systems.",
    features: ["Tailored architecture", "Scalable solutions", "Secure databases"]
  }
];

export default function Services() {
  useEffect(() => {
    document.title = "Our Services - SCS Techno Services";
  }, []);

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
            Comprehensive IT Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            From fixing a broken laptop to building enterprise software, we provide end-to-end technology solutions.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {allServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 2) * 0.1 }}
                  className="flex flex-col sm:flex-row gap-6 bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.desc}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-accent mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-20 bg-primary/5 border-t border-primary/10">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Need a Custom Quote?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Pricing depends on the specific hardware required or the complexity of the software. Contact us for a free estimate.
          </p>
          <Button size="lg" className="h-14 px-8 text-lg" asChild data-testid="btn-services-inquiry">
            <a href="https://wa.me/919664836317" target="_blank" rel="noopener noreferrer">
              Inquire Pricing on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
