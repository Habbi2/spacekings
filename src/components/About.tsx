export default function About() {
  return (
    <section className="container py-16" id="about">
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        <div className="card p-6">
          <h2 className="section-title">¿Quiénes somos?</h2>
          <p className="mt-4 text-[color:var(--muted)]">
            Space Kings es una organización americana de Esports enfocada en Counter-Strike 2. Nuestro objetivo es alcanzar lo más alto de la escena competitiva, impulsar el talento emergente y representar a nuestra comunidad en torneos nacionales e internacionales.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="section-title">Nuestra visión</h2>
          <p className="mt-4 text-[color:var(--muted)]">
            Ser uno de los equipos más destacados que represente al continente americano en el ámbito de los E-Sports
          </p>
        </div>
      </div>
    </section>
  );
}
