'use client';
import { useState } from 'react';

export default function Tryouts() {
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus('sending');
    try {
      const res = await fetch('/api/tryouts', {
        method: 'POST',
        body: JSON.stringify({
          nombre: form.get('nombre'),
          pais: form.get('pais'),
          roles: (form.getAll('roles') || []).map(String),
          steam: form.get('steam'),
          faceit: form.get('faceit'),
          gamersclub: form.get('gamersclub'),
          contactoTipo: 'both',
          contacto: form.get('gmail'),
          discord: form.get('discord'),
          gmail: form.get('gmail'),
          comentario: form.get('comentario')
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.ok) { setStatus('ok'); (e.target as HTMLFormElement).reset(); }
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="container py-16" id="tryouts">
      <div className="card p-6">
        <h2 className="section-title">Tryouts</h2>
  <p className="mt-2 text-[color:var(--muted)]">¿Querés probarte para Space Kings? Completá el formulario. Te contactaremos si quedás preseleccionado.</p>
  <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
          <label className="flex flex-col gap-2">
            <span>Nombre / Nick</span>
            <input required name="nombre" className="rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 outline-none focus:border-primary" />
          </label>
          <label className="flex flex-col gap-2">
            <span>País</span>
            <input required name="pais" className="rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 outline-none focus:border-primary" />
          </label>
          <label className="flex flex-col gap-2">
            <span>Perfil Faceit</span>
            <input name="faceit" type="url" placeholder="https://www.faceit.com/es/players/tuusuario" className="rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 outline-none focus:border-primary" />
          </label>
          <label className="flex flex-col gap-2">
            <span>Perfil GamersClub</span>
            <input name="gamersclub" type="url" placeholder="https://gamersclub.com.br/jogador/tuusuario" className="rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 outline-none focus:border-primary" />
          </label>
          <div className="flex flex-col gap-2">
            <span>Roles (podés marcar más de uno)</span>
            <div className="grid grid-cols-2 gap-2">
              {['Entry','Rifle','AWP','IGL','Support','Lurker','Coach'].map((r) => (
                <div key={r} className="relative">
                  <input id={`role-${r}`} type="checkbox" name="roles" value={r} className="peer hidden" />
                  <label htmlFor={`role-${r}`} className="block rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-center cursor-pointer select-none transition hover:border-primary peer-checked:border-primary peer-checked:bg-primary/10">
                    <span className="inline-flex items-center justify-center gap-2">
                      {r}
                      <svg aria-hidden className="size-4 opacity-0 transition peer-checked:opacity-100" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.5-1.5z"/></svg>
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <label className="flex flex-col gap-2">
            <span>Perfil de Steam</span>
            <input required name="steam" type="url" placeholder="https://steamcommunity.com/id/tuusuario" className="rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 outline-none focus:border-primary" />
          </label>
          <div className="sm:col-span-2 grid sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2">
              <span>Discord</span>
              <input
                required
                name="discord"
                placeholder="tuusuario (Discord)"
                className="rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 outline-none focus:border-primary"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span>Gmail</span>
              <input
                required
                type="email"
                name="gmail"
                placeholder="tu@correo.com"
                className="rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 outline-none focus:border-primary"
              />
            </label>
          </div>
          <label className="sm:col-span-2 flex flex-col gap-2">
            <span>Comentario</span>
            <textarea name="comentario" rows={4} className="rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 outline-none focus:border-primary" />
          </label>
          <div className="sm:col-span-2 flex items-center gap-3">
            <button className="btn-primary" disabled={status==='sending'}>
              {status==='sending' ? 'Enviando…' : 'Enviar postulación'}
            </button>
            {status==='ok' && <span className="text-green-400">¡Recibido! Te contactaremos.</span>}
            {status==='error' && <span className="text-red-400">Error al enviar. Probá de nuevo.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
