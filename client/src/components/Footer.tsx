import { Link } from "wouter";
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 font-sans">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-secondary">DE PEAK SCHOOL</h3>
            <p className="text-gray-300 leading-relaxed">
              Raising God-fearing leaders through academic excellence, moral discipline, and Christian values in the heart of Nigeria.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white font-serif">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Admissions", href: "/admissions" },
                { label: "Academics", href: "/academics" },
                { label: "News & Events", href: "/news" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact Us", href: "/contact" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-secondary flex items-center group transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white font-serif">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary mr-3 mt-1 shrink-0" />
                <span className="text-gray-300">123 Education Close, Off Peak Avenue, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-secondary mr-3 shrink-0" />
                <span className="text-gray-300">+234 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-secondary mr-3 shrink-0" />
                <span className="text-gray-300">info@depeakschool.ng</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white font-serif">Newsletter</h4>
            <p className="text-gray-300 mb-4 text-sm">Subscribe to receive updates on school activities and events.</p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
              />
              <button className="w-full bg-secondary text-primary font-bold py-2 rounded-md hover:bg-white hover:text-primary transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} De Peak School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
