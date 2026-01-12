import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/academics", label: "Academics" },
    { href: "/admissions", label: "Admissions" },
    { href: "/school-life", label: "School Life" },
    { href: "/news", label: "News & Events" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 font-sans">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-secondary" /> +234 123 456 7890</span>
            <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /> info@depeakschool.ng</span>
          </div>
          <div className="text-secondary font-medium">Faith • Discipline • Excellence</div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 md:h-12 md:w-12 bg-primary rounded-full flex items-center justify-center border-2 border-secondary group-hover:scale-105 transition-transform duration-300">
               {/* Logo Placeholder */}
               <span className="text-secondary font-serif font-bold text-xl md:text-2xl">D</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl md:text-2xl text-primary leading-none tracking-tight">DE PEAK SCHOOL</h1>
              <p className="text-xs text-muted-foreground hidden sm:block tracking-wide">RAISING GOD-FEARING LEADERS</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  location === link.href
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/admissions">
              <Button className="ml-4 bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-full">
                Apply Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t">
          <div className="container-custom py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium ${
                  location === link.href
                    ? "bg-primary/5 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t mt-4">
              <Link href="/admissions" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
