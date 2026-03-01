import { Phone, MessageCircle, MapPin, Mail, Clock, GraduationCap } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28" style={{ background: "hsl(var(--background))" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="section-badge">Contact Us</span>
          <h2 className="section-heading">Get in Touch</h2>
          <div className="yellow-line" />
          <p className="section-subheading">We're just a call away. Reach us for admissions, queries or a free demo class.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-5">
            <a
              href="tel:7518788205"
              className="feature-card flex items-center gap-5 no-underline"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: "hsl(var(--brand-blue-light))" }}
              >
                <Phone className="w-6 h-6" style={{ color: "hsl(var(--brand-blue))" }} />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>Call / Click to Call</div>
                <div className="text-xl font-extrabold" style={{ color: "hsl(var(--brand-blue))" }}>7518788205</div>
                <div className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>Available Mon–Sat, 9 AM – 7 PM</div>
              </div>
            </a>

            <a
              href="https://wa.me/917518788205?text=Hello%2C%20I%20want%20to%20enquire%20about%20admissions"
              target="_blank"
              rel="noopener noreferrer"
              className="feature-card flex items-center gap-5 no-underline"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: "hsl(142 60% 95%)" }}
              >
                <MessageCircle className="w-6 h-6" style={{ color: "hsl(142 60% 40%)" }} />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>WhatsApp</div>
                <div className="text-xl font-extrabold" style={{ color: "hsl(142 60% 38%)" }}>Chat on WhatsApp</div>
                <div className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>Quick responses guaranteed</div>
              </div>
            </a>

            <div className="feature-card flex items-center gap-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: "hsl(var(--brand-yellow-light))" }}
              >
                <MapPin className="w-6 h-6" style={{ color: "hsl(var(--brand-yellow-dark))" }} />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>Location</div>
                <div className="font-bold" style={{ color: "hsl(var(--foreground))" }}>Indore, Madhya Pradesh</div>
                <div className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>Contact us for exact address</div>
              </div>
            </div>

            <div className="feature-card flex items-center gap-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: "hsl(262 70% 96%)" }}
              >
                <Clock className="w-6 h-6" style={{ color: "hsl(262 70% 50%)" }} />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>Batch Timings</div>
                <div className="font-bold" style={{ color: "hsl(var(--foreground))" }}>Morning & Evening Batches</div>
                <div className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>Call to know available slots</div>
              </div>
            </div>
          </div>

          {/* Map / CTA panel */}
          <div
            className="rounded-3xl overflow-hidden relative flex flex-col justify-between p-8"
            style={{
              background: "var(--gradient-hero)",
              minHeight: "360px",
            }}
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{ backgroundImage: "radial-gradient(circle at 20px 20px, hsl(0 0% 100%) 1px, transparent 0)", backgroundSize: "40px 40px" }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8" style={{ color: "hsl(44 96% 60%)" }} />
                <div>
                  <div className="font-extrabold text-lg" style={{ color: "hsl(0 0% 100%)" }}>
                    Genius Point
                  </div>
                  <div className="text-sm" style={{ color: "hsl(210 40% 70%)" }}>Indore, Madhya Pradesh</div>

                </div>
              </div>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: "hsl(210 40% 80%)" }}>
                Serving students across Indore with top-quality coaching in Physics, Chemistry, Mathematics, Biology
                (Classes 5–12) and Spoken English. Trusted by 500+ families.
              </p>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "hsl(44 96% 60%)" }}>
                  SEO Keywords We Rank For
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Coaching Classes Indore",
                    "Spoken English Indore",
                    "Physics Chemistry Biology Maths",
                    "MP Board Coaching",
                    "CBSE Coaching Indore",
                    "Maths Science Tutor",
                  ].map((kw) => (
                    <span
                      key={kw}
                      className="px-2.5 py-1 rounded-full text-xs"
                      style={{
                        background: "hsl(0 0% 100% / 0.1)",
                        border: "1px solid hsl(0 0% 100% / 0.2)",
                        color: "hsl(0 0% 100%)",
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-6">
              <a href="#admission" className="btn-primary w-full justify-center">
                Enquire for Admission
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
