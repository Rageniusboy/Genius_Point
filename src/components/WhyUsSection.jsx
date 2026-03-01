import {
  UserCheck,
  Lightbulb,
  ShieldCheck,
  Users2,
  Trophy,
  BookOpenCheck,
  Clock,
  Star,
} from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Personal Attention",
    desc: "Every student gets individual focus. We track your growth, address your weaknesses, and celebrate your wins.",
    color: "hsl(var(--brand-blue))",
    bg: "hsl(var(--brand-blue-light))",
  },
  {
    icon: Lightbulb,
    title: "Concept-Based Teaching",
    desc: "No rote learning here. We ensure you understand the WHY and HOW so you can solve any problem.",
    color: "hsl(44 96% 45%)",
    bg: "hsl(var(--brand-yellow-light))",
  },
  {
    icon: ShieldCheck,
    title: "Disciplined Environment",
    desc: "A focused, respectful classroom atmosphere that trains your mind to concentrate and perform at its best.",
    color: "hsl(142 60% 40%)",
    bg: "hsl(142 60% 95%)",
  },
  {
    icon: Users2,
    title: "Small Batch Focus",
    desc: "Limited seats per batch ensures the teacher truly knows every student — no one gets left behind.",
    color: "hsl(262 70% 50%)",
    bg: "hsl(262 70% 96%)",
  },
  {
    icon: BookOpenCheck,
    title: "Weekly Tests",
    desc: "Regular assessments keep students exam-ready and parents informed about real progress.",
    color: "hsl(var(--brand-blue))",
    bg: "hsl(var(--brand-blue-light))",
  },
  {
    icon: Clock,
    title: "Doubt Solving Sessions",
    desc: "Dedicated time for clearing doubts so no confusion carries forward to the next topic.",
    color: "hsl(44 96% 45%)",
    bg: "hsl(var(--brand-yellow-light))",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    desc: "Hundreds of students have achieved top scores in MP Board and CBSE exams under our guidance.",
    color: "hsl(142 60% 40%)",
    bg: "hsl(142 60% 95%)",
  },
  {
    icon: Star,
    title: "Expert Guidance",
    desc: "Taught by Rakesh Sharma, with deep subject expertise in Physics, Chemistry, Biology, Mathematics and Spoken English.",
    color: "hsl(262 70% 50%)",
    bg: "hsl(262 70% 96%)",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "hsl(44 96% 53%)",
          filter: "blur(100px)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <span
            className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "hsl(44 96% 53% / 0.15)",
              border: "1px solid hsl(44 96% 53% / 0.3)",
              color: "hsl(44 96% 70%)",
            }}
          >
            Why Choose Us
          </span>

          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: "hsl(0 0% 100%)" }}
          >
            The Genius Point Advantage
          </h2>

          <div
            className="w-16 h-1 mx-auto mb-6 rounded-full"
            style={{ background: "var(--gradient-cta)" }}
          />

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "hsl(210 40% 75%)" }}
          >
            We don't just teach — we mentor, motivate and transform students into confident achievers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {reasons.map(({ icon: Icon, title, desc, color, bg }) => (
            <div
              key={title}
              className="rounded-2xl p-5 text-center transition-all duration-300 cursor-default group"
              style={{
                background: "hsl(0 0% 100% / 0.06)",
                border: "1px solid hsl(0 0% 100% / 0.1)",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "hsl(0 0% 100% / 0.12)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "hsl(0 0% 100% / 0.06)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: bg }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>

              <h3
                className="font-bold text-sm mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                {title}
              </h3>

              <p
                className="text-xs leading-relaxed"
                style={{ color: "hsl(210 40% 70%)" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}