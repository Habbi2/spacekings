import Link from 'next/link';
import { socials } from '@/data/config';
import Logo from '@/components/ui/Logo';

export default function Hero() {
  return (
    <section className="container pt-20 pb-14">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="flex-1">
          <div className="chip">Esports • LATAM</div>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight">
            Space <span className="gradient-text">Kings</span>
            <span className="block text-xl sm:text-2xl text-[color:var(--muted)] mt-2">Counter‑Strike 2</span>
          </h1>
          <p className="mt-5 text-lg text-[color:var(--muted)] max-w-xl">
            Organización de esports con foco competitivo en CS2. Buscamos talento, formamos equipo y competimos al máximo nivel.
          </p>
          <div className="mt-7 flex gap-3">
            <a href="#tryouts" className="btn-primary">Postular a Tryouts</a>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="card p-0 overflow-hidden aspect-video relative">
            <div className="absolute inset-0" style={{background:'radial-gradient(100% 80% at 70% 20%, rgba(124,92,255,0.18), transparent), radial-gradient(80% 60% at 20% 80%, rgba(0,224,255,0.18), transparent)'}} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                {true ? (
                  <Logo width={160} className="mx-auto mb-4 drop-shadow-lg" priority alt="Space Kings logo" />
                ) : (
                  <div className="mx-auto mb-4 size-24 rounded-2xl bg-primary/20 border border-primary/30 shadow-glow" />
                )}
                <p className="text-sm text-[color:var(--muted)]">Space Kings — Since 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
