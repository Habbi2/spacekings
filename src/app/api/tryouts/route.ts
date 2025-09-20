import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const roles = Array.isArray(data.roles) ? data.roles : (data.rol ? [data.rol] : []);
    const contactoLinea = (() => {
      if (data.contactoTipo === 'both' || (data.discord && data.gmail)) {
        return `Contacto: Discord ${data.discord || ''} | Gmail ${data.gmail || ''}`;
      }
      if (data.contactoTipo === 'gmail') return `Contacto (Gmail): ${data.gmail || data.contacto}`;
      return `Contacto (Discord): ${data.discord || data.contacto}`;
    })();
    const message = `Nueva postulación Tryout\n\nNombre: ${data.nombre}\nPaís: ${data.pais}\nRoles: ${roles.join(', ')}\nSteam: ${data.steam}\nFaceit: ${data.faceit || ''}\nGamersClub: ${data.gamersclub || ''}\n${contactoLinea}\nComentario: ${data.comentario || ''}`;

  const hasEmailEnv = !!process.env.RESEND_API_KEY && !!process.env.TRYOUTS_EMAIL;
  const namePart = typeof data.nombre === 'string' && data.nombre.trim() ? data.nombre.trim() : 'Jugador';
  const rolePart = roles.length ? ` - ${roles.join('/')}` : '';
  const countryPart = typeof data.pais === 'string' && data.pais.trim() ? ` [${data.pais.trim()}]` : '';
  const subject = `Tryout: ${namePart}${rolePart}${countryPart}`;
    if (hasEmailEnv) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const from = process.env.RESEND_FROM || 'Space Kings <onboarding@resend.dev>';
      try {
        const result = await resend.emails.send({
          from,
          to: [process.env.TRYOUTS_EMAIL as string],
          subject,
          text: message,
          // set reply-to to gmail when available to ease replies
          ...(typeof data.gmail === 'string' && data.gmail.includes('@') ? { reply_to: data.gmail } : {})
        } as any);
        console.log('[TRYOUTS][RESEND_OK]', result);
      } catch (err: any) {
        console.error('[TRYOUTS][RESEND_ERROR]', err?.message || err);
        return NextResponse.json({ ok: false, error: 'EMAIL_SEND_FAILED' }, { status: 502 });
      }
    } else {
      console.log('[TRYOUTS][NO_EMAIL_ENV] -> fallback log only');
      console.log(message);
    }
  return NextResponse.json({ ok: true, sent: hasEmailEnv });
  } catch (e) {
    console.error('[TRYOUTS][REQUEST_ERROR]', e);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
