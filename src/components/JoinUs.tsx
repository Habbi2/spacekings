export default function JoinUs() {
  return (
    <section className="container py-4">
      <div className="glass rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-sm text-[color:var(--muted)]">¿Listo para el siguiente nivel?</div>
          <div className="text-xl font-semibold">Sumate a los tryouts de Space Kings</div>
        </div>
        <a href="#tryouts" className="btn-primary">Postular ahora</a>
      </div>
    </section>
  );
}
