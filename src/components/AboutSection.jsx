import teacherImg from "@/assets/teacher-rakesh.png";
import { Award, BookOpen, Users, ClipboardCheck } from "lucide-react";

const highlights = [
  { icon: BookOpen, title: "Concept Clarity", desc: "Deep understanding over rote learning" },
  { icon: ClipboardCheck, title: "Weekly Testing", desc: "Regular assessments to track progress" },
  { icon: Users, title: "Personal Mentoring", desc: "Individual attention to every student" },
  { icon: Award, title: "Disciplined Environment", desc: "Structured, focused learning space" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28" style={{ background: "hsl(var(--muted))" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="section-badge">About Us</span>
          <h2 className="section-heading">Meet Your Expert Mentor</h2>
          <div className="yellow-line" />
        </div>

        <div className="grid md:grid-cols-2 gap-3 items-center">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={teacherImg}
              alt="Rakesh Sharma - Maths and Science Expert"
              className="w-72 md:w-80 rounded-2xl shadow-2xl object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="section-badge">Founder & Lead Educator</span>

            <h3
              className="text-2xl md:text-3xl font-extrabold mb-1 mt-2"
              style={{ color: "hsl(var(--brand-blue-dark))" }}
            >
              Rakesh Sharma
            </h3>

            <p
              className="font-semibold mb-4"
              style={{ color: "hsl(var(--brand-blue))" }}
            >
              Maths & Science Expert
            </p>

            <p
              className="mb-4 leading-relaxed"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              With over a decade of teaching experience, Rakesh Sir brings a unique blend of technical expertise and
              passionate mentorship. His concept-first approach has helped hundreds of students from Indore master
              Physics, Chemistry, Mathematics and Biology — from Classes 5th to 12th.
            </p>

            <p
              className="mb-8 leading-relaxed"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              At <strong>Genius Point</strong>, we believe every student has genius within. Our
              mission is to unlock it through personalised guidance, rigorous practice, and an encouraging atmosphere.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "hsl(var(--brand-blue-light))" }}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: "hsl(var(--brand-blue))" }}
                    />
                  </div>

                  <div>
                    <div
                      className="font-semibold text-sm"
                      style={{ color: "hsl(var(--foreground))" }}
                    >
                      {title}
                    </div>

                    <div
                      className="text-xs mt-0.5"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      {desc}
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}