export default function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute -top-32 right-0 h-[50vh] w-[50vw] rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(closest-side, #7c5cff, transparent)' }} />
      <div className="absolute bottom-0 left-0 h-[40vh] w-[40vw] rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(closest-side, #00e0ff, transparent)' }} />
      <div className="absolute inset-0 bg-grid opacity-20" />
    </div>
  );
}
