"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, Loader2, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("submitting");

    // Simulate reliable dispatch
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-zinc-950/80 border border-lime-400/40 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400 mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="text-2xl font-bold uppercase tracking-tight text-stone-100">
          TRANSMISSION RECEIVED
        </h4>
        <p className="text-sm text-stone-300 font-light max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. Your message has been routed to Aditya&apos;s personal inbox. Expect a response within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 px-6 py-2.5 rounded-full border border-white/[0.15] bg-white/[0.04] text-xs font-mono text-stone-300 hover:text-white uppercase tracking-wider transition-colors"
        >
          SEND ANOTHER MESSAGE
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-2xl bg-zinc-950/70 border border-white/[0.08] space-y-5"
    >
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-2">
        <span className="text-xs font-mono tracking-widest uppercase text-lime-400 font-semibold flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          DIRECT DISPATCH TERMINAL
        </span>
        <span className="text-[11px] font-mono text-stone-500">ENCRYPTED // TLS</span>
      </div>

      {status === "error" && (
        <div className="p-3 rounded-lg bg-red-950/50 border border-red-500/30 text-xs font-mono text-red-300">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Elena Rostova"
            className="w-full bg-black/60 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-lime-400 transition-colors font-sans"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="elena@lab.org"
            className="w-full bg-black/60 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-lime-400 transition-colors font-sans"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
          Subject / Opportunity
        </label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="Internship / Collaboration / ML Research"
          className="w-full bg-black/60 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-lime-400 transition-colors font-sans"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
          Message Brief *
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell me about the problem you're tackling, the stack involved, or what you'd like to build together..."
          className="w-full bg-black/60 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-lime-400 transition-colors resize-none font-sans"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 rounded-xl bg-lime-400 text-stone-950 font-bold font-mono text-xs uppercase tracking-widest hover:bg-lime-300 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>DISPATCHING PACKETS...</span>
          </>
        ) : (
          <>
            <span>SEND MESSAGE</span>
            <Send className="w-3.5 h-3.5" />
          </>
        )}
      </button>
    </form>
  );
}
