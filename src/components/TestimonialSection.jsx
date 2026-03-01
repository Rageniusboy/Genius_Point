import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Class 12 Student",
    rating: 5,
    text: "Rakesh Sir explains concepts in such a simple way that even the toughest Physics problems become easy. My marks improved from 65% to 91% in one year!",
    type: "student",
  },
  {
    name: "Ramesh Patel",
    role: "Parent of Class 10 Student",
    rating: 5,
    text: "I was worried about my son's Maths. After joining Genius Point, his confidence and scores have both improved dramatically. The weekly tests really help.",
    type: "parent",
  },
  {
    name: "Anjali Verma",
    role: "Class 11 Student",
    rating: 5,
    text: "The small batch size means Sir actually knows each student. When I had doubts, he stayed back to make sure I understood. That personal care is rare.",
    type: "student",
  },
  {
    name: "Sunita Joshi",
    role: "Parent of Class 9 Student",
    rating: 5,
    text: "Very disciplined institute. My daughter has become more focused and serious about studies since joining here. Regular test reports keep us parents informed.",
    type: "parent",
  },
  {
    name: "Arjun Singh",
    role: "Spoken English Student",
    rating: 5,
    text: "I used to freeze during interviews. After 3 months in the Spoken English course, I cleared my campus placement interview. Sir's GD training was a game changer!",
    type: "student",
  },
  {
    name: "Kavita Malhotra",
    role: "Parent & Working Professional",
    rating: 5,
    text: "Enrolled my daughter for Chemistry coaching. The results are incredible — she topped her school in the subject! Rakesh Sir's dedication is unmatched.",
    type: "parent",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28" style={{ background: "hsl(var(--background))" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="section-badge">Student & Parent Reviews</span>
          <h2 className="section-heading">What Our Students Say</h2>
          <div className="yellow-line" />
          <p className="section-subheading">
            Real experiences from students and parents who trusted Genius Point Coaching Institute.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <Quote
                className="w-8 h-8 mb-3 opacity-20"
                style={{ color: "hsl(var(--brand-blue))" }}
              />
              <p className="text-sm mb-5 leading-relaxed" style={{ color: "hsl(var(--foreground))" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{
                    background: t.type === "student" ? "hsl(var(--brand-blue-light))" : "hsl(var(--brand-yellow-light))",
                    color: t.type === "student" ? "hsl(var(--brand-blue))" : "hsl(var(--brand-yellow-dark))",
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "hsl(var(--foreground))" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "hsl(44 96% 50%)" }} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
