import { socials } from '@/data/config';

const Icon = ({ path }: { path: string }) => (
  <svg viewBox="0 0 24 24" className="size-5"><path fill="currentColor" d={path} /></svg>
);

export default function Socials() {
  return (
    <section className="container py-10" id="socials">
      <div className="card p-6">
        <h2 className="section-title">Nuestras redes</h2>
        <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { name: 'Twitter/X', url: socials.twitter, icon: 'M22 5.8 13.9 15.6 9.2 10.2 2 19h20V5.8zM21.6 3H16l-4.1 4.8 3.8 4.4L21.6 3z' },
            { name: 'Instagram', url: socials.instagram, icon: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 4.5A5.5 5.5 0 1 0 17.5 12 5.51 5.51 0 0 0 12 6.5zm6-1.8a1.3 1.3 0 1 0 1.3 1.3 1.3 1.3 0 0 0-1.3-1.3z' },
            { name: 'Twitch', url: socials.twitch, icon: 'M2 3v14h5v4l4-4h5l4-4V3H2zm16 8-2 2h-4l-3 3v-3H6V5h12v6z' },
            { name: 'YouTube', url: socials.youtube, icon: 'M10 15l5.2-3L10 9v6z M21.6 7.2c.3 1 .4 2 .4 3.3s-.1 2.3-.4 3.3c-.3 1.1-1.2 1.9-2.3 2.1C17.6 16.2 12 16.2 12 16.2s-5.6 0-7.3-.3C3.6 15.7 2.7 15 2.4 13.8 2.1 12.8 2 11.8 2 10.5s.1-2.3.4-3.3C2.7 6.1 3.6 5.3 4.7 5.1 6.4 4.8 12 4.8 12 4.8s5.6 0 7.3.3c1.1.2 2 1 2.3 2.1z' },
            { name: 'Gmail', url: socials.gmail, icon: 'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1.2 3.2-6.4 4.8-6.4-4.8V6l6.4 4.8L18.8 6v1.2z' },
            { name: 'Discord', url: socials.discord, icon: 'M20 4h-3.5l-.7 1.4a8 8 0 0 0-7.6 0L7.5 4H4l-1 4v10h3l.6-1.2a8 8 0 0 0 10.8 0L18 18h3V8l-1-4zM9.8 14.2c-.9 0-1.6-.8-1.6-1.7 0-.9.7-1.7 1.6-1.7s1.6.8 1.6 1.7c0 .9-.7 1.7-1.6 1.7zm4.4 0c-.9 0-1.6-.8-1.6-1.7 0-.9.7-1.7 1.6-1.7s1.6.8 1.6 1.7c0 .9-.7 1.7-1.6 1.7z' }
          ].map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 hover:bg-white/[0.08] transition">
              <span className="text-accent"><Icon path={s.icon} /></span>
              <span className="font-medium">{s.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
