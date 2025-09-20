# Space Kings — Landing Page

Landing page dark, flat y elegante para la organización de esports Space Kings (CS2), construida con Next.js 14 (App Router) y Tailwind CSS.

## Secciones
- Hero: presentación y call-to-action a Tryouts
- About: quiénes somos y visión
- Socials: links a redes
- Competitions: próximas competiciones
- Clips: embeds de YouTube/Twitch
- Tryouts: formulario para postularse
- Footer

## Requisitos
- Node.js 18+

## Desarrollo
1. Instalar dependencias
```cmd
npm install
```
2. Ejecutar en modo desarrollo
```cmd
npm run dev
```
3. Abrir http://localhost:3000

## Deploy en Vercel
1. Subí este repo a GitHub.
2. En Vercel, Import Project y elegí este repo.
3. Variables de entorno (opcional, para emails de Tryouts):
   - `RESEND_API_KEY`
   - `TRYOUTS_EMAIL` (destinatario)
4. Deploy.

## Personalización
- Editá `src/data/config.ts` para cambiar redes, competiciones y clips.
- Colores y estilos: `tailwind.config.ts` y `src/app/globals.css`.
- Favicon: reemplazá `public/favicon.ico`.

## Notas sobre Clips
- YouTube: se genera embed automáticamente desde la URL.
- Twitch: para producción agregá el parámetro `parent` con tu dominio.

## Licencia
MIT