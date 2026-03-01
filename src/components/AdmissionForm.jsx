import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function AdmissionForm() {
  const [form, setForm] = useState({ name: "", cls: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="admission" className="py-20 md:py-28" style={{ background: "hsl(var(--muted))" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <span className="section-badge">Enquire Now</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2" style={{ color: "hsl(var(--brand-blue-dark))" }}>
              Start Your Journey
              <br />
              <span style={{ color: "hsl(var(--brand-blue))" }}>Today</span>
            </h2>
            <div className="w-16 h-1 mb-6 rounded-full" style={{ background: "var(--gradient-yellow)" }} />
            <p className="mb-6 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              Admissions are open for Academic Coaching (Classes 5–12) and Spoken English batches. Limited seats —
              don't miss out!
            </p>
            <ul className="space-y-3">
              {[
                "📚 Academic Coaching: Physics, Chemistry, Biology & Maths",
                "🗣️ Spoken English: Batch from 18 March",
                "📞 Quick callback within 24 hours",
                "🎯 Free demo class available",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "hsl(var(--foreground))" }}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div
            className="rounded-3xl p-8 shadow-2xl"
            style={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--brand-blue) / 0.1)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ color: "hsl(142 60% 45%)" }}
                />
                <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(var(--brand-blue-dark))" }}>
                  Enquiry Received!
                </h3>
                <p style={{ color: "hsl(var(--muted-foreground))" }}>
                  Thank you! We'll contact you within 24 hours.
                  <br />
                  Or call us directly:{" "}
                  <a href="tel:7518788205" className="font-bold" style={{ color: "hsl(var(--brand-blue))" }}>
                    7518788205
                  </a>
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-1" style={{ color: "hsl(var(--brand-blue-dark))" }}>
                  Admission Enquiry
                </h3>
                <p className="text-sm mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                  Fill in your details and we'll get back to you shortly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: "hsl(var(--foreground))" }}>
                      Student Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter student's full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        border: "2px solid hsl(var(--border))",
                        background: "hsl(var(--muted))",
                        color: "hsl(var(--foreground))",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "hsl(var(--brand-blue))")}
                      onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: "hsl(var(--foreground))" }}>
                      Current Class *
                    </label>
                    <select
                      required
                      value={form.cls}
                      onChange={(e) => setForm({ ...form, cls: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 cursor-pointer"
                      style={{
                        border: "2px solid hsl(var(--border))",
                        background: "hsl(var(--muted))",
                        color: form.cls ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "hsl(var(--brand-blue))")}
                      onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")}
                    >
                      <option value="">Select class / course</option>
                      <option>Class 5th</option>
                      <option>Class 6th</option>
                      <option>Class 7th</option>
                      <option>Class 8th</option>
                      <option>Class 9th</option>
                      <option>Class 10th</option>
                      <option>Class 11th</option>
                      <option>Class 12th</option>
                      <option>Spoken English Course</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: "hsl(var(--foreground))" }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter contact number"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        border: "2px solid hsl(var(--border))",
                        background: "hsl(var(--muted))",
                        color: "hsl(var(--foreground))",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "hsl(var(--brand-blue))")}
                      onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4 text-base"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Enquiry
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center" style={{ color: "hsl(var(--muted-foreground))" }}>
                    Or call/WhatsApp directly:{" "}
                    <a href="tel:7518788205" className="font-bold" style={{ color: "hsl(var(--brand-blue))" }}>
                      7518788205
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
