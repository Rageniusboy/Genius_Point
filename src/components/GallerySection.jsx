import heroImg from "@/assets/hero-classroom.jpg";
import academicImg from "@/assets/academic-class.jpg";
import englishImg from "@/assets/english-class.jpg";
import teacherImg from "@/assets/teacher-rakesh.png";

const gallery = [
  { src: heroImg, label: "Our Classroom", span: "md:col-span-2" },
  { src: teacherImg, label: "Rakesh Sir Teaching", span: "" },
  { src: academicImg, label: "Academic Coaching Session", span: "" },
  { src: englishImg, label: "Spoken English Class", span: "" },
  { src: heroImg, label: "Student Learning Environment", span: "" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-28" style={{ background: "hsl(var(--muted))" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="section-badge">Gallery</span>
          <h2 className="section-heading">Inside Genius Point</h2>
          <div className="yellow-line" />
          <p className="section-subheading">A glimpse into our learning environment and student activities.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.span}`}
              style={{ boxShadow: "var(--shadow-md)" }}
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="w-full h-60 md:h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, hsl(217 91% 15% / 0.85) 0%, transparent 60%)" }}
              >
                <span className="text-sm font-semibold" style={{ color: "hsl(0 0% 100%)" }}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
