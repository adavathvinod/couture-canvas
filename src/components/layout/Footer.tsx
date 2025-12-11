import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-20 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border-2 border-primary flex items-center justify-center">
                <span className="font-display text-2xl text-primary font-semibold">DC</span>
              </div>
            </div>
            <p className="font-display text-sm text-foreground/80 tracking-wider mb-2">
              JACQUELINE RIVERA'S
            </p>
            <p className="font-display text-2xl text-foreground tracking-wide">
              Dance Couture
            </p>
            <div className="gold-line mt-6" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Programs", "Faculty", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="font-body text-sm text-foreground/60 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-6">
              Programs
            </h4>
            <ul className="space-y-3">
              {["Ballet", "Jazz", "Contemporary", "Hip Hop", "Tap"].map((item) => (
                <li key={item}>
                  <span className="font-body text-sm text-foreground/60">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a 
                  href="https://maps.google.com/?q=Lake+Ronkonkoma+NY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Lake Ronkonkoma, NY
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+16316483404"
                  className="font-body text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  +1 (631) 648-3404
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@dancecouture.com"
                  className="font-body text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  info@dancecouture.com
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 border border-border flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-border flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-foreground/40 tracking-wider">
            © 2024 Jacqueline Rivera's Dance Couture. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="font-body text-xs text-foreground/60 tracking-wider">5.0 Rating</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
