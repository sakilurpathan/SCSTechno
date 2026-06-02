import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Monitor, Laptop, Printer, Settings, Power, 
  Network, Wrench, Globe, Code, ShieldCheck,
  Zap, Clock, Award, ThumbsUp, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  { icon: Monitor, title: "Computer Repair", desc: "Expert diagnosis and repair for all desktop PC issues." },
  { icon: Laptop, title: "Laptop Repair", desc: "Screen replacement, battery issues, and hardware fixes." },
  { icon: Printer, title: "Printer Repair", desc: "Fixing paper jams, ink issues, and hardware faults." },
  { icon: Settings, title: "Printer Setup", desc: "Professional installation and network configuration." },
  { icon: Power, title: "Windows Installation", desc: "Clean OS installation, updates, and driver setup." },
  { icon: Network, title: "Networking Support", desc: "Router setup, Wi-Fi troubleshooting, and LAN configuration." },
  { icon: Wrench, title: "AMC Maintenance", desc: "Annual maintenance contracts for business reliability." },
  { icon: Globe, title: "Website Development", desc: "Modern, responsive websites for your business." },
  { icon: Code, title: "Custom Software", desc: "Tailored software solutions to streamline operations." },
  { icon: ShieldCheck, title: "IT Support Services", desc: "Comprehensive tech support for businesses." }
];

const features = [
  { icon: Zap, title: "Fast Response", desc: "Quick turnaround times for all repair and support requests." },
  { icon: Award, title: "Certified Technicians", desc: "Expert professionals with years of hands-on experience." },
  { icon: ThumbsUp, title: "Affordable Pricing", desc: "Transparent, competitive rates with no hidden charges." },
  { icon: Clock, title: "Onsite Support", desc: "We come to your location for ultimate convenience." }
];

const testimonials = [
  { name: "Rajesh Patel", text: "SCS Techno Services fixed my business laptops within hours. Highly professional and very reasonable pricing.", rating: 5 },
  { name: "Amit Shah", text: "Best IT support in Ahmedabad. Their team set up our entire office network flawlessly.", rating: 5 },
  { name: "Priya Desai", text: "Very knowledgeable team. They developed a custom inventory software for us that works perfectly.", rating: 5 }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  useEffect(() => {
    document.title = "SCS Techno Services - Trusted IT Partner in Ahmedabad";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 circuit-pattern opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background"></div>
        
        <div className="container relative z-10 px-4 py-32 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl"
          >
            <h1 className="font-heading mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Your Trusted <br />
              <span className="text-primary drop-shadow-[0_0_15px_rgba(30,144,255,0.5)]">Technology Partner</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
              Expert computer repair, IT support, and custom software development in Ahmedabad. Fast, reliable, and precise solutions for your business.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto" asChild data-testid="btn-hero-call">
                <a href="tel:9664836317">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white" asChild data-testid="btn-hero-whatsapp">
                <a href="https://wa.me/919664836317" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="mr-2 h-6 w-6" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-card/50">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">Our Core Services</h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-primary rounded"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(30,144,255,0.3)]"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button variant="link" asChild className="text-primary" data-testid="btn-view-all-services">
              <Link href="/services">View All Details &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-16"
          >
            <div>
              <h2 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl mb-6">Why Choose SCS Techno Services?</h2>
              <p className="text-lg text-muted-foreground">
                We don't just fix computers; we ensure your entire technology infrastructure operates flawlessly. With years of experience serving Ahmedabad, we are the trusted partner for businesses and individuals alike.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card/50">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">Client Testimonials</h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-primary rounded"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="rounded-xl border border-border bg-background p-8"
              >
                <div className="flex gap-1 mb-4 text-accent">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground italic">"{testimonial.text}"</p>
                <div className="font-heading font-semibold text-lg">{testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">Find Us</h2>
            <p className="mt-3 text-muted-foreground text-lg">A405 Sumel Business Park 10, Saraspur, Ahmedabad, Gujarat 380018</p>
            <div className="mx-auto mt-4 h-1 w-24 bg-primary rounded"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[450px] overflow-hidden rounded-xl border border-border"
          >
            <iframe
              src="https://maps.google.com/maps?q=A405+Sumel+Business+Park+10+Saraspur+Ahmedabad+Gujarat+380018&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(80%)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SCS Techno Services Location"
              className="absolute inset-0"
              data-testid="iframe-google-maps"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Temporary Phone icon for hero section
function Phone(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
