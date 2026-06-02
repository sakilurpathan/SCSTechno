import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us - SCS Techno Services";
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="bg-card/50 py-16">
        <div className="container px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Get in touch for fast repairs, IT support, or a software development quote.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            
            {/* Contact Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 rounded-xl flex flex-col items-center text-center"
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Immediate assistance available during business hours.</p>
              <a href="tel:9664836317" className="text-xl font-bold text-primary hover:underline mt-auto" data-testid="link-contact-phone">
                9664836317
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border p-8 rounded-xl flex flex-col items-center text-center"
            >
              <div className="h-14 w-14 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-6">
                <FaWhatsapp className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Send us a message anytime for quotes and support.</p>
              <a href="https://wa.me/919664836317" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-[#25D366] hover:underline mt-auto" data-testid="link-contact-whatsapp">
                Message Us
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border p-8 rounded-xl flex flex-col items-center text-center"
            >
              <div className="h-14 w-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Business Hours</h3>
              <p className="text-muted-foreground mb-1">Monday - Saturday</p>
              <p className="font-medium text-foreground mb-4">10:00 AM - 8:00 PM</p>
              <p className="text-sm text-muted-foreground mt-auto">Closed on Sundays</p>
            </motion.div>

          </div>

          {/* Map and Address section */}
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
            <div className="grid lg:grid-cols-3">
              <div className="p-8 lg:p-12 lg:col-span-1 bg-background flex flex-col justify-center">
                <div className="mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-heading font-bold text-2xl mb-6">
                    SCS
                  </div>
                  <h2 className="font-heading text-2xl font-bold mb-4">SCS Techno Services</h2>
                  <div className="flex items-start gap-4 text-muted-foreground">
                    <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <p className="text-lg">
                      A405 Sumel Business Park 10,<br />
                      Saraspur, Ahmedabad,<br />
                      Gujarat 380018
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="h-[400px] lg:h-auto lg:col-span-2 relative">
                <iframe
                  src="https://maps.google.com/maps?q=A405+Sumel+Business+Park+10+Saraspur+Ahmedabad+Gujarat+380018&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(80%)' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SCS Techno Services Map Location"
                  className="absolute inset-0"
                  data-testid="iframe-contact-maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
