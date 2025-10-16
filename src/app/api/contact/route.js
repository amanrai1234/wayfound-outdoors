import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check for missing env vars
    const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
    const missing = required.filter((k) => !process.env[k]);
    if (missing.length) {
      return NextResponse.json(
        { error: `Missing environment variables: ${missing.join(", ")}` },
        { status: 500 }
      );
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g. smtp.gmail.com
      port: Number(process.env.SMTP_PORT), // 465 for Gmail app password
      secure: true, // Gmail app password requires secure:true
      auth: {
        user: process.env.SMTP_USER, // your Gmail
        pass: process.env.SMTP_PASS, // your 16-char App Password (no spaces)
      },
    });

    // Verify connection first
    await transporter.verify().catch((err) => {
      throw new Error("SMTP verify failed: " + err.message);
    });

    // Send email
    const info = await transporter.sendMail({
      from: `"Wayfound Outdoors" <${process.env.SMTP_USER}>`,
      to: 'wayfoundoutdoor@gmail.com',
      replyTo: email,
      subject: `Wayfound Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "(none)"}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "(none)"}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || "").replace(/\n/g, "<br/>")}</p>
      `,
    });

    console.log("📨 Email sent:", info.messageId);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: String(err.message || err) }, { status: 500 });
  }
}

// Optional GET handler to quickly check env vars in browser
export async function GET() {
  const keys = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
  const loaded = Object.fromEntries(keys.map((k) => [k, !!process.env[k]]));
  return NextResponse.json({ env: loaded });
}
