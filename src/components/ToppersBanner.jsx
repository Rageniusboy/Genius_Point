export default function ToppersBanner() {
  return (
    <section id="results" className="py-12 bg-[hsl(var(--muted))]">
      <div className="max-w-5xl mx-auto px-4 flex justify-center">
        <img
          src="/src/assets/toppers-banner.png"
          alt="Class 10 Outstanding Results - Genius Point"
          className="max-h-screen w-auto object-contain rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  );
}