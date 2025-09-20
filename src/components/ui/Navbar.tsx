import Link from 'next/link';
import Logo from '@/components/ui/Logo';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40">
      <div className="container py-3">
        <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-3">
            {true ? (
              <Logo width={28} className="rounded-md" />
            ) : (
              <div className="size-7 rounded-lg bg-primary/30 border border-primary/40" />
            )}
            <span className="font-semibold">Space <span className="gradient-text">Kings</span></span>
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-white/90">Nosotros</a>
            <a href="#competitions" className="hover:text-white/90">Competiciones</a>
            <a href="#tryouts" className="btn-primary">Tryouts</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
