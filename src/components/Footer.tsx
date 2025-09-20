export default function Footer() {
  return (
    <footer className="container py-12">
      <div className="glass rounded-2xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[color:var(--muted)]">
        <span>© {new Date().getFullYear()} Space Kings — CS2</span>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-white">Nosotros</a>
          <a href="#competitions" className="hover:text-white">Competiciones</a>
          <a href="#tryouts" className="hover:text-white">Tryouts</a>
        </div>
        <a
          href="https://www.habbiwebdesign.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/60 hover:text-white transition"
          aria-label="Page made by Habbi Web Design"
        >
          Page made by Habbi Web Design
        </a>
      </div>
    </footer>
  );
}
