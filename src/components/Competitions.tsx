import { competitions, type Competition } from '@/data/config';

export default function Competitions() {
  return (
    <section className="container py-16" id="competitions">
      <div className="card p-6">
        <h2 className="section-title">Próximas competiciones</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {competitions.map((c: Competition) => (
            <a key={c.name} href={c.url} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 hover:translate-y-[-2px] hover:shadow-glow transition">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs text-[color:var(--muted)]">{c.location}</div>
              </div>
              <div className="mt-2 font-semibold">{c.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
