import academicImg from "@/assets/academic-class.jpg";
import englishImg from "@/assets/english-class.jpg";
import { CheckCircle2, Calendar, Users, BookOpen, MessageSquare, Mic } from "lucide-react";

const academicFeatures = [
  "Classes 5th to 12th (MP Board & CBSE)",
  "Physics, Chemistry, Maths & Biology",
  "Limited batch size for personal attention",
  "Weekly tests with performance tracking",
  "Dedicated doubt-solving sessions",
  "Conceptual teaching methodology",
];

const englishFeatures = [
  "Basic to Advanced English levels",
  "Grammar & Vocabulary improvement",
  "Fluent Speaking confidence building",
  "Interview & GD preparation",
  "Personal & Group training options",
  "Batch starting from 18 March",
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 md:py-28" style={{ background: "hsl(var(--background))" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="section-badge">Our Courses</span>
          <h2 className="section-heading">Programs Built for Success</h2>
          <div className="yellow-line" />
          <p className="section-subheading max-w-2xl mx-auto">
            Structured courses designed to build academic excellence and communication mastery — tailored for every learner in Indore.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Academic Coaching Card */}
          <div
            className="rounded-3xl overflow-hidden shadow-xl border"
            style={{ borderColor: "hsl(var(--brand-blue) / 0.15)" }}
          >
            <div className="relative h-52 overflow-hidden">
              <img src={academicImg} alt="Academic coaching classes Indore" className="w-full h-full object-cover" />
              <div
                className="absolute inset-0 flex items-end p-5"
                style={{ background: "linear-gradient(to top, hsl(217 91% 15% / 0.9) 0%, transparent 60%)" }}
              >
                <div>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2"
                    style={{ background: "hsl(44 96% 53%)", color: "hsl(var(--secondary-foreground))" }}
                  >
                    Academic Coaching
                  </div>
                  <h3 className="text-xl font-extrabold" style={{ color: "hsl(0 0% 100%)" }}>
                    Physics, Chemistry, Biology & Maths
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6" style={{ background: "var(--gradient-card)" }}>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                Comprehensive coaching for{" "}
                <strong style={{ color: "hsl(var(--brand-blue))" }}>Physics, Chemistry, Mathematics & Biology</strong>{" "}
                for students in Classes 5–12 under MP Board and CBSE curriculum — with concept-based teaching and zero
                cramming.
              </p>
              <ul className="space-y-2.5 mb-6">
                {academicFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "hsl(var(--brand-blue))" }} />
                    <span style={{ color: "hsl(var(--foreground))" }}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                {[
                  { icon: Users, label: "Limited Batch" },
                  { icon: BookOpen, label: "MP & CBSE Board" },
                  { icon: MessageSquare, label: "Doubt Sessions" },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background: "hsl(var(--brand-blue-light))", color: "hsl(var(--brand-blue-dark))" }}
                  >
                    <Icon className="w-3 h-3" /> {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Spoken English Card */}
          <div
            className="rounded-3xl overflow-hidden shadow-xl border"
            style={{ borderColor: "hsl(var(--brand-yellow) / 0.2)" }}
          >
            <div className="relative h-52 overflow-hidden">
              <img src={englishImg} alt="Spoken English classes Indore" className="w-full h-full object-cover" />
              <div
                className="absolute inset-0 flex items-end p-5"
                style={{ background: "linear-gradient(to top, hsl(44 80% 15% / 0.92) 0%, transparent 60%)" }}
              >
                <div>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2"
                    style={{ background: "hsl(var(--brand-blue))", color: "hsl(0 0% 100%)" }}
                  >
                    Spoken English
                  </div>
                  <h3 className="text-xl font-extrabold" style={{ color: "hsl(0 0% 100%)" }}>
                    Communicate Confidently
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6" style={{ background: "linear-gradient(135deg, hsl(44 96% 99%) 0%, hsl(44 50% 97%) 100%)" }}>
              <div
                className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-4"
                style={{
                  background: "var(--gradient-cta)",
                  color: "hsl(var(--secondary-foreground))",
                  boxShadow: "var(--shadow-yellow)",
                }}
              >
                🗓️ New Batch Starting 18 March
              </div>
              <p className="text-sm mb-1 font-semibold italic" style={{ color: "hsl(var(--brand-blue-dark))" }}>
                "Speak Confidently — Succeed Globally."
              </p>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                From basics to fluency — our Spoken English program helps you communicate with clarity, confidence and
                professionalism in any situation.
              </p>
              <ul className="space-y-2.5 mb-6">
                {englishFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: "hsl(var(--brand-yellow-dark))" }}
                    />
                    <span style={{ color: "hsl(var(--foreground))" }}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                {[
                  { icon: Mic, label: "Fluent Speaking" },
                  { icon: Users, label: "Group & Personal" },
                  { icon: Calendar, label: "From 18 March" },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background: "hsl(var(--brand-yellow-light))", color: "hsl(var(--brand-yellow-dark))" }}
                  >
                    <Icon className="w-3 h-3" /> {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
