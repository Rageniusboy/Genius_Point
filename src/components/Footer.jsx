import { Phone, MessageCircle, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{
        background: "hsl(217 91% 10%)",
        borderColor: "hsl(217 91% 20%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "var(--gradient-cta)" }}
            >
              <GraduationCap className="w-5 h-5" style={{ color: "hsl(220 25% 12%)" }} />
            </div>
            <div>
              <div className="font-extrabold" style={{ color: "hsl(0 0% 100%)" }}>Genius Point</div>
              <div className="text-xs" style={{ color: "hsl(210 40% 60%)" }}>Indore, Madhya Pradesh • Est. coaching excellence</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:7518788205"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: "hsl(var(--brand-blue))",
                color: "hsl(0 0% 100%)",
              }}
            >
              <Phone className="w-4 h-4" /> 7518788205
            </a>
            <a
              href="https://wa.me/917518788205"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: "hsl(142 60% 40%)",
                color: "hsl(0 0% 100%)",
              }}
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
        <div
          className="mt-6 pt-6 text-center text-xs border-t"
          style={{ borderColor: "hsl(217 91% 20%)", color: "hsl(210 40% 50%)" }}
        >
          © {new Date().getFullYear()} Genius Point, Indore. All rights reserved. |
          Coaching classes in Indore | Spoken English classes in Indore | Physics Chemistry Biology Maths coaching | MP Board & CBSE coaching
        </div>
      </div>
    </footer>
  );
}
