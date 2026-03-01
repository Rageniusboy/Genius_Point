import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, GraduationCap } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
      style={{
        background: scrolled
          ? "hsl(217 91% 18% / 0.97)"
          : "hsl(217 91% 18% / 0.8)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "var(--gradient-cta)" }}
          >
            <GraduationCap className="w-5 h-5" style={{ color: "hsl(var(--secondary-foreground))" }} />
          </div>
          <div>
          <div className="font-bold text-sm leading-tight" style={{ color: "hsl(0 0% 100%)" }}>
              Genius Point
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="nav-link text-sm"
                style={{ color: "hsl(210 40% 90%)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="tel:7518788205"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
          style={{ background: "var(--gradient-cta)", color: "hsl(var(--secondary-foreground))" }}
        >
          <Phone className="w-4 h-4" />
          7518788205
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg"
          style={{ color: "hsl(0 0% 100%)" }}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-4 pb-4 pt-2 border-t"
          style={{
            background: "hsl(217 91% 14%)",
            borderColor: "hsl(217 91% 30%)",
          }}
        >
          <ul className="flex flex-col gap-1 mb-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  style={{ color: "hsl(210 40% 90%)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <a
              href="tel:7518788205"
              className="contact-chip flex-1 justify-center"
              style={{ background: "var(--gradient-cta)", color: "hsl(var(--secondary-foreground))" }}
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href="https://wa.me/917518788205"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-chip flex-1 justify-center"
              style={{ background: "hsl(142 71% 45%)", color: "hsl(0 0% 100%)" }}
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
