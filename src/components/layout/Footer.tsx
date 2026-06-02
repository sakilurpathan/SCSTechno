import { Link } from "wouter";
import { Phone, MapPin, Mail, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-heading font-bold text-xl">
                SCS
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-foreground">
                Techno Services
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your Trusted Technology Partner in Ahmedabad. We provide fast, reliable IT solutions, software development, and expert repair services.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Software Development", path: "/software" },
                { name: "Contact Us", path: "/contact" }
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ChevronRight className="mr-1 h-4 w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Computer & Laptop Repair</li>
              <li className="text-sm text-muted-foreground">Printer Setup & Repair</li>
              <li className="text-sm text-muted-foreground">Networking Support</li>
              <li className="text-sm text-muted-foreground">Custom Software Development</li>
              <li className="text-sm text-muted-foreground">AMC Maintenance</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                <span>A405 Sumel Business Park 10, Saraspur, Ahmedabad, Gujarat 380018</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:9664836317" className="hover:text-primary transition-colors">9664836317</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <FaWhatsapp className="h-5 w-5 text-[#25D366] shrink-0" />
                <a href="https://wa.me/919664836317" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp Us</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SCS Techno Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
