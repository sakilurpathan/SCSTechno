import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href="tel:9664836317"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-110"
        data-testid="btn-floating-call"
        aria-label="Call Us Now"
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        href="https://wa.me/919664836317"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 transition-transform hover:scale-110"
        data-testid="btn-floating-whatsapp"
        aria-label="WhatsApp Us"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>
    </div>
  );
}
