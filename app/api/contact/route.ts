import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? 'placeholder');
  try {
    const body = await request.json();
    const { name, phone, email, city, projectType, timeline, description, estimate } = body;

    if (!name || !phone || !projectType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const estimateRow = estimate
      ? `<tr><td style="padding:8px 0;color:#aaa;font-size:13px;">Estimate Range</td><td style="padding:8px 0;font-weight:700;color:#ffb703;">${estimate}</td></tr>`
      : '';

    await resend.emails.send({
      from: 'C Hernandez Construction Website <onboarding@resend.dev>',
      to: 'chernandezconstructionchg@gmail.com',
      replyTo: email || undefined,
      subject: `🏗️ New Lead: ${projectType} in ${city || 'Central Valley'}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0d1829;color:#fff;border-radius:12px;overflow:hidden;">
          <div style="background:#ffb703;padding:24px 32px;">
            <h1 style="margin:0;color:#080e1d;font-size:22px;font-weight:800;">New Estimate Request</h1>
            <p style="margin:6px 0 0;color:#080e1d;font-size:14px;">C Hernandez Construction — chernandezconstructionchg.com</p>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#aaa;font-size:13px;width:140px;">Name</td><td style="padding:8px 0;font-weight:700;font-size:15px;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#aaa;font-size:13px;">Phone</td><td style="padding:8px 0;font-weight:700;font-size:15px;"><a href="tel:${phone}" style="color:#ffb703;">${phone}</a></td></tr>
              ${email ? `<tr><td style="padding:8px 0;color:#aaa;font-size:13px;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#ffb703;">${email}</a></td></tr>` : ''}
              <tr><td style="padding:8px 0;color:#aaa;font-size:13px;">Location</td><td style="padding:8px 0;">${city || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#aaa;font-size:13px;">Project Type</td><td style="padding:8px 0;font-weight:700;color:#ffb703;">${projectType}</td></tr>
              <tr><td style="padding:8px 0;color:#aaa;font-size:13px;">Timeline</td><td style="padding:8px 0;">${timeline || '—'}</td></tr>
              ${estimateRow}
            </table>
            ${description ? `
            <div style="margin-top:20px;padding:16px;background:rgba(255,255,255,0.05);border-radius:8px;border-left:3px solid #ffb703;">
              <div style="font-size:12px;color:#aaa;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Project Description</div>
              <p style="margin:0;font-size:14px;line-height:1.7;color:#ddd;">${description}</p>
            </div>` : ''}
            <div style="margin-top:28px;padding:16px;background:rgba(255,183,3,0.1);border-radius:8px;text-align:center;">
              <a href="tel:${phone}" style="display:inline-block;background:#ffb703;color:#080e1d;padding:12px 28px;border-radius:999px;font-weight:800;font-size:14px;text-decoration:none;">📞 Call ${name} Now</a>
            </div>
          </div>
          <div style="padding:16px 32px;background:rgba(255,255,255,0.03);font-size:11px;color:#555;text-align:center;">
            Submitted via chernandezconstructionchg.com
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
