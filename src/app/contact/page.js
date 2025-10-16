"use client";
import { useState } from "react";
import Script from "next/script";
import Image from "next/image";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send");
      }

      setStatus("sent");
      formEl.reset();
    } catch (err) {
      console.error(err);
      setStatus(`error:${err.message}`);
    }
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Immersive, heavily dimmed header image */}
      <div className="relative h-[45vh] w-full mb-10">
        <Image
          src="/images/dog.jpg"
          alt="Friendly dog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <main className="max-w-3xl mx-auto px-6 sm:px-8 pb-16">
        <h1 className="mb-2 text-3xl sm:text-4xl font-bold tracking-wide" style={{color: '#0A3154'}}>Contact Us</h1>
        <p className="mb-8" style={{color: '#0A3154'}}>
          Have a question or want to get involved? Send us a message below.
        </p>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-5 p-6 bg-white text-emerald-950 border border-emerald-100 rounded-xl shadow-sm mb-12"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="Your full name"
                className="w-full px-3 py-2 border rounded-md border-emerald-300 placeholder:text-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 border rounded-md border-emerald-300 placeholder:text-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 text-sm font-medium">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(555) 123-4567"
              className="w-full px-3 py-2 border rounded-md border-emerald-300 placeholder:text-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="How can we help?"
              className="w-full px-3 py-2 border rounded-md border-emerald-300 placeholder:text-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center px-5 py-2.5 mt-1 font-medium text-white rounded-md hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-60" style={{backgroundColor: '#023E8A'}}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="mt-1 text-sm text-emerald-700">✅ Your message has been sent!</p>
          )}
          {status.startsWith("error:") && (
            <p className="mt-1 text-sm text-red-600">
              ❌ {status.replace("error:", "")}
            </p>
          )}
        </form>

        {/* Fast booking: button linking to Calendly (no heavy inline embed) */}
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-bold tracking-wide" style={{color: '#0A3154'}}>Book a Meeting</h2>
          <a
            href="https://calendly.com/wayfoundoutdoor/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md px-5 py-2.5 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300" style={{backgroundColor: '#023E8A'}}
          >
            Book on Calendly
          </a>
        </div>


      </main>
    </div>
  );
}
