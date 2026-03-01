import heroImg from "@/assets/hero-classroom.jpg";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Genius Point Coaching Institute classroom"
          className="w-full h-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(217 91% 12% / 0.85) 0%, hsl(217 91% 30% / 0.7) 100%)",
          }}
        />
      </div>

      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10 animate-float"
        style={{ background: "hsl(44 96% 53%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-10"
        style={{ background: "hsl(217 91% 70%)", filter: "blur(80px)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-36 md:py-0 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-up"
            style={{
              background: "hsl(44 96% 53% / 0.15)",
              border: "1px solid hsl(44 96% 53% / 0.4)",
              color: "hsl(44 96% 70%)",
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse-slow" style={{ background: "hsl(44 96% 53%)" }} />
            🎓 Admissions Open for Session 2026–27 • Indore
          </div>

          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-up delay-100"
            style={{ color: "hsl(0 0% 100%)" }}
          >
            Unlock Your <span style={{ color: "hsl(44 96% 60%)" }}>Potential</span>
            <br />With Us
          </h1>

          <p
            className="text-lg md:text-xl mb-2 animate-fade-up delay-200"
            style={{ color: "hsl(210 40% 85%)" }}
          >
            Concept Based Learning With Personal Attention
          </p>
          <p
            className="text-base mb-8 animate-fade-up delay-300"
            style={{ color: "hsl(210 40% 70%)" }}
          >
            MP Board & CBSE • Classes 5th–12th • Physics, Chemistry, Biology & Mathematics • Spoken English
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up delay-300">
            <a href="#admission" className="btn-primary text-base">
              Admissions Open Now →
            </a>
            <a href="#courses" className="btn-outline text-base">
              Explore Courses
            </a>
          </div>

          {/* Contact Chips */}
          <div className="flex flex-wrap gap-3 animate-fade-up delay-400">
            <a
              href="tel:7518788205"
              className="contact-chip"
              style={{
                background: "hsl(0 0% 100% / 0.12)",
                border: "1px solid hsl(0 0% 100% / 0.3)",
                color: "hsl(0 0% 100%)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Phone className="w-4 h-4" style={{ color: "hsl(44 96% 60%)" }} />
              <span>
                <span className="text-xs block" style={{ color: "hsl(210 40% 70%)" }}>Call / Click to Call</span>
                <span className="font-bold">7518788205</span>
              </span>
            </a>
            <a
              href="https://wa.me/917518788205?text=Hello%2C%20I%20want%20to%20enquire%20about%20admissions%20at%20Genius%20Point%20Coaching%20Institute"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-chip"
              style={{
                background: "hsl(142 71% 45% / 0.2)",
                border: "1px solid hsl(142 71% 45% / 0.5)",
                color: "hsl(0 0% 100%)",
                backdropFilter: "blur(10px)",
              }}
            >
              <MessageCircle className="w-4 h-4" style={{ color: "hsl(142 71% 60%)" }} />
              <span>
                <span className="text-xs block" style={{ color: "hsl(142 71% 70%)" }}>WhatsApp Us</span>
                <span className="font-bold">Chat Now</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0 py-5"
        style={{
          background: "hsl(217 91% 12% / 0.8)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid hsl(217 91% 50% / 0.2)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { num: "500+", label: "Students Guided" },
              { num: "10+", label: "Years Experience" },
              { num: "95%", label: "Success Rate" },
              { num: "2", label: "Expert Courses" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl md:text-2xl font-extrabold" style={{ color: "hsl(44 96% 60%)" }}>
                  {s.num}
                </div>
                <div className="text-xs" style={{ color: "hsl(210 40% 70%)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute right-6 bottom-20 hidden md:flex flex-col items-center gap-1 animate-bounce"
        style={{ color: "hsl(210 40% 70%)" }}
      >
        <span className="text-xs">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
